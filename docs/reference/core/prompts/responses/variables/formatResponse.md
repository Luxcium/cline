[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/prompts/responses](../README.md) / formatResponse

# Variable: formatResponse

> `const` **formatResponse**: `object`

Defined in: src/core/prompts/responses.ts:7

## Type declaration

### autoApprovalMaxReached()

> **autoApprovalMaxReached**: (`feedback?`) => `string`

#### Parameters

##### feedback?

`string`

#### Returns

`string`

### clineIgnoreError()

> **clineIgnoreError**: (`path`) => `string`

#### Parameters

##### path

`string`

#### Returns

`string`

### clineIgnoreInstructions()

> **clineIgnoreInstructions**: (`content`) => `string`

#### Parameters

##### content

`string`

#### Returns

`string`

### clineRulesGlobalDirectoryInstructions()

> **clineRulesGlobalDirectoryInstructions**: (`globalClineRulesFilePath`, `content`) => `string`

#### Parameters

##### globalClineRulesFilePath

`string`

##### content

`string`

#### Returns

`string`

### clineRulesLocalDirectoryInstructions()

> **clineRulesLocalDirectoryInstructions**: (`cwd`, `content`) => `string`

#### Parameters

##### cwd

`string`

##### content

`string`

#### Returns

`string`

### clineRulesLocalFileInstructions()

> **clineRulesLocalFileInstructions**: (`cwd`, `content`) => `string`

#### Parameters

##### cwd

`string`

##### content

`string`

#### Returns

`string`

### condense()

> **condense**: () => `string`

#### Returns

`string`

### contextTruncationFirstUserMessage()

> **contextTruncationFirstUserMessage**: () => `string`

#### Returns

`string`

### contextTruncationNotice()

> **contextTruncationNotice**: () => `string`

#### Returns

`string`

### createPrettyPatch()

> **createPrettyPatch**: (`filename`, `oldStr?`, `newStr?`) => `string`

#### Parameters

##### filename

`string` = `"file"`

##### oldStr?

`string`

##### newStr?

`string`

#### Returns

`string`

### cursorRulesLocalDirectoryInstructions()

> **cursorRulesLocalDirectoryInstructions**: (`cwd`, `content`) => `string`

#### Parameters

##### cwd

`string`

##### content

`string`

#### Returns

`string`

### cursorRulesLocalFileInstructions()

> **cursorRulesLocalFileInstructions**: (`cwd`, `content`) => `string`

#### Parameters

##### cwd

`string`

##### content

`string`

#### Returns

`string`

### diffError()

> **diffError**: (`relPath`, `originalContent`) => `string`

#### Parameters

##### relPath

`string`

##### originalContent

`undefined` | `string`

#### Returns

`string`

### duplicateFileReadNotice()

> **duplicateFileReadNotice**: () => `string`

#### Returns

`string`

### fileContextWarning()

> **fileContextWarning**: (`editedFiles`) => `string`

#### Parameters

##### editedFiles

`string`[]

#### Returns

`string`

### fileEditWithoutUserChanges()

> **fileEditWithoutUserChanges**: (`relPath`, `autoFormattingEdits`, `finalContent`, `newProblemsMessage`) => `string`

#### Parameters

##### relPath

`string`

##### autoFormattingEdits

`undefined` | `string`

##### finalContent

`undefined` | `string`

##### newProblemsMessage

`undefined` | `string`

#### Returns

`string`

### fileEditWithUserChanges()

> **fileEditWithUserChanges**: (`relPath`, `userEdits`, `autoFormattingEdits`, `finalContent`, `newProblemsMessage`) => `string`

#### Parameters

##### relPath

`string`

##### userEdits

`string`

##### autoFormattingEdits

`undefined` | `string`

##### finalContent

`undefined` | `string`

##### newProblemsMessage

`undefined` | `string`

#### Returns

`string`

### formatFilesList()

> **formatFilesList**: (`absolutePath`, `files`, `didHitLimit`, `clineIgnoreController?`) => `string`

#### Parameters

##### absolutePath

`string`

##### files

`string`[]

##### didHitLimit

`boolean`

##### clineIgnoreController?

[`ClineIgnoreController`](../../../ignore/ClineIgnoreController/classes/ClineIgnoreController.md)

#### Returns

`string`

### imageBlocks()

> **imageBlocks**: (`images?`) => `ImageBlockParam`[]

#### Parameters

##### images?

`string`[]

#### Returns

`ImageBlockParam`[]

### invalidMcpToolArgumentError()

> **invalidMcpToolArgumentError**: (`serverName`, `toolName`) => `string`

#### Parameters

##### serverName

`string`

##### toolName

`string`

#### Returns

`string`

### missingToolParameterError()

> **missingToolParameterError**: (`paramName`) => `string`

#### Parameters

##### paramName

`string`

#### Returns

`string`

### noToolsUsed()

> **noToolsUsed**: () => `string`

#### Returns

`string`

### planModeInstructions()

> **planModeInstructions**: () => `string`

#### Returns

`string`

### taskResumption()

> **taskResumption**: (`mode`, `agoText`, `cwd`, `wasRecent`, `responseText?`, `hasPendingFileContextWarnings?`) => \[`string`, `string`\]

#### Parameters

##### mode

[`Mode`](../../../../shared/storage/types/type-aliases/Mode.md)

##### agoText

`string`

##### cwd

`string`

##### wasRecent

`undefined` | `boolean` | `0`

##### responseText?

`string`

##### hasPendingFileContextWarnings?

`boolean`

#### Returns

\[`string`, `string`\]

### toolAlreadyUsed()

> **toolAlreadyUsed**: (`toolName`) => `string`

#### Parameters

##### toolName

`string`

#### Returns

`string`

### toolDenied()

> **toolDenied**: () => `string`

#### Returns

`string`

### toolError()

> **toolError**: (`error?`) => `string`

#### Parameters

##### error?

`string`

#### Returns

`string`

### toolResult()

> **toolResult**: (`text`, `images?`, `fileString?`) => `string` \| (`TextBlockParam` \| `ImageBlockParam`)[]

#### Parameters

##### text

`string`

##### images?

`string`[]

##### fileString?

`string`

#### Returns

`string` \| (`TextBlockParam` \| `ImageBlockParam`)[]

### tooManyMistakes()

> **tooManyMistakes**: (`feedback?`) => `string`

#### Parameters

##### feedback?

`string`

#### Returns

`string`

### windsurfRulesLocalFileInstructions()

> **windsurfRulesLocalFileInstructions**: (`cwd`, `content`) => `string`

#### Parameters

##### cwd

`string`

##### content

`string`

#### Returns

`string`
