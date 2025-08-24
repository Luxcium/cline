[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/lmstudio](../README.md) / LmStudioHandler

# Class: LmStudioHandler

Defined in: src/api/providers/lmstudio.ts:14

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new LmStudioHandler**(`options`): `LmStudioHandler`

Defined in: src/api/providers/lmstudio.ts:18

#### Parameters

##### options

`LmStudioHandlerOptions`

#### Returns

`LmStudioHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/lmstudio.ts:37

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

Defined in: src/api/providers/lmstudio.ts:73

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
