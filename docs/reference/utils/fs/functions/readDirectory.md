[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [utils/fs](../README.md) / readDirectory

# Function: readDirectory()

> **readDirectory**(`directoryPath`, `excludedPaths`): `Promise`\<`string`[]\>

Defined in: src/utils/fs.ts:113

Recursively reads a directory and returns an array of absolute file paths.

## Parameters

### directoryPath

`string`

The path to the directory to read.

### excludedPaths

`string`[][] = `[]`

Nested array of paths to ignore.

## Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of absolute file paths.

## Throws

Error if the directory cannot be read.
