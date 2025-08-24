[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/api](../README.md) / ModelInfo

# Interface: ModelInfo

Defined in: src/shared/api.ts:174

## Extended by

- [`OpenAiCompatibleModelInfo`](OpenAiCompatibleModelInfo.md)
- [`LiteLLMModelInfo`](LiteLLMModelInfo.md)

## Properties

### cacheReadsPrice?

> `optional` **cacheReadsPrice**: `number`

Defined in: src/shared/api.ts:188

***

### cacheWritesPrice?

> `optional` **cacheWritesPrice**: `number`

Defined in: src/shared/api.ts:187

***

### contextWindow?

> `optional` **contextWindow**: `number`

Defined in: src/shared/api.ts:176

***

### description?

> `optional` **description**: `string`

Defined in: src/shared/api.ts:189

***

### inputPrice?

> `optional` **inputPrice**: `number`

Defined in: src/shared/api.ts:179

***

### maxTokens?

> `optional` **maxTokens**: `number`

Defined in: src/shared/api.ts:175

***

### outputPrice?

> `optional` **outputPrice**: `number`

Defined in: src/shared/api.ts:180

***

### supportsGlobalEndpoint?

> `optional` **supportsGlobalEndpoint**: `boolean`

Defined in: src/shared/api.ts:186

***

### supportsImages?

> `optional` **supportsImages**: `boolean`

Defined in: src/shared/api.ts:177

***

### supportsPromptCache

> **supportsPromptCache**: `boolean`

Defined in: src/shared/api.ts:178

***

### thinkingConfig?

> `optional` **thinkingConfig**: `object`

Defined in: src/shared/api.ts:181

#### maxBudget?

> `optional` **maxBudget**: `number`

#### outputPrice?

> `optional` **outputPrice**: `number`

#### outputPriceTiers?

> `optional` **outputPriceTiers**: `PriceTier`[]

***

### tiers?

> `optional` **tiers**: `object`[]

Defined in: src/shared/api.ts:190

#### cacheReadsPrice?

> `optional` **cacheReadsPrice**: `number`

#### cacheWritesPrice?

> `optional` **cacheWritesPrice**: `number`

#### contextWindow

> **contextWindow**: `number`

#### inputPrice?

> `optional` **inputPrice**: `number`

#### outputPrice?

> `optional` **outputPrice**: `number`
