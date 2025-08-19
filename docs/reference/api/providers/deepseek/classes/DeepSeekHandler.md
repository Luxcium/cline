[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/deepseek](../README.md) / DeepSeekHandler

# Class: DeepSeekHandler

Defined in: src/api/providers/deepseek.ts:16

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new DeepSeekHandler**(`options`): `DeepSeekHandler`

Defined in: src/api/providers/deepseek.ts:20

#### Parameters

##### options

`DeepSeekHandlerOptions`

#### Returns

`DeepSeekHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/deepseek.ts:74

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

Defined in: src/api/providers/deepseek.ts:121

#### Returns

`object`

##### id

> **id**: `"deepseek-chat"` \| `"deepseek-reasoner"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
