[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/misc/extract-images](../README.md) / extractImageContent

# Function: extractImageContent()

> **extractImageContent**(`filePath`): `Promise`\<\{ `imageBlock`: `ImageBlockParam`; `success`: `true`; \} \| \{ `error`: `string`; `success`: `false`; \}\>

Defined in: src/integrations/misc/extract-images.ts:11

Extract image content without VSCode dependencies
Returns success/error result to avoid throwing exceptions

## Parameters

### filePath

`string`

## Returns

`Promise`\<\{ `imageBlock`: `ImageBlockParam`; `success`: `true`; \} \| \{ `error`: `string`; `success`: `false`; \}\>
