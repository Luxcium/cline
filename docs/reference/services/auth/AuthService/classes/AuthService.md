[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/auth/AuthService](../README.md) / AuthService

# Class: AuthService

Defined in: src/services/auth/AuthService.ts:52

## Extended by

- [`AuthServiceMock`](../../AuthServiceMock/classes/AuthServiceMock.md)

## Constructors

### Constructor

> `protected` **new AuthService**(`controller`): `AuthService`

Defined in: src/services/auth/AuthService.ts:65

Creates an instance of AuthService.

#### Parameters

##### controller

[`Controller`](../../../../core/controller/classes/Controller.md)

Optional reference to the Controller instance.

#### Returns

`AuthService`

## Properties

### \_activeAuthStatusUpdateSubscriptions

> `protected` **\_activeAuthStatusUpdateSubscriptions**: `Set`\<\[[`Controller`](../../../../core/controller/classes/Controller.md), [`StreamingResponseHandler`](../../../../core/controller/grpc-handler/type-aliases/StreamingResponseHandler.md)\<`AuthState`\>\]\>

Defined in: src/services/auth/AuthService.ts:58

***

### \_authenticated

> `protected` **\_authenticated**: `boolean` = `false`

Defined in: src/services/auth/AuthService.ts:55

***

### \_clineAuthInfo

> `protected` **\_clineAuthInfo**: `null` \| [`ClineAuthInfo`](../interfaces/ClineAuthInfo.md) = `null`

Defined in: src/services/auth/AuthService.ts:56

***

### \_config

> `protected` **\_config**: [`ServiceConfig`](../type-aliases/ServiceConfig.md)

Defined in: src/services/auth/AuthService.ts:54

***

### \_controller

> `protected` **\_controller**: [`Controller`](../../../../core/controller/classes/Controller.md)

Defined in: src/services/auth/AuthService.ts:59

***

### \_provider

> `protected` **\_provider**: `null` \| \{ `provider`: [`FirebaseAuthProvider`](../../providers/FirebaseAuthProvider/classes/FirebaseAuthProvider.md); \} = `null`

Defined in: src/services/auth/AuthService.ts:57

***

### instance

> `protected` `static` **instance**: `null` \| `AuthService` = `null`

Defined in: src/services/auth/AuthService.ts:53

## Accessors

### authProvider

#### Get Signature

> **get** **authProvider**(): `any`

Defined in: src/services/auth/AuthService.ts:129

##### Returns

`any`

#### Set Signature

> **set** **authProvider**(`providerName`): `void`

Defined in: src/services/auth/AuthService.ts:133

##### Parameters

###### providerName

`string`

##### Returns

`void`

***

### controller

#### Set Signature

> **set** **controller**(`controller`): `void`

Defined in: src/services/auth/AuthService.ts:125

##### Parameters

###### controller

[`Controller`](../../../../core/controller/classes/Controller.md)

##### Returns

`void`

## Methods

### \_setProvider()

> `protected` **\_setProvider**(`providerName`): `void`

Defined in: src/services/auth/AuthService.ts:153

#### Parameters

##### providerName

`string`

#### Returns

`void`

***

### clearAuthToken()

> **clearAuthToken**(): `Promise`\<`void`\>

Defined in: src/services/auth/AuthService.ts:242

Clear the authentication token from the extension's storage.
This is typically called when the user logs out.

#### Returns

`Promise`\<`void`\>

***

### createAuthRequest()

> **createAuthRequest**(): `Promise`\<`String`\>

Defined in: src/services/auth/AuthService.ts:184

#### Returns

`Promise`\<`String`\>

***

### getAuthToken()

> **getAuthToken**(): `Promise`\<`null` \| `string`\>

Defined in: src/services/auth/AuthService.ts:137

#### Returns

`Promise`\<`null` \| `string`\>

***

### getInfo()

> **getInfo**(): `AuthState`

Defined in: src/services/auth/AuthService.ts:162

#### Returns

`AuthState`

***

### handleAuthCallback()

> **handleAuthCallback**(`token`, `provider`): `Promise`\<`void`\>

Defined in: src/services/auth/AuthService.ts:222

#### Parameters

##### token

`string`

##### provider

`string`

#### Returns

`Promise`\<`void`\>

***

### handleDeauth()

> **handleDeauth**(): `Promise`\<`void`\>

Defined in: src/services/auth/AuthService.ts:207

#### Returns

`Promise`\<`void`\>

***

### restoreRefreshTokenAndRetrieveAuthInfo()

> **restoreRefreshTokenAndRetrieveAuthInfo**(): `Promise`\<`void`\>

Defined in: src/services/auth/AuthService.ts:250

Restores the authentication token from the extension's storage.
This is typically called when the extension is activated.

#### Returns

`Promise`\<`void`\>

***

### sendAuthStatusUpdate()

> **sendAuthStatusUpdate**(): `Promise`\<`void`\>

Defined in: src/services/auth/AuthService.ts:312

Send an authStatusUpdate event to all active subscribers

#### Returns

`Promise`\<`void`\>

***

### subscribeToAuthStatusUpdate()

> **subscribeToAuthStatusUpdate**(`controller`, `_request`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/services/auth/AuthService.ts:280

Subscribe to authStatusUpdate events

#### Parameters

##### controller

[`Controller`](../../../../core/controller/classes/Controller.md)

The controller instance

##### \_request

`EmptyRequest`

##### responseStream

[`StreamingResponseHandler`](../../../../core/controller/grpc-handler/type-aliases/StreamingResponseHandler.md)\<`AuthState`\>

The streaming response handler

##### requestId?

`string`

The ID of the request (passed by the gRPC handler)

#### Returns

`Promise`\<`void`\>

***

### getInstance()

> `static` **getInstance**(`controller?`): `AuthService`

Defined in: src/services/auth/AuthService.ts:104

Gets the singleton instance of AuthService.

#### Parameters

##### controller?

[`Controller`](../../../../core/controller/classes/Controller.md)

Optional reference to the Controller instance.

#### Returns

`AuthService`

The singleton instance of AuthService.
