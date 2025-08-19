[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/moonshot](../README.md) / MoonshotHandler

# Class: MoonshotHandler

Defined in: src/api/providers/moonshot.ts:15

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new MoonshotHandler**(`options`): `MoonshotHandler`

Defined in: src/api/providers/moonshot.ts:18

#### Parameters

##### options

`MoonshotHandlerOptions`

#### Returns

`MoonshotHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/moonshot.ts:39

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

Defined in: src/api/providers/moonshot.ts:81

#### Returns

`object`

##### id

> **id**: `"kimi-k2-0711-preview"` \| `"kimi-k2-turbo-preview"` \| `"moonshot-v1-128k-vision-preview"` \| `"kimi-thinking-preview"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
