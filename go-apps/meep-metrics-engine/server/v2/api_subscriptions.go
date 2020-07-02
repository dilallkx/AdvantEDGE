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
 *
 * Metrics Service provides metrics about the active scenario <p>**Micro-service**<br>[meep-metrics-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-metrics-engine) <p>**Type & Usage**<br>Platform Service used by control/monitoring software and possibly by edge applications that require metrics <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * API version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package server

import (
	"net/http"
)

func CreateEventSubscription(w http.ResponseWriter, r *http.Request) {
	createEventSubscription(w, r)
}

func CreateNetworkSubscription(w http.ResponseWriter, r *http.Request) {
	createNetworkSubscription(w, r)
}

func DeleteEventSubscriptionById(w http.ResponseWriter, r *http.Request) {
	deleteEventSubscriptionById(w, r)
}

func DeleteNetworkSubscriptionById(w http.ResponseWriter, r *http.Request) {
	deleteNetworkSubscriptionById(w, r)
}

func GetEventSubscription(w http.ResponseWriter, r *http.Request) {
	getEventSubscription(w, r)
}

func GetEventSubscriptionById(w http.ResponseWriter, r *http.Request) {
	getEventSubscriptionById(w, r)
}

func GetNetworkSubscription(w http.ResponseWriter, r *http.Request) {
	getNetworkSubscription(w, r)
}

func GetNetworkSubscriptionById(w http.ResponseWriter, r *http.Request) {
	getNetworkSubscriptionById(w, r)
}
