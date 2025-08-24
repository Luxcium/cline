[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/vscode/hostbridge-grpc-handler](../README.md) / GrpcHandler

# Class: GrpcHandler

Defined in: src/hosts/vscode/hostbridge-grpc-handler.ts:16

Handles gRPC requests for the host bridge.

## Constructors

### Constructor

> **new GrpcHandler**(): `GrpcHandler`

Defined in: src/hosts/vscode/hostbridge-grpc-handler.ts:17

#### Returns

`GrpcHandler`

## Methods

### cancelRequest()

> **cancelRequest**(`requestId`): `Promise`\<`boolean`\>

Defined in: src/hosts/vscode/hostbridge-grpc-handler.ts:102

Cancel a gRPC request

#### Parameters

##### requestId

`string`

The request ID to cancel

#### Returns

`Promise`\<`boolean`\>

True if the request was found and cancelled, false otherwise

***

### handleRequest()

> **handleRequest**\<`T`\>(`service`, `method`, `request`, `requestId`, `streamingCallbacks?`): `Promise`\<`any`\>

Defined in: src/hosts/vscode/hostbridge-grpc-handler.ts:28

Handle a gRPC request for the host bridge.

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### service

`string`

The service name

##### method

`string`

The method name

##### request

`any`

##### requestId

`string`

The request ID for response correlation

##### streamingCallbacks?

[`StreamingCallbacks`](../../../host-provider-types/interfaces/StreamingCallbacks.md)\<`T`\>

Optional callbacks for streaming responses

#### Returns

`Promise`\<`any`\>

For unary requests: the response message or error. For streaming requests: a cancel function.
