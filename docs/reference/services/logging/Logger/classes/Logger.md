[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/logging/Logger](../README.md) / Logger

# Class: Logger

Defined in: src/services/logging/Logger.ts:7

Simple logging utility for the extension's backend code.

## Constructors

### Constructor

> **new Logger**(): `Logger`

#### Returns

`Logger`

## Properties

### channelName

> `readonly` **channelName**: `"Cline Dev Logger"` = `"Cline Dev Logger"`

Defined in: src/services/logging/Logger.ts:8

## Methods

### debug()

> `static` **debug**(`message`): `void`

Defined in: src/services/logging/Logger.ts:21

#### Parameters

##### message

`string`

#### Returns

`void`

***

### error()

> `static` **error**(`message`, `error?`): `void`

Defined in: src/services/logging/Logger.ts:9

#### Parameters

##### message

`string`

##### error?

`Error`

#### Returns

`void`

***

### info()

> `static` **info**(`message`): `void`

Defined in: src/services/logging/Logger.ts:24

#### Parameters

##### message

`string`

#### Returns

`void`

***

### log()

> `static` **log**(`message`): `void`

Defined in: src/services/logging/Logger.ts:18

#### Parameters

##### message

`string`

#### Returns

`void`

***

### trace()

> `static` **trace**(`message`): `void`

Defined in: src/services/logging/Logger.ts:27

#### Parameters

##### message

`string`

#### Returns

`void`

***

### warn()

> `static` **warn**(`message`): `void`

Defined in: src/services/logging/Logger.ts:14

#### Parameters

##### message

`string`

#### Returns

`void`
