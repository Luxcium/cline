[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/auth/AuthServiceMock](../README.md) / AuthServiceMock

# Class: AuthServiceMock

Defined in: src/services/auth/AuthServiceMock.ts:8

## Extends

- [`AuthService`](../../AuthService/classes/AuthService.md)

## Constructors

### Constructor

> `protected` **new AuthServiceMock**(`controller`): `AuthServiceMock`

Defined in: src/services/auth/AuthServiceMock.ts:9

#### Parameters

##### controller

[`Controller`](../../../../core/controller/classes/Controller.md)

#### Returns

`AuthServiceMock`

#### Overrides

[`AuthService`](../../AuthService/classes/AuthService.md).[`constructor`](../../AuthService/classes/AuthService.md#constructor)

## Properties

### \_activeAuthStatusUpdateSubscriptions

> `protected` **\_activeAuthStatusUpdateSubscriptions**: `Set`\<\[[`Controller`](../../../../core/controller/classes/Controller.md), [`StreamingResponseHandler`](../../../../core/controller/grpc-handler/type-aliases/StreamingResponseHandler.md)\<`AuthState`\>\]\>

Defined in: src/services/auth/AuthService.ts:58

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`_activeAuthStatusUpdateSubscriptions`](../../AuthService/classes/AuthService.md#_activeauthstatusupdatesubscriptions)

***

### \_authenticated

> `protected` **\_authenticated**: `boolean` = `false`

Defined in: src/services/auth/AuthService.ts:55

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`_authenticated`](../../AuthService/classes/AuthService.md#_authenticated)

***

### \_clineAuthInfo

> `protected` **\_clineAuthInfo**: `null` \| [`ClineAuthInfo`](../../AuthService/interfaces/ClineAuthInfo.md) = `null`

Defined in: src/services/auth/AuthService.ts:56

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`_clineAuthInfo`](../../AuthService/classes/AuthService.md#_clineauthinfo)

***

### \_config

> `protected` **\_config**: [`ServiceConfig`](../../AuthService/type-aliases/ServiceConfig.md)

Defined in: src/services/auth/AuthService.ts:54

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`_config`](../../AuthService/classes/AuthService.md#_config)

***

### \_controller

> `protected` **\_controller**: [`Controller`](../../../../core/controller/classes/Controller.md)

Defined in: src/services/auth/AuthService.ts:59

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`_controller`](../../AuthService/classes/AuthService.md#_controller)

***

### \_provider

> `protected` **\_provider**: `null` \| \{ `provider`: [`FirebaseAuthProvider`](../../providers/FirebaseAuthProvider/classes/FirebaseAuthProvider.md); \} = `null`

Defined in: src/services/auth/AuthService.ts:57

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`_provider`](../../AuthService/classes/AuthService.md#_provider)

***

### instance

> `protected` `static` **instance**: `null` \| [`AuthService`](../../AuthService/classes/AuthService.md) = `null`

Defined in: src/services/auth/AuthService.ts:53

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`instance`](../../AuthService/classes/AuthService.md#instance)

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

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`authProvider`](../../AuthService/classes/AuthService.md#authprovider)

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

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`controller`](../../AuthService/classes/AuthService.md#controller)

## Methods

### \_setProvider()

> `protected` **\_setProvider**(`providerName`): `void`

Defined in: src/services/auth/AuthService.ts:153

#### Parameters

##### providerName

`string`

#### Returns

`void`

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`_setProvider`](../../AuthService/classes/AuthService.md#_setprovider)

***

### clearAuthToken()

> **clearAuthToken**(): `Promise`\<`void`\>

Defined in: src/services/auth/AuthService.ts:242

Clear the authentication token from the extension's storage.
This is typically called when the user logs out.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`clearAuthToken`](../../AuthService/classes/AuthService.md#clearauthtoken)

***

### createAuthRequest()

> **createAuthRequest**(): `Promise`\<`String`\>

Defined in: src/services/auth/AuthServiceMock.ts:45

#### Returns

`Promise`\<`String`\>

#### Overrides

[`AuthService`](../../AuthService/classes/AuthService.md).[`createAuthRequest`](../../AuthService/classes/AuthService.md#createauthrequest)

***

### getAuthToken()

> **getAuthToken**(): `Promise`\<`null` \| `string`\>

Defined in: src/services/auth/AuthServiceMock.ts:38

#### Returns

`Promise`\<`null` \| `string`\>

#### Overrides

[`AuthService`](../../AuthService/classes/AuthService.md).[`getAuthToken`](../../AuthService/classes/AuthService.md#getauthtoken)

***

### getInfo()

> **getInfo**(): `AuthState`

Defined in: src/services/auth/AuthService.ts:162

#### Returns

`AuthState`

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`getInfo`](../../AuthService/classes/AuthService.md#getinfo)

***

### handleAuthCallback()

> **handleAuthCallback**(`_token`, `_provider`): `Promise`\<`void`\>

Defined in: src/services/auth/AuthServiceMock.ts:112

#### Parameters

##### \_token

`string`

##### \_provider

`string`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`AuthService`](../../AuthService/classes/AuthService.md).[`handleAuthCallback`](../../AuthService/classes/AuthService.md#handleauthcallback)

***

### handleDeauth()

> **handleDeauth**(): `Promise`\<`void`\>

Defined in: src/services/auth/AuthService.ts:207

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`handleDeauth`](../../AuthService/classes/AuthService.md#handledeauth)

***

### restoreRefreshTokenAndRetrieveAuthInfo()

> **restoreRefreshTokenAndRetrieveAuthInfo**(): `Promise`\<`void`\>

Defined in: src/services/auth/AuthServiceMock.ts:122

Restores the authentication token from the extension's storage.
This is typically called when the extension is activated.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`AuthService`](../../AuthService/classes/AuthService.md).[`restoreRefreshTokenAndRetrieveAuthInfo`](../../AuthService/classes/AuthService.md#restorerefreshtokenandretrieveauthinfo)

***

### sendAuthStatusUpdate()

> **sendAuthStatusUpdate**(): `Promise`\<`void`\>

Defined in: src/services/auth/AuthService.ts:312

Send an authStatusUpdate event to all active subscribers

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`sendAuthStatusUpdate`](../../AuthService/classes/AuthService.md#sendauthstatusupdate)

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

#### Inherited from

[`AuthService`](../../AuthService/classes/AuthService.md).[`subscribeToAuthStatusUpdate`](../../AuthService/classes/AuthService.md#subscribetoauthstatusupdate)

***

### getInstance()

> `static` **getInstance**(`controller?`): `AuthServiceMock`

Defined in: src/services/auth/AuthServiceMock.ts:24

Gets the singleton instance of AuthServiceMock.

#### Parameters

##### controller?

[`Controller`](../../../../core/controller/classes/Controller.md)

#### Returns

`AuthServiceMock`

#### Overrides

[`AuthService`](../../AuthService/classes/AuthService.md).[`getInstance`](../../AuthService/classes/AuthService.md#getinstance)
