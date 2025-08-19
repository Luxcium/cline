[**claude-dev**](../../README.md)

***

[claude-dev](../../README.md) / [api](../README.md) / ApiHandler

# Interface: ApiHandler

Defined in: src/api/index.ts:37

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/index.ts:38

#### Parameters

##### systemPrompt

`string`

##### messages

`MessageParam`[]

#### Returns

[`ApiStream`](../transform/stream/type-aliases/ApiStream.md)

***

### getApiStreamUsage()?

> `optional` **getApiStreamUsage**(): `Promise`\<`undefined` \| [`ApiStreamUsageChunk`](../transform/stream/interfaces/ApiStreamUsageChunk.md)\>

Defined in: src/api/index.ts:40

#### Returns

`Promise`\<`undefined` \| [`ApiStreamUsageChunk`](../transform/stream/interfaces/ApiStreamUsageChunk.md)\>

***

### getModel()

> **getModel**(): [`ApiHandlerModel`](ApiHandlerModel.md)

Defined in: src/api/index.ts:39

#### Returns

[`ApiHandlerModel`](ApiHandlerModel.md)
