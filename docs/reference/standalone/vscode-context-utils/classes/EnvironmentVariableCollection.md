[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [standalone/vscode-context-utils](../README.md) / EnvironmentVariableCollection

# Class: EnvironmentVariableCollection

Defined in: src/standalone/vscode-context-utils.ts:115

This is not used in cline, none of the methods are implemented.

## Implements

- `EnvironmentVariableCollection`

## Constructors

### Constructor

> **new EnvironmentVariableCollection**(): `EnvironmentVariableCollection`

#### Returns

`EnvironmentVariableCollection`

## Properties

### description

> **description**: `undefined` \| `string` = `undefined`

Defined in: src/standalone/vscode-context-utils.ts:117

#### Implementation of

`EnvironmentVariableCollection.description`

***

### persistent

> **persistent**: `boolean` = `false`

Defined in: src/standalone/vscode-context-utils.ts:116

#### Implementation of

`EnvironmentVariableCollection.persistent`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<\[`string`, `EnvironmentVariableMutator`\], `any`, `any`\>

Defined in: src/standalone/vscode-context-utils.ts:142

#### Returns

`Iterator`\<\[`string`, `EnvironmentVariableMutator`\], `any`, `any`\>

#### Implementation of

`EnvironmentVariableCollection.[iterator]`

***

### append()

> **append**(`_variable`, `_value`, `_options?`): `void`

Defined in: src/standalone/vscode-context-utils.ts:121

#### Parameters

##### \_variable

`string`

##### \_value

`string`

##### \_options?

`EnvironmentVariableMutatorOptions`

#### Returns

`void`

#### Implementation of

`EnvironmentVariableCollection.append`

***

### clear()

> **clear**(): `void`

Defined in: src/standalone/vscode-context-utils.ts:139

#### Returns

`void`

#### Implementation of

`EnvironmentVariableCollection.clear`

***

### delete()

> **delete**(`_variable`): `void`

Defined in: src/standalone/vscode-context-utils.ts:136

#### Parameters

##### \_variable

`string`

#### Returns

`void`

#### Implementation of

`EnvironmentVariableCollection.delete`

***

### forEach()

> **forEach**(`_callback`, `_thisArg?`): `void`

Defined in: src/standalone/vscode-context-utils.ts:130

#### Parameters

##### \_callback

(`variable`, `mutator`, `collection`) => `any`

##### \_thisArg?

`any`

#### Returns

`void`

#### Implementation of

`EnvironmentVariableCollection.forEach`

***

### get()

> **get**(`_variable`): `undefined` \| `EnvironmentVariableMutator`

Defined in: src/standalone/vscode-context-utils.ts:127

#### Parameters

##### \_variable

`string`

#### Returns

`undefined` \| `EnvironmentVariableMutator`

#### Implementation of

`EnvironmentVariableCollection.get`

***

### getScoped()

> **getScoped**(`_scope`): `EnvironmentVariableCollection`

Defined in: src/standalone/vscode-context-utils.ts:145

#### Parameters

##### \_scope

`EnvironmentVariableScope`

#### Returns

`EnvironmentVariableCollection`

#### Implementation of

`EnvironmentVariableCollection.getScoped`

***

### prepend()

> **prepend**(`_variable`, `_value`, `_options?`): `void`

Defined in: src/standalone/vscode-context-utils.ts:124

#### Parameters

##### \_variable

`string`

##### \_value

`string`

##### \_options?

`EnvironmentVariableMutatorOptions`

#### Returns

`void`

#### Implementation of

`EnvironmentVariableCollection.prepend`

***

### replace()

> **replace**(`_variable`, `_value`, `_options?`): `void`

Defined in: src/standalone/vscode-context-utils.ts:118

#### Parameters

##### \_variable

`string`

##### \_value

`string`

##### \_options?

`EnvironmentVariableMutatorOptions`

#### Returns

`void`

#### Implementation of

`EnvironmentVariableCollection.replace`
