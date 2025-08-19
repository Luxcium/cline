[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/vscode/commandUtils](../README.md) / getContextForCommand

# Function: getContextForCommand()

> **getContextForCommand**(`range?`, `vscodeDiagnostics?`): `Promise`\<`undefined` \| \{ `commandContext`: `CommandContext`; `controller`: [`Controller`](../../../../core/controller/classes/Controller.md); \}\>

Defined in: src/hosts/vscode/commandUtils.ts:14

Gets the context needed for VSCode commands that interact with the editor

## Parameters

### range?

`Range`

Optional range to use instead of current selection

### vscodeDiagnostics?

`Diagnostic`[]

Optional diagnostics to include

## Returns

`Promise`\<`undefined` \| \{ `commandContext`: `CommandContext`; `controller`: [`Controller`](../../../../core/controller/classes/Controller.md); \}\>

Context object with controller, selected text, file info, and problems
