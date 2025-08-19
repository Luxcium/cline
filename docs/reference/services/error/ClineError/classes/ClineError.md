[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/error/ClineError](../README.md) / ClineError

# Class: ClineError

Defined in: src/services/error/ClineError.ts:46

## Extends

- `Error`

## Constructors

### Constructor

> **new ClineError**(`raw`, `modelId?`, `providerId?`): `ClineError`

Defined in: src/services/error/ClineError.ts:54

#### Parameters

##### raw

`any`

##### modelId?

`string`

##### providerId?

`string`

#### Returns

`ClineError`

#### Overrides

`Error.constructor`

## Properties

### \_error

> `readonly` **\_error**: `ErrorDetails`

Defined in: src/services/error/ClineError.ts:48

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:24

#### Inherited from

`Error.cause`

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### modelId?

> `readonly` `optional` **modelId**: `string`

Defined in: src/services/error/ClineError.ts:56

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### providerId?

> `readonly` `optional` **providerId**: `string`

Defined in: src/services/error/ClineError.ts:57

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### title

> `readonly` **title**: `"ClineError"` = `"ClineError"`

Defined in: src/services/error/ClineError.ts:47

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:28

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:30

#### Inherited from

`Error.stackTraceLimit`

## Methods

### isErrorType()

> **isErrorType**(`type`): `boolean`

Defined in: src/services/error/ClineError.ts:120

#### Parameters

##### type

[`ClineErrorType`](../enumerations/ClineErrorType.md)

#### Returns

`boolean`

***

### serialize()

> **serialize**(): `string`

Defined in: src/services/error/ClineError.ts:86

Serializes the error to a JSON string that allows for easy transmission and storage.
 This is useful for logging or sending error details to a webviews.

#### Returns

`string`

***

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:21

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

***

### getErrorType()

> `static` **getErrorType**(`err`): `undefined` \| [`ClineErrorType`](../enumerations/ClineErrorType.md)

Defined in: src/services/error/ClineError.ts:128

Is known error type based on the error code, status, and details.
This is useful for determining how to handle the error in the UI or logic.

#### Parameters

##### err

`ClineError`

#### Returns

`undefined` \| [`ClineErrorType`](../enumerations/ClineErrorType.md)

***

### parse()

> `static` **parse**(`errorStr?`, `modelId?`): `undefined` \| `ClineError`

Defined in: src/services/error/ClineError.ts:101

Parses a stringified error into a ClineError instance.

#### Parameters

##### errorStr?

`string`

##### modelId?

`string`

#### Returns

`undefined` \| `ClineError`

***

### transform()

> `static` **transform**(`error`, `modelId?`, `providerId?`): `ClineError`

Defined in: src/services/error/ClineError.ts:112

Transforms any object into a ClineError instance.
Always returns a ClineError, even if the input is not a valid error object.

#### Parameters

##### error

`any`

##### modelId?

`string`

##### providerId?

`string`

#### Returns

`ClineError`
