/*
 * Copyright (c) 2019  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as d3 from 'd3';

import IDCNode from './idc-node.js';

import { lineGeneratorNodes, visitNodes, blue } from './graph-utils';

import { isApp, getScenarioNodeChildren } from '../util/scenario-utils';

import {
  execChangeTable,
  execChangeVis,
  execVisFilteredData,
  execChangeDisplayedScenario,
  execFakeAddPingBucket
} from '../state/exec';
import { cfgChangeTable, cfgChangeVis, cfgElemEdit } from '../state/cfg';

import { FIELD_NAME, getElemFieldVal } from '../util/elem-utils';

const copyAttributesRecursive = nodeSrc => nodeDest => {
  if (nodeSrc.X && nodeSrc.Y) {
    nodeDest.X = nodeSrc.X;
    nodeDest.Y = nodeSrc.Y;
    nodeDest.dR = nodeSrc.dR;
    nodeDest.data.iconName = nodeSrc.data.iconName;
    nodeDest.collapsed = nodeSrc.collapsed;
    nodeDest.name = nodeSrc.name;
  }

  if (
    nodeSrc.children &&
    nodeDest.children &&
    nodeSrc.children.length === nodeDest.children.length
  ) {
    for (let i = 0; i < nodeSrc.children.length; i++) {
      const cSrc = nodeSrc.children[i];
      const cDest = nodeDest.children[i];
      copyAttributesRecursive(cSrc)(cDest);
    }
  }
};

const updateXY = node => {
  if (!node.X) {
    node.X = node.x;
  }
  if (!node.Y) {
    node.Y = node.y;
  }
};

const flipXY = node => {
  const margin = 30;
  const x = node.x;
  const y = node.y;
  node.x = y + margin;
  node.y = x;
};

const clusterFlip = cluster => root => {
  cluster(root);
  visitNodes(flipXY)(root);
  visitNodes(updateXY)(root);
};

const createEdgesToChildren = array => node => {
  if (node.children) {
    _.each(node.children, c =>
      array.push({
        source: node.id,
        target: c.id
      })
    );
  }
};

const nodeVisible = n => !n.hidden;

class IDCGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      root: null
    };
    this.bucketCount = 0;
  }

  nextDataBucket() {
    const apps = this.root.descendants().filter(isApp);
    const nbNewPings = apps.length * 10;
    const srcNodeIndex = () => {
      return Math.floor(Math.random() * apps.length);
    };

    const destNodeIndex = srcIdx => {
      // const destIdx = (srcIdx + 1 + Math.ceil(Math.random()*2)*2) % apps.length;
      const destIdx =
        (srcIdx + 1 + Math.ceil(Math.random() * apps.length - 1)) % apps.length;
      // const index = Math.floor(Math.random()*destinations.length);
      return destIdx;
    };

    const funcs = [
      x => 0.2 * (1 + Math.sin(x - 5)),
      x => 0.2 * (1 + Math.cos(x)),
      x => 0.2 * (1 + Math.random() * Math.cos(x) * Math.sin(x - 12))
    ];

    const newPing = (date, i, bucketCount) => {
      const srcIdx = srcNodeIndex();
      const destIdx = destNodeIndex(srcIdx);

      const amplitude = 0.2 * (destIdx % 3) * (destIdx % 5) + 1;
      const frequency = 0.3 * (destIdx % 3) * (destIdx % 5) + 1;
      const phase = (destIdx % 5) * (destIdx % 7);
      const x = bucketCount % 25;
      const func = funcs[destIdx % 3];
      const ping = {
        src: apps[srcIdx].data.id,
        dest: apps[destIdx].data.id,
        date: date,
        delay: amplitude * func((x - phase) * frequency)
      };

      return ping;
    };

    let newPings = [];
    const now = new Date();
    for (let i = 0; i < nbNewPings; i++) {
      newPings.push(newPing(now, i, this.bucketCount));
    }

    const dataBucket = {
      date: now,
      pings: newPings
    };

    this.props.addPingBucket(dataBucket);
    this.bucketCount += 1;
  }

  componentDidMount() {
    this.dataTimer = setInterval(
      () => this.nextDataBucket(this.bucketCount),
      1000
    );
  }

  getElementByName(entries, name) {
    for (var i = 0; i < entries.length; i++) {
      if (getElemFieldVal(entries[i], FIELD_NAME) === name) {
        return entries[i];
      }
    }
    return null;
  }

  update() {
    this.setState({
      root: this.root,
      apps: this.apps
    });
  }

  createNodes() {
    this.nodes = this.root.descendants();
  }

  createHierarchyEdges() {
    visitNodes(createEdgesToChildren(this.edges))(this.root);
  }

  positionNodesTree() {
    const data = this.root;
    this.root = d3.hierarchy(data, getScenarioNodeChildren);
    this.edges = [];
    // this.createHierarchyEdges();
    this.nodes = this.root.descendants();

    copyAttributesRecursive(data)(this.root);

    let tree = d3.tree().size([this.props.height, this.props.width - 100]);
    clusterFlip(tree)(this.root);
  }

  positionNodesCircle() {
    const data = this.root;
    this.root = d3.hierarchy(data, getScenarioNodeChildren);

    const compareTypes = (a, b) => {
      return a.data.type < b.data.type;
    };
    this.nodes = this.root.descendants().sort(compareTypes);

    copyAttributesRecursive(data)(this.root);

    let tree = d3.tree().size([this.props.height, this.props.width - 100]);
    clusterFlip(tree)(this.root);
  }

  renderTree() {
    if (!this.state.root || this.appsMode) {
      this.root = this.props.displayedScenario;
      this.positionNodesTree();
      this.appsMode = false;
    }

    if (!this.root) {
      return null;
    }

    const lineDefs = (
      <defs>
        {this.root
          .descendants()
          .slice(1)
          .filter(nodeVisible)
          .map((d, i) => (
            <path
              key={'path' + i}
              id={'textPathDef' + i}
              d={lineGeneratorNodes(d.parent)(d)}
              style={{ fill: 'none', strokeWidth: 2 }}
              stroke={'#aaa'}
              className="line"
            />
          ))}
      </defs>
    );

    const lines = this.root
      .descendants()
      .slice(1)
      .filter(nodeVisible)
      .map((d, i) => (
        <path
          key={'path' + i}
          id={'textPath' + i}
          d={lineGeneratorNodes(d)(d.parent)}
          style={{ fill: 'none', strokeWidth: 2 }}
          stroke={'#aaa'}
          className="line"
        />
      ));

    const textPaths = this.root
      .descendants()
      .slice(1)
      .filter(nodeVisible)
      .map((d, i) => (
        <text key={'textPath' + i} style={{ stroke: blue }}>
          <textPath xlinkHref={`#textPathDef${i}`} startOffset={'20%'}>
            {/* {`${Math.ceil(Math.random()*25)}ms`} */}
            {''}
          </textPath>
        </text>
      ));

    const nodes = this.root
      .descendants()
      .filter(nodeVisible)
      .map((d, i) => (
        <IDCNode
          collapsible={true}
          key={`path${i}`}
          d={d}
          updateParent={() => this.update()}
        />
      ));

    return (
      <svg height={this.props.height} width={this.props.width}>
        <>
          {lines}
          {lineDefs}
          {textPaths}
          {nodes}
        </>
      </svg>
    );
  }

  positionApps() {
    const cx = this.props.width / 2.0;
    const cy = this.props.height / 2.0;
    const PI = 3.141592653598793846264;
    const r = 0.5 * this.props.height * 0.9;

    _.each(this.apps, (app, i) => {
      const theta = (i / this.apps.length) * (2 * PI);
      app.X = cx + r * Math.cos(theta);
      app.Y = cy + r * Math.sin(theta);
    });
  }

  renderApps() {
    const colorRange = this.props.colorRange;
    const colorForApp = _.reduce(
      this.apps,
      (res, val, i) => {
        res[val.data.id] = colorRange[i];
        return res;
      },
      {}
    );

    if (!this.appsMode) {
      const data = this.props.displayedScenario;
      this.root = d3.hierarchy(data, getScenarioNodeChildren);
      // copyAttributesRecursive(data)(this.root);
      this.apps = this.root.descendants().filter(isApp);
      this.positionApps();
      this.appsMode = true;
    }

    // if (!this.allPings) {
    //   return null;
    // }

    let m = {};

    const appsMap = {};
    _.each(this.apps, a => (appsMap[a.data.id] = a));

    const pingBucket = _.last(this.props.pingBuckets);

    if (!pingBucket) {
      return null;
    }

    const pings = pingBucket.pings;
    _.each(pings, p => {
      if (!m[p.src]) {
        m[p.src] = {};
      }

      if (!m[p.src][p.dest]) {
        m[p.src][p.dest] = {
          pings: []
        };
      }

      const o = m[p.src][p.dest];
      o.pings.push(p);
    });

    if (!this.root) {
      return null;
    }

    const edges = _.flatMap(
      this.apps.map(d => {
        const rowObject = m[d.data.id];
        if (!rowObject) {
          return [];
        }
        const destinations = Object.keys(m[d.data.id]);
        return _.map(destinations, dest => {
          return {
            src: d.data.id,
            dest: dest,
            count: rowObject[dest].pings.length,
            color: colorForApp[dest],
            avgLatency: d3.mean(rowObject[dest].pings, d => d.delay)
          };
        });
      })
    ).filter(e => {
      // return nbSelected ? appsMap[e.src].selected : true;
      // console.log(`${appsMap[e.src].data.id}:`, appsMap[e.src]);
      if (this.props.selectedDestination) {
        return e.dest === this.props.selectedDestination;
      } else {
        return appsMap[e.src].highlighted || appsMap[e.src].selected;
      }
    });

    const lineDefs = (
      <defs>
        {_.map(edges, (e, i) => {
          return (
            <path
              key={'path' + i}
              id={'textPathDef' + i}
              d={lineGeneratorNodes(appsMap[e.src])(appsMap[e.dest])}
              style={{ fill: 'none', strokeWidth: e.count * 0.1 }}
              className="line"
            />
          );
        })}
      </defs>
    );

    const lines = _.map(edges, (e, i) => {
      return (
        <path
          key={'path' + i}
          id={'path' + i}
          d={lineGeneratorNodes(appsMap[e.src])(appsMap[e.dest])}
          style={{ fill: 'none', strokeWidth: 0.5, stroke: e.color }}
          className="line"
        />
      );
    });

    const textPaths = _.map(edges, (e, i) => (
      <text key={'textPath' + i} style={{ stroke: e.color }}>
        <textPath xlinkHref={`#textPathDef${i}`} startOffset={'45%'}>
          {`Avg lat: ${e.avgLatency.toFixed(0)} ms`}
        </textPath>
      </text>
    ));

    const nodes = this.apps.map((d, i) => (
      <IDCNode
        collapsible={false}
        key={`node${i}`}
        d={d}
        stroke={colorRange[i]}
        updateParent={() => this.update()}
      />
    ));

    return (
      <svg height={this.props.height} width={this.props.width}>
        <>
          {lines}
          {lineDefs}
          {textPaths}
          {nodes}
        </>
      </svg>
    );
  }

  render() {
    // return this.renderTree();
    return <>{this.props.renderApps ? this.renderApps() : this.renderTree()}</>;
  }
}

const mapStateToProps = state => {
  return {
    cfgTable: state.cfg.table,
    execTable: state.exec.table,
    execVis: state.exec.vis,
    cfgVis: state.cfg.vis,
    devMode: state.ui.devMode,
    execVisData: execVisFilteredData(state),
    displayedScenario: state.exec.displayedScenario,
    showApps: state.ui.execShowApps,
    pingBuckets: state.exec.fakeData.pingBuckets,
    selectedDestination: state.exec.fakeData.selectedDestination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeExecTable: table => {
      dispatch(execChangeTable(table));
    },
    changeCfgTable: table => {
      dispatch(cfgChangeTable(table));
    },
    changeExecVis: vis => dispatch(execChangeVis(vis)),
    changeCfgVis: vis => dispatch(cfgChangeVis(vis)),
    changeCfgElement: element => dispatch(cfgElemEdit(element)),
    execChangeDisplayedScenario: scenario =>
      dispatch(execChangeDisplayedScenario(scenario)),
    addPingBucket: b => dispatch(execFakeAddPingBucket(b))
  };
};

const ConnectedIDCGraph = connect(
  mapStateToProps,
  mapDispatchToProps
)(IDCGraph);

export default ConnectedIDCGraph;