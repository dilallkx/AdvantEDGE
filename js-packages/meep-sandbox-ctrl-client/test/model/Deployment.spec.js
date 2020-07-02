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
 * AdvantEDGE Sandbox Controller REST API
 * This API is the main Sandbox Controller API for scenario deployment & event injection <p>**Micro-service**<br>[meep-sandbox-ctrl](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-sandbox-ctrl) <p>**Type & Usage**<br>Platform runtime interface to manage active scenarios and inject events in AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    factory(root.expect, root.AdvantEdgeSandboxControllerRestApi);
  }
}(this, function(expect, AdvantEdgeSandboxControllerRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Deployment', function() {
      beforeEach(function() {
        instance = new AdvantEdgeSandboxControllerRestApi.Deployment();
      });

      it('should create an instance of Deployment', function() {
        // TODO: update the code to test Deployment
        expect(instance).to.be.a(AdvantEdgeSandboxControllerRestApi.Deployment);
      });

      it('should have the property netChar (base name: "netChar")', function() {
        // TODO: update the code to test the property netChar
        expect(instance).to.have.property('netChar');
        // expect(instance.netChar).to.be(expectedValueLiteral);
      });

      it('should have the property interDomainLatency (base name: "interDomainLatency")', function() {
        // TODO: update the code to test the property interDomainLatency
        expect(instance).to.have.property('interDomainLatency');
        // expect(instance.interDomainLatency).to.be(expectedValueLiteral);
      });

      it('should have the property interDomainLatencyVariation (base name: "interDomainLatencyVariation")', function() {
        // TODO: update the code to test the property interDomainLatencyVariation
        expect(instance).to.have.property('interDomainLatencyVariation');
        // expect(instance.interDomainLatencyVariation).to.be(expectedValueLiteral);
      });

      it('should have the property interDomainThroughput (base name: "interDomainThroughput")', function() {
        // TODO: update the code to test the property interDomainThroughput
        expect(instance).to.have.property('interDomainThroughput');
        // expect(instance.interDomainThroughput).to.be(expectedValueLiteral);
      });

      it('should have the property interDomainPacketLoss (base name: "interDomainPacketLoss")', function() {
        // TODO: update the code to test the property interDomainPacketLoss
        expect(instance).to.have.property('interDomainPacketLoss');
        // expect(instance.interDomainPacketLoss).to.be(expectedValueLiteral);
      });

      it('should have the property meta (base name: "meta")', function() {
        // TODO: update the code to test the property meta
        expect(instance).to.have.property('meta');
        // expect(instance.meta).to.be(expectedValueLiteral);
      });

      it('should have the property userMeta (base name: "userMeta")', function() {
        // TODO: update the code to test the property userMeta
        expect(instance).to.have.property('userMeta');
        // expect(instance.userMeta).to.be(expectedValueLiteral);
      });

      it('should have the property domains (base name: "domains")', function() {
        // TODO: update the code to test the property domains
        expect(instance).to.have.property('domains');
        // expect(instance.domains).to.be(expectedValueLiteral);
      });

    });
  });

}));
