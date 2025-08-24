[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [standalone/vscode-context-utils](../README.md) / MementoStore

# Class: MementoStore

Defined in: src/standalone/vscode-context-utils.ts:32

## Implements

- `Memento`

## Constructors

### Constructor

> **new MementoStore**(`filepath`): `MementoStore`

Defined in: src/standalone/vscode-context-utils.ts:35

#### Parameters

##### filepath

`string`

#### Returns

`MementoStore`

## Methods

### get()

> **get**\<`T`\>(`key`): `undefined` \| `T`

Defined in: src/standalone/vscode-context-utils.ts:41

Return a value.

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

A string.

#### Returns

`undefined` \| `T`

The stored value or `undefined`.

#### Implementation of

`vscode.Memento.get`

***

### keys()

> **keys**(): readonly `string`[]

Defined in: src/standalone/vscode-context-utils.ts:38

Returns the stored keys.

#### Returns

readonly `string`[]

The stored keys.

#### Implementation of

`vscode.Memento.keys`

***

### setKeysForSync()

> **setKeysForSync**(`_keys`): `void`

Defined in: src/standalone/vscode-context-utils.ts:48

#### Parameters

##### \_keys

readonly `string`[]

#### Returns

`void`

***

### update()

> **update**(`key`, `value`): `Thenable`\<`void`\>

Defined in: src/standalone/vscode-context-utils.ts:44

Store a value. The value must be JSON-stringifyable.

*Note* that using `undefined` as value removes the key from the underlying
storage.

#### Parameters

##### key

`string`

A string.

##### value

`any`

A value. MUST not contain cyclic references.

#### Returns

`Thenable`\<`void`\>

#### Implementation of

`vscode.Memento.update`
