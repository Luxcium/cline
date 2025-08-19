[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/nebius](../README.md) / NebiusHandler

# Class: NebiusHandler

Defined in: src/api/providers/nebius.ts:15

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new NebiusHandler**(`options`): `NebiusHandler`

Defined in: src/api/providers/nebius.ts:18

#### Parameters

##### options

`NebiusHandlerOptions`

#### Returns

`NebiusHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/nebius.ts:38

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

Defined in: src/api/providers/nebius.ts:79

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
