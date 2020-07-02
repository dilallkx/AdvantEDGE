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
 * AdvantEDGE Metrics Service REST API
 * Metrics Service provides metrics about the active scenario <p>**Micro-service**<br>[meep-metrics-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-metrics-engine) <p>**Type & Usage**<br>Platform Service used by control/monitoring software and possibly by edge applications that require metrics <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NetworkCallbackReference', 'model/NetworkQueryParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworkCallbackReference'), require('./NetworkQueryParams'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeMetricsServiceRestApi) {
      root.AdvantEdgeMetricsServiceRestApi = {};
    }
    root.AdvantEdgeMetricsServiceRestApi.NetworkSubscriptionParams = factory(root.AdvantEdgeMetricsServiceRestApi.ApiClient, root.AdvantEdgeMetricsServiceRestApi.NetworkCallbackReference, root.AdvantEdgeMetricsServiceRestApi.NetworkQueryParams);
  }
}(this, function(ApiClient, NetworkCallbackReference, NetworkQueryParams) {
  'use strict';

  /**
   * The NetworkSubscriptionParams model module.
   * @module model/NetworkSubscriptionParams
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NetworkSubscriptionParams</code>.
   * Network metrics subscription parameters
   * @alias module:model/NetworkSubscriptionParams
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworkSubscriptionParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkSubscriptionParams} obj Optional instance to populate.
   * @return {module:model/NetworkSubscriptionParams} The populated <code>NetworkSubscriptionParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('clientCorrelator'))
        obj.clientCorrelator = ApiClient.convertToType(data['clientCorrelator'], 'String');
      if (data.hasOwnProperty('callbackReference'))
        obj.callbackReference = NetworkCallbackReference.constructFromObject(data['callbackReference']);
      if (data.hasOwnProperty('networkQueryParams'))
        obj.networkQueryParams = NetworkQueryParams.constructFromObject(data['networkQueryParams']);
      if (data.hasOwnProperty('period'))
        obj.period = ApiClient.convertToType(data['period'], 'Number');
      if (data.hasOwnProperty('subscriptionType'))
        obj.subscriptionType = ApiClient.convertToType(data['subscriptionType'], 'String');
    }
    return obj;
  }

  /**
   * Uniquely identifies this create subscription request. If there is a communication failure during the request, using the same clientCorrelator when retrying the request allows the operator to avoid creating a duplicate subscription.
   * @member {String} clientCorrelator
   */
  exports.prototype.clientCorrelator = undefined;

  /**
   * @member {module:model/NetworkCallbackReference} callbackReference
   */
  exports.prototype.callbackReference = undefined;

  /**
   * @member {module:model/NetworkQueryParams} networkQueryParams
   */
  exports.prototype.networkQueryParams = undefined;

  /**
   * Notification interval in seconds
   * @member {Number} period
   */
  exports.prototype.period = undefined;

  /**
   * Type of subscription triggering notifications
   * @member {module:model/NetworkSubscriptionParams.SubscriptionTypeEnum} subscriptionType
   */
  exports.prototype.subscriptionType = undefined;


  /**
   * Allowed values for the <code>subscriptionType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SubscriptionTypeEnum = {
    /**
     * value: "period"
     * @const
     */
    period: "period"
  };

  return exports;

}));
