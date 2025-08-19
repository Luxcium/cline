[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [services/auth/providers/FirebaseAuthProvider](../README.md) / FirebaseAuthProvider

# Class: FirebaseAuthProvider

Defined in: src/services/auth/providers/FirebaseAuthProvider.ts:11

## Constructors

### Constructor

> **new FirebaseAuthProvider**(`config`): `FirebaseAuthProvider`

Defined in: src/services/auth/providers/FirebaseAuthProvider.ts:14

#### Parameters

##### config

`any`

#### Returns

`FirebaseAuthProvider`

## Accessors

### config

#### Get Signature

> **get** **config**(): `any`

Defined in: src/services/auth/providers/FirebaseAuthProvider.ts:18

##### Returns

`any`

#### Set Signature

> **set** **config**(`value`): `void`

Defined in: src/services/auth/providers/FirebaseAuthProvider.ts:22

##### Parameters

###### value

`any`

##### Returns

`void`

## Methods

### retrieveClineAuthInfo()

> **retrieveClineAuthInfo**(`controller`): `Promise`\<`null` \| [`ClineAuthInfo`](../../../AuthService/interfaces/ClineAuthInfo.md)\>

Defined in: src/services/auth/providers/FirebaseAuthProvider.ts:44

Restores the authentication token using a provided token.

#### Parameters

##### controller

[`Controller`](../../../../../core/controller/classes/Controller.md)

#### Returns

`Promise`\<`null` \| [`ClineAuthInfo`](../../../AuthService/interfaces/ClineAuthInfo.md)\>

A promise that resolves with the authenticated user.

#### Throws

Throws an error if the restoration fails.

***

### shouldRefreshIdToken()

> **shouldRefreshIdToken**(`existingIdToken`): `Promise`\<`boolean`\>

Defined in: src/services/auth/providers/FirebaseAuthProvider.ts:26

#### Parameters

##### existingIdToken

`string`

#### Returns

`Promise`\<`boolean`\>

***

### signIn()

> **signIn**(`controller`, `token`, `provider`): `Promise`\<`null` \| [`ClineAuthInfo`](../../../AuthService/interfaces/ClineAuthInfo.md)\>

Defined in: src/services/auth/providers/FirebaseAuthProvider.ts:103

Signs in the user using Firebase authentication with a custom token.

#### Parameters

##### controller

[`Controller`](../../../../../core/controller/classes/Controller.md)

##### token

`string`

##### provider

`string`

#### Returns

`Promise`\<`null` \| [`ClineAuthInfo`](../../../AuthService/interfaces/ClineAuthInfo.md)\>

A promise that resolves with the authenticated user.

#### Throws

Throws an error if the sign-in fails.
