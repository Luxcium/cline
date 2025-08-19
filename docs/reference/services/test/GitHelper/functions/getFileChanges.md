[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/test/GitHelper](../README.md) / getFileChanges

# Function: getFileChanges()

> **getFileChanges**(`workspacePath`): `Promise`\<\{ `created`: `string`[]; `deleted`: `string`[]; `diff`: `string`; `modified`: `string`[]; \}\>

Defined in: src/services/test/GitHelper.ts:124

Gets the file changes between the current state and the initial state

## Parameters

### workspacePath

`string`

The workspace path to check for changes

## Returns

`Promise`\<\{ `created`: `string`[]; `deleted`: `string`[]; `diff`: `string`; `modified`: `string`[]; \}\>

Object containing lists of created, modified, and deleted files, plus the full diff
