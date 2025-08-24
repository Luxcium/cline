[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [standalone/vscode-context-utils](../README.md) / SecretStore

# Class: SecretStore

Defined in: src/standalone/vscode-context-utils.ts:4

## Implements

- `SecretStorage`

## Constructors

### Constructor

> **new SecretStore**(`filepath`): `SecretStore`

Defined in: src/standalone/vscode-context-utils.ts:8

#### Parameters

##### filepath

`string`

#### Returns

`SecretStore`

## Properties

### onDidChange

> `readonly` **onDidChange**: `Event`\<`SecretStorageChangeEvent`\>

Defined in: src/standalone/vscode-context-utils.ts:12

Fires when a secret is stored or deleted.

#### Implementation of

`vscode.SecretStorage.onDidChange`

## Methods

### delete()

> **delete**(`key`): `Thenable`\<`void`\>

Defined in: src/standalone/vscode-context-utils.ts:24

Remove a secret from storage.

#### Parameters

##### key

`string`

The key the secret was stored under.

#### Returns

`Thenable`\<`void`\>

#### Implementation of

`vscode.SecretStorage.delete`

***

### get()

> **get**(`key`): `Thenable`\<`undefined` \| `string`\>

Defined in: src/standalone/vscode-context-utils.ts:14

Retrieve a secret that was stored with key. Returns undefined if there
is no password matching that key.

#### Parameters

##### key

`string`

The key the secret was stored under.

#### Returns

`Thenable`\<`undefined` \| `string`\>

The stored value or `undefined`.

#### Implementation of

`vscode.SecretStorage.get`

***

### store()

> **store**(`key`, `value`): `Thenable`\<`void`\>

Defined in: src/standalone/vscode-context-utils.ts:18

Store a secret under a given key.

#### Parameters

##### key

`string`

The key to store the secret under.

##### value

`string`

The secret.

#### Returns

`Thenable`\<`void`\>

#### Implementation of

`vscode.SecretStorage.store`
