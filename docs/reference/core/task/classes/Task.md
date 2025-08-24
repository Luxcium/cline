[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [core/task](../README.md) / Task

# Class: Task

Defined in: src/core/task/index.ts:90

## Constructors

### Constructor

> **new Task**(`controller`, `mcpHub`, `updateTaskHistory`, `postStateToWebview`, `reinitExistingTaskFromId`, `cancelTask`, `apiConfiguration`, `autoApprovalSettings`, `browserSettings`, `focusChainSettings`, `preferredLanguage`, `openaiReasoningEffort`, `mode`, `strictPlanModeEnabled`, `shellIntegrationTimeout`, `terminalReuseEnabled`, `terminalOutputLineLimit`, `defaultTerminalProfile`, `enableCheckpointsSetting`, `cwd`, `cacheService`, `task?`, `images?`, `files?`, `historyItem?`): `Task`

Defined in: src/core/task/index.ts:143

#### Parameters

##### controller

[`Controller`](../../controller/classes/Controller.md)

##### mcpHub

[`McpHub`](../../../services/mcp/McpHub/classes/McpHub.md)

##### updateTaskHistory

(`historyItem`) => `Promise`\<[`HistoryItem`](../../../shared/HistoryItem/type-aliases/HistoryItem.md)[]\>

##### postStateToWebview

() => `Promise`\<`void`\>

##### reinitExistingTaskFromId

(`taskId`) => `Promise`\<`void`\>

##### cancelTask

() => `Promise`\<`void`\>

##### apiConfiguration

[`ApiConfiguration`](../../../shared/api/type-aliases/ApiConfiguration.md)

##### autoApprovalSettings

[`AutoApprovalSettings`](../../../shared/AutoApprovalSettings/interfaces/AutoApprovalSettings.md)

##### browserSettings

[`BrowserSettings`](../../../shared/BrowserSettings/interfaces/BrowserSettings.md)

##### focusChainSettings

[`FocusChainSettings`](../../../shared/FocusChainSettings/interfaces/FocusChainSettings.md)

##### preferredLanguage

`string`

##### openaiReasoningEffort

[`OpenaiReasoningEffort`](../../../shared/storage/types/type-aliases/OpenaiReasoningEffort.md)

##### mode

[`Mode`](../../../shared/storage/types/type-aliases/Mode.md)

##### strictPlanModeEnabled

`boolean`

##### shellIntegrationTimeout

`number`

##### terminalReuseEnabled

`boolean`

##### terminalOutputLineLimit

`number`

##### defaultTerminalProfile

`string`

##### enableCheckpointsSetting

`boolean`

##### cwd

`string`

##### cacheService

[`CacheService`](../../storage/CacheService/classes/CacheService.md)

##### task?

`string`

##### images?

`string`[]

##### files?

`string`[]

##### historyItem?

[`HistoryItem`](../../../shared/HistoryItem/type-aliases/HistoryItem.md)

#### Returns

`Task`

## Properties

### api

> **api**: [`ApiHandler`](../../../api/interfaces/ApiHandler.md)

Defined in: src/core/task/index.ts:107

***

### autoApprovalSettings

> **autoApprovalSettings**: [`AutoApprovalSettings`](../../../shared/AutoApprovalSettings/interfaces/AutoApprovalSettings.md)

Defined in: src/core/task/index.ts:134

***

### browserSession

> **browserSession**: [`BrowserSession`](../../../services/browser/BrowserSession/classes/BrowserSession.md)

Defined in: src/core/task/index.ts:110

***

### browserSettings

> **browserSettings**: [`BrowserSettings`](../../../shared/BrowserSettings/interfaces/BrowserSettings.md)

Defined in: src/core/task/index.ts:135

***

### contextManager

> **contextManager**: [`ContextManager`](../../context/context-management/ContextManager/classes/ContextManager.md)

Defined in: src/core/task/index.ts:111

***

### focusChainSettings

> **focusChainSettings**: [`FocusChainSettings`](../../../shared/FocusChainSettings/interfaces/FocusChainSettings.md)

Defined in: src/core/task/index.ts:136

***

### messageStateHandler

> **messageStateHandler**: [`MessageStateHandler`](../message-state/classes/MessageStateHandler.md)

Defined in: src/core/task/index.ts:142

***

### mode

> **mode**: [`Mode`](../../../shared/storage/types/type-aliases/Mode.md)

Defined in: src/core/task/index.ts:139

***

### openaiReasoningEffort

> **openaiReasoningEffort**: [`OpenaiReasoningEffort`](../../../shared/storage/types/type-aliases/OpenaiReasoningEffort.md)

Defined in: src/core/task/index.ts:138

***

### preferredLanguage

> **preferredLanguage**: `string`

Defined in: src/core/task/index.ts:137

***

### taskId

> `readonly` **taskId**: `string`

Defined in: src/core/task/index.ts:92

***

### taskState

> **taskState**: [`TaskState`](../TaskState/classes/TaskState.md)

Defined in: src/core/task/index.ts:97

***

### terminalManager

> **terminalManager**: [`TerminalManager`](../../../integrations/terminal/TerminalManager/classes/TerminalManager.md)

Defined in: src/core/task/index.ts:108

***

### ulid

> `readonly` **ulid**: `string`

Defined in: src/core/task/index.ts:93

## Methods

### abortTask()

> **abortTask**(): `Promise`\<`void`\>

Defined in: src/core/task/index.ts:1210

#### Returns

`Promise`\<`void`\>

***

### ask()

> **ask**(`type`, `text?`, `partial?`): `Promise`\<\{ `askTs?`: `number`; `files?`: `string`[]; `images?`: `string`[]; `response`: [`ClineAskResponse`](../../../shared/WebviewMessage/type-aliases/ClineAskResponse.md); `text?`: `string`; \}\>

Defined in: src/core/task/index.ts:714

#### Parameters

##### type

[`ClineAsk`](../../../shared/ExtensionMessage/type-aliases/ClineAsk.md)

##### text?

`string`

##### partial?

`boolean`

#### Returns

`Promise`\<\{ `askTs?`: `number`; `files?`: `string`[]; `images?`: `string`[]; `response`: [`ClineAskResponse`](../../../shared/WebviewMessage/type-aliases/ClineAskResponse.md); `text?`: `string`; \}\>

***

### attemptApiRequest()

> **attemptApiRequest**(`previousApiReqIndex`): [`ApiStream`](../../../api/transform/stream/type-aliases/ApiStream.md)

Defined in: src/core/task/index.ts:1639

#### Parameters

##### previousApiReqIndex

`number`

#### Returns

[`ApiStream`](../../../api/transform/stream/type-aliases/ApiStream.md)

***

### doesLatestTaskCompletionHaveNewChanges()

> **doesLatestTaskCompletionHaveNewChanges**(): `Promise`\<`boolean`\>

Defined in: src/core/task/index.ts:640

#### Returns

`Promise`\<`boolean`\>

***

### executeCommandTool()

> **executeCommandTool**(`command`): `Promise`\<\[`boolean`, [`ToolResponse`](../type-aliases/ToolResponse.md)\]\>

Defined in: src/core/task/index.ts:1451

#### Parameters

##### command

`string`

#### Returns

`Promise`\<\[`boolean`, [`ToolResponse`](../type-aliases/ToolResponse.md)\]\>

***

### getEnvironmentDetails()

> **getEnvironmentDetails**(`includeFileDetails`): `Promise`\<`string`\>

Defined in: src/core/task/index.ts:2613

#### Parameters

##### includeFileDetails

`boolean` = `false`

#### Returns

`Promise`\<`string`\>

***

### handleWebviewAskResponse()

> **handleWebviewAskResponse**(`askResponse`, `text?`, `images?`, `files?`): `Promise`\<`void`\>

Defined in: src/core/task/index.ts:846

#### Parameters

##### askResponse

[`ClineAskResponse`](../../../shared/WebviewMessage/type-aliases/ClineAskResponse.md)

##### text?

`string`

##### images?

`string`[]

##### files?

`string`[]

#### Returns

`Promise`\<`void`\>

***

### loadContext()

> **loadContext**(`userContent`, `includeFileDetails`): `Promise`\<\[`UserContent`, `string`, `boolean`\]\>

Defined in: src/core/task/index.ts:2536

#### Parameters

##### userContent

`UserContent`

##### includeFileDetails

`boolean` = `false`

#### Returns

`Promise`\<\[`UserContent`, `string`, `boolean`\]\>

***

### presentAssistantMessage()

> **presentAssistantMessage**(): `Promise`\<`void`\>

Defined in: src/core/task/index.ts:1824

#### Returns

`Promise`\<`void`\>

***

### presentMultifileDiff()

> **presentMultifileDiff**(`messageTs`, `seeNewChangesSinceLastTaskCompletion`): `Promise`\<`void`\>

Defined in: src/core/task/index.ts:594

#### Parameters

##### messageTs

`number`

##### seeNewChangesSinceLastTaskCompletion

`boolean`

#### Returns

`Promise`\<`void`\>

***

### recursivelyMakeClineRequests()

> **recursivelyMakeClineRequests**(`userContent`, `includeFileDetails`): `Promise`\<`boolean`\>

Defined in: src/core/task/index.ts:1940

#### Parameters

##### userContent

`UserContent`

##### includeFileDetails

`boolean` = `false`

#### Returns

`Promise`\<`boolean`\>

***

### removeLastPartialMessageIfExistsWithType()

> **removeLastPartialMessageIfExistsWithType**(`type`, `askOrSay`): `Promise`\<`void`\>

Defined in: src/core/task/index.ts:943

#### Parameters

##### type

`"ask"` | `"say"`

##### askOrSay

`"text"` | `"info"` | `"tool"` | `"reasoning"` | `"browser_action"` | `"plan_mode_respond"` | `"load_mcp_documentation"` | `"new_task"` | `"condense"` | `"summarize_task"` | `"report_bug"` | `"command"` | `"task_progress"` | `"task"` | `"error"` | `"api_req_started"` | `"api_req_finished"` | `"completion_result"` | `"user_feedback"` | `"user_feedback_diff"` | `"api_req_retried"` | `"command_output"` | `"shell_integration_warning"` | `"browser_action_launch"` | `"browser_action_result"` | `"mcp_server_request_started"` | `"mcp_server_response"` | `"mcp_notification"` | `"use_mcp_server"` | `"diff_error"` | `"deleted_api_reqs"` | `"clineignore_error"` | `"checkpoint_created"` | `"followup"` | `"api_req_failed"` | `"resume_task"` | `"resume_completed_task"` | `"mistake_limit_reached"` | `"auto_approval_max_req_reached"`

#### Returns

`Promise`\<`void`\>

***

### restoreCheckpoint()

> **restoreCheckpoint**(`messageTs`, `restoreType`, `offset?`): `Promise`\<`void`\>

Defined in: src/core/task/index.ts:407

#### Parameters

##### messageTs

`number`

##### restoreType

[`ClineCheckpointRestore`](../../../shared/WebviewMessage/type-aliases/ClineCheckpointRestore.md)

##### offset?

`number`

#### Returns

`Promise`\<`void`\>

***

### saveCheckpoint()

> **saveCheckpoint**(`isAttemptCompletionMessage`): `Promise`\<`void`\>

Defined in: src/core/task/index.ts:1234

#### Parameters

##### isAttemptCompletionMessage

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

***

### say()

> **say**(`type`, `text?`, `images?`, `files?`, `partial?`): `Promise`\<`undefined`\>

Defined in: src/core/task/index.ts:853

#### Parameters

##### type

[`ClineSay`](../../../shared/ExtensionMessage/type-aliases/ClineSay.md)

##### text?

`string`

##### images?

`string`[]

##### files?

`string`[]

##### partial?

`boolean`

#### Returns

`Promise`\<`undefined`\>

***

### sayAndCreateMissingParamError()

> **sayAndCreateMissingParamError**(`toolName`, `paramName`, `relPath?`): `Promise`\<`string`\>

Defined in: src/core/task/index.ts:933

#### Parameters

##### toolName

`"execute_command"` | `"read_file"` | `"write_to_file"` | `"replace_in_file"` | `"search_files"` | `"list_files"` | `"list_code_definition_names"` | `"browser_action"` | `"use_mcp_tool"` | `"access_mcp_resource"` | `"ask_followup_question"` | `"plan_mode_respond"` | `"load_mcp_documentation"` | `"attempt_completion"` | `"new_task"` | `"condense"` | `"summarize_task"` | `"report_bug"` | `"new_rule"` | `"web_fetch"`

##### paramName

`string`

##### relPath?

`string`

#### Returns

`Promise`\<`string`\>

***

### updateAutoApprovalSettings()

> **updateAutoApprovalSettings**(`settings`): `void`

Defined in: src/core/task/index.ts:393

Updates the auto approval settings for this task

#### Parameters

##### settings

[`AutoApprovalSettings`](../../../shared/AutoApprovalSettings/interfaces/AutoApprovalSettings.md)

#### Returns

`void`

***

### updateMode()

> **updateMode**(`mode`): `void`

Defined in: src/core/task/index.ts:368

#### Parameters

##### mode

[`Mode`](../../../shared/storage/types/type-aliases/Mode.md)

#### Returns

`void`

***

### updateStrictPlanMode()

> **updateStrictPlanMode**(`strictPlanModeEnabled`): `void`

Defined in: src/core/task/index.ts:376

#### Parameters

##### strictPlanModeEnabled

`boolean`

#### Returns

`void`
