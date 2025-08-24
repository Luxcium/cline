[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [hosts/vscode/VscodeDiffViewProvider](../README.md) / VscodeDiffViewProvider

# Class: VscodeDiffViewProvider

Defined in: src/hosts/vscode/VscodeDiffViewProvider.ts:9

## Extends

- [`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md)

## Constructors

### Constructor

> **new VscodeDiffViewProvider**(): `VscodeDiffViewProvider`

Defined in: src/integrations/editor/DiffViewProvider.ts:27

#### Returns

`VscodeDiffViewProvider`

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`constructor`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#constructor)

## Properties

### absolutePath?

> `protected` `optional` **absolutePath**: `string`

Defined in: src/integrations/editor/DiffViewProvider.ts:22

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`absolutePath`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#absolutepath)

***

### documentWasOpen

> `protected` **documentWasOpen**: `boolean` = `false`

Defined in: src/integrations/editor/DiffViewProvider.ts:19

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`documentWasOpen`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#documentwasopen)

***

### editType?

> `optional` **editType**: `"create"` \| `"modify"`

Defined in: src/integrations/editor/DiffViewProvider.ts:15

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`editType`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#edittype)

***

### fileEncoding

> `protected` **fileEncoding**: `string` = `"utf8"`

Defined in: src/integrations/editor/DiffViewProvider.ts:23

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`fileEncoding`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#fileencoding)

***

### isEditing

> **isEditing**: `boolean` = `false`

Defined in: src/integrations/editor/DiffViewProvider.ts:16

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`isEditing`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#isediting)

***

### originalContent

> **originalContent**: `undefined` \| `string`

Defined in: src/integrations/editor/DiffViewProvider.ts:17

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`originalContent`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#originalcontent)

***

### relPath?

> `protected` `optional` **relPath**: `string`

Defined in: src/integrations/editor/DiffViewProvider.ts:21

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`relPath`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#relpath)

## Methods

### closeAllDiffViews()

> `protected` **closeAllDiffViews**(): `Promise`\<`void`\>

Defined in: src/hosts/vscode/VscodeDiffViewProvider.ts:174

Closes all open diff views.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`closeAllDiffViews`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#closealldiffviews)

***

### getDocumentText()

> `protected` **getDocumentText**(): `Promise`\<`undefined` \| `string`\>

Defined in: src/hosts/vscode/VscodeDiffViewProvider.ts:156

Get the contents of the diff editor document.

Returns undefined if the diff editor was closed.

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Overrides

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`getDocumentText`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#getdocumenttext)

***

### open()

> **open**(`relPath`): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:29

#### Parameters

##### relPath

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`open`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#open)

***

### openDiffEditor()

> **openDiffEditor**(): `Promise`\<`void`\>

Defined in: src/hosts/vscode/VscodeDiffViewProvider.ts:15

Opens a diff editor or viewer for the current file.

Called automatically by the `open` method after ensuring the file exists and
creating any necessary directories.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the diff editor is open and ready

#### Overrides

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`openDiffEditor`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#opendiffeditor)

***

### replaceText()

> **replaceText**(`content`, `rangeToReplace`, `currentLine`): `Promise`\<`void`\>

Defined in: src/hosts/vscode/VscodeDiffViewProvider.ts:92

Replaces text in the diff editor with the specified content.

This abstract method must be implemented by subclasses to handle the actual
text replacement in their specific diff editor implementation. It's called
during the streaming update process to progressively show changes.

#### Parameters

##### content

`string`

The new content to insert into the document

##### rangeToReplace

An object specifying the line range to replace

###### endLine

`number`

###### startLine

`number`

##### currentLine

The current line number being edited, used for scroll positioning

`undefined` | `number`

#### Returns

`Promise`\<`void`\>

A promise that resolves when the text replacement is complete

#### Overrides

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`replaceText`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#replacetext)

***

### reset()

> **reset**(): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:365

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`reset`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#reset)

***

### resetDiffView()

> `protected` **resetDiffView**(): `Promise`\<`void`\>

Defined in: src/hosts/vscode/VscodeDiffViewProvider.ts:191

Cleans up the diff view resources and resets internal state.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`resetDiffView`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#resetdiffview)

***

### revertChanges()

> **revertChanges**(): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:307

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`revertChanges`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#revertchanges)

***

### saveChanges()

> **saveChanges**(): `Promise`\<\{ `autoFormattingEdits`: `undefined` \| `string`; `finalContent`: `undefined` \| `string`; `newProblemsMessage`: `undefined` \| `string`; `userEdits`: `undefined` \| `string`; \}\>

Defined in: src/integrations/editor/DiffViewProvider.ts:243

#### Returns

`Promise`\<\{ `autoFormattingEdits`: `undefined` \| `string`; `finalContent`: `undefined` \| `string`; `newProblemsMessage`: `undefined` \| `string`; `userEdits`: `undefined` \| `string`; \}\>

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`saveChanges`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#savechanges)

***

### saveDocument()

> `protected` **saveDocument**(): `Promise`\<`Boolean`\>

Defined in: src/hosts/vscode/VscodeDiffViewProvider.ts:163

Save the contents of the diff editor UI to the file.

#### Returns

`Promise`\<`Boolean`\>

true if the file was saved.

#### Overrides

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`saveDocument`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#savedocument)

***

### scrollAnimation()

> **scrollAnimation**(`startLine`, `endLine`): `Promise`\<`void`\>

Defined in: src/hosts/vscode/VscodeDiffViewProvider.ts:126

Creates a smooth scrolling animation between two lines in the diff editor.

It's typically used when updates contain many lines, to help the user visually track the flow
of significant changes in the document.

#### Parameters

##### startLine

`number`

The 0-based line number to begin the animation from

##### endLine

`number`

The 0-based line number to animate to

#### Returns

`Promise`\<`void`\>

#### Overrides

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`scrollAnimation`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#scrollanimation)

***

### scrollEditorToLine()

> **scrollEditorToLine**(`line`): `Promise`\<`void`\>

Defined in: src/hosts/vscode/VscodeDiffViewProvider.ts:118

Scrolls the diff editor to reveal a specific line.

It's used during streaming updates to keep the user's view focused on the changing content.

#### Parameters

##### line

`number`

The 0-based line number to scroll to

#### Returns

`Promise`\<`void`\>

#### Overrides

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`scrollEditorToLine`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#scrolleditortoline)

***

### scrollToFirstDiff()

> **scrollToFirstDiff**(): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:345

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`scrollToFirstDiff`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#scrolltofirstdiff)

***

### truncateDocument()

> **truncateDocument**(`lineNumber`): `Promise`\<`void`\>

Defined in: src/hosts/vscode/VscodeDiffViewProvider.ts:141

Removes content from the specified line to the end of the document.
Called after the final update is received.

#### Parameters

##### lineNumber

`number`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`truncateDocument`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#truncatedocument)

***

### update()

> **update**(`accumulatedContent`, `isFinal`, `changeLocation?`): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:151

#### Parameters

##### accumulatedContent

`string`

##### isFinal

`boolean`

##### changeLocation?

###### endChar

`number`

###### endLine

`number`

###### startChar

`number`

###### startLine

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DiffViewProvider`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md).[`update`](../../../../integrations/editor/DiffViewProvider/classes/DiffViewProvider.md#update)
