[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/openai-native](../README.md) / OpenAiNativeHandler

# Class: OpenAiNativeHandler

Defined in: src/api/providers/openai-native.ts:17

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new OpenAiNativeHandler**(`options`): `OpenAiNativeHandler`

Defined in: src/api/providers/openai-native.ts:21

#### Parameters

##### options

`OpenAiNativeHandlerOptions`

#### Returns

`OpenAiNativeHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/openai-native.ts:59

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

Defined in: src/api/providers/openai-native.ts:160

#### Returns

`object`

##### id

> **id**: `"gpt-5-2025-08-07"` \| `"gpt-5-mini-2025-08-07"` \| `"gpt-5-nano-2025-08-07"` \| `"gpt-5-chat-latest"` \| `"o3"` \| `"o4-mini"` \| `"gpt-4.1"` \| `"gpt-4.1-mini"` \| `"gpt-4.1-nano"` \| `"o3-mini"` \| `"o1"` \| `"o1-preview"` \| `"o1-mini"` \| `"gpt-4o"` \| `"gpt-4o-mini"` \| `"chatgpt-4o-latest"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
