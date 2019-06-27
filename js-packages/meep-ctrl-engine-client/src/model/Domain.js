/**
 * MEEP Controller REST API
 * Copyright (c) 2019 InterDigital Communications, Inc. All rights reserved. The information provided herein is the proprietary and confidential information of InterDigital Communications, Inc. 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Zone'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Zone'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepControllerRestApi) {
      root.MeepControllerRestApi = {};
    }
    root.MeepControllerRestApi.Domain = factory(root.MeepControllerRestApi.ApiClient, root.MeepControllerRestApi.Zone);
  }
}(this, function(ApiClient, Zone) {
  'use strict';




  /**
   * The Domain model module.
   * @module model/Domain
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Domain</code>.
   * Operator domain object
   * @alias module:model/Domain
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Domain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Domain} obj Optional instance to populate.
   * @return {module:model/Domain} The populated <code>Domain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('interZoneLatency')) {
        obj['interZoneLatency'] = ApiClient.convertToType(data['interZoneLatency'], 'Number');
      }
      if (data.hasOwnProperty('interZoneLatencyVariation')) {
        obj['interZoneLatencyVariation'] = ApiClient.convertToType(data['interZoneLatencyVariation'], 'Number');
      }
      if (data.hasOwnProperty('interZoneThroughput')) {
        obj['interZoneThroughput'] = ApiClient.convertToType(data['interZoneThroughput'], 'Number');
      }
      if (data.hasOwnProperty('interZonePacketLoss')) {
        obj['interZonePacketLoss'] = ApiClient.convertToType(data['interZonePacketLoss'], 'Number');
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ApiClient.convertToType(data['meta'], {'String': 'String'});
      }
      if (data.hasOwnProperty('zones')) {
        obj['zones'] = ApiClient.convertToType(data['zones'], [Zone]);
      }
    }
    return obj;
  }

  /**
   * Unique domain ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Domain name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Domain type
   * @member {module:model/Domain.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Latency in ms between zones within domain
   * @member {Number} interZoneLatency
   */
  exports.prototype['interZoneLatency'] = undefined;
  /**
   * Latency variation in ms between zones within domain
   * @member {Number} interZoneLatencyVariation
   */
  exports.prototype['interZoneLatencyVariation'] = undefined;
  /**
   * The limit of the traffic supported between zones within the domain
   * @member {Number} interZoneThroughput
   */
  exports.prototype['interZoneThroughput'] = undefined;
  /**
   * Packet lost (in terms of percentage) between zones within the domain
   * @member {Number} interZonePacketLoss
   */
  exports.prototype['interZonePacketLoss'] = undefined;
  /**
   * Key/Value Pair Map (string, string)
   * @member {Object.<String, String>} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {Array.<module:model/Zone>} zones
   */
  exports.prototype['zones'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "OPERATOR"
     * @const
     */
    "OPERATOR": "OPERATOR",
    /**
     * value: "PUBLIC"
     * @const
     */
    "PUBLIC": "PUBLIC"  };


  return exports;
}));


