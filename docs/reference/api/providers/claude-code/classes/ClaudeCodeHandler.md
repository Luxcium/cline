[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/claude-code](../README.md) / ClaudeCodeHandler

# Class: ClaudeCodeHandler

Defined in: src/api/providers/claude-code.ts:15

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new ClaudeCodeHandler**(`options`): `ClaudeCodeHandler`

Defined in: src/api/providers/claude-code.ts:18

#### Parameters

##### options

`ClaudeCodeHandlerOptions`

#### Returns

`ClaudeCodeHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/claude-code.ts:27

#### Parameters

##### systemPrompt

`string`

##### messages

`MessageParam`[]

#### Returns

[`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`createMessage`](../../../interfaces/ApiHandler.md#createmessage)

***

### getModel()

> **getModel**(): `object`

Defined in: src/api/providers/claude-code.ts:145

#### Returns

`object`

##### id

> **id**: `"claude-sonnet-4-20250514"` \| `"claude-opus-4-1-20250805"` \| `"claude-opus-4-20250514"` \| `"claude-3-7-sonnet-20250219"` \| `"claude-3-5-sonnet-20241022"` \| `"claude-3-5-haiku-20241022"`

##### info

> **info**: \{ `cacheReadsPrice`: `0.3`; `cacheWritesPrice`: `3.75`; `contextWindow`: `200000`; `inputPrice`: `3`; `maxTokens`: `8192`; `outputPrice`: `15`; `supportsImages`: `false`; `supportsPromptCache`: `false`; \} \| \{ `cacheReadsPrice`: `1.5`; `cacheWritesPrice`: `18.75`; `contextWindow`: `200000`; `inputPrice`: `15`; `maxTokens`: `8192`; `outputPrice`: `75`; `supportsImages`: `false`; `supportsPromptCache`: `false`; \} \| \{ `cacheReadsPrice`: `1.5`; `cacheWritesPrice`: `18.75`; `contextWindow`: `200000`; `inputPrice`: `15`; `maxTokens`: `8192`; `outputPrice`: `75`; `supportsImages`: `false`; `supportsPromptCache`: `false`; \} \| \{ `cacheReadsPrice`: `0.3`; `cacheWritesPrice`: `3.75`; `contextWindow`: `200000`; `inputPrice`: `3`; `maxTokens`: `8192`; `outputPrice`: `15`; `supportsImages`: `false`; `supportsPromptCache`: `false`; \} \| \{ `cacheReadsPrice`: `0.3`; `cacheWritesPrice`: `3.75`; `contextWindow`: `200000`; `inputPrice`: `3`; `maxTokens`: `8192`; `outputPrice`: `15`; `supportsImages`: `false`; `supportsPromptCache`: `false`; \} \| \{ `cacheReadsPrice`: `0.08`; `cacheWritesPrice`: `1`; `contextWindow`: `200000`; `inputPrice`: `0.8`; `maxTokens`: `8192`; `outputPrice`: `4`; `supportsImages`: `false`; `supportsPromptCache`: `false`; \}

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
