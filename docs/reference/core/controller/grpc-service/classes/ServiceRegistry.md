[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/controller/grpc-service](../README.md) / ServiceRegistry

# Class: ServiceRegistry

Defined in: src/core/controller/grpc-service.ts:29

Generic service registry for gRPC services

## Constructors

### Constructor

> **new ServiceRegistry**(`serviceName`): `ServiceRegistry`

Defined in: src/core/controller/grpc-service.ts:39

Create a new service registry

#### Parameters

##### serviceName

`string`

The name of the service (used for logging)

#### Returns

`ServiceRegistry`

## Methods

### getStreamingHandler()

> **getStreamingHandler**(`method`): `undefined` \| [`StreamingMethodHandler`](../type-aliases/StreamingMethodHandler.md)

Defined in: src/core/controller/grpc-service.ts:76

Get a streaming method handler

#### Parameters

##### method

`string`

The method name

#### Returns

`undefined` \| [`StreamingMethodHandler`](../type-aliases/StreamingMethodHandler.md)

The streaming method handler or undefined if not found

***

### handleRequest()

> **handleRequest**(`controller`, `method`, `message`): `Promise`\<`any`\>

Defined in: src/core/controller/grpc-service.ts:87

Handle a service request

#### Parameters

##### controller

[`Controller`](../../classes/Controller.md)

The controller instance

##### method

`string`

The method name

##### message

`any`

The request message

#### Returns

`Promise`\<`any`\>

The response message

***

### handleStreamingRequest()

> **handleStreamingRequest**(`controller`, `method`, `message`, `responseStream`, `requestId?`): `Promise`\<`void`\>

Defined in: src/core/controller/grpc-service.ts:108

Handle a streaming service request

#### Parameters

##### controller

[`Controller`](../../classes/Controller.md)

The controller instance

##### method

`string`

The method name

##### message

`any`

The request message

##### responseStream

[`StreamingResponseHandler`](../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`any`\>

The streaming response handler

##### requestId?

`string`

The request ID for correlation and cleanup

#### Returns

`Promise`\<`void`\>

***

### isStreamingMethod()

> **isStreamingMethod**(`method`): `boolean`

Defined in: src/core/controller/grpc-service.ts:67

Check if a method is a streaming method

#### Parameters

##### method

`string`

The method name

#### Returns

`boolean`

True if the method is a streaming method

***

### registerMethod()

> **registerMethod**(`methodName`, `handler`, `metadata?`): `void`

Defined in: src/core/controller/grpc-service.ts:50

Register a method handler

#### Parameters

##### methodName

`string`

The name of the method to register

##### handler

The handler function for the method

[`ServiceMethodHandler`](../type-aliases/ServiceMethodHandler.md) | [`StreamingMethodHandler`](../type-aliases/StreamingMethodHandler.md)

##### metadata?

[`MethodMetadata`](../interfaces/MethodMetadata.md)

Optional metadata about the method

#### Returns

`void`
