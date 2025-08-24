[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/cerebras](../README.md) / CerebrasHandler

# Class: CerebrasHandler

Defined in: src/api/providers/cerebras.ts:13

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new CerebrasHandler**(`options`): `CerebrasHandler`

Defined in: src/api/providers/cerebras.ts:17

#### Parameters

##### options

`CerebrasHandlerOptions`

#### Returns

`CerebrasHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/cerebras.ts:47

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

Defined in: src/api/providers/cerebras.ts:200

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
