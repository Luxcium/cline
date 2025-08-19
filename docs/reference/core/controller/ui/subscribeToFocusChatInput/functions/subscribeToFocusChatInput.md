[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/ui/subscribeToFocusChatInput](../README.md) / subscribeToFocusChatInput

# Function: subscribeToFocusChatInput()

> **subscribeToFocusChatInput**(`_controller`, `request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/ui/subscribeToFocusChatInput.ts:15

Subscribe to focus chat input events

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### request

`StringRequest`

The request containing the client ID

### responseStream

[`StreamingResponseHandler`](../../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`Empty`\>

The streaming response handler

### requestId?

`string`

The ID of the request

## Returns

`Promise`\<`void`\>
