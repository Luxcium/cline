[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/external/grpc-types](../README.md) / BaseGrpcClient

# Abstract Class: BaseGrpcClient\<TClient\>

Defined in: src/hosts/external/grpc-types.ts:50

Abstract base class for type-safe gRPC client implementations.

Provides automatic connection management with lazy initialization and
transparent reconnection on network failures. Ensures type safety through
generic client typing and consistent error handling patterns.

## Type Parameters

### TClient

`TClient`

The specific gRPC client type (e.g., niceGrpc.host.DiffServiceClient)

## Constructors

### Constructor

> **new BaseGrpcClient**\<`TClient`\>(`address`): `BaseGrpcClient`\<`TClient`\>

Defined in: src/hosts/external/grpc-types.ts:55

#### Parameters

##### address

`string`

#### Returns

`BaseGrpcClient`\<`TClient`\>

## Properties

### address

> `protected` **address**: `string`

Defined in: src/hosts/external/grpc-types.ts:53

## Methods

### createClient()

> `abstract` `protected` **createClient**(`channel`): `TClient`

Defined in: src/hosts/external/grpc-types.ts:59

#### Parameters

##### channel

`ChannelImplementation`

#### Returns

`TClient`

***

### destroyClient()

> `protected` **destroyClient**(): `void`

Defined in: src/hosts/external/grpc-types.ts:69

#### Returns

`void`

***

### getClient()

> `protected` **getClient**(): `TClient`

Defined in: src/hosts/external/grpc-types.ts:61

#### Returns

`TClient`

***

### makeRequest()

> `protected` **makeRequest**\<`T`\>(`requestFn`): `Promise`\<`T`\>

Defined in: src/hosts/external/grpc-types.ts:75

#### Type Parameters

##### T

`T`

#### Parameters

##### requestFn

(`client`) => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>
