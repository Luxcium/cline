[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/cline](../README.md) / ClineHandler

# Class: ClineHandler

Defined in: src/api/providers/cline.ts:27

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new ClineHandler**(`options`): `ClineHandler`

Defined in: src/api/providers/cline.ts:36

#### Parameters

##### options

`ClineHandlerOptions`

#### Returns

`ClineHandler`

## Properties

### lastGenerationId?

> `optional` **lastGenerationId**: `string`

Defined in: src/api/providers/cline.ts:33

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/cline.ts:68

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

### getApiStreamUsage()

> **getApiStreamUsage**(): `Promise`\<`undefined` \| [`ApiStreamUsageChunk`](../../../transform/stream/interfaces/ApiStreamUsageChunk.md)\>

Defined in: src/api/providers/cline.ts:170

#### Returns

`Promise`\<`undefined` \| [`ApiStreamUsageChunk`](../../../transform/stream/interfaces/ApiStreamUsageChunk.md)\>

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getApiStreamUsage`](../../../interfaces/ApiHandler.md#getapistreamusage)

***

### getModel()

> **getModel**(): `object`

Defined in: src/api/providers/cline.ts:204

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
