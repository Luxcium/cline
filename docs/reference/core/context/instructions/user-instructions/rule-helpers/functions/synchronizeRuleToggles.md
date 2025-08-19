[**claude-dev**](../../../../../../README.md)

***

[claude-dev](../../../../../../README.md) / [core/context/instructions/user-instructions/rule-helpers](../README.md) / synchronizeRuleToggles

# Function: synchronizeRuleToggles()

> **synchronizeRuleToggles**(`rulesDirectoryPath`, `currentToggles`, `allowedFileExtension`, `excludedPaths`): `Promise`\<[`ClineRulesToggles`](../../../../../../shared/cline-rules/type-aliases/ClineRulesToggles.md)\>

Defined in: src/core/context/instructions/user-instructions/rule-helpers.ts:38

Gets the up to date toggles

## Parameters

### rulesDirectoryPath

`string`

### currentToggles

[`ClineRulesToggles`](../../../../../../shared/cline-rules/type-aliases/ClineRulesToggles.md)

### allowedFileExtension

`string` = `""`

### excludedPaths

`string`[][] = `[]`

## Returns

`Promise`\<[`ClineRulesToggles`](../../../../../../shared/cline-rules/type-aliases/ClineRulesToggles.md)\>
