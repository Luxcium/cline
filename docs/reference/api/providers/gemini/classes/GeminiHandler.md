[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/gemini](../README.md) / GeminiHandler

# Class: GeminiHandler

Defined in: src/api/providers/gemini.ts:46

Handler for Google's Gemini API with optimized caching strategy and accurate cost accounting.

Key features:
- One cache per task: Creates a single cache per task and reuses it for subsequent turns
- Stable cache keys: Uses ulid as a stable identifier for caches
- Efficient cache updates: Only updates caches when there's new content to add
- Split cost accounting: Separates immediate costs from ongoing cache storage costs

Cost accounting approach:
- Immediate costs (per message): Input tokens, output tokens, and cache read costs
- Ongoing costs (per task): Cache storage costs for the TTL period

Gemini's caching system is unique in that it charges for holding tokens in cache by the hour.
This implementation optimizes for both performance and cost by:
1. Minimizing redundant cache creations
2. Properly accounting for cache costs in the billing calculations
3. Using a stable cache key to ensure cache reuse across turns
4. Separating immediate costs from ongoing costs to avoid double-counting

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new GeminiHandler**(`options`): `GeminiHandler`

Defined in: src/api/providers/gemini.ts:50

#### Parameters

##### options

`GeminiHandlerOptions`

#### Returns

`GeminiHandler`

## Methods

### calculateCost()

> **calculateCost**(`__namedParameters`): `undefined` \| `number`

Defined in: src/api/providers/gemini.ts:287

Calculate the immediate dollar cost of the API call based on token usage and model pricing.

This method accounts for the immediate costs of the API call:
- Input token costs (for uncached tokens)
- Output token costs
- Cache read costs
- Gemini implicit caching has no write costs

#### Parameters

##### \_\_namedParameters

###### cacheReadTokens?

`number` = `0`

###### info

[`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

###### inputTokens

`number`

###### outputTokens

`number`

###### thoughtsTokenCount

`number` = `0`

#### Returns

`undefined` \| `number`

***

### countTokens()

> **countTokens**(`content`): `Promise`\<`number`\>

Defined in: src/api/providers/gemini.ts:370

Count tokens in content using the Gemini API

#### Parameters

##### content

`any`[]

#### Returns

`Promise`\<`number`\>

***

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/gemini.ts:104

Creates a message using the Gemini API with implicit caching.

Cost accounting:
- Immediate costs (returned in the usage object): Input tokens, output tokens, cache read costs

#### Parameters

##### systemPrompt

`string`

The system prompt to use for the message

##### messages

`MessageParam`[]

The conversation history to include in the message

#### Returns

[`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

An async generator that yields chunks of the response with accurate immediate costs

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`createMessage`](../../../interfaces/ApiHandler.md#createmessage)

***

### getModel()

> **getModel**(): `object`

Defined in: src/api/providers/gemini.ts:355

Get the model ID and info for the current configuration

#### Returns

`object`

##### id

> **id**: `"gemini-2.5-pro"` \| `"gemini-2.5-flash-lite-preview-06-17"` \| `"gemini-2.5-flash"` \| `"gemini-2.0-flash-001"` \| `"gemini-2.0-flash-lite-preview-02-05"` \| `"gemini-2.0-pro-exp-02-05"` \| `"gemini-2.0-flash-thinking-exp-01-21"` \| `"gemini-2.0-flash-thinking-exp-1219"` \| `"gemini-2.0-flash-exp"` \| `"gemini-1.5-flash-002"` \| `"gemini-1.5-flash-exp-0827"` \| `"gemini-1.5-flash-8b-exp-0827"` \| `"gemini-1.5-pro-002"` \| `"gemini-1.5-pro-exp-0827"` \| `"gemini-exp-1206"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
