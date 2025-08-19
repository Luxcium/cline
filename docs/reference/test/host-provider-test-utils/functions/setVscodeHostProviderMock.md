[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [test/host-provider-test-utils](../README.md) / setVscodeHostProviderMock

# Function: setVscodeHostProviderMock()

> **setVscodeHostProviderMock**(`options?`): `void`

Defined in: src/test/host-provider-test-utils.ts:11

Initializes the HostProvider with test defaults.
This is a common setup used across multiple test files.

## Parameters

### options?

Optional overrides for the default test configuration

#### diffViewProviderCreator?

[`DiffViewProviderCreator`](../../../hosts/host-provider/type-aliases/DiffViewProviderCreator.md)

#### getCallbackUri?

() => `Promise`\<`string`\>

#### hostBridgeClient?

[`HostBridgeClientProvider`](../../../hosts/host-provider-types/interfaces/HostBridgeClientProvider.md)

#### logToChannel?

(`message`) => `void`

#### webviewProviderCreator?

[`WebviewProviderCreator`](../../../hosts/host-provider/type-aliases/WebviewProviderCreator.md)

## Returns

`void`
