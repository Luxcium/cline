[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/external/ExternalWebviewProvider](../README.md) / ExternalWebviewProvider

# Class: ExternalWebviewProvider

Defined in: src/hosts/external/ExternalWebviewProvider.ts:6

## Extends

- [`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)

## Constructors

### Constructor

> **new ExternalWebviewProvider**(`context`, `providerType`): `ExternalWebviewProvider`

Defined in: src/hosts/external/ExternalWebviewProvider.ts:10

#### Parameters

##### context

`ExtensionContext`

##### providerType

[`WebviewProviderType`](../../../../shared/webview/types/enumerations/WebviewProviderType.md)

#### Returns

`ExternalWebviewProvider`

#### Overrides

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`constructor`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#constructor)

## Properties

### context

> `readonly` **context**: `ExtensionContext`

Defined in: src/core/webview/WebviewProvider.ts:24

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`context`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#context)

***

### controller

> **controller**: [`Controller`](../../../../core/controller/classes/Controller.md)

Defined in: src/core/webview/WebviewProvider.ts:18

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`controller`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#controller)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Defined in: src/core/webview/WebviewProvider.ts:46

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`dispose`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#dispose)

***

### getClientId()

> **getClientId**(): `string`

Defined in: src/core/webview/WebviewProvider.ts:37

#### Returns

`string`

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getClientId`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#getclientid)

***

### getCspSource()

> **getCspSource**(): `string`

Defined in: src/hosts/external/ExternalWebviewProvider.ts:20

Gets the Content Security Policy source for the webview.

#### Returns

`string`

The CSP source string to be used in the webview's Content-Security-Policy

#### Overrides

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getCspSource`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#getcspsource)

***

### getHMRHtmlContent()

> `protected` **getHMRHtmlContent**(): `Promise`\<`string`\>

Defined in: src/core/webview/WebviewProvider.ts:239

Connects to the local Vite dev server to allow HMR, with fallback to the bundled assets

#### Returns

`Promise`\<`string`\>

A template string literal containing the HTML that should be
rendered within the webview panel

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getHMRHtmlContent`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#gethmrhtmlcontent)

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

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getHtmlContent`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#gethtmlcontent)

***

### getWebviewUri()

> **getWebviewUri**(`uri`): `URI`

Defined in: src/hosts/external/ExternalWebviewProvider.ts:14

Converts a local URI to a webview URI that can be used within the webview.

#### Parameters

##### uri

`URI`

The local URI to convert

#### Returns

`URI`

A URI that can be used within the webview

#### Overrides

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getWebviewUri`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#getwebviewuri)

***

### isActive()

> `protected` **isActive**(): `boolean`

Defined in: src/hosts/external/ExternalWebviewProvider.ts:26

#### Returns

`boolean`

#### Overrides

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`isActive`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#isactive)

***

### isVisible()

> **isVisible**(): `boolean`

Defined in: src/hosts/external/ExternalWebviewProvider.ts:23

Checks if the webview is currently visible to the user.

#### Returns

`boolean`

True if the webview is visible, false otherwise

#### Overrides

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`isVisible`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#isvisible)

***

### disposeAllInstances()

> `static` **disposeAllInstances**(): `Promise`\<`void`\>

Defined in: src/core/webview/WebviewProvider.ts:104

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`disposeAllInstances`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#disposeallinstances)

***

### getActiveInstance()

> `static` **getActiveInstance**(): `undefined` \| [`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)

Defined in: src/core/webview/WebviewProvider.ts:57

#### Returns

`undefined` \| [`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getActiveInstance`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#getactiveinstance)

***

### getAllInstances()

> `static` **getAllInstances**(): [`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)[]

Defined in: src/core/webview/WebviewProvider.ts:63

#### Returns

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)[]

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getAllInstances`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#getallinstances)

***

### getClientIdForInstance()

> `static` **getClientIdForInstance**(`instance`): `undefined` \| `string`

Defined in: src/core/webview/WebviewProvider.ts:42

#### Parameters

##### instance

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)

#### Returns

`undefined` \| `string`

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getClientIdForInstance`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#getclientidforinstance)

***

### getLastActiveControllerId()

> `static` **getLastActiveControllerId**(): `null` \| `string`

Defined in: src/core/webview/WebviewProvider.ts:89

Gets the last active controller ID with performance optimization

#### Returns

`null` \| `string`

The last active controller ID or null

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getLastActiveControllerId`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#getlastactivecontrollerid)

***

### getLastActiveInstance()

> `static` **getLastActiveInstance**(): `undefined` \| [`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)

Defined in: src/core/webview/WebviewProvider.ts:77

#### Returns

`undefined` \| [`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getLastActiveInstance`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#getlastactiveinstance)

***

### getSidebarInstance()

> `static` **getSidebarInstance**(): `undefined` \| [`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)

Defined in: src/core/webview/WebviewProvider.ts:67

#### Returns

`undefined` \| [`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getSidebarInstance`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#getsidebarinstance)

***

### getTabInstances()

> `static` **getTabInstances**(): [`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)[]

Defined in: src/core/webview/WebviewProvider.ts:73

#### Returns

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)[]

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getTabInstances`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#gettabinstances)

***

### getVisibleInstance()

> `static` **getVisibleInstance**(): `undefined` \| [`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)

Defined in: src/core/webview/WebviewProvider.ts:53

#### Returns

`undefined` \| [`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md)

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`getVisibleInstance`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#getvisibleinstance)

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

#### Inherited from

[`WebviewProvider`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md).[`setLastActiveControllerId`](../../../../core/webview/WebviewProvider/classes/WebviewProvider.md#setlastactivecontrollerid)
