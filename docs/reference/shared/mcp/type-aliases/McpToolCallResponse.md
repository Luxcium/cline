[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/mcp](../README.md) / McpToolCallResponse

# Type Alias: McpToolCallResponse

> **McpToolCallResponse** = `object`

Defined in: src/shared/mcp.ts:48

## Properties

### \_meta?

> `optional` **\_meta**: `Record`\<`string`, `any`\>

Defined in: src/shared/mcp.ts:49

***

### content

> **content**: (\{ `text`: `string`; `type`: `"text"`; \} \| \{ `data`: `string`; `mimeType`: `string`; `type`: `"image"`; \} \| \{ `data`: `string`; `mimeType`: `string`; `type`: `"audio"`; \} \| \{ `resource`: \{ `blob?`: `string`; `mimeType?`: `string`; `text?`: `string`; `uri`: `string`; \}; `type`: `"resource"`; \})[]

Defined in: src/shared/mcp.ts:50

***

### isError?

> `optional` **isError**: `boolean`

Defined in: src/shared/mcp.ts:75
