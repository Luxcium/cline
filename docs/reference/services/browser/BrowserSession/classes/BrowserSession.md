[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/browser/BrowserSession](../README.md) / BrowserSession

# Class: BrowserSession

Defined in: src/services/browser/BrowserSession.ts:44

## Constructors

### Constructor

> **new BrowserSession**(`context`, `browserSettings`, `useWebp`): `BrowserSession`

Defined in: src/services/browser/BrowserSession.ts:60

#### Parameters

##### context

`ExtensionContext`

##### browserSettings

[`BrowserSettings`](../../../../shared/BrowserSettings/interfaces/BrowserSettings.md)

##### useWebp

`boolean` = `true`

#### Returns

`BrowserSession`

## Properties

### browserSettings

> **browserSettings**: [`BrowserSettings`](../../../../shared/BrowserSettings/interfaces/BrowserSettings.md)

Defined in: src/services/browser/BrowserSession.ts:51

## Methods

### click()

> **click**(`coordinate`): `Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

Defined in: src/services/browser/BrowserSession.ts:596

#### Parameters

##### coordinate

`string`

#### Returns

`Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

***

### closeBrowser()

> **closeBrowser**(): `Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

Defined in: src/services/browser/BrowserSession.ts:408

#### Returns

`Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Defined in: src/services/browser/BrowserSession.ts:667

#### Returns

`Promise`\<`void`\>

***

### doAction()

> **doAction**(`action`): `Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

Defined in: src/services/browser/BrowserSession.ts:446

#### Parameters

##### action

(`page`) => `Promise`\<`void`\>

#### Returns

`Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

***

### ensureChromiumExists()

> **ensureChromiumExists**(): `Promise`\<`PCRStats`\>

Defined in: src/services/browser/BrowserSession.ts:122

#### Returns

`Promise`\<`PCRStats`\>

***

### getConnectionInfo()

> **getConnectionInfo**(): [`BrowserConnectionInfo`](../interfaces/BrowserConnectionInfo.md)

Defined in: src/services/browser/BrowserSession.ts:74

Get current browser connection information

#### Returns

[`BrowserConnectionInfo`](../interfaces/BrowserConnectionInfo.md)

***

### getDetectedChromePath()

> **getDetectedChromePath**(): `Promise`\<\{ `isBundled`: `boolean`; `path`: `string`; \}\>

Defined in: src/services/browser/BrowserSession.ts:96

#### Returns

`Promise`\<\{ `isBundled`: `boolean`; `path`: `string`; \}\>

***

### launchBrowser()

> **launchBrowser**(): `Promise`\<`void`\>

Defined in: src/services/browser/BrowserSession.ts:193

#### Returns

`Promise`\<`void`\>

***

### launchLocalBrowser()

> **launchLocalBrowser**(): `Promise`\<`void`\>

Defined in: src/services/browser/BrowserSession.ts:248

#### Returns

`Promise`\<`void`\>

***

### launchRemoteBrowser()

> **launchRemoteBrowser**(): `Promise`\<`void`\>

Defined in: src/services/browser/BrowserSession.ts:263

#### Returns

`Promise`\<`void`\>

***

### navigateToUrl()

> **navigateToUrl**(`url`): `Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

Defined in: src/services/browser/BrowserSession.ts:549

#### Parameters

##### url

`string`

#### Returns

`Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

***

### relaunchChromeDebugMode()

> **relaunchChromeDebugMode**(`controller`): `Promise`\<`string`\>

Defined in: src/services/browser/BrowserSession.ts:140

#### Parameters

##### controller

[`Controller`](../../../../core/controller/classes/Controller.md)

#### Returns

`Promise`\<`string`\>

***

### scrollDown()

> **scrollDown**(): `Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

Defined in: src/services/browser/BrowserSession.ts:639

#### Returns

`Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

***

### scrollUp()

> **scrollUp**(): `Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

Defined in: src/services/browser/BrowserSession.ts:653

#### Returns

`Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

***

### setUlid()

> **setUlid**(`ulid`): `void`

Defined in: src/services/browser/BrowserSession.ts:189

Set the ULID for telemetry tracking

#### Parameters

##### ulid

`string`

The task ID to associate with browser actions

#### Returns

`void`

***

### testConnection()

> **testConnection**(`host`): `Promise`\<\{ `endpoint?`: `string`; `message`: `string`; `success`: `boolean`; \}\>

Defined in: src/services/browser/BrowserSession.ts:67

#### Parameters

##### host

`string`

#### Returns

`Promise`\<\{ `endpoint?`: `string`; `message`: `string`; `success`: `boolean`; \}\>

***

### type()

> **type**(`text`): `Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>

Defined in: src/services/browser/BrowserSession.ts:631

#### Parameters

##### text

`string`

#### Returns

`Promise`\<[`BrowserActionResult`](../../../../shared/ExtensionMessage/type-aliases/BrowserActionResult.md)\>
