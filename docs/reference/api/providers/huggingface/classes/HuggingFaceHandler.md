[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/huggingface](../README.md) / HuggingFaceHandler

# Class: HuggingFaceHandler

Defined in: src/api/providers/huggingface.ts:16

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new HuggingFaceHandler**(`options`): `HuggingFaceHandler`

Defined in: src/api/providers/huggingface.ts:21

#### Parameters

##### options

`HuggingFaceHandlerOptions`

#### Returns

`HuggingFaceHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/huggingface.ts:68

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

Defined in: src/api/providers/huggingface.ts:113

#### Returns

`object`

##### id

> **id**: `"deepseek-ai/DeepSeek-R1-0528"` \| `"deepseek-ai/DeepSeek-V3-0324"` \| `"moonshotai/Kimi-K2-Instruct"` \| `"openai/gpt-oss-120b"` \| `"openai/gpt-oss-20b"` \| `"deepseek-ai/DeepSeek-R1"` \| `"meta-llama/Llama-3.1-8B-Instruct"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
