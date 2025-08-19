[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/error/ErrorService](../README.md) / ErrorService

# Class: ErrorService

Defined in: src/services/error/ErrorService.ts:7

## Constructors

### Constructor

> **new ErrorService**(`posthogProvider`, `_distinctId`): `ErrorService`

Defined in: src/services/error/ErrorService.ts:10

#### Parameters

##### posthogProvider

[`PostHogClientProvider`](../../../posthog/PostHogClientProvider/classes/PostHogClientProvider.md)

##### \_distinctId

`string`

#### Returns

`ErrorService`

## Methods

### logException()

> **logException**(`error`): `void`

Defined in: src/services/error/ErrorService.ts:14

#### Parameters

##### error

`Error` | [`ClineError`](../../ClineError/classes/ClineError.md)

#### Returns

`void`

***

### logMessage()

> **logMessage**(`message`, `level`): `void`

Defined in: src/services/error/ErrorService.ts:40

#### Parameters

##### message

`string`

##### level

`"info"` | `"error"` | `"warning"` | `"log"` | `"debug"`

#### Returns

`void`

***

### toClineError()

> **toClineError**(`rawError`, `modelId?`, `providerId?`): [`ClineError`](../../ClineError/classes/ClineError.md)

Defined in: src/services/error/ErrorService.ts:50

#### Parameters

##### rawError

`unknown`

##### modelId?

`string`

##### providerId?

`string`

#### Returns

[`ClineError`](../../ClineError/classes/ClineError.md)
