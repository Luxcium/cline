[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/uri/SharedUriHandler](../README.md) / SharedUriHandler

# Class: SharedUriHandler

Defined in: src/services/uri/SharedUriHandler.ts:7

Shared URI handler that processes both VSCode URI events and HTTP server callbacks

## Constructors

### Constructor

> **new SharedUriHandler**(): `SharedUriHandler`

#### Returns

`SharedUriHandler`

## Methods

### convertHttpUrlToUri()

> `static` **convertHttpUrlToUri**(`httpUrl`): `Uri`

Defined in: src/services/uri/SharedUriHandler.ts:68

Converts an HTTP URL to a vscode.Uri for unified processing

#### Parameters

##### httpUrl

`string`

The HTTP URL to convert

#### Returns

`Uri`

vscode.Uri representation of the URL

***

### handleUri()

> `static` **handleUri**(`uri`): `Promise`\<`boolean`\>

Defined in: src/services/uri/SharedUriHandler.ts:13

Processes a URI and routes it to the appropriate handler

#### Parameters

##### uri

`Uri`

The URI to process (can be from VSCode or converted from HTTP)

#### Returns

`Promise`\<`boolean`\>

Promise<boolean> indicating success (true) or failure (false)
