[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [utils/storage](../README.md) / getTotalTasksSize

# Function: getTotalTasksSize()

> **getTotalTasksSize**(`storagePath`): `Promise`\<`null` \| `number`\>

Defined in: src/utils/storage.ts:9

Gets the total size of tasks and checkpoints directories

## Parameters

### storagePath

`string`

The base storage path (typically globalStorageUri.fsPath)

## Returns

`Promise`\<`null` \| `number`\>

The total size in bytes, or null if calculation fails
