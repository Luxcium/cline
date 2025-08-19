[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/ui/subscribeToPartialMessage](../README.md) / subscribeToPartialMessage

# Function: subscribeToPartialMessage()

> **subscribeToPartialMessage**(`_controller`, `_request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/ui/subscribeToPartialMessage.ts:16

Subscribe to partial message events

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### \_request

`EmptyRequest`

### responseStream

[`StreamingResponseHandler`](../../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`ClineMessage`\>

The streaming response handler

### requestId?

`string`

The ID of the request (passed by the gRPC handler)

## Returns

`Promise`\<`void`\>
