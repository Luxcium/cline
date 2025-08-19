[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/vertex](../README.md) / VertexHandler

# Class: VertexHandler

Defined in: src/api/providers/vertex.ts:19

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new VertexHandler**(`options`): `VertexHandler`

Defined in: src/api/providers/vertex.ts:24

#### Parameters

##### options

`VertexHandlerOptions`

#### Returns

`VertexHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/vertex.ts:66

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

Defined in: src/api/providers/vertex.ts:267

#### Returns

`object`

##### id

> **id**: `"gemini-2.5-pro"` \| `"gemini-2.5-flash-lite-preview-06-17"` \| `"gemini-2.5-flash"` \| `"gemini-2.0-flash-001"` \| `"gemini-2.0-flash-thinking-exp-01-21"` \| `"gemini-2.0-flash-thinking-exp-1219"` \| `"gemini-2.0-flash-exp"` \| `"gemini-1.5-flash-002"` \| `"gemini-1.5-flash-exp-0827"` \| `"gemini-1.5-flash-8b-exp-0827"` \| `"gemini-1.5-pro-002"` \| `"gemini-1.5-pro-exp-0827"` \| `"gemini-exp-1206"` \| `"mistral-large-2411"` \| `"codestral-2501"` \| `"claude-sonnet-4@20250514"` \| `"claude-opus-4-1@20250805"` \| `"claude-opus-4@20250514"` \| `"claude-3-7-sonnet@20250219"` \| `"claude-3-5-sonnet-v2@20241022"` \| `"claude-3-5-sonnet@20240620"` \| `"claude-3-5-haiku@20241022"` \| `"claude-3-opus@20240229"` \| `"claude-3-haiku@20240307"` \| `"mistral-small-2503"` \| `"llama-4-maverick-17b-128e-instruct-maas"` \| `"llama-4-scout-17b-16e-instruct-maas"` \| `"gemini-2.0-flash-lite-001"` \| `"gemini-2.5-pro-exp-03-25"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
