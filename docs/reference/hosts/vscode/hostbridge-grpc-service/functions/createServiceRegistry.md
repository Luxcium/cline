[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/vscode/hostbridge-grpc-service](../README.md) / createServiceRegistry

# Function: createServiceRegistry()

> **createServiceRegistry**(`serviceName`): `object`

Defined in: src/hosts/vscode/hostbridge-grpc-service.ts:124

Create a service registry factory function

## Parameters

### serviceName

`string`

The name of the service

## Returns

`object`

An object with register and handle functions

### handleRequest()

> **handleRequest**: (`method`, `message`) => `Promise`\<`any`\>

#### Parameters

##### method

`string`

##### message

`any`

#### Returns

`Promise`\<`any`\>

### handleStreamingRequest()

> **handleStreamingRequest**: (`method`, `message`, `responseStream`, `requestId?`) => `Promise`\<`void`\>

#### Parameters

##### method

`string`

##### message

`any`

##### responseStream

[`StreamingResponseHandler`](../../hostbridge-grpc-handler/type-aliases/StreamingResponseHandler.md)

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
