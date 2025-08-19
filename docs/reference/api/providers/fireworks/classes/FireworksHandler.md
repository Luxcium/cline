[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/fireworks](../README.md) / FireworksHandler

# Class: FireworksHandler

Defined in: src/api/providers/fireworks.ts:16

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new FireworksHandler**(`options`): `FireworksHandler`

Defined in: src/api/providers/fireworks.ts:20

#### Parameters

##### options

`FireworksHandlerOptions`

#### Returns

`FireworksHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/fireworks.ts:42

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

Defined in: src/api/providers/fireworks.ts:102

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
