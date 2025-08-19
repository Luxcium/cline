[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/requesty](../README.md) / RequestyHandler

# Class: RequestyHandler

Defined in: src/api/providers/requesty.ts:29

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new RequestyHandler**(`options`): `RequestyHandler`

Defined in: src/api/providers/requesty.ts:33

#### Parameters

##### options

`RequestyHandlerOptions`

#### Returns

`RequestyHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/requesty.ts:59

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

Defined in: src/api/providers/requesty.ts:139

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
