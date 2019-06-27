/*
 * MEEP Controller REST API
 *
 * Copyright (c) 2019 InterDigital Communications, Inc. All rights reserved. The information provided herein is the proprietary and confidential information of InterDigital Communications, Inc.
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client

// Logical network location object
type NetworkLocation struct {

	// Unique network location ID
	Id string `json:"id,omitempty"`

	// Network location name
	Name string `json:"name,omitempty"`

	// Network location type
	Type_ string `json:"type,omitempty"`

	// Latency in ms for all terminal links within network location
	TerminalLinkLatency int32 `json:"terminalLinkLatency,omitempty"`

	// Latency variation in ms for all terminal links within network location
	TerminalLinkLatencyVariation int32 `json:"terminalLinkLatencyVariation,omitempty"`

	// The limit of the traffic supported for all terminal links within the network location
	TerminalLinkThroughput int32 `json:"terminalLinkThroughput,omitempty"`

	// Packet lost (in terms of percentage) for all terminal links within the network location
	TerminalLinkPacketLoss float64 `json:"terminalLinkPacketLoss,omitempty"`

	// Key/Value Pair Map (string, string)
	Meta map[string]string `json:"meta,omitempty"`

	PhysicalLocations []PhysicalLocation `json:"physicalLocations,omitempty"`
}
