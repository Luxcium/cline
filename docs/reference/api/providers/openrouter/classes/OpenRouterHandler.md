[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/openrouter](../README.md) / OpenRouterHandler

# Class: OpenRouterHandler

Defined in: src/api/providers/openrouter.ts:31

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new OpenRouterHandler**(`options`): `OpenRouterHandler`

Defined in: src/api/providers/openrouter.ts:36

#### Parameters

##### options

`OpenRouterHandlerOptions`

#### Returns

`OpenRouterHandler`

## Properties

### lastGenerationId?

> `optional` **lastGenerationId**: `string`

Defined in: src/api/providers/openrouter.ts:34

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/openrouter.ts:62

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

### fetchGenerationDetails()

> **fetchGenerationDetails**(`genId`): `AsyncGenerator`\<`any`, `void`, `unknown`\>

Defined in: src/api/providers/openrouter.ts:182

#### Parameters

##### genId

`string`

#### Returns

`AsyncGenerator`\<`any`, `void`, `unknown`\>

***

### getApiStreamUsage()

> **getApiStreamUsage**(): `Promise`\<`undefined` \| [`ApiStreamUsageChunk`](../../../transform/stream/interfaces/ApiStreamUsageChunk.md)\>

Defined in: src/api/providers/openrouter.ts:157

#### Returns

`Promise`\<`undefined` \| [`ApiStreamUsageChunk`](../../../transform/stream/interfaces/ApiStreamUsageChunk.md)\>

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getApiStreamUsage`](../../../interfaces/ApiHandler.md#getapistreamusage)

***

### getModel()

> **getModel**(): `object`

Defined in: src/api/providers/openrouter.ts:199

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
