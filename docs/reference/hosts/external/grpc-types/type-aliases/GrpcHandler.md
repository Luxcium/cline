[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/external/grpc-types](../README.md) / GrpcHandler

# Type Alias: GrpcHandler()\<TRequest, TResponse\>

> **GrpcHandler**\<`TRequest`, `TResponse`\> = (`controller`, `req`) => `Promise`\<`TResponse`\>

Defined in: src/hosts/external/grpc-types.ts:13

Type definition for a gRPC handler function.
This represents a function that takes a Controller instance and a request object,
and returns a Promise of the response type.

## Type Parameters

### TRequest

`TRequest`

The type of the request object

### TResponse

`TResponse`

The type of the response object

## Parameters

### controller

[`Controller`](../../../../core/controller/classes/Controller.md)

### req

`TRequest`

## Returns

`Promise`\<`TResponse`\>
