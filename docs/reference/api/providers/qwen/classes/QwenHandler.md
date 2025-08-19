[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/qwen](../README.md) / QwenHandler

# Class: QwenHandler

Defined in: src/api/providers/qwen.ts:26

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new QwenHandler**(`options`): `QwenHandler`

Defined in: src/api/providers/qwen.ts:30

#### Parameters

##### options

`QwenHandlerOptions`

#### Returns

`QwenHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/qwen.ts:80

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

Defined in: src/api/providers/qwen.ts:61

#### Returns

`object`

##### id

> **id**: `"qwen3-235b-a22b"` \| `"qwen3-32b"` \| `"qwen3-30b-a3b"` \| `"qwen3-14b"` \| `"qwen3-8b"` \| `"qwen3-4b"` \| `"qwen3-1.7b"` \| `"qwen3-0.6b"` \| `"qwen2.5-coder-32b-instruct"` \| `"qwen2.5-coder-14b-instruct"` \| `"qwen2.5-coder-7b-instruct"` \| `"qwen2.5-coder-3b-instruct"` \| `"qwen2.5-coder-1.5b-instruct"` \| `"qwen2.5-coder-0.5b-instruct"` \| `"qwen-coder-plus-latest"` \| `"qwen-plus-latest"` \| `"qwen-turbo-latest"` \| `"qwen-max-latest"` \| `"qwq-plus-latest"` \| `"qwq-plus"` \| `"qwen-coder-plus"` \| `"qwen-plus"` \| `"qwen-turbo"` \| `"qwen-max"` \| `"deepseek-v3"` \| `"deepseek-r1"` \| `"qwen-vl-max"` \| `"qwen-vl-max-latest"` \| `"qwen-vl-plus"` \| `"qwen-vl-plus-latest"` \| `"qwen3-coder-plus"` \| `"qwen3-coder-480b-a35b-instruct"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
