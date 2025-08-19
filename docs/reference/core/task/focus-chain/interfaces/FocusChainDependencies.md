[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/task/focus-chain](../README.md) / FocusChainDependencies

# Interface: FocusChainDependencies

Defined in: src/core/task/focus-chain/index.ts:21

## Properties

### cacheService

> **cacheService**: [`CacheService`](../../../storage/CacheService/classes/CacheService.md)

Defined in: src/core/task/focus-chain/index.ts:26

***

### context

> **context**: `ExtensionContext`

Defined in: src/core/task/focus-chain/index.ts:25

***

### focusChainSettings

> **focusChainSettings**: [`FocusChainSettings`](../../../../shared/FocusChainSettings/interfaces/FocusChainSettings.md)

Defined in: src/core/task/focus-chain/index.ts:29

***

### mode

> **mode**: [`Mode`](../../../../shared/storage/types/type-aliases/Mode.md)

Defined in: src/core/task/focus-chain/index.ts:24

***

### postStateToWebview()

> **postStateToWebview**: () => `Promise`\<`void`\>

Defined in: src/core/task/focus-chain/index.ts:27

#### Returns

`Promise`\<`void`\>

***

### say()

> **say**: (`type`, `text?`, `images?`, `files?`, `partial?`) => `Promise`\<`undefined`\>

Defined in: src/core/task/focus-chain/index.ts:28

#### Parameters

##### type

[`ClineSay`](../../../../shared/ExtensionMessage/type-aliases/ClineSay.md)

##### text?

`string`

##### images?

`string`[]

##### files?

`string`[]

##### partial?

`boolean`

#### Returns

`Promise`\<`undefined`\>

***

### taskId

> **taskId**: `string`

Defined in: src/core/task/focus-chain/index.ts:22

***

### taskState

> **taskState**: [`TaskState`](../../TaskState/classes/TaskState.md)

Defined in: src/core/task/focus-chain/index.ts:23
