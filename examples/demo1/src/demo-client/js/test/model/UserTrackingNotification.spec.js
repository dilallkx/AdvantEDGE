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
 * MEEP Demo App API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
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
    factory(root.expect, root.MeepDemoAppApi);
  }
}(this, function(expect, MeepDemoAppApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('UserTrackingNotification', function() {
      beforeEach(function() {
        instance = new MeepDemoAppApi.UserTrackingNotification();
      });

      it('should create an instance of UserTrackingNotification', function() {
        // TODO: update the code to test UserTrackingNotification
        expect(instance).to.be.a(MeepDemoAppApi.UserTrackingNotification);
      });

      it('should have the property callbackData (base name: "callbackData")', function() {
        // TODO: update the code to test the property callbackData
        expect(instance).to.have.property('callbackData');
        // expect(instance.callbackData).to.be(expectedValueLiteral);
      });

      it('should have the property userInfo (base name: "userInfo")', function() {
        // TODO: update the code to test the property userInfo
        expect(instance).to.have.property('userInfo');
        // expect(instance.userInfo).to.be(expectedValueLiteral);
      });

      it('should have the property timeStamp (base name: "timeStamp")', function() {
        // TODO: update the code to test the property timeStamp
        expect(instance).to.have.property('timeStamp');
        // expect(instance.timeStamp).to.be(expectedValueLiteral);
      });

      it('should have the property userEventType (base name: "userEventType")', function() {
        // TODO: update the code to test the property userEventType
        expect(instance).to.have.property('userEventType');
        // expect(instance.userEventType).to.be(expectedValueLiteral);
      });

    });
  });

}));
