[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/ui/subscribeToAddToInput](../README.md) / subscribeToAddToInput

# Function: subscribeToAddToInput()

> **subscribeToAddToInput**(`_controller`, `request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/ui/subscribeToAddToInput.ts:18

Subscribe to addToInput events

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### request

`StringRequest`

The request containing the client ID

### responseStream

[`StreamingResponseHandler`](../../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`ProtoString`\>

The streaming response handler

### requestId?

`string`

The ID of the request (passed by the gRPC handler)

## Returns

`Promise`\<`void`\>
