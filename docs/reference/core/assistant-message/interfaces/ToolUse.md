[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [core/assistant-message](../README.md) / ToolUse

# Interface: ToolUse

Defined in: src/core/assistant-message/index.ts:70

## Properties

### name

> **name**: `"execute_command"` \| `"read_file"` \| `"write_to_file"` \| `"replace_in_file"` \| `"search_files"` \| `"list_files"` \| `"list_code_definition_names"` \| `"browser_action"` \| `"use_mcp_tool"` \| `"access_mcp_resource"` \| `"ask_followup_question"` \| `"plan_mode_respond"` \| `"load_mcp_documentation"` \| `"attempt_completion"` \| `"new_task"` \| `"condense"` \| `"summarize_task"` \| `"report_bug"` \| `"new_rule"` \| `"web_fetch"`

Defined in: src/core/assistant-message/index.ts:72

***

### params

> **params**: `Partial`\<`Record`\<[`ToolParamName`](../type-aliases/ToolParamName.md), `string`\>\>

Defined in: src/core/assistant-message/index.ts:74

***

### partial

> **partial**: `boolean`

Defined in: src/core/assistant-message/index.ts:75

***

### type

> **type**: `"tool_use"`

Defined in: src/core/assistant-message/index.ts:71
