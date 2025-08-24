[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/external/grpc-types](../README.md) / GrpcStreamingResponseHandler

# Type Alias: GrpcStreamingResponseHandler()\<TRequest, TResponse\>

> **GrpcStreamingResponseHandler**\<`TRequest`, `TResponse`\> = (`controller`, `req`, `streamResponseHandler`, `requestId?`) => `Promise`\<`void`\>

Defined in: src/hosts/external/grpc-types.ts:15

## Type Parameters

### TRequest

`TRequest`

### TResponse

`TResponse`

## Parameters

### controller

[`Controller`](../../../../core/controller/classes/Controller.md)

### req

`TRequest`

### streamResponseHandler

[`StreamingResponseWriter`](StreamingResponseWriter.md)\<`TResponse`\>

### requestId?

`string`

## Returns

`Promise`\<`void`\>
