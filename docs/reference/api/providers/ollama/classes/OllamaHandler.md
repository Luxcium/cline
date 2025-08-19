[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/ollama](../README.md) / OllamaHandler

# Class: OllamaHandler

Defined in: src/api/providers/ollama.ts:17

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new OllamaHandler**(`options`): `OllamaHandler`

Defined in: src/api/providers/ollama.ts:21

#### Parameters

##### options

`OllamaHandlerOptions`

#### Returns

`OllamaHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/ollama.ts:48

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

Defined in: src/api/providers/ollama.ts:110

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
