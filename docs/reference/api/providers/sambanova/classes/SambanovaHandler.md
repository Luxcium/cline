[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/sambanova](../README.md) / SambanovaHandler

# Class: SambanovaHandler

Defined in: src/api/providers/sambanova.ts:15

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new SambanovaHandler**(`options`): `SambanovaHandler`

Defined in: src/api/providers/sambanova.ts:19

#### Parameters

##### options

`SambanovaHandlerOptions`

#### Returns

`SambanovaHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/sambanova.ts:41

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

Defined in: src/api/providers/sambanova.ts:83

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
