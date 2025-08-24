[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [core/controller](../README.md) / Controller

# Class: Controller

Defined in: src/core/controller/index.ts:40

## Constructors

### Constructor

> **new Controller**(`context`, `id`): `Controller`

Defined in: src/core/controller/index.ts:50

#### Parameters

##### context

`ExtensionContext`

##### id

`string`

#### Returns

`Controller`

## Properties

### accountService

> **accountService**: [`ClineAccountService`](../../../services/account/ClineAccountService/classes/ClineAccountService.md)

Defined in: src/core/controller/index.ts:46

***

### authService

> **authService**: [`AuthService`](../../../services/auth/AuthService/classes/AuthService.md)

Defined in: src/core/controller/index.ts:47

***

### cacheService

> `readonly` **cacheService**: [`CacheService`](../../storage/CacheService/classes/CacheService.md)

Defined in: src/core/controller/index.ts:48

***

### context

> `readonly` **context**: `ExtensionContext`

Defined in: src/core/controller/index.ts:51

***

### id

> `readonly` **id**: `string`

Defined in: src/core/controller/index.ts:41

***

### mcpHub

> **mcpHub**: [`McpHub`](../../../services/mcp/McpHub/classes/McpHub.md)

Defined in: src/core/controller/index.ts:45

***

### task?

> `optional` **task**: [`Task`](../../task/classes/Task.md)

Defined in: src/core/controller/index.ts:43

## Methods

### cancelTask()

> **cancelTask**(): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:280

#### Returns

`Promise`\<`void`\>

***

### clearTask()

> **clearTask**(): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:666

#### Returns

`Promise`\<`void`\>

***

### deleteTaskFromState()

> **deleteTaskFromState**(`id`): `Promise`\<[`HistoryItem`](../../../shared/HistoryItem/type-aliases/HistoryItem.md)[]\>

Defined in: src/core/controller/index.ts:556

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`HistoryItem`](../../../shared/HistoryItem/type-aliases/HistoryItem.md)[]\>

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:111

#### Returns

`Promise`\<`void`\>

***

### exportTaskWithId()

> **exportTaskWithId**(`id`): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:551

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### getCurrentMode()

> **getCurrentMode**(): `Promise`\<[`Mode`](../../../shared/storage/types/type-aliases/Mode.md)\>

Defined in: src/core/controller/index.ts:102

#### Returns

`Promise`\<[`Mode`](../../../shared/storage/types/type-aliases/Mode.md)\>

***

### getStateToPostToWebview()

> **getStateToPostToWebview**(): `Promise`\<[`ExtensionState`](../../../shared/ExtensionMessage/interfaces/ExtensionState.md)\>

Defined in: src/core/controller/index.ts:573

#### Returns

`Promise`\<[`ExtensionState`](../../../shared/ExtensionMessage/interfaces/ExtensionState.md)\>

***

### getTaskWithId()

> **getTaskWithId**(`id`): `Promise`\<\{ `apiConversationHistory`: `MessageParam`[]; `apiConversationHistoryFilePath`: `string`; `contextHistoryFilePath`: `string`; `historyItem`: [`HistoryItem`](../../../shared/HistoryItem/type-aliases/HistoryItem.md); `taskDirPath`: `string`; `taskMetadataFilePath`: `string`; `uiMessagesFilePath`: `string`; \}\>

Defined in: src/core/controller/index.ts:514

#### Parameters

##### id

`string`

#### Returns

`Promise`\<\{ `apiConversationHistory`: `MessageParam`[]; `apiConversationHistoryFilePath`: `string`; `contextHistoryFilePath`: `string`; `historyItem`: [`HistoryItem`](../../../shared/HistoryItem/type-aliases/HistoryItem.md); `taskDirPath`: `string`; `taskMetadataFilePath`: `string`; `uiMessagesFilePath`: `string`; \}\>

***

### handleAuthCallback()

> **handleAuthCallback**(`customToken`, `provider`): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:310

#### Parameters

##### customToken

`string`

##### provider

`null` | `string`

#### Returns

`Promise`\<`void`\>

***

### handleOpenRouterCallback()

> **handleOpenRouterCallback**(`code`): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:461

#### Parameters

##### code

`string`

#### Returns

`Promise`\<`void`\>

***

### handleSignOut()

> **handleSignOut**(): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:125

#### Returns

`Promise`\<`void`\>

***

### initTask()

> **initTask**(`task?`, `images?`, `files?`, `historyItem?`): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:157

#### Parameters

##### task?

`string`

##### images?

`string`[]

##### files?

`string`[]

##### historyItem?

[`HistoryItem`](../../../shared/HistoryItem/type-aliases/HistoryItem.md)

#### Returns

`Promise`\<`void`\>

***

### postStateToWebview()

> **postStateToWebview**(): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:568

#### Returns

`Promise`\<`void`\>

***

### readOpenRouterModels()

> **readOpenRouterModels**(): `Promise`\<`undefined` \| `Record`\<`string`, [`ModelInfo`](../../../shared/api/interfaces/ModelInfo.md)\>\>

Defined in: src/core/controller/index.ts:502

#### Returns

`Promise`\<`undefined` \| `Record`\<`string`, [`ModelInfo`](../../../shared/api/interfaces/ModelInfo.md)\>\>

***

### reinitExistingTaskFromId()

> **reinitExistingTaskFromId**(`taskId`): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:227

#### Parameters

##### taskId

`string`

#### Returns

`Promise`\<`void`\>

***

### setUserInfo()

> **setUserInfo**(`info?`): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:153

#### Parameters

##### info?

[`UserInfo`](../../../shared/UserInfo/interfaces/UserInfo.md)

#### Returns

`Promise`\<`void`\>

***

### silentlyRefreshMcpMarketplace()

> **silentlyRefreshMcpMarketplace**(): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:434

#### Returns

`Promise`\<`void`\>

***

### silentlyRefreshMcpMarketplaceRPC()

> **silentlyRefreshMcpMarketplaceRPC**(): `Promise`\<`undefined` \| [`McpMarketplaceCatalog`](../../../shared/mcp/interfaces/McpMarketplaceCatalog.md)\>

Defined in: src/core/controller/index.ts:450

RPC variant that silently refreshes the MCP marketplace catalog and returns the result
Unlike silentlyRefreshMcpMarketplace, this doesn't send a message to the webview

#### Returns

`Promise`\<`undefined` \| [`McpMarketplaceCatalog`](../../../shared/mcp/interfaces/McpMarketplaceCatalog.md)\>

MCP marketplace catalog or undefined if refresh failed

***

### togglePlanActMode()

> **togglePlanActMode**(`modeToSwitchTo`, `chatContent?`): `Promise`\<`boolean`\>

Defined in: src/core/controller/index.ts:241

#### Parameters

##### modeToSwitchTo

[`Mode`](../../../shared/storage/types/type-aliases/Mode.md)

##### chatContent?

[`ChatContent`](../../../shared/ChatContent/interfaces/ChatContent.md)

#### Returns

`Promise`\<`boolean`\>

***

### updateTaskHistory()

> **updateTaskHistory**(`item`): `Promise`\<[`HistoryItem`](../../../shared/HistoryItem/type-aliases/HistoryItem.md)[]\>

Defined in: src/core/controller/index.ts:691

#### Parameters

##### item

[`HistoryItem`](../../../shared/HistoryItem/type-aliases/HistoryItem.md)

#### Returns

`Promise`\<[`HistoryItem`](../../../shared/HistoryItem/type-aliases/HistoryItem.md)[]\>

***

### updateTelemetrySetting()

> **updateTelemetrySetting**(`telemetrySetting`): `Promise`\<`void`\>

Defined in: src/core/controller/index.ts:234

#### Parameters

##### telemetrySetting

[`TelemetrySetting`](../../../shared/TelemetrySetting/type-aliases/TelemetrySetting.md)

#### Returns

`Promise`\<`void`\>
