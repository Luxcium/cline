[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/mcp/subscribeToMcpMarketplaceCatalog](../README.md) / subscribeToMcpMarketplaceCatalog

# Function: subscribeToMcpMarketplaceCatalog()

> **subscribeToMcpMarketplaceCatalog**(`_controller`, `_request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/mcp/subscribeToMcpMarketplaceCatalog.ts:16

Subscribe to MCP marketplace catalog updates

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### \_request

`EmptyRequest`

### responseStream

[`StreamingResponseHandler`](../../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`McpMarketplaceCatalog`\>

The streaming response handler

### requestId?

`string`

The ID of the request (passed by the gRPC handler)

## Returns

`Promise`\<`void`\>
