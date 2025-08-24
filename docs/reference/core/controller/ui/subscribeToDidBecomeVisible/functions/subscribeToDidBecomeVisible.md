[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/ui/subscribeToDidBecomeVisible](../README.md) / subscribeToDidBecomeVisible

# Function: subscribeToDidBecomeVisible()

> **subscribeToDidBecomeVisible**(`controller`, `_request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/ui/subscribeToDidBecomeVisible.ts:16

Subscribe to didBecomeVisible events

## Parameters

### controller

[`Controller`](../../../classes/Controller.md)

The controller instance

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
