[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/sapaicore](../README.md) / SapAiCoreHandler

# Class: SapAiCoreHandler

Defined in: src/api/providers/sapaicore.ts:337

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new SapAiCoreHandler**(`options`): `SapAiCoreHandler`

Defined in: src/api/providers/sapaicore.ts:342

#### Parameters

##### options

`SapAiCoreHandlerOptions`

#### Returns

`SapAiCoreHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/sapaicore.ts:430

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

### createUserReadableRequest()

> **createUserReadableRequest**(`userContent`): `any`

Defined in: src/api/providers/sapaicore.ts:897

#### Parameters

##### userContent

(`TextBlockParam` \| `ImageBlockParam` \| `ToolUseBlockParam` \| `ToolResultBlockParam`)[]

#### Returns

`any`

***

### getModel()

> **getModel**(): `object`

Defined in: src/api/providers/sapaicore.ts:912

#### Returns

`object`

##### id

> **id**: `"gemini-2.5-pro"` \| `"gemini-2.5-flash"` \| `"o3"` \| `"o4-mini"` \| `"gpt-4.1"` \| `"gpt-4.1-nano"` \| `"o3-mini"` \| `"o1"` \| `"gpt-4o"` \| `"gpt-4o-mini"` \| `"anthropic--claude-4-sonnet"` \| `"anthropic--claude-4-opus"` \| `"anthropic--claude-3.7-sonnet"` \| `"anthropic--claude-3.5-sonnet"` \| `"anthropic--claude-3-sonnet"` \| `"anthropic--claude-3-haiku"` \| `"anthropic--claude-3-opus"` \| `"gpt-4"` \| `"gpt-5"` \| `"gpt-5-nano"` \| `"gpt-5-mini"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
