[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/posthog/PostHogClientProvider](../README.md) / PostHogClientProvider

# Class: PostHogClientProvider

Defined in: src/services/posthog/PostHogClientProvider.ts:19

## Properties

### client

> `readonly` **client**: `PostHog`

Defined in: src/services/posthog/PostHogClientProvider.ts:35

***

### distinctId

> **distinctId**: `string` = `ENV_ID`

Defined in: src/services/posthog/PostHogClientProvider.ts:41

***

### error

> `readonly` **error**: [`ErrorService`](../../../error/ErrorService/classes/ErrorService.md)

Defined in: src/services/posthog/PostHogClientProvider.ts:39

***

### featureFlags

> `readonly` **featureFlags**: [`FeatureFlagsService`](../../feature-flags/FeatureFlagsService/classes/FeatureFlagsService.md)

Defined in: src/services/posthog/PostHogClientProvider.ts:37

***

### telemetry

> `readonly` **telemetry**: [`TelemetryService`](../../telemetry/TelemetryService/classes/TelemetryService.md)

Defined in: src/services/posthog/PostHogClientProvider.ts:38

***

### telemetrySettings

> `protected` **telemetrySettings**: `TelemetrySettings`

Defined in: src/services/posthog/PostHogClientProvider.ts:29

## Methods

### dispose()

> **dispose**(): `void`

Defined in: src/services/posthog/PostHogClientProvider.ts:137

#### Returns

`void`

***

### identifyAccount()

> **identifyAccount**(`userInfo?`, `properties?`): `void`

Defined in: src/services/posthog/PostHogClientProvider.ts:100

Identifies the accounts user
If userInfo is provided, it will use that to identify the user.
Otherwise, it will use the DISTINCT_ID as the distinct ID.

#### Parameters

##### userInfo?

[`ClineAccountUserInfo`](../../../auth/AuthService/interfaces/ClineAccountUserInfo.md)

The user's information

##### properties?

`Record`\<`string`, `unknown`\> = `{}`

#### Returns

`void`

***

### log()

> **log**(`event`, `properties?`): `void`

Defined in: src/services/posthog/PostHogClientProvider.ts:119

#### Parameters

##### event

`string`

##### properties?

`Record`\<`string`, `unknown`\>

#### Returns

`void`

***

### toggleOptIn()

> **toggleOptIn**(`optIn`): `void`

Defined in: src/services/posthog/PostHogClientProvider.ts:84

#### Parameters

##### optIn

`boolean`

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(`id?`): `PostHogClientProvider`

Defined in: src/services/posthog/PostHogClientProvider.ts:22

#### Parameters

##### id?

`string`

#### Returns

`PostHogClientProvider`
