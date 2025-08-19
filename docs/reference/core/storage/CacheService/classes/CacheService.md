[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/storage/CacheService](../README.md) / CacheService

# Class: CacheService

Defined in: src/core/storage/CacheService.ts:20

In-memory cache service for fast state access
Provides immediate reads/writes with async disk persistence

## Constructors

### Constructor

> **new CacheService**(`context`): `CacheService`

Defined in: src/core/storage/CacheService.ts:37

#### Parameters

##### context

`ExtensionContext`

#### Returns

`CacheService`

## Properties

### onPersistenceError()?

> `optional` **onPersistenceError**: (`event`) => `void`

Defined in: src/core/storage/CacheService.ts:35

#### Parameters

##### event

[`PersistenceErrorEvent`](../interfaces/PersistenceErrorEvent.md)

#### Returns

`void`

## Methods

### getApiConfiguration()

> **getApiConfiguration**(): [`ApiConfiguration`](../../../../shared/api/type-aliases/ApiConfiguration.md)

Defined in: src/core/storage/CacheService.ts:171

Convenience method for getting API configuration
Ensures cache is initialized if not already done

#### Returns

[`ApiConfiguration`](../../../../shared/api/type-aliases/ApiConfiguration.md)

***

### getGlobalStateKey()

> **getGlobalStateKey**\<`K`\>(`key`): [`GlobalState`](../../state-keys/interfaces/GlobalState.md)\[`K`\]

Defined in: src/core/storage/CacheService.ts:448

Get method for global state keys - reads from in-memory cache

#### Type Parameters

##### K

`K` *extends* keyof [`GlobalState`](../../state-keys/interfaces/GlobalState.md)

#### Parameters

##### key

`K`

#### Returns

[`GlobalState`](../../state-keys/interfaces/GlobalState.md)\[`K`\]

***

### getSecretKey()

> **getSecretKey**\<`K`\>(`key`): [`Secrets`](../../state-keys/interfaces/Secrets.md)\[`K`\]

Defined in: src/core/storage/CacheService.ts:458

Get method for secret keys - reads from in-memory cache

#### Type Parameters

##### K

`K` *extends* keyof [`Secrets`](../../state-keys/interfaces/Secrets.md)

#### Parameters

##### key

`K`

#### Returns

[`Secrets`](../../state-keys/interfaces/Secrets.md)\[`K`\]

***

### getWorkspaceStateKey()

> **getWorkspaceStateKey**\<`K`\>(`key`): [`LocalState`](../../state-keys/interfaces/LocalState.md)\[`K`\]

Defined in: src/core/storage/CacheService.ts:468

Get method for workspace state keys - reads from in-memory cache

#### Type Parameters

##### K

`K` *extends* keyof [`LocalState`](../../state-keys/interfaces/LocalState.md)

#### Parameters

##### key

`K`

#### Returns

[`LocalState`](../../state-keys/interfaces/LocalState.md)\[`K`\]

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: src/core/storage/CacheService.ts:44

Initialize the cache by loading data from disk

#### Returns

`Promise`\<`void`\>

***

### reInitialize()

> **reInitialize**(): `Promise`\<`void`\>

Defined in: src/core/storage/CacheService.ts:479

Reinitialize the cache service by clearing all state and reloading from disk
Used for error recovery when write operations fail

#### Returns

`Promise`\<`void`\>

***

### setApiConfiguration()

> **setApiConfiguration**(`apiConfiguration`): `void`

Defined in: src/core/storage/CacheService.ts:183

Convenience method for setting API configuration

#### Parameters

##### apiConfiguration

[`ApiConfiguration`](../../../../shared/api/type-aliases/ApiConfiguration.md)

#### Returns

`void`

***

### setGlobalState()

> **setGlobalState**\<`K`\>(`key`, `value`): `void`

Defined in: src/core/storage/CacheService.ts:65

Set method for global state keys - updates cache immediately and schedules debounced persistence

#### Type Parameters

##### K

`K` *extends* keyof [`GlobalState`](../../state-keys/interfaces/GlobalState.md)

#### Parameters

##### key

`K`

##### value

[`GlobalState`](../../state-keys/interfaces/GlobalState.md)\[`K`\]

#### Returns

`void`

***

### setGlobalStateBatch()

> **setGlobalStateBatch**(`updates`): `void`

Defined in: src/core/storage/CacheService.ts:81

Batch set method for global state keys - updates cache immediately and schedules debounced persistence

#### Parameters

##### updates

`Partial`\<[`GlobalState`](../../state-keys/interfaces/GlobalState.md)\>

#### Returns

`void`

***

### setSecret()

> **setSecret**\<`K`\>(`key`, `value`): `void`

Defined in: src/core/storage/CacheService.ts:102

Set method for secret keys - updates cache immediately and schedules debounced persistence

#### Type Parameters

##### K

`K` *extends* keyof [`Secrets`](../../state-keys/interfaces/Secrets.md)

#### Parameters

##### key

`K`

##### value

[`Secrets`](../../state-keys/interfaces/Secrets.md)\[`K`\]

#### Returns

`void`

***

### setSecretsBatch()

> **setSecretsBatch**(`updates`): `void`

Defined in: src/core/storage/CacheService.ts:118

Batch set method for secret keys - updates cache immediately and schedules debounced persistence

#### Parameters

##### updates

`Partial`\<[`Secrets`](../../state-keys/interfaces/Secrets.md)\>

#### Returns

`void`

***

### setWorkspaceState()

> **setWorkspaceState**\<`K`\>(`key`, `value`): `void`

Defined in: src/core/storage/CacheService.ts:136

Set method for workspace state keys - updates cache immediately and schedules debounced persistence

#### Type Parameters

##### K

`K` *extends* keyof [`LocalState`](../../state-keys/interfaces/LocalState.md)

#### Parameters

##### key

`K`

##### value

[`LocalState`](../../state-keys/interfaces/LocalState.md)\[`K`\]

#### Returns

`void`

***

### setWorkspaceStateBatch()

> **setWorkspaceStateBatch**(`updates`): `void`

Defined in: src/core/storage/CacheService.ts:152

Batch set method for workspace state keys - updates cache immediately and schedules debounced persistence

#### Parameters

##### updates

`Partial`\<[`LocalState`](../../state-keys/interfaces/LocalState.md)\>

#### Returns

`void`
