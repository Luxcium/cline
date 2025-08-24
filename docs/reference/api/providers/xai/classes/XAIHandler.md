[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/xai](../README.md) / XAIHandler

# Class: XAIHandler

Defined in: src/api/providers/xai.ts:23

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new XAIHandler**(`options`): `XAIHandler`

Defined in: src/api/providers/xai.ts:27

#### Parameters

##### options

`XAIHandlerOptions`

#### Returns

`XAIHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/xai.ts:49

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

Defined in: src/api/providers/xai.ts:104

#### Returns

`object`

##### id

> **id**: `"grok-4"` \| `"grok-3-beta"` \| `"grok-3-fast-beta"` \| `"grok-3-mini-beta"` \| `"grok-3-mini-fast-beta"` \| `"grok-3"` \| `"grok-3-fast"` \| `"grok-3-mini"` \| `"grok-3-mini-fast"` \| `"grok-2-latest"` \| `"grok-2"` \| `"grok-2-1212"` \| `"grok-2-vision-latest"` \| `"grok-2-vision"` \| `"grok-2-vision-1212"` \| `"grok-vision-beta"` \| `"grok-beta"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
