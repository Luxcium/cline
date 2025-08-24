[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/controller/grpc-request-registry](../README.md) / GrpcRequestRegistry

# Class: GrpcRequestRegistry

Defined in: src/core/controller/grpc-request-registry.ts:32

Registry for managing gRPC request lifecycles
This class provides a centralized way to track active requests and their cleanup functions

## Constructors

### Constructor

> **new GrpcRequestRegistry**(): `GrpcRequestRegistry`

#### Returns

`GrpcRequestRegistry`

## Methods

### cancelRequest()

> **cancelRequest**(`requestId`): `boolean`

Defined in: src/core/controller/grpc-request-registry.ts:65

Cancel a request and clean up its resources

#### Parameters

##### requestId

`string`

The ID of the request to cancel

#### Returns

`boolean`

True if the request was found and cancelled, false otherwise

***

### cleanupStaleRequests()

> **cleanupStaleRequests**(`maxAgeMs`): `number`

Defined in: src/core/controller/grpc-request-registry.ts:111

Clean up stale requests that have been active for too long

#### Parameters

##### maxAgeMs

`number`

Maximum age in milliseconds before a request is considered stale

#### Returns

`number`

The number of requests that were cleaned up

***

### getAllRequests()

> **getAllRequests**(): \[`string`, [`RequestInfo`](../interfaces/RequestInfo.md)\][]

Defined in: src/core/controller/grpc-request-registry.ts:102

Get all active requests

#### Returns

\[`string`, [`RequestInfo`](../interfaces/RequestInfo.md)\][]

An array of [requestId, requestInfo] pairs

***

### getRequestInfo()

> **getRequestInfo**(`requestId`): `undefined` \| [`RequestInfo`](../interfaces/RequestInfo.md)

Defined in: src/core/controller/grpc-request-registry.ts:85

Get information about a request

#### Parameters

##### requestId

`string`

The ID of the request

#### Returns

`undefined` \| [`RequestInfo`](../interfaces/RequestInfo.md)

The request information, or undefined if not found

***

### hasRequest()

> **hasRequest**(`requestId`): `boolean`

Defined in: src/core/controller/grpc-request-registry.ts:94

Check if a request exists in the registry

#### Parameters

##### requestId

`string`

The ID of the request

#### Returns

`boolean`

True if the request exists, false otherwise

***

### registerRequest()

> **registerRequest**(`requestId`, `cleanup`, `metadata?`, `responseStream?`): `void`

Defined in: src/core/controller/grpc-request-registry.ts:45

Register a new request with its cleanup function

#### Parameters

##### requestId

`string`

The unique ID of the request

##### cleanup

() => `void`

Function to clean up resources when the request is cancelled

##### metadata?

`any`

Optional metadata about the request

##### responseStream?

[`StreamingResponseHandler`](../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`any`\>

Optional streaming response handler

#### Returns

`void`
