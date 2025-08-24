[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/bedrock](../README.md) / AwsBedrockHandler

# Class: AwsBedrockHandler

Defined in: src/api/providers/bedrock.ts:111

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new AwsBedrockHandler**(`options`): `AwsBedrockHandler`

Defined in: src/api/providers/bedrock.ts:114

#### Parameters

##### options

`AwsBedrockHandlerOptions`

#### Returns

`AwsBedrockHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/bedrock.ts:119

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

Defined in: src/api/providers/bedrock.ts:158

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)

***

### getModelId()

> **getModelId**(): `Promise`\<`string`\>

Defined in: src/api/providers/bedrock.ts:273

Gets the appropriate model ID, accounting for cross-region inference if enabled.
For custom models, returns the raw model ID without any encoding.

#### Returns

`Promise`\<`string`\>
