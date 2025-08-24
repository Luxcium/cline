[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/file/searchFiles](../README.md) / searchFiles

# Function: searchFiles()

> **searchFiles**(`_controller`, `request`): `Promise`\<`FileSearchResults`\>

Defined in: src/core/controller/file/searchFiles.ts:13

Searches for files in the workspace with fuzzy matching

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### request

`FileSearchRequest`

The request containing search query and optionally a mentionsRequestId

## Returns

`Promise`\<`FileSearchResults`\>

Results containing matching files/folders
