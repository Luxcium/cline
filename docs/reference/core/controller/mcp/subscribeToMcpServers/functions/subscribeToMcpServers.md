[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/mcp/subscribeToMcpServers](../README.md) / subscribeToMcpServers

# Function: subscribeToMcpServers()

> **subscribeToMcpServers**(`controller`, `_request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/mcp/subscribeToMcpServers.ts:17

Subscribe to MCP servers events

## Parameters

### controller

[`Controller`](../../../classes/Controller.md)

The controller instance

### \_request

`EmptyRequest`

### responseStream

[`StreamingResponseHandler`](../../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`McpServers`\>

The streaming response handler

### requestId?

`string`

The ID of the request (passed by the gRPC handler)

## Returns

`Promise`\<`void`\>
