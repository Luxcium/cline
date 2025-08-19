[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [standalone/vscode-context-utils](../README.md) / JsonKeyValueStore

# Class: JsonKeyValueStore\<T\>

Defined in: src/standalone/vscode-context-utils.ts:76

A simple key-value store for secrets backed by a JSON file. This is not secure, and it is not thread-safe.

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new JsonKeyValueStore**\<`T`\>(`filePath`): `JsonKeyValueStore`\<`T`\>

Defined in: src/standalone/vscode-context-utils.ts:80

#### Parameters

##### filePath

`string`

#### Returns

`JsonKeyValueStore`\<`T`\>

## Methods

### delete()

> **delete**(`key`): `void`

Defined in: src/standalone/vscode-context-utils.ts:94

#### Parameters

##### key

`string`

#### Returns

`void`

***

### get()

> **get**(`key`): `undefined` \| `T`

Defined in: src/standalone/vscode-context-utils.ts:85

#### Parameters

##### key

`string`

#### Returns

`undefined` \| `T`

***

### keys()

> **keys**(): `Iterable`\<`string`\> \| `ArrayLike`\<`string`\>

Defined in: src/standalone/vscode-context-utils.ts:98

#### Returns

`Iterable`\<`string`\> \| `ArrayLike`\<`string`\>

***

### put()

> **put**(`key`, `value`): `void`

Defined in: src/standalone/vscode-context-utils.ts:89

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`void`
