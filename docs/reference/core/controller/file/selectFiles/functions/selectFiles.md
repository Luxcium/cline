[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/file/selectFiles](../README.md) / selectFiles

# Function: selectFiles()

> **selectFiles**(`_controller`, `request`): `Promise`\<`StringArrays`\>

Defined in: src/core/controller/file/selectFiles.ts:11

Prompts the user to select images from the file system and returns them as data URLs

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### request

`BooleanRequest`

Boolean request, with the value defining whether this model supports images

## Returns

`Promise`\<`StringArrays`\>

Two arrays of image data URLs and other file paths
