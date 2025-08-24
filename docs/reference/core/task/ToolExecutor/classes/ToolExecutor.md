[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/task/ToolExecutor](../README.md) / ToolExecutor

# Class: ToolExecutor

Defined in: src/core/task/ToolExecutor.ts:61

## Constructors

### Constructor

> **new ToolExecutor**(`context`, `taskState`, `messageStateHandler`, `api`, `urlContentFetcher`, `browserSession`, `diffViewProvider`, `mcpHub`, `fileContextTracker`, `clineIgnoreController`, `contextManager`, `cacheService`, `autoApprovalSettings`, `browserSettings`, `focusChainSettings`, `cwd`, `taskId`, `ulid`, `mode`, `strictPlanModeEnabled`, `say`, `ask`, `saveCheckpoint`, `sayAndCreateMissingParamError`, `removeLastPartialMessageIfExistsWithType`, `executeCommandTool`, `doesLatestTaskCompletionHaveNewChanges`, `updateFCListFromToolResponse`): `ToolExecutor`

Defined in: src/core/task/ToolExecutor.ts:76

#### Parameters

##### context

`ExtensionContext`

##### taskState

[`TaskState`](../../TaskState/classes/TaskState.md)

##### messageStateHandler

[`MessageStateHandler`](../../message-state/classes/MessageStateHandler.md)

##### api

[`ApiHandler`](../../../../api/interfaces/ApiHandler.md)

##### urlContentFetcher

[`UrlContentFetcher`](../../../../services/browser/UrlContentFetcher/classes/UrlContentFetcher.md)

##### browserSession

[`BrowserSession`](../../../../services/browser/BrowserSession/classes/BrowserSession.md)

##### diffViewProvider

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md)

##### mcpHub

[`McpHub`](../../../../services/mcp/McpHub/classes/McpHub.md)

##### fileContextTracker

[`FileContextTracker`](../../../context/context-tracking/FileContextTracker/classes/FileContextTracker.md)

##### clineIgnoreController

[`ClineIgnoreController`](../../../ignore/ClineIgnoreController/classes/ClineIgnoreController.md)

##### contextManager

[`ContextManager`](../../../context/context-management/ContextManager/classes/ContextManager.md)

##### cacheService

[`CacheService`](../../../storage/CacheService/classes/CacheService.md)

##### autoApprovalSettings

[`AutoApprovalSettings`](../../../../shared/AutoApprovalSettings/interfaces/AutoApprovalSettings.md)

##### browserSettings

[`BrowserSettings`](../../../../shared/BrowserSettings/interfaces/BrowserSettings.md)

##### focusChainSettings

[`FocusChainSettings`](../../../../shared/FocusChainSettings/interfaces/FocusChainSettings.md)

##### cwd

`string`

##### taskId

`string`

##### ulid

`string`

##### mode

[`Mode`](../../../../shared/storage/types/type-aliases/Mode.md)

##### strictPlanModeEnabled

`boolean`

##### say

(`type`, `text?`, `images?`, `files?`, `partial?`) => `Promise`\<`undefined`\>

##### ask

(`type`, `text?`, `partial?`) => `Promise`\<\{ `files?`: `string`[]; `images?`: `string`[]; `response`: [`ClineAskResponse`](../../../../shared/WebviewMessage/type-aliases/ClineAskResponse.md); `text?`: `string`; \}\>

##### saveCheckpoint

(`isAttemptCompletionMessage?`) => `Promise`\<`void`\>

##### sayAndCreateMissingParamError

(`toolName`, `paramName`, `relPath?`) => `Promise`\<`any`\>

##### removeLastPartialMessageIfExistsWithType

(`type`, `askOrSay`) => `Promise`\<`void`\>

##### executeCommandTool

(`command`) => `Promise`\<\[`boolean`, `any`\]\>

##### doesLatestTaskCompletionHaveNewChanges

() => `Promise`\<`boolean`\>

##### updateFCListFromToolResponse

(`taskProgress`) => `Promise`\<`void`\>

#### Returns

`ToolExecutor`

## Methods

### executeTool()

> **executeTool**(`block`): `Promise`\<`void`\>

Defined in: src/core/task/ToolExecutor.ts:303

#### Parameters

##### block

[`ToolUse`](../../../assistant-message/interfaces/ToolUse.md)

#### Returns

`Promise`\<`void`\>

***

### updateAutoApprovalSettings()

> **updateAutoApprovalSettings**(`settings`): `void`

Defined in: src/core/task/ToolExecutor.ts:132

Updates the auto approval settings

#### Parameters

##### settings

[`AutoApprovalSettings`](../../../../shared/AutoApprovalSettings/interfaces/AutoApprovalSettings.md)

#### Returns

`void`

***

### updateMode()

> **updateMode**(`mode`): `void`

Defined in: src/core/task/ToolExecutor.ts:144

#### Parameters

##### mode

[`Mode`](../../../../shared/storage/types/type-aliases/Mode.md)

#### Returns

`void`

***

### updateStrictPlanModeEnabled()

> **updateStrictPlanModeEnabled**(`strictPlanModeEnabled`): `void`

Defined in: src/core/task/ToolExecutor.ts:148

#### Parameters

##### strictPlanModeEnabled

`boolean`

#### Returns

`void`
