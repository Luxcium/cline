[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/vscode/DecorationController](../README.md) / DecorationController

# Class: DecorationController

Defined in: src/hosts/vscode/DecorationController.ts:18

## Constructors

### Constructor

> **new DecorationController**(`decorationType`, `editor`): `DecorationController`

Defined in: src/hosts/vscode/DecorationController.ts:23

#### Parameters

##### decorationType

`DecorationType`

##### editor

`TextEditor`

#### Returns

`DecorationController`

## Methods

### addLines()

> **addLines**(`startIndex`, `numLines`): `void`

Defined in: src/hosts/vscode/DecorationController.ts:37

#### Parameters

##### startIndex

`number`

##### numLines

`number`

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: src/hosts/vscode/DecorationController.ts:54

#### Returns

`void`

***

### getDecoration()

> **getDecoration**(): `TextEditorDecorationType`

Defined in: src/hosts/vscode/DecorationController.ts:28

#### Returns

`TextEditorDecorationType`

***

### setActiveLine()

> **setActiveLine**(`line`): `void`

Defined in: src/hosts/vscode/DecorationController.ts:74

#### Parameters

##### line

`number`

#### Returns

`void`

***

### updateOverlayAfterLine()

> **updateOverlayAfterLine**(`line`, `totalLines`): `void`

Defined in: src/hosts/vscode/DecorationController.ts:59

#### Parameters

##### line

`number`

##### totalLines

`number`

#### Returns

`void`
