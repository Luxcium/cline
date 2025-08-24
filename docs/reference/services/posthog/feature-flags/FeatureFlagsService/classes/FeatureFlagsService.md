[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [services/posthog/feature-flags/FeatureFlagsService](../README.md) / FeatureFlagsService

# Class: FeatureFlagsService

Defined in: src/services/posthog/feature-flags/FeatureFlagsService.ts:6

FeatureFlagsService provides feature flag functionality that works independently
of telemetry settings. Feature flags are always available to ensure proper
functionality of the extension regardless of user's telemetry preferences.

## Constructors

### Constructor

> **new FeatureFlagsService**(`getFeatureFlag`, `getFeatureFlagPayload`): `FeatureFlagsService`

Defined in: src/services/posthog/feature-flags/FeatureFlagsService.ts:7

#### Parameters

##### getFeatureFlag

(`flag`) => `Promise`\<`undefined` \| `string` \| `boolean`\>

##### getFeatureFlagPayload

(`flag`) => `Promise`\<`unknown`\>

#### Returns

`FeatureFlagsService`

## Methods

### getBooleanFlagEnabled()

> **getBooleanFlagEnabled**(`flagName`, `defaultValue`): `Promise`\<`boolean`\>

Defined in: src/services/posthog/feature-flags/FeatureFlagsService.ts:33

Wrapper: safely get boolean flag with default fallback

#### Parameters

##### flagName

`string`

##### defaultValue

`boolean` = `false`

#### Returns

`Promise`\<`boolean`\>

***

### getFocusChainEnabled()

> **getFocusChainEnabled**(): `Promise`\<`boolean`\>

Defined in: src/services/posthog/feature-flags/FeatureFlagsService.ts:45

Convenience: focus chain checklist remote gate

#### Returns

`Promise`\<`boolean`\>

***

### getPayload()

> **getPayload**(`flagName`): `Promise`\<`unknown`\>

Defined in: src/services/posthog/feature-flags/FeatureFlagsService.ts:54

Get the feature flag payload for advanced use cases

#### Parameters

##### flagName

`string`

The feature flag key

#### Returns

`Promise`\<`unknown`\>

The feature flag payload or null if not found

***

### isFeatureFlagEnabled()

> **isFeatureFlagEnabled**(`flagName`): `Promise`\<`boolean`\>

Defined in: src/services/posthog/feature-flags/FeatureFlagsService.ts:20

Check if a feature flag is enabled
This method works regardless of telemetry settings to ensure feature flags
can control extension behavior independently of user privacy preferences.

#### Parameters

##### flagName

`string`

The feature flag key

#### Returns

`Promise`\<`boolean`\>

Boolean indicating if the feature is enabled
