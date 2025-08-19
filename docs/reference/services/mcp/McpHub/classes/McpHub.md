[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/mcp/McpHub](../README.md) / McpHub

# Class: McpHub

Defined in: src/services/mcp/McpHub.ts:41

## Constructors

### Constructor

> **new McpHub**(`getMcpServersPath`, `getSettingsDirectoryPath`, `clientVersion`): `McpHub`

Defined in: src/services/mcp/McpHub.ts:63

#### Parameters

##### getMcpServersPath

() => `Promise`\<`string`\>

##### getSettingsDirectoryPath

() => `Promise`\<`string`\>

##### clientVersion

`string`

#### Returns

`McpHub`

## Properties

### connections

> **connections**: [`McpConnection`](../../types/type-aliases/McpConnection.md)[] = `[]`

Defined in: src/services/mcp/McpHub.ts:49

***

### getMcpServersPath()

> **getMcpServersPath**: () => `Promise`\<`string`\>

Defined in: src/services/mcp/McpHub.ts:42

#### Returns

`Promise`\<`string`\>

***

### isConnecting

> **isConnecting**: `boolean` = `false`

Defined in: src/services/mcp/McpHub.ts:50

## Methods

### addRemoteServer()

> **addRemoteServer**(`serverName`, `serverUrl`): `Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

Defined in: src/services/mcp/McpHub.ts:962

#### Parameters

##### serverName

`string`

##### serverUrl

`string`

#### Returns

`Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

***

### callTool()

> **callTool**(`serverName`, `toolName`, `toolArguments?`): `Promise`\<[`McpToolCallResponse`](../../../../shared/mcp/type-aliases/McpToolCallResponse.md)\>

Defined in: src/services/mcp/McpHub.ts:822

#### Parameters

##### serverName

`string`

##### toolName

`string`

##### toolArguments?

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`McpToolCallResponse`](../../../../shared/mcp/type-aliases/McpToolCallResponse.md)\>

***

### clearNotificationCallback()

> **clearNotificationCallback**(): `void`

Defined in: src/services/mcp/McpHub.ts:1110

Clear the notification callback

#### Returns

`void`

***

### deleteConnection()

> **deleteConnection**(`name`): `Promise`\<`void`\>

Defined in: src/services/mcp/McpHub.ts:514

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`void`\>

***

### deleteServerRPC()

> **deleteServerRPC**(`serverName`): `Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

Defined in: src/services/mcp/McpHub.ts:1014

RPC variant of deleteServer that returns the updated server list directly

#### Parameters

##### serverName

`string`

The name of the server to delete

#### Returns

`Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

Array of remaining MCP servers

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Defined in: src/services/mcp/McpHub.ts:1115

#### Returns

`Promise`\<`void`\>

***

### getLatestMcpServersRPC()

> **getLatestMcpServersRPC**(): `Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

Defined in: src/services/mcp/McpHub.ts:751

#### Returns

`Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

***

### getMcpSettingsFilePath()

> **getMcpSettingsFilePath**(): `Promise`\<`string`\>

Defined in: src/services/mcp/McpHub.ts:81

#### Returns

`Promise`\<`string`\>

***

### getPendingNotifications()

> **getPendingNotifications**(): `object`[]

Defined in: src/services/mcp/McpHub.ts:1087

Get and clear pending notifications

#### Returns

`object`[]

Array of pending notifications

***

### getServers()

> **getServers**(): [`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]

Defined in: src/services/mcp/McpHub.ts:75

#### Returns

[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]

***

### readResource()

> **readResource**(`serverName`, `uri`): `Promise`\<[`McpResourceResponse`](../../../../shared/mcp/type-aliases/McpResourceResponse.md)\>

Defined in: src/services/mcp/McpHub.ts:802

#### Parameters

##### serverName

`string`

##### uri

`string`

#### Returns

`Promise`\<[`McpResourceResponse`](../../../../shared/mcp/type-aliases/McpResourceResponse.md)\>

***

### restartConnection()

> **restartConnection**(`serverName`): `Promise`\<`void`\>

Defined in: src/services/mcp/McpHub.ts:680

#### Parameters

##### serverName

`string`

#### Returns

`Promise`\<`void`\>

***

### restartConnectionRPC()

> **restartConnectionRPC**(`serverName`): `Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

Defined in: src/services/mcp/McpHub.ts:650

#### Parameters

##### serverName

`string`

#### Returns

`Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

***

### sendLatestMcpServers()

> **sendLatestMcpServers**(): `Promise`\<`void`\>

Defined in: src/services/mcp/McpHub.ts:747

#### Returns

`Promise`\<`void`\>

***

### setNotificationCallback()

> **setNotificationCallback**(`callback`): `void`

Defined in: src/services/mcp/McpHub.ts:1102

Set the notification callback for real-time notifications

#### Parameters

##### callback

(`serverName`, `level`, `message`) => `void`

Function to call when notifications arrive

#### Returns

`void`

***

### toggleServerDisabledRPC()

> **toggleServerDisabledRPC**(`serverName`, `disabled`): `Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

Defined in: src/services/mcp/McpHub.ts:766

#### Parameters

##### serverName

`string`

##### disabled

`boolean`

#### Returns

`Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

***

### toggleToolAutoApprove()

> **toggleToolAutoApprove**(`serverName`, `toolNames`, `shouldAllow`): `Promise`\<`void`\>

Defined in: src/services/mcp/McpHub.ts:916

#### Parameters

##### serverName

`string`

##### toolNames

`string`[]

##### shouldAllow

`boolean`

#### Returns

`Promise`\<`void`\>

***

### toggleToolAutoApproveRPC()

> **toggleToolAutoApproveRPC**(`serverName`, `toolNames`, `shouldAllow`): `Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

Defined in: src/services/mcp/McpHub.ts:871

RPC variant of toggleToolAutoApprove that returns the updated servers instead of notifying the webview

#### Parameters

##### serverName

`string`

The name of the MCP server

##### toolNames

`string`[]

Array of tool names to toggle auto-approve for

##### shouldAllow

`boolean`

Whether to enable or disable auto-approve

#### Returns

`Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

Array of updated MCP servers

***

### updateServerConnections()

> **updateServerConnections**(`newServers`): `Promise`\<`void`\>

Defined in: src/services/mcp/McpHub.ts:579

#### Parameters

##### newServers

`Record`\<`string`, [`McpServerConfig`](../../types/type-aliases/McpServerConfig.md)\>

#### Returns

`Promise`\<`void`\>

***

### updateServerConnectionsRPC()

> **updateServerConnectionsRPC**(`newServers`): `Promise`\<`void`\>

Defined in: src/services/mcp/McpHub.ts:532

#### Parameters

##### newServers

`Record`\<`string`, [`McpServerConfig`](../../types/type-aliases/McpServerConfig.md)\>

#### Returns

`Promise`\<`void`\>

***

### updateServerTimeoutRPC()

> **updateServerTimeoutRPC**(`serverName`, `timeout`): `Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>

Defined in: src/services/mcp/McpHub.ts:1043

#### Parameters

##### serverName

`string`

##### timeout

`number`

#### Returns

`Promise`\<[`McpServer`](../../../../shared/mcp/type-aliases/McpServer.md)[]\>
