/*
 * MEEP Metrics Engine Service REST API
 * Copyright (c) 2019  InterDigital Communications, Inc Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at      http://www.apache.org/licenses/LICENSE-2.0  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepMetricsEngineServiceRestApi) {
      root.MeepMetricsEngineServiceRestApi = {};
    }
    root.MeepMetricsEngineServiceRestApi.LogResponseData = factory(root.MeepMetricsEngineServiceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LogResponseData model module.
   * @module model/LogResponseData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LogResponseData</code>.
   * @alias module:model/LogResponseData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LogResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LogResponseData} obj Optional instance to populate.
   * @return {module:model/LogResponseData} The populated <code>LogResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('rx'))
        obj.rx = ApiClient.convertToType(data['rx'], 'Number');
      if (data.hasOwnProperty('rxBytes'))
        obj.rxBytes = ApiClient.convertToType(data['rxBytes'], 'Number');
      if (data.hasOwnProperty('throughput'))
        obj.throughput = ApiClient.convertToType(data['throughput'], 'Number');
      if (data.hasOwnProperty('packet-loss'))
        obj.packetLoss = ApiClient.convertToType(data['packet-loss'], 'String');
      if (data.hasOwnProperty('latency'))
        obj.latency = ApiClient.convertToType(data['latency'], 'Number');
      if (data.hasOwnProperty('newPoa'))
        obj.newPoa = ApiClient.convertToType(data['newPoa'], 'String');
      if (data.hasOwnProperty('oldPoa'))
        obj.oldPoa = ApiClient.convertToType(data['oldPoa'], 'String');
    }
    return obj;
  }

  /**
   * Number of packets received since last log event
   * @member {Number} rx
   */
  exports.prototype.rx = undefined;

  /**
   * Number of bytes received since last log event
   * @member {Number} rxBytes
   */
  exports.prototype.rxBytes = undefined;

  /**
   * Throughput measured between 2 pods in Mbits/seconds
   * @member {Number} throughput
   */
  exports.prototype.throughput = undefined;

  /**
   * Number of packets loss between2 pods as a percentage
   * @member {String} packetLoss
   */
  exports.prototype.packetLoss = undefined;

  /**
   * Latency measured betwen 2 pods in ms
   * @member {Number} latency
   */
  exports.prototype.latency = undefined;

  /**
   * New poa affected by a mobility event
   * @member {String} newPoa
   */
  exports.prototype.newPoa = undefined;

  /**
   * Old poa affected by a mobility event
   * @member {String} oldPoa
   */
  exports.prototype.oldPoa = undefined;

  return exports;

}));
