[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/anthropic](../README.md) / AnthropicHandler

# Class: AnthropicHandler

Defined in: src/api/providers/anthropic.ts:15

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new AnthropicHandler**(`options`): `AnthropicHandler`

Defined in: src/api/providers/anthropic.ts:19

#### Parameters

##### options

`AnthropicHandlerOptions`

#### Returns

`AnthropicHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/anthropic.ts:41

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

Defined in: src/api/providers/anthropic.ts:235

#### Returns

`object`

##### id

> **id**: `"claude-sonnet-4-20250514:1m"` \| `"claude-sonnet-4-20250514"` \| `"claude-opus-4-1-20250805"` \| `"claude-opus-4-20250514"` \| `"claude-3-7-sonnet-20250219"` \| `"claude-3-5-sonnet-20241022"` \| `"claude-3-5-haiku-20241022"` \| `"claude-3-opus-20240229"` \| `"claude-3-haiku-20240307"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
