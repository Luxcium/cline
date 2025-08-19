[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/gemini-mock.test](../README.md) / GoogleGenAI

# Class: GoogleGenAI

Defined in: src/api/providers/gemini-mock.test.ts:3

## Constructors

### Constructor

> **new GoogleGenAI**(`options`): `GoogleGenAI`

Defined in: src/api/providers/gemini-mock.test.ts:4

#### Parameters

##### options

`any`

#### Returns

`GoogleGenAI`

## Properties

### models

> **models**: `object`

Defined in: src/api/providers/gemini-mock.test.ts:8

#### countTokens()

> **countTokens**: (`params`) => `Promise`\<\{ `totalTokens`: `number`; \}\>

##### Parameters

###### params

`any`

##### Returns

`Promise`\<\{ `totalTokens`: `number`; \}\>

#### generateContentStream()

> **generateContentStream**: (`params`) => `Promise`\<\{ `[asyncIterator]`: `AsyncGenerator`\<\{ `candidates`: `never`[]; `text`: `string`; `usageMetadata`: \{ `cachedContentTokenCount`: `number`; `candidatesTokenCount`: `number`; `promptTokenCount`: `number`; `thoughtsTokenCount`: `number`; \}; \}, `void`, `unknown`\>; \}\>

##### Parameters

###### params

`any`

##### Returns

`Promise`\<\{ `[asyncIterator]`: `AsyncGenerator`\<\{ `candidates`: `never`[]; `text`: `string`; `usageMetadata`: \{ `cachedContentTokenCount`: `number`; `candidatesTokenCount`: `number`; `promptTokenCount`: `number`; `thoughtsTokenCount`: `number`; \}; \}, `void`, `unknown`\>; \}\>
