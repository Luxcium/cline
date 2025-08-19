[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/litellm](../README.md) / LiteLlmHandler

# Class: LiteLlmHandler

Defined in: src/api/providers/litellm.ts:36

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new LiteLlmHandler**(`options`): `LiteLlmHandler`

Defined in: src/api/providers/litellm.ts:43

#### Parameters

##### options

`LiteLlmHandlerOptions`

#### Returns

`LiteLlmHandler`

## Methods

### calculateCost()

> **calculateCost**(`prompt_tokens`, `completion_tokens`, `cache_creation_tokens?`, `cache_read_tokens?`): `Promise`\<`undefined` \| `number`\>

Defined in: src/api/providers/litellm.ts:150

#### Parameters

##### prompt\_tokens

`number`

##### completion\_tokens

`number`

##### cache\_creation\_tokens?

`number`

##### cache\_read\_tokens?

`number`

#### Returns

`Promise`\<`undefined` \| `number`\>

***

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/litellm.ts:177

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

Defined in: src/api/providers/litellm.ts:297

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`LiteLLMModelInfo`](../../../../shared/api/interfaces/LiteLLMModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
