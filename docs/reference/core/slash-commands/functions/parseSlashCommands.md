[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [core/slash-commands](../README.md) / parseSlashCommands

# Function: parseSlashCommands()

> **parseSlashCommands**(`text`, `localWorkflowToggles`, `globalWorkflowToggles`): `Promise`\<\{ `needsClinerulesFileCheck`: `boolean`; `processedText`: `string`; \}\>

Defined in: src/core/slash-commands/index.ts:15

Processes text for slash commands and transforms them with appropriate instructions
This is called after parseMentions() to process any slash commands in the user's message

## Parameters

### text

`string`

### localWorkflowToggles

[`ClineRulesToggles`](../../../shared/cline-rules/type-aliases/ClineRulesToggles.md)

### globalWorkflowToggles

[`ClineRulesToggles`](../../../shared/cline-rules/type-aliases/ClineRulesToggles.md)

## Returns

`Promise`\<\{ `needsClinerulesFileCheck`: `boolean`; `processedText`: `string`; \}\>
