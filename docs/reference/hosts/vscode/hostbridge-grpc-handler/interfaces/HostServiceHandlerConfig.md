[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/vscode/hostbridge-grpc-handler](../README.md) / HostServiceHandlerConfig

# Interface: HostServiceHandlerConfig

Defined in: src/hosts/vscode/hostbridge-grpc-handler.ts:166

Configuration for a host service handler

## Properties

### requestHandler()

> **requestHandler**: (`method`, `message`) => `Promise`\<`any`\>

Defined in: src/hosts/vscode/hostbridge-grpc-handler.ts:167

#### Parameters

##### method

`string`

##### message

`any`

#### Returns

`Promise`\<`any`\>

***

### streamingHandler()

> **streamingHandler**: (`method`, `message`, `responseStream`, `requestId?`) => `Promise`\<`void`\>

Defined in: src/hosts/vscode/hostbridge-grpc-handler.ts:168

#### Parameters

##### method

`string`

##### message

`any`

##### responseStream

[`StreamingResponseHandler`](../type-aliases/StreamingResponseHandler.md)

##### requestId?

`string`

#### Returns

`Promise`\<`void`\>
