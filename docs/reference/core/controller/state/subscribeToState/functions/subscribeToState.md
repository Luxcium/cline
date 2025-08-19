[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/state/subscribeToState](../README.md) / subscribeToState

# Function: subscribeToState()

> **subscribeToState**(`controller`, `_request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/state/subscribeToState.ts:18

Subscribe to state updates

## Parameters

### controller

[`Controller`](../../../classes/Controller.md)

The controller instance

### \_request

`EmptyRequest`

### responseStream

[`StreamingResponseHandler`](../../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`State`\>

The streaming response handler

### requestId?

`string`

The ID of the request (passed by the gRPC handler)

## Returns

`Promise`\<`void`\>
