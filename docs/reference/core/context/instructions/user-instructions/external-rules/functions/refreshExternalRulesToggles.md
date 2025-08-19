[**claude-dev**](../../../../../../README.md)

***

[claude-dev](../../../../../../README.md) / [core/context/instructions/user-instructions/external-rules](../README.md) / refreshExternalRulesToggles

# Function: refreshExternalRulesToggles()

> **refreshExternalRulesToggles**(`controller`, `workingDirectory`): `Promise`\<\{ `cursorLocalToggles`: [`ClineRulesToggles`](../../../../../../shared/cline-rules/type-aliases/ClineRulesToggles.md); `windsurfLocalToggles`: [`ClineRulesToggles`](../../../../../../shared/cline-rules/type-aliases/ClineRulesToggles.md); \}\>

Defined in: src/core/context/instructions/user-instructions/external-rules.ts:18

Refreshes the toggles for windsurf and cursor rules

## Parameters

### controller

[`Controller`](../../../../../controller/classes/Controller.md)

### workingDirectory

`string`

## Returns

`Promise`\<\{ `cursorLocalToggles`: [`ClineRulesToggles`](../../../../../../shared/cline-rules/type-aliases/ClineRulesToggles.md); `windsurfLocalToggles`: [`ClineRulesToggles`](../../../../../../shared/cline-rules/type-aliases/ClineRulesToggles.md); \}\>
