[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/external/host-bridge-client-manager](../README.md) / ExternalHostBridgeClientManager

# Class: ExternalHostBridgeClientManager

Defined in: src/hosts/external/host-bridge-client-manager.ts:23

Manager to hold the gRPC clients for the host bridge. The clients should be re-used to avoid
creating a new TCP connection every time a rpc is made.

## Implements

- [`HostBridgeClientProvider`](../../../host-provider-types/interfaces/HostBridgeClientProvider.md)

## Constructors

### Constructor

> **new ExternalHostBridgeClientManager**(): `ExternalHostBridgeClientManager`

Defined in: src/hosts/external/host-bridge-client-manager.ts:30

#### Returns

`ExternalHostBridgeClientManager`

## Properties

### diffClient

> **diffClient**: `DiffServiceClientInterface`

Defined in: src/hosts/external/host-bridge-client-manager.ts:28

#### Implementation of

[`HostBridgeClientProvider`](../../../host-provider-types/interfaces/HostBridgeClientProvider.md).[`diffClient`](../../../host-provider-types/interfaces/HostBridgeClientProvider.md#diffclient)

***

### envClient

> **envClient**: `EnvServiceClientInterface`

Defined in: src/hosts/external/host-bridge-client-manager.ts:26

#### Implementation of

[`HostBridgeClientProvider`](../../../host-provider-types/interfaces/HostBridgeClientProvider.md).[`envClient`](../../../host-provider-types/interfaces/HostBridgeClientProvider.md#envclient)

***

### watchServiceClient

> **watchServiceClient**: `WatchServiceClientInterface`

Defined in: src/hosts/external/host-bridge-client-manager.ts:24

#### Implementation of

[`HostBridgeClientProvider`](../../../host-provider-types/interfaces/HostBridgeClientProvider.md).[`watchServiceClient`](../../../host-provider-types/interfaces/HostBridgeClientProvider.md#watchserviceclient)

***

### windowClient

> **windowClient**: `WindowServiceClientInterface`

Defined in: src/hosts/external/host-bridge-client-manager.ts:27

#### Implementation of

[`HostBridgeClientProvider`](../../../host-provider-types/interfaces/HostBridgeClientProvider.md).[`windowClient`](../../../host-provider-types/interfaces/HostBridgeClientProvider.md#windowclient)

***

### workspaceClient

> **workspaceClient**: `WorkspaceServiceClientInterface`

Defined in: src/hosts/external/host-bridge-client-manager.ts:25

#### Implementation of

[`HostBridgeClientProvider`](../../../host-provider-types/interfaces/HostBridgeClientProvider.md).[`workspaceClient`](../../../host-provider-types/interfaces/HostBridgeClientProvider.md#workspaceclient)
