[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/ui/subscribeToSettingsButtonClicked](../README.md) / subscribeToSettingsButtonClicked

# Function: subscribeToSettingsButtonClicked()

> **subscribeToSettingsButtonClicked**(`_controller`, `request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/ui/subscribeToSettingsButtonClicked.ts:16

Subscribe to settings button clicked events

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### request

`WebviewProviderTypeRequest`

The request with provider type

### responseStream

[`StreamingResponseHandler`](../../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`Empty`\>

The streaming response handler

### requestId?

`string`

The ID of the request (passed by the gRPC handler)

## Returns

`Promise`\<`void`\>
