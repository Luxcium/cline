[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/asksage](../README.md) / AskSageHandler

# Class: AskSageHandler

Defined in: src/api/providers/asksage.ts:32

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new AskSageHandler**(`options`): `AskSageHandler`

Defined in: src/api/providers/asksage.ts:37

#### Parameters

##### options

`AskSageHandlerOptions`

#### Returns

`AskSageHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/asksage.ts:49

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

Defined in: src/api/providers/asksage.ts:105

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
