[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/controller/grpc-service](../README.md) / StreamingMethodHandler

# Type Alias: StreamingMethodHandler()

> **StreamingMethodHandler** = (`controller`, `message`, `responseStream`, `requestId?`) => `Promise`\<`void`\>

Defined in: src/core/controller/grpc-service.ts:12

Type for streaming method handlers

## Parameters

### controller

[`Controller`](../../classes/Controller.md)

### message

`any`

### responseStream

[`StreamingResponseHandler`](../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`any`\>

### requestId?

`string`

## Returns

`Promise`\<`void`\>
