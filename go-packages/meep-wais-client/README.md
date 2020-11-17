# Go API client for client

WLAN Access Information Service is AdvantEDGE's implementation of [ETSI MEC ISG MEC028 WAI API](http://www.etsi.org/deliver/etsi_gs/MEC/001_099/028/02.01.01_60/gs_MEC028v020101p.pdf) <p>[Copyright (c) ETSI 2020](https://forge.etsi.org/etsi-forge-copyright-notice.txt) <p>**Micro-service**<br>[meep-wais](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-wais) <p>**Type & Usage**<br>Edge Service used by edge applications that want to get information about WLAN access information in the network <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_

## Overview
This API client was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [swagger-spec](https://github.com/swagger-api/swagger-spec) from a remote server, you can easily generate an API client.

- API version: 2.1.1
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.go.GoClientCodegen

## Installation
Put the package under your project folder and add the following in import:
```golang
import "./client"
```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/wai/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WaiApi* | [**ApInfoGET**](docs/WaiApi.md#apinfoget) | **Get** /queries/ap/ap_information | Retrieve information on existing Access Points
*WaiApi* | [**StaInfoGET**](docs/WaiApi.md#stainfoget) | **Get** /queries/sta/sta_information | Retrieve information on existing Stations
*WaiApi* | [**SubscriptionLinkListSubscriptionsGET**](docs/WaiApi.md#subscriptionlinklistsubscriptionsget) | **Get** /subscriptions | Retrieve information on subscriptions for notifications
*WaiApi* | [**SubscriptionsDELETE**](docs/WaiApi.md#subscriptionsdelete) | **Delete** /subscriptions/{subscriptionId} | Cancel an existing subscription
*WaiApi* | [**SubscriptionsGET**](docs/WaiApi.md#subscriptionsget) | **Get** /subscriptions/{subscriptionId} | Retrieve information on current specific subscription
*WaiApi* | [**SubscriptionsPOST**](docs/WaiApi.md#subscriptionspost) | **Post** /subscriptions | Create a new subscription
*WaiApi* | [**SubscriptionsPUT**](docs/WaiApi.md#subscriptionsput) | **Put** /subscriptions/{subscriptionId} | Modify an existing subscription


## Documentation For Models

 - [ApAssociated](docs/ApAssociated.md)
 - [ApIdentity](docs/ApIdentity.md)
 - [ApInfo](docs/ApInfo.md)
 - [ApLocation](docs/ApLocation.md)
 - [AssocStaNotification](docs/AssocStaNotification.md)
 - [AssocStaSubscription](docs/AssocStaSubscription.md)
 - [AssocStaSubscriptionLinks](docs/AssocStaSubscriptionLinks.md)
 - [AssociatedStations](docs/AssociatedStations.md)
 - [BeaconReport](docs/BeaconReport.md)
 - [BeaconRequestConfig](docs/BeaconRequestConfig.md)
 - [BssLoad](docs/BssLoad.md)
 - [ChannelLoadConfig](docs/ChannelLoadConfig.md)
 - [CivicLocation](docs/CivicLocation.md)
 - [DmgCapabilities](docs/DmgCapabilities.md)
 - [EdmgCapabilities](docs/EdmgCapabilities.md)
 - [ExtBssLoad](docs/ExtBssLoad.md)
 - [GeoLocation](docs/GeoLocation.md)
 - [HeCapabilities](docs/HeCapabilities.md)
 - [HtCapabilities](docs/HtCapabilities.md)
 - [InlineNotification](docs/InlineNotification.md)
 - [InlineSubscription](docs/InlineSubscription.md)
 - [LinkType](docs/LinkType.md)
 - [MeasurementConfig](docs/MeasurementConfig.md)
 - [NeighborReport](docs/NeighborReport.md)
 - [OneOfInlineNotification](docs/OneOfInlineNotification.md)
 - [OneOfInlineSubscription](docs/OneOfInlineSubscription.md)
 - [ProblemDetails](docs/ProblemDetails.md)
 - [Rssi](docs/Rssi.md)
 - [StaDataRate](docs/StaDataRate.md)
 - [StaDataRateNotification](docs/StaDataRateNotification.md)
 - [StaDataRateSubscription](docs/StaDataRateSubscription.md)
 - [StaIdentity](docs/StaIdentity.md)
 - [StaInfo](docs/StaInfo.md)
 - [StaStatistics](docs/StaStatistics.md)
 - [StaStatisticsConfig](docs/StaStatisticsConfig.md)
 - [StatisticsGroupData](docs/StatisticsGroupData.md)
 - [SubscriptionLinkList](docs/SubscriptionLinkList.md)
 - [SubscriptionLinkListLinks](docs/SubscriptionLinkListLinks.md)
 - [TimeStamp](docs/TimeStamp.md)
 - [VhtCapabilities](docs/VhtCapabilities.md)
 - [WanMetrics](docs/WanMetrics.md)
 - [WlanCapabilities](docs/WlanCapabilities.md)


## Documentation For Authorization
 Endpoints do not require authorization.


## Author

AdvantEDGE@InterDigital.com
