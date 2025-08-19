[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/external/grpc-types](../README.md) / GrpcHandlerWrapper

# Type Alias: GrpcHandlerWrapper()

> **GrpcHandlerWrapper** = \<`TRequest`, `TResponse`\>(`handler`, `controller`) => `grpc.handleUnaryCall`\<`TRequest`, `TResponse`\>

Defined in: src/hosts/external/grpc-types.ts:29

Type definition for the wrapper function that converts a Promise-based handler
to a gRPC callback-style handler.

## Type Parameters

### TRequest

`TRequest`

The type of the request object

### TResponse

`TResponse`

The type of the response object

## Parameters

### handler

[`GrpcHandler`](GrpcHandler.md)\<`TRequest`, `TResponse`\>

### controller

[`Controller`](../../../../core/controller/classes/Controller.md)

## Returns

`grpc.handleUnaryCall`\<`TRequest`, `TResponse`\>
