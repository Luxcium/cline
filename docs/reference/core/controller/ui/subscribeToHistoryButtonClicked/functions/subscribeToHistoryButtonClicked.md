[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/ui/subscribeToHistoryButtonClicked](../README.md) / subscribeToHistoryButtonClicked

# Function: subscribeToHistoryButtonClicked()

> **subscribeToHistoryButtonClicked**(`_controller`, `request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/ui/subscribeToHistoryButtonClicked.ts:16

Subscribe to history button clicked events

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### request

`WebviewProviderTypeRequest`

The webview provider type request

### responseStream

[`StreamingResponseHandler`](../../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`Empty`\>

The streaming response handler

### requestId?

`string`

The ID of the request (passed by the gRPC handler)

## Returns

`Promise`\<`void`\>
