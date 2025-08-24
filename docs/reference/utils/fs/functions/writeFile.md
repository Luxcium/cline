[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [utils/fs](../README.md) / writeFile

# Function: writeFile()

> **writeFile**(`filePath`, `content`, `encoding`): `Promise`\<`void`\>

Defined in: src/utils/fs.ts:85

Writes content to a file

## Parameters

### filePath

`string`

Absolute path to the file

### content

Content to write (string or Uint8Array)

`string` | `Uint8Array`

### encoding

`BufferEncoding` = `"utf8"`

Text encoding (default: 'utf8')

## Returns

`Promise`\<`void`\>

A promise that resolves when the file is written
