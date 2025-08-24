[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/external/grpc-types](../README.md) / GrpcStreamingResponseHandlerWrapper

# Type Alias: GrpcStreamingResponseHandlerWrapper()

> **GrpcStreamingResponseHandlerWrapper** = \<`TRequest`, `TResponse`\>(`handler`, `controller`) => `grpc.handleServerStreamingCall`\<`TRequest`, `TResponse`\>

Defined in: src/hosts/external/grpc-types.ts:34

## Type Parameters

### TRequest

`TRequest`

### TResponse

`TResponse`

## Parameters

### handler

[`GrpcStreamingResponseHandler`](GrpcStreamingResponseHandler.md)\<`TRequest`, `TResponse`\>

### controller

[`Controller`](../../../../core/controller/classes/Controller.md)

## Returns

`grpc.handleServerStreamingCall`\<`TRequest`, `TResponse`\>
