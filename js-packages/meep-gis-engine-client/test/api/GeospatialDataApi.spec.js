/*
 * Copyright (c) 2020  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * AdvantEDGE GIS Engine REST API
 * This API allows to control geo-spatial behavior and simulation. <p>**Micro-service**<br>[meep-gis-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-gis-engine) <p>**Type & Usage**<br>Platform runtime interface to control geo-spatial behavior and simulation <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * OpenAPI spec version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AdvantEdgeGisEngineRestApi);
  }
}(this, function(expect, AdvantEdgeGisEngineRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AdvantEdgeGisEngineRestApi.GeospatialDataApi();
  });

  describe('(package)', function() {
    describe('GeospatialDataApi', function() {
      describe('deleteGeoDataByName', function() {
        it('should call deleteGeoDataByName successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteGeoDataByName call
          /*
          var assetName = "assetName_example";

          instance.deleteGeoDataByName(assetName, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAssetData', function() {
        it('should call getAssetData successfully', function(done) {
          // TODO: uncomment, update parameter values for getAssetData call and complete the assertions
          /*
          var opts = {};
          opts.assetType = "assetType_example";
          opts.subType = "subType_example";

          instance.getAssetData(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AdvantEdgeGisEngineRestApi.GeoDataAssetList);
            {
              let dataCtr = data.geoDataAssets;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(AdvantEdgeGisEngineRestApi.GeoDataAsset);
                expect(data.location).to.be.a(AdvantEdgeGisEngineRestApi.Point);
                      expect(data.location.type).to.be.a('string');
                  expect(data.location.type).to.be("Point");
                  {
                    let dataCtr = data.location.coordinates;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be();
                    }
                  }
                expect(data.radius).to.be.a('number');
                expect(data.radius).to.be();
                expect(data.path).to.be.a(AdvantEdgeGisEngineRestApi.LineString);
                      expect(data.path.type).to.be.a('string');
                  expect(data.path.type).to.be("LineString");
                  {
                    let dataCtr = data.path.coordinates;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Array);
                      expect(data).to.be([]);
                    }
                  }
                expect(data.eopMode).to.be.a('string');
                expect(data.eopMode).to.be("LOOP");
                expect(data.velocity).to.be.a('number');
                expect(data.velocity).to.be();
                expect(data.assetName).to.be.a('string');
                expect(data.assetName).to.be("");
                expect(data.assetType).to.be.a('string');
                expect(data.assetType).to.be("UE");
                expect(data.subType).to.be.a('string');
                expect(data.subType).to.be("UE");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getGeoDataByName', function() {
        it('should call getGeoDataByName successfully', function(done) {
          // TODO: uncomment, update parameter values for getGeoDataByName call and complete the assertions
          /*
          var assetName = "assetName_example";

          instance.getGeoDataByName(assetName, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AdvantEdgeGisEngineRestApi.GeoDataAsset);
            expect(data.location).to.be.a(AdvantEdgeGisEngineRestApi.Point);
                  expect(data.location.type).to.be.a('string');
              expect(data.location.type).to.be("Point");
              {
                let dataCtr = data.location.coordinates;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be();
                }
              }
            expect(data.radius).to.be.a('number');
            expect(data.radius).to.be();
            expect(data.path).to.be.a(AdvantEdgeGisEngineRestApi.LineString);
                  expect(data.path.type).to.be.a('string');
              expect(data.path.type).to.be("LineString");
              {
                let dataCtr = data.path.coordinates;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Array);
                  expect(data).to.be([]);
                }
              }
            expect(data.eopMode).to.be.a('string');
            expect(data.eopMode).to.be("LOOP");
            expect(data.velocity).to.be.a('number');
            expect(data.velocity).to.be();
            expect(data.assetName).to.be.a('string');
            expect(data.assetName).to.be("");
            expect(data.assetType).to.be.a('string');
            expect(data.assetType).to.be("UE");
            expect(data.subType).to.be.a('string');
            expect(data.subType).to.be("UE");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateGeoDataByName', function() {
        it('should call updateGeoDataByName successfully', function(done) {
          // TODO: uncomment, update parameter values for updateGeoDataByName call
          /*
          var assetName = "assetName_example";
          var geoData = new AdvantEdgeGisEngineRestApi.GeoDataAsset();
          geoData.location = new AdvantEdgeGisEngineRestApi.Point();
          geoData.location.type = "Point";
          geoData.location.coordinates = [];
          geoData.radius = ;
          geoData.path = new AdvantEdgeGisEngineRestApi.LineString();
          geoData.path.type = "LineString";
          geoData.path.coordinates = [[]];
          geoData.eopMode = "LOOP";
          geoData.velocity = ;
          geoData.assetName = "";
          geoData.assetType = "UE";
          geoData.subType = "UE";

          instance.updateGeoDataByName(assetName, geoData, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
