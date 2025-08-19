[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/misc/extract-file-content](../README.md) / extractFileContent

# Function: extractFileContent()

> **extractFileContent**(`absolutePath`, `modelSupportsImages`): `Promise`\<[`FileContentResult`](../type-aliases/FileContentResult.md)\>

Defined in: src/integrations/misc/extract-file-content.ts:16

Extract content from a file, handling both text and images
Extra logic for handling images based on whether the model supports images

## Parameters

### absolutePath

`string`

### modelSupportsImages

`boolean`

## Returns

`Promise`\<[`FileContentResult`](../type-aliases/FileContentResult.md)\>
