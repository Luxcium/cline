[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [utils/fs](../README.md) / createDirectoriesForFile

# Function: createDirectoriesForFile()

> **createDirectoriesForFile**(`filePath`): `Promise`\<`string`[]\>

Defined in: src/utils/fs.ts:11

Asynchronously creates all non-existing subdirectories for a given file path
and collects them in an array for later deletion.

## Parameters

### filePath

`string`

The full path to a file.

## Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of newly created directories.
