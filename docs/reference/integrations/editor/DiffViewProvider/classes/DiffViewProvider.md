[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/editor/DiffViewProvider](../README.md) / DiffViewProvider

# Abstract Class: DiffViewProvider

Defined in: src/integrations/editor/DiffViewProvider.ts:14

## Extended by

- [`ExternalDiffViewProvider`](../../../../hosts/external/ExternalDiffviewProvider/classes/ExternalDiffViewProvider.md)
- [`VscodeDiffViewProvider`](../../../../hosts/vscode/VscodeDiffViewProvider/classes/VscodeDiffViewProvider.md)

## Constructors

### Constructor

> **new DiffViewProvider**(): `DiffViewProvider`

Defined in: src/integrations/editor/DiffViewProvider.ts:27

#### Returns

`DiffViewProvider`

## Properties

### absolutePath?

> `protected` `optional` **absolutePath**: `string`

Defined in: src/integrations/editor/DiffViewProvider.ts:22

***

### documentWasOpen

> `protected` **documentWasOpen**: `boolean` = `false`

Defined in: src/integrations/editor/DiffViewProvider.ts:19

***

### editType?

> `optional` **editType**: `"create"` \| `"modify"`

Defined in: src/integrations/editor/DiffViewProvider.ts:15

***

### fileEncoding

> `protected` **fileEncoding**: `string` = `"utf8"`

Defined in: src/integrations/editor/DiffViewProvider.ts:23

***

### isEditing

> **isEditing**: `boolean` = `false`

Defined in: src/integrations/editor/DiffViewProvider.ts:16

***

### originalContent

> **originalContent**: `undefined` \| `string`

Defined in: src/integrations/editor/DiffViewProvider.ts:17

***

### relPath?

> `protected` `optional` **relPath**: `string`

Defined in: src/integrations/editor/DiffViewProvider.ts:21

## Methods

### closeAllDiffViews()

> `abstract` `protected` **closeAllDiffViews**(): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:144

Closes all open diff views.

#### Returns

`Promise`\<`void`\>

***

### getDocumentText()

> `abstract` `protected` **getDocumentText**(): `Promise`\<`undefined` \| `string`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:102

Get the contents of the diff editor document.

Returns undefined if the diff editor was closed.

#### Returns

`Promise`\<`undefined` \| `string`\>

***

### open()

> **open**(`relPath`): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:29

#### Parameters

##### relPath

`string`

#### Returns

`Promise`\<`void`\>

***

### openDiffEditor()

> `abstract` `protected` **openDiffEditor**(): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:69

Opens a diff editor or viewer for the current file.

Called automatically by the `open` method after ensuring the file exists and
creating any necessary directories.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the diff editor is open and ready

***

### replaceText()

> `abstract` **replaceText**(`content`, `rangeToReplace`, `currentLine`): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:237

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

***

### reset()

> **reset**(): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:365

#### Returns

`Promise`\<`void`\>

***

### resetDiffView()

> `abstract` `protected` **resetDiffView**(): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:149

Cleans up the diff view resources and resets internal state.

#### Returns

`Promise`\<`void`\>

***

### revertChanges()

> **revertChanges**(): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:307

#### Returns

`Promise`\<`void`\>

***

### saveChanges()

> **saveChanges**(): `Promise`\<\{ `autoFormattingEdits`: `undefined` \| `string`; `finalContent`: `undefined` \| `string`; `newProblemsMessage`: `undefined` \| `string`; `userEdits`: `undefined` \| `string`; \}\>

Defined in: src/integrations/editor/DiffViewProvider.ts:243

#### Returns

`Promise`\<\{ `autoFormattingEdits`: `undefined` \| `string`; `finalContent`: `undefined` \| `string`; `newProblemsMessage`: `undefined` \| `string`; `userEdits`: `undefined` \| `string`; \}\>

***

### saveDocument()

> `abstract` `protected` **saveDocument**(): `Promise`\<`Boolean`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:139

Save the contents of the diff editor UI to the file.

#### Returns

`Promise`\<`Boolean`\>

true if the file was saved.

***

### scrollAnimation()

> `abstract` `protected` **scrollAnimation**(`startLine`, `endLine`): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:89

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

***

### scrollEditorToLine()

> `abstract` `protected` **scrollEditorToLine**(`line`): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:78

Scrolls the diff editor to reveal a specific line.

It's used during streaming updates to keep the user's view focused on the changing content.

#### Parameters

##### line

`number`

The 0-based line number to scroll to

#### Returns

`Promise`\<`void`\>

***

### scrollToFirstDiff()

> **scrollToFirstDiff**(): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:345

#### Returns

`Promise`\<`void`\>

***

### truncateDocument()

> `abstract` `protected` **truncateDocument**(`lineNumber`): `Promise`\<`void`\>

Defined in: src/integrations/editor/DiffViewProvider.ts:95

Removes content from the specified line to the end of the document.
Called after the final update is received.

#### Parameters

##### lineNumber

`number`

#### Returns

`Promise`\<`void`\>

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
