[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/mistral](../README.md) / MistralHandler

# Class: MistralHandler

Defined in: src/api/providers/mistral.ts:14

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new MistralHandler**(`options`): `MistralHandler`

Defined in: src/api/providers/mistral.ts:18

#### Parameters

##### options

`MistralHandlerOptions`

#### Returns

`MistralHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/mistral.ts:39

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

Defined in: src/api/providers/mistral.ts:84

#### Returns

`object`

##### id

> **id**: `"mistral-large-2411"` \| `"pixtral-large-2411"` \| `"ministral-3b-2410"` \| `"ministral-8b-2410"` \| `"mistral-small-latest"` \| `"mistral-medium-latest"` \| `"mistral-small-2501"` \| `"pixtral-12b-2409"` \| `"open-mistral-nemo-2407"` \| `"open-codestral-mamba"` \| `"codestral-2501"` \| `"devstral-small-2505"` \| `"devstral-medium-latest"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
