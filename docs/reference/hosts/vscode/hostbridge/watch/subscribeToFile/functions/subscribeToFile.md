[**claude-dev**](../../../../../../README.md)

***

[claude-dev](../../../../../../README.md) / [hosts/vscode/hostbridge/watch/subscribeToFile](../README.md) / subscribeToFile

# Function: subscribeToFile()

> **subscribeToFile**(`request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/hosts/vscode/hostbridge/watch/subscribeToFile.ts:25

Subscribe to file changes

## Parameters

### request

`SubscribeToFileRequest`

The request containing the file path

### responseStream

[`StreamingResponseHandler`](../../../../hostbridge-grpc-handler/type-aliases/StreamingResponseHandler.md)

The streaming response handler

### requestId?

`string`

The ID of the request (passed by the gRPC handler)

## Returns

`Promise`\<`void`\>
