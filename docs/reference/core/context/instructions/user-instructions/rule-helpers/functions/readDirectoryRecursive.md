[**claude-dev**](../../../../../../README.md)

***

[claude-dev](../../../../../../README.md) / [core/context/instructions/user-instructions/rule-helpers](../README.md) / readDirectoryRecursive

# Function: readDirectoryRecursive()

> **readDirectoryRecursive**(`directoryPath`, `allowedFileExtension`, `excludedPaths`): `Promise`\<`string`[]\>

Defined in: src/core/context/instructions/user-instructions/rule-helpers.ts:11

Recursively traverses directory and finds all files, including checking for optional whitelisted file extension

## Parameters

### directoryPath

`string`

### allowedFileExtension

`string`

### excludedPaths

`string`[][] = `[]`

## Returns

`Promise`\<`string`[]\>
