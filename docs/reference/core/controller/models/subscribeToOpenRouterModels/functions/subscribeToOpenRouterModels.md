[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/models/subscribeToOpenRouterModels](../README.md) / subscribeToOpenRouterModels

# Function: subscribeToOpenRouterModels()

> **subscribeToOpenRouterModels**(`_controller`, `_request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/models/subscribeToOpenRouterModels.ts:16

Subscribe to OpenRouter models events

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### \_request

`EmptyRequest`

### responseStream

[`StreamingResponseHandler`](../../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`OpenRouterCompatibleModelInfo`\>

The streaming response handler

### requestId?

`string`

The ID of the request (passed by the gRPC handler)

## Returns

`Promise`\<`void`\>
