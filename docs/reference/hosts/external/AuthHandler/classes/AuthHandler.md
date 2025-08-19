[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/external/AuthHandler](../README.md) / AuthHandler

# Class: AuthHandler

Defined in: src/hosts/external/AuthHandler.ts:16

Handles OAuth authentication flow by creating a local server to receive tokens.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: src/hosts/external/AuthHandler.ts:206

#### Returns

`void`

***

### getCallbackUri()

> **getCallbackUri**(): `Promise`\<`string`\>

Defined in: src/hosts/external/AuthHandler.ts:42

#### Returns

`Promise`\<`string`\>

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Defined in: src/hosts/external/AuthHandler.ts:38

#### Parameters

##### enabled

`boolean`

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: src/hosts/external/AuthHandler.ts:191

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(): `AuthHandler`

Defined in: src/hosts/external/AuthHandler.ts:31

Gets the singleton instance of AuthHandler

#### Returns

`AuthHandler`

The singleton AuthHandler instance
