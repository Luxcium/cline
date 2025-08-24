[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/task/tools/autoApprove](../README.md) / AutoApprove

# Class: AutoApprove

Defined in: src/core/task/tools/autoApprove.ts:7

## Constructors

### Constructor

> **new AutoApprove**(`autoApprovalSettings`): `AutoApprove`

Defined in: src/core/task/tools/autoApprove.ts:10

#### Parameters

##### autoApprovalSettings

[`AutoApprovalSettings`](../../../../../shared/AutoApprovalSettings/interfaces/AutoApprovalSettings.md)

#### Returns

`AutoApprove`

## Properties

### autoApprovalSettings

> **autoApprovalSettings**: [`AutoApprovalSettings`](../../../../../shared/AutoApprovalSettings/interfaces/AutoApprovalSettings.md)

Defined in: src/core/task/tools/autoApprove.ts:8

## Methods

### shouldAutoApproveTool()

> **shouldAutoApproveTool**(`toolName`): `boolean` \| \[`boolean`, `boolean`\]

Defined in: src/core/task/tools/autoApprove.ts:16

#### Parameters

##### toolName

`"execute_command"` | `"read_file"` | `"write_to_file"` | `"replace_in_file"` | `"search_files"` | `"list_files"` | `"list_code_definition_names"` | `"browser_action"` | `"use_mcp_tool"` | `"access_mcp_resource"` | `"ask_followup_question"` | `"plan_mode_respond"` | `"load_mcp_documentation"` | `"attempt_completion"` | `"new_task"` | `"condense"` | `"summarize_task"` | `"report_bug"` | `"new_rule"` | `"web_fetch"`

#### Returns

`boolean` \| \[`boolean`, `boolean`\]

***

### shouldAutoApproveToolWithPath()

> **shouldAutoApproveToolWithPath**(`blockname`, `autoApproveActionpath`): `Promise`\<`boolean`\>

Defined in: src/core/task/tools/autoApprove.ts:54

#### Parameters

##### blockname

`"execute_command"` | `"read_file"` | `"write_to_file"` | `"replace_in_file"` | `"search_files"` | `"list_files"` | `"list_code_definition_names"` | `"browser_action"` | `"use_mcp_tool"` | `"access_mcp_resource"` | `"ask_followup_question"` | `"plan_mode_respond"` | `"load_mcp_documentation"` | `"attempt_completion"` | `"new_task"` | `"condense"` | `"summarize_task"` | `"report_bug"` | `"new_rule"` | `"web_fetch"`

##### autoApproveActionpath

`undefined` | `string`

#### Returns

`Promise`\<`boolean`\>

***

### updateSettings()

> **updateSettings**(`settings`): `void`

Defined in: src/core/task/tools/autoApprove.ts:78

#### Parameters

##### settings

[`AutoApprovalSettings`](../../../../../shared/AutoApprovalSettings/interfaces/AutoApprovalSettings.md)

#### Returns

`void`
