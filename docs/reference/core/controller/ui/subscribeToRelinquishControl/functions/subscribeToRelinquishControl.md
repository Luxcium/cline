[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/ui/subscribeToRelinquishControl](../README.md) / subscribeToRelinquishControl

# Function: subscribeToRelinquishControl()

> **subscribeToRelinquishControl**(`_controller`, `_request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/ui/subscribeToRelinquishControl.ts:15

Subscribe to relinquish control events

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### \_request

`EmptyRequest`

### responseStream

[`StreamingResponseHandler`](../../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`Empty`\>

The streaming response handler

### requestId?

`string`

The ID of the request (passed by the gRPC handler)

## Returns

`Promise`\<`void`\>
