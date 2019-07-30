/*
 * MEEP Demo App API
 *
 * This is the MEEP Demo App API
 *
 * API version: 0.0.1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package server

// A type containing zone information.
type ZoneInfo struct {

	// Unique Identifier of a Location Zone
	ZoneId string `json:"zoneId"`

	// Number of access points or points of access within a Location Zone
	NumberOfAccessPoints int32 `json:"numberOfAccessPoints"`

	// The number of users currently on the access point
	NumberOfUsers int32 `json:"numberOfUsers"`
}