[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/mcp/addRemoteMcpServer](../README.md) / addRemoteMcpServer

# Function: addRemoteMcpServer()

> **addRemoteMcpServer**(`controller`, `request`): `Promise`\<`McpServers`\>

Defined in: src/core/controller/mcp/addRemoteMcpServer.ts:12

Adds a new remote MCP server via gRPC

## Parameters

### controller

[`Controller`](../../../classes/Controller.md)

The controller instance

### request

`AddRemoteMcpServerRequest`

The request containing server name and URL

## Returns

`Promise`\<`McpServers`\>

An array of McpServer objects
