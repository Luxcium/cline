[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/context/context-tracking/ModelContextTracker](../README.md) / ModelContextTracker

# Class: ModelContextTracker

Defined in: src/core/context/context-tracking/ModelContextTracker.ts:4

## Constructors

### Constructor

> **new ModelContextTracker**(`context`, `taskId`): `ModelContextTracker`

Defined in: src/core/context/context-tracking/ModelContextTracker.ts:8

#### Parameters

##### context

`ExtensionContext`

##### taskId

`string`

#### Returns

`ModelContextTracker`

## Properties

### taskId

> `readonly` **taskId**: `string`

Defined in: src/core/context/context-tracking/ModelContextTracker.ts:5

## Methods

### recordModelUsage()

> **recordModelUsage**(`apiProviderId`, `modelId`, `mode`): `Promise`\<`void`\>

Defined in: src/core/context/context-tracking/ModelContextTracker.ts:13

#### Parameters

##### apiProviderId

`string`

##### modelId

`string`

##### mode

`string`

#### Returns

`Promise`\<`void`\>
