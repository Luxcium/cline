[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/controller/grpc-request-registry](../README.md) / RequestInfo

# Interface: RequestInfo

Defined in: src/core/controller/grpc-request-registry.ts:6

Information about a registered gRPC request

## Properties

### cleanup()

> **cleanup**: () => `void`

Defined in: src/core/controller/grpc-request-registry.ts:10

Function to clean up resources when the request is cancelled or completed

#### Returns

`void`

***

### metadata?

> `optional` **metadata**: `any`

Defined in: src/core/controller/grpc-request-registry.ts:15

Optional metadata about the request

***

### responseStream?

> `optional` **responseStream**: [`StreamingResponseHandler`](../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`any`\>

Defined in: src/core/controller/grpc-request-registry.ts:25

The streaming response handler for this request

***

### timestamp

> **timestamp**: `Date`

Defined in: src/core/controller/grpc-request-registry.ts:20

Timestamp when the request was registered
