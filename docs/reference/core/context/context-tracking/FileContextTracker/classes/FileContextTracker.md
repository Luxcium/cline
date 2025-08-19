[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/context/context-tracking/FileContextTracker](../README.md) / FileContextTracker

# Class: FileContextTracker

Defined in: src/core/context/context-tracking/FileContextTracker.ts:25

This class is responsible for tracking file operations.
If the full contents of a file are passed to Cline via a tool, mention, or edit, the file is marked as active.
If a file is modified outside of Cline, we detect and track this change to prevent stale context.
This is used when restoring a task (non-git "checkpoint" restore), and mid-task.

## Constructors

### Constructor

> **new FileContextTracker**(`controller`, `taskId`): `FileContextTracker`

Defined in: src/core/context/context-tracking/FileContextTracker.ts:34

#### Parameters

##### controller

[`Controller`](../../../../controller/classes/Controller.md)

##### taskId

`string`

#### Returns

`FileContextTracker`

## Properties

### taskId

> `readonly` **taskId**: `string`

Defined in: src/core/context/context-tracking/FileContextTracker.ts:27

## Methods

### addFileToFileContextTracker()

> **addFileToFileContextTracker**(`context`, `taskId`, `filePath`, `source`): `Promise`\<`void`\>

Defined in: src/core/context/context-tracking/FileContextTracker.ts:108

Adds a file to the metadata tracker
This handles the business logic of determining if the file is new, stale, or active.
It also updates the metadata with the latest read/edit dates.

#### Parameters

##### context

`ExtensionContext`

##### taskId

`string`

##### filePath

`string`

##### source

`"read_tool"` | `"user_edited"` | `"cline_edited"` | `"file_mentioned"`

#### Returns

`Promise`\<`void`\>

***

### detectFilesEditedAfterMessage()

> **detectFilesEditedAfterMessage**(`messageTs`, `deletedMessages`): `Promise`\<`string`[]\>

Defined in: src/core/context/context-tracking/FileContextTracker.ts:199

Detects files that were edited by Cline or users after a specific message timestamp
This is used when restoring checkpoints to warn about potential file content mismatches

#### Parameters

##### messageTs

`number`

##### deletedMessages

[`ClineMessage`](../../../../../shared/ExtensionMessage/interfaces/ClineMessage.md)[]

#### Returns

`Promise`\<`string`[]\>

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Defined in: src/core/context/context-tracking/FileContextTracker.ts:189

Disposes all file watchers

#### Returns

`Promise`\<`void`\>

***

### getAndClearRecentlyModifiedFiles()

> **getAndClearRecentlyModifiedFiles**(): `string`[]

Defined in: src/core/context/context-tracking/FileContextTracker.ts:173

Returns (and then clears) the set of recently modified files

#### Returns

`string`[]

***

### markFileAsEditedByCline()

> **markFileAsEditedByCline**(`filePath`): `void`

Defined in: src/core/context/context-tracking/FileContextTracker.ts:182

Marks a file as edited by Cline to prevent false positives in file watchers

#### Parameters

##### filePath

`string`

#### Returns

`void`

***

### retrieveAndClearPendingFileContextWarning()

> **retrieveAndClearPendingFileContextWarning**(): `Promise`\<`undefined` \| `string`[]\>

Defined in: src/core/context/context-tracking/FileContextTracker.ts:269

Retrieves and clears pending file context warning from workspace state

#### Returns

`Promise`\<`undefined` \| `string`[]\>

***

### retrievePendingFileContextWarning()

> **retrievePendingFileContextWarning**(): `Promise`\<`undefined` \| `string`[]\>

Defined in: src/core/context/context-tracking/FileContextTracker.ts:255

Retrieves pending file context warning from workspace state (without clearing it)

#### Returns

`Promise`\<`undefined` \| `string`[]\>

***

### setupFileWatcher()

> **setupFileWatcher**(`filePath`): `Promise`\<`void`\>

Defined in: src/core/context/context-tracking/FileContextTracker.ts:42

File watchers are set up for each file that is tracked in the task metadata.

#### Parameters

##### filePath

`string`

#### Returns

`Promise`\<`void`\>

***

### storePendingFileContextWarning()

> **storePendingFileContextWarning**(`files`): `Promise`\<`void`\>

Defined in: src/core/context/context-tracking/FileContextTracker.ts:241

Stores pending file context warning in workspace state so it persists across task reinitialization

#### Parameters

##### files

`string`[]

#### Returns

`Promise`\<`void`\>

***

### trackFileContext()

> **trackFileContext**(`filePath`, `operation`): `Promise`\<`void`\>

Defined in: src/core/context/context-tracking/FileContextTracker.ts:85

Tracks a file operation in metadata and sets up a watcher for the file
This is the main entry point for FileContextTracker and is called when a file is passed to Cline via a tool, mention, or edit.

#### Parameters

##### filePath

`string`

##### operation

`"read_tool"` | `"user_edited"` | `"cline_edited"` | `"file_mentioned"`

#### Returns

`Promise`\<`void`\>

***

### cleanupOrphanedWarnings()

> `static` **cleanupOrphanedWarnings**(`context`): `Promise`\<`void`\>

Defined in: src/core/context/context-tracking/FileContextTracker.ts:286

Static method to clean up orphaned pending file context warnings at startup
This removes warnings for tasks that may no longer exist

#### Parameters

##### context

`ExtensionContext`

#### Returns

`Promise`\<`void`\>
