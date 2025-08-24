[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/openai](../README.md) / OpenAiHandler

# Class: OpenAiHandler

Defined in: src/api/providers/openai.ts:21

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new OpenAiHandler**(`options`): `OpenAiHandler`

Defined in: src/api/providers/openai.ts:25

#### Parameters

##### options

`OpenAiHandlerOptions`

#### Returns

`OpenAiHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/openai.ts:64

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

Defined in: src/api/providers/openai.ts:134

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
