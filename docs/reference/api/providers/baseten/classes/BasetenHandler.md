[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/baseten](../README.md) / BasetenHandler

# Class: BasetenHandler

Defined in: src/api/providers/baseten.ts:17

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new BasetenHandler**(`options`): `BasetenHandler`

Defined in: src/api/providers/baseten.ts:21

#### Parameters

##### options

`BasetenHandlerOptions`

#### Returns

`BasetenHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/baseten.ts:99

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

Defined in: src/api/providers/baseten.ts:55

#### Returns

`object`

##### id

> **id**: `"deepseek-ai/DeepSeek-R1-0528"` \| `"deepseek-ai/DeepSeek-V3-0324"` \| `"meta-llama/Llama-4-Maverick-17B-128E-Instruct"` \| `"meta-llama/Llama-4-Scout-17B-16E-Instruct"` \| `"moonshotai/Kimi-K2-Instruct"` \| `"Qwen/Qwen3-235B-A22B-Instruct-2507"` \| `"Qwen/Qwen3-Coder-480B-A35B-Instruct"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)

***

### supportsImages()

> **supportsImages**(): `boolean`

Defined in: src/api/providers/baseten.ts:152

Checks if the current model supports vision/images

#### Returns

`boolean`

***

### supportsTools()

> **supportsTools**(): `boolean`

Defined in: src/api/providers/baseten.ts:160

Checks if the current model supports tools

#### Returns

`boolean`
