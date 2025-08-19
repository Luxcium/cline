[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/webview/WebviewProvider](../README.md) / WebviewProvider

# Abstract Class: WebviewProvider

Defined in: src/core/webview/WebviewProvider.ts:15

## Extended by

- [`ExternalWebviewProvider`](../../../../hosts/external/ExternalWebviewProvider/classes/ExternalWebviewProvider.md)
- [`VscodeWebviewProvider`](../../../../hosts/vscode/VscodeWebviewProvider/classes/VscodeWebviewProvider.md)

## Constructors

### Constructor

> **new WebviewProvider**(`context`, `providerType`): `WebviewProvider`

Defined in: src/core/webview/WebviewProvider.ts:23

#### Parameters

##### context

`ExtensionContext`

##### providerType

[`WebviewProviderType`](../../../../shared/webview/types/enumerations/WebviewProviderType.md)

#### Returns

`WebviewProvider`

## Properties

### context

> `readonly` **context**: `ExtensionContext`

Defined in: src/core/webview/WebviewProvider.ts:24

***

### controller

> **controller**: [`Controller`](../../../controller/classes/Controller.md)

Defined in: src/core/webview/WebviewProvider.ts:18

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Defined in: src/core/webview/WebviewProvider.ts:46

#### Returns

`Promise`\<`void`\>

***

### getClientId()

> **getClientId**(): `string`

Defined in: src/core/webview/WebviewProvider.ts:37

#### Returns

`string`

***

### getCspSource()

> `abstract` **getCspSource**(): `string`

Defined in: src/core/webview/WebviewProvider.ts:124

Gets the Content Security Policy source for the webview.

#### Returns

`string`

The CSP source string to be used in the webview's Content-Security-Policy

***

### getHMRHtmlContent()

> `protected` **getHMRHtmlContent**(): `Promise`\<`string`\>

Defined in: src/core/webview/WebviewProvider.ts:239

Connects to the local Vite dev server to allow HMR, with fallback to the bundled assets

#### Returns

`Promise`\<`string`\>

A template string literal containing the HTML that should be
rendered within the webview panel

***

### getHtmlContent()

> **getHtmlContent**(): `string`

Defined in: src/core/webview/WebviewProvider.ts:144

Defines and returns the HTML that should be rendered within the webview panel.

#### Returns

`string`

A template string literal containing the HTML that should be
rendered within the webview panel

#### Remarks

This is also the place where references to the React webview build files
are created and inserted into the webview HTML.

***

### getWebviewUri()

> `abstract` **getWebviewUri**(`uri`): `Uri`

Defined in: src/core/webview/WebviewProvider.ts:117

Converts a local URI to a webview URI that can be used within the webview.

#### Parameters

##### uri

`Uri`

The local URI to convert

#### Returns

`Uri`

A URI that can be used within the webview

***

### isActive()

> `abstract` `protected` **isActive**(): `boolean`

Defined in: src/core/webview/WebviewProvider.ts:61

#### Returns

`boolean`

***

### isVisible()

> `abstract` **isVisible**(): `boolean`

Defined in: src/core/webview/WebviewProvider.ts:131

Checks if the webview is currently visible to the user.

#### Returns

`boolean`

True if the webview is visible, false otherwise

***

### disposeAllInstances()

> `static` **disposeAllInstances**(): `Promise`\<`void`\>

Defined in: src/core/webview/WebviewProvider.ts:104

#### Returns

`Promise`\<`void`\>

***

### getActiveInstance()

> `static` **getActiveInstance**(): `undefined` \| `WebviewProvider`

Defined in: src/core/webview/WebviewProvider.ts:57

#### Returns

`undefined` \| `WebviewProvider`

***

### getAllInstances()

> `static` **getAllInstances**(): `WebviewProvider`[]

Defined in: src/core/webview/WebviewProvider.ts:63

#### Returns

`WebviewProvider`[]

***

### getClientIdForInstance()

> `static` **getClientIdForInstance**(`instance`): `undefined` \| `string`

Defined in: src/core/webview/WebviewProvider.ts:42

#### Parameters

##### instance

`WebviewProvider`

#### Returns

`undefined` \| `string`

***

### getLastActiveControllerId()

> `static` **getLastActiveControllerId**(): `null` \| `string`

Defined in: src/core/webview/WebviewProvider.ts:89

Gets the last active controller ID with performance optimization

#### Returns

`null` \| `string`

The last active controller ID or null

***

### getLastActiveInstance()

> `static` **getLastActiveInstance**(): `undefined` \| `WebviewProvider`

Defined in: src/core/webview/WebviewProvider.ts:77

#### Returns

`undefined` \| `WebviewProvider`

***

### getSidebarInstance()

> `static` **getSidebarInstance**(): `undefined` \| `WebviewProvider`

Defined in: src/core/webview/WebviewProvider.ts:67

#### Returns

`undefined` \| `WebviewProvider`

***

### getTabInstances()

> `static` **getTabInstances**(): `WebviewProvider`[]

Defined in: src/core/webview/WebviewProvider.ts:73

#### Returns

`WebviewProvider`[]

***

### getVisibleInstance()

> `static` **getVisibleInstance**(): `undefined` \| `WebviewProvider`

Defined in: src/core/webview/WebviewProvider.ts:53

#### Returns

`undefined` \| `WebviewProvider`

***

### setLastActiveControllerId()

> `static` **setLastActiveControllerId**(`controllerId`): `void`

Defined in: src/core/webview/WebviewProvider.ts:97

Sets the last active controller ID with validation and performance optimization

#### Parameters

##### controllerId

The controller ID to set as last active

`null` | `string`

#### Returns

`void`
