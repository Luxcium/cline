[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/ui/subscribeToTheme](../README.md) / subscribeToTheme

# Function: subscribeToTheme()

> **subscribeToTheme**(`_controller`, `_request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/ui/subscribeToTheme.ts:16

Subscribe to theme change events

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### \_request

`EmptyRequest`

### responseStream

[`StreamingResponseHandler`](../../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`String`\>

The streaming response handler

### requestId?

`string`

The ID of the request (passed by the gRPC handler)

## Returns

`Promise`\<`void`\>
