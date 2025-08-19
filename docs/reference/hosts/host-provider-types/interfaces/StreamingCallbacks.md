[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [hosts/host-provider-types](../README.md) / StreamingCallbacks

# Interface: StreamingCallbacks\<T\>

Defined in: src/hosts/host-provider-types.ts:23

Callback interface for streaming requests

## Type Parameters

### T

`T` = `any`

## Properties

### onComplete()?

> `optional` **onComplete**: () => `void`

Defined in: src/hosts/host-provider-types.ts:26

#### Returns

`void`

***

### onError()?

> `optional` **onError**: (`error`) => `void`

Defined in: src/hosts/host-provider-types.ts:25

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### onResponse()

> **onResponse**: (`response`) => `void`

Defined in: src/hosts/host-provider-types.ts:24

#### Parameters

##### response

`T`

#### Returns

`void`
