[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/groq](../README.md) / GroqHandler

# Class: GroqHandler

Defined in: src/api/providers/groq.ts:79

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new GroqHandler**(`options`): `GroqHandler`

Defined in: src/api/providers/groq.ts:83

#### Parameters

##### options

`GroqHandlerOptions`

#### Returns

`GroqHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/groq.ts:173

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

Defined in: src/api/providers/groq.ts:255

Gets model information with enhanced family detection

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)

***

### getModelFamily()

> **getModelFamily**(): `GroqModelFamily`

Defined in: src/api/providers/groq.ts:286

Gets model family information for debugging/introspection

#### Returns

`GroqModelFamily`

***

### supportsImages()

> **supportsImages**(): `boolean`

Defined in: src/api/providers/groq.ts:238

Checks if the current model supports vision/images

#### Returns

`boolean`

***

### supportsTools()

> **supportsTools**(): `boolean`

Defined in: src/api/providers/groq.ts:246

Checks if the current model supports tools

#### Returns

`boolean`
