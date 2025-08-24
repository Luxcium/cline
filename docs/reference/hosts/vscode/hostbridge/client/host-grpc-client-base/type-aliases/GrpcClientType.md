[**claude-dev**](../../../../../../README.md)

***

[claude-dev](../../../../../../README.md) / [hosts/vscode/hostbridge/client/host-grpc-client-base](../README.md) / GrpcClientType

# Type Alias: GrpcClientType\<T\>

> **GrpcClientType**\<`T`\> = `{ [K in keyof T["methods"]]: T["methods"][K]["responseStream"] extends true ? (request: InstanceType<T["methods"][K]["requestType"]>, options: StreamingCallbacks<InstanceType<T["methods"][K]["responseType"]>>) => () => void : (request: InstanceType<T["methods"][K]["requestType"]>) => Promise<InstanceType<T["methods"][K]["responseType"]>> }`

Defined in: src/hosts/vscode/hostbridge/client/host-grpc-client-base.ts:22

## Type Parameters

### T

`T` *extends* [`ProtoService`](ProtoService.md)
