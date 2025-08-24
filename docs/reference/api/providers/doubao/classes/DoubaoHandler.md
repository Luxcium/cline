[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/doubao](../README.md) / DoubaoHandler

# Class: DoubaoHandler

Defined in: src/api/providers/doubao.ts:14

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new DoubaoHandler**(`options`): `DoubaoHandler`

Defined in: src/api/providers/doubao.ts:17

#### Parameters

##### options

`DoubaoHandlerOptions`

#### Returns

`DoubaoHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/doubao.ts:51

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

Defined in: src/api/providers/doubao.ts:38

#### Returns

`object`

##### id

> **id**: `"doubao-1-5-pro-256k-250115"` \| `"doubao-1-5-pro-32k-250115"` \| `"deepseek-v3-250324"` \| `"deepseek-r1-250120"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
