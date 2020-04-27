/*
 * Copyright (c) 2019  InterDigital Communications, Inc
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
 * AdvantEDGE Platform Controller REST API
 * This API is the main platform API and mainly used by the AdvantEDGE frontend to interact with scenarios <p>**Micro-service**<br>[meep-ctrl-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-ctrl-engine) <p>**Type & Usage**<br>Platform main interface used by controller software that want to interact with the AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    factory(root.expect, root.AdvantEdgePlatformControllerRestApi);
  }
}(this, function(expect, AdvantEdgePlatformControllerRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CellularDomainConfig', function() {
      beforeEach(function() {
        instance = new AdvantEdgePlatformControllerRestApi.CellularDomainConfig();
      });

      it('should create an instance of CellularDomainConfig', function() {
        // TODO: update the code to test CellularDomainConfig
        expect(instance).to.be.a(AdvantEdgePlatformControllerRestApi.CellularDomainConfig);
      });

      it('should have the property mnc (base name: "mnc")', function() {
        // TODO: update the code to test the property mnc
        expect(instance).to.have.property('mnc');
        // expect(instance.mnc).to.be(expectedValueLiteral);
      });

      it('should have the property mcc (base name: "mcc")', function() {
        // TODO: update the code to test the property mcc
        expect(instance).to.have.property('mcc');
        // expect(instance.mcc).to.be(expectedValueLiteral);
      });

      it('should have the property defaultCellId (base name: "defaultCellId")', function() {
        // TODO: update the code to test the property defaultCellId
        expect(instance).to.have.property('defaultCellId');
        // expect(instance.defaultCellId).to.be(expectedValueLiteral);
      });

    });
  });

}));
