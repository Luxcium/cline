[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/api](../README.md) / OpenAiCompatibleModelInfo

# Interface: OpenAiCompatibleModelInfo

Defined in: src/shared/api.ts:199

## Extends

- [`ModelInfo`](ModelInfo.md)

## Properties

### cacheReadsPrice?

> `optional` **cacheReadsPrice**: `number`

Defined in: src/shared/api.ts:188

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`cacheReadsPrice`](ModelInfo.md#cachereadsprice)

***

### cacheWritesPrice?

> `optional` **cacheWritesPrice**: `number`

Defined in: src/shared/api.ts:187

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`cacheWritesPrice`](ModelInfo.md#cachewritesprice)

***

### contextWindow?

> `optional` **contextWindow**: `number`

Defined in: src/shared/api.ts:176

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`contextWindow`](ModelInfo.md#contextwindow)

***

### description?

> `optional` **description**: `string`

Defined in: src/shared/api.ts:189

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`description`](ModelInfo.md#description)

***

### inputPrice?

> `optional` **inputPrice**: `number`

Defined in: src/shared/api.ts:179

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`inputPrice`](ModelInfo.md#inputprice)

***

### isR1FormatRequired?

> `optional` **isR1FormatRequired**: `boolean`

Defined in: src/shared/api.ts:201

***

### maxTokens?

> `optional` **maxTokens**: `number`

Defined in: src/shared/api.ts:175

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`maxTokens`](ModelInfo.md#maxtokens)

***

### outputPrice?

> `optional` **outputPrice**: `number`

Defined in: src/shared/api.ts:180

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`outputPrice`](ModelInfo.md#outputprice)

***

### supportsGlobalEndpoint?

> `optional` **supportsGlobalEndpoint**: `boolean`

Defined in: src/shared/api.ts:186

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`supportsGlobalEndpoint`](ModelInfo.md#supportsglobalendpoint)

***

### supportsImages?

> `optional` **supportsImages**: `boolean`

Defined in: src/shared/api.ts:177

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`supportsImages`](ModelInfo.md#supportsimages)

***

### supportsPromptCache

> **supportsPromptCache**: `boolean`

Defined in: src/shared/api.ts:178

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`supportsPromptCache`](ModelInfo.md#supportspromptcache)

***

### temperature?

> `optional` **temperature**: `number`

Defined in: src/shared/api.ts:200

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

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`thinkingConfig`](ModelInfo.md#thinkingconfig)

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

#### Inherited from

[`ModelInfo`](ModelInfo.md).[`tiers`](ModelInfo.md#tiers)
