[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [hosts/host-provider](../README.md) / HostProvider

# Class: HostProvider

Defined in: src/hosts/host-provider.ts:19

Singleton class that manages host-specific providers for dependency injection.

This system runs on two different platforms (VSCode extension and cline-core),
so all the host-specific classes and properties are contained in here. The
rest of the codebase can use the host provider interface to access platform-specific
implementations in a platform-agnostic way.

Usage:
- Initialize once: HostProvider.initialize(webviewCreator, diffCreator, hostBridge)
- Access HostBridge services: HostProvider.window.showMessage()
- Access Host Provider factories: HostProvider.get().createDiffViewProvider()

## Properties

### createDiffViewProvider

> **createDiffViewProvider**: [`DiffViewProviderCreator`](../type-aliases/DiffViewProviderCreator.md)

Defined in: src/hosts/host-provider.ts:23

***

### createWebviewProvider

> **createWebviewProvider**: [`WebviewProviderCreator`](../type-aliases/WebviewProviderCreator.md)

Defined in: src/hosts/host-provider.ts:22

***

### getCallbackUri()

> **getCallbackUri**: () => `Promise`\<`string`\>

Defined in: src/hosts/host-provider.ts:30

#### Returns

`Promise`\<`string`\>

***

### hostBridge

> **hostBridge**: [`HostBridgeClientProvider`](../../host-provider-types/interfaces/HostBridgeClientProvider.md)

Defined in: src/hosts/host-provider.ts:24

***

### logToChannel

> **logToChannel**: [`LogToChannel`](../type-aliases/LogToChannel.md)

Defined in: src/hosts/host-provider.ts:27

## Accessors

### diff

#### Get Signature

> **get** `static` **diff**(): `DiffServiceClientInterface`

Defined in: src/hosts/host-provider.ts:106

##### Returns

`DiffServiceClientInterface`

***

### env

#### Get Signature

> **get** `static` **env**(): `EnvServiceClientInterface`

Defined in: src/hosts/host-provider.ts:98

##### Returns

`EnvServiceClientInterface`

***

### watch

#### Get Signature

> **get** `static` **watch**(): `WatchServiceClientInterface`

Defined in: src/hosts/host-provider.ts:90

##### Returns

`WatchServiceClientInterface`

***

### window

#### Get Signature

> **get** `static` **window**(): `WindowServiceClientInterface`

Defined in: src/hosts/host-provider.ts:102

##### Returns

`WindowServiceClientInterface`

***

### workspace

#### Get Signature

> **get** `static` **workspace**(): `WorkspaceServiceClientInterface`

Defined in: src/hosts/host-provider.ts:94

##### Returns

`WorkspaceServiceClientInterface`

## Methods

### get()

> `static` **get**(): `HostProvider`

Defined in: src/hosts/host-provider.ts:70

Gets the singleton instance

#### Returns

`HostProvider`

***

### initialize()

> `static` **initialize**(`webviewProviderCreator`, `diffViewProviderCreator`, `hostBridgeProvider`, `logToChannel`, `getCallbackUri`): `HostProvider`

Defined in: src/hosts/host-provider.ts:47

#### Parameters

##### webviewProviderCreator

[`WebviewProviderCreator`](../type-aliases/WebviewProviderCreator.md)

##### diffViewProviderCreator

[`DiffViewProviderCreator`](../type-aliases/DiffViewProviderCreator.md)

##### hostBridgeProvider

[`HostBridgeClientProvider`](../../host-provider-types/interfaces/HostBridgeClientProvider.md)

##### logToChannel

[`LogToChannel`](../type-aliases/LogToChannel.md)

##### getCallbackUri

() => `Promise`\<`string`\>

#### Returns

`HostProvider`

***

### isInitialized()

> `static` **isInitialized**(): `boolean`

Defined in: src/hosts/host-provider.ts:77

#### Returns

`boolean`

***

### reset()

> `static` **reset**(): `void`

Defined in: src/hosts/host-provider.ts:85

Resets the HostProvider instance (primarily for testing)
This allows tests to reinitialize the HostProvider with different configurations

#### Returns

`void`
