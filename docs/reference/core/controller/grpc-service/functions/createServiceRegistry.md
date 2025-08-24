[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/controller/grpc-service](../README.md) / createServiceRegistry

# Function: createServiceRegistry()

> **createServiceRegistry**(`serviceName`): `object`

Defined in: src/core/controller/grpc-service.ts:133

Create a service registry factory function

## Parameters

### serviceName

`string`

The name of the service

## Returns

`object`

An object with register and handle functions

### handleRequest()

> **handleRequest**: (`controller`, `method`, `message`) => `Promise`\<`any`\>

#### Parameters

##### controller

[`Controller`](../../classes/Controller.md)

##### method

`string`

##### message

`any`

#### Returns

`Promise`\<`any`\>

### handleStreamingRequest()

> **handleStreamingRequest**: (`controller`, `method`, `message`, `responseStream`, `requestId?`) => `Promise`\<`void`\>

#### Parameters

##### controller

[`Controller`](../../classes/Controller.md)

##### method

`string`

##### message

`any`

##### responseStream

[`StreamingResponseHandler`](../../grpc-handler/type-aliases/StreamingResponseHandler.md)\<`any`\>

##### requestId?

`string`

#### Returns

`Promise`\<`void`\>

### isStreamingMethod()

> **isStreamingMethod**: (`method`) => `boolean`

#### Parameters

##### method

`string`

#### Returns

`boolean`

### registerMethod()

> **registerMethod**: (`methodName`, `handler`, `metadata?`) => `void`

#### Parameters

##### methodName

`string`

##### handler

[`ServiceMethodHandler`](../type-aliases/ServiceMethodHandler.md) | [`StreamingMethodHandler`](../type-aliases/StreamingMethodHandler.md)

##### metadata?

[`MethodMetadata`](../interfaces/MethodMetadata.md)

#### Returns

`void`
