[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/context/context-management/ContextManager](../README.md) / ContextManager

# Class: ContextManager

Defined in: src/core/context/context-management/ContextManager.ts:43

## Constructors

### Constructor

> **new ContextManager**(): `ContextManager`

Defined in: src/core/context/context-management/ContextManager.ts:54

#### Returns

`ContextManager`

## Methods

### getContextTelemetryData()

> **getContextTelemetryData**(`clineMessages`, `api`, `triggerIndex?`): `null` \| \{ `maxContextWindow`: `number`; `tokensUsed`: `number`; \}

Defined in: src/core/context/context-management/ContextManager.ts:129

Get telemetry data for context management decisions
Returns the token counts and context window info that drove summarization

#### Parameters

##### clineMessages

[`ClineMessage`](../../../../../shared/ExtensionMessage/interfaces/ClineMessage.md)[]

##### api

[`ApiHandler`](../../../../../api/interfaces/ApiHandler.md)

##### triggerIndex?

`number`

#### Returns

`null` \| \{ `maxContextWindow`: `number`; `tokensUsed`: `number`; \}

***

### getNewContextMessagesAndMetadata()

> **getNewContextMessagesAndMetadata**(`apiConversationHistory`, `clineMessages`, `api`, `conversationHistoryDeletedRange`, `previousApiReqIndex`, `taskDirectory`): `Promise`\<\{ `conversationHistoryDeletedRange`: `undefined` \| \[`number`, `number`\]; `truncatedConversationHistory`: `MessageParam`[]; `updatedConversationHistoryDeletedRange`: `boolean`; \}\>

Defined in: src/core/context/context-management/ContextManager.ts:175

primary entry point for getting up to date context

#### Parameters

##### apiConversationHistory

`MessageParam`[]

##### clineMessages

[`ClineMessage`](../../../../../shared/ExtensionMessage/interfaces/ClineMessage.md)[]

##### api

[`ApiHandler`](../../../../../api/interfaces/ApiHandler.md)

##### conversationHistoryDeletedRange

`undefined` | \[`number`, `number`\]

##### previousApiReqIndex

`number`

##### taskDirectory

`string`

#### Returns

`Promise`\<\{ `conversationHistoryDeletedRange`: `undefined` \| \[`number`, `number`\]; `truncatedConversationHistory`: `MessageParam`[]; `updatedConversationHistoryDeletedRange`: `boolean`; \}\>

***

### getNextTruncationRange()

> **getNextTruncationRange**(`apiMessages`, `currentDeletedRange`, `keep`): \[`number`, `number`\]

Defined in: src/core/context/context-management/ContextManager.ts:200

get truncation range

#### Parameters

##### apiMessages

`MessageParam`[]

##### currentDeletedRange

`undefined` | \[`number`, `number`\]

##### keep

`"none"` | `"lastTwo"` | `"half"` | `"quarter"`

#### Returns

\[`number`, `number`\]

***

### getTruncatedMessages()

> **getTruncatedMessages**(`messages`, `deletedRange`): `MessageParam`[]

Defined in: src/core/context/context-management/ContextManager.ts:245

external interface to support old calls

#### Parameters

##### messages

`MessageParam`[]

##### deletedRange

`undefined` | \[`number`, `number`\]

#### Returns

`MessageParam`[]

***

### initializeContextHistory()

> **initializeContextHistory**(`taskDirectory`): `Promise`\<`void`\>

Defined in: src/core/context/context-management/ContextManager.ts:61

public function for loading contextHistoryUpdates from disk, if it exists

#### Parameters

##### taskDirectory

`string`

#### Returns

`Promise`\<`void`\>

***

### shouldCompactContextWindow()

> **shouldCompactContextWindow**(`clineMessages`, `api`, `previousApiReqIndex`): `boolean`

Defined in: src/core/context/context-management/ContextManager.ts:111

Determine whether we should compact context window, based on token counts

#### Parameters

##### clineMessages

[`ClineMessage`](../../../../../shared/ExtensionMessage/interfaces/ClineMessage.md)[]

##### api

[`ApiHandler`](../../../../../api/interfaces/ApiHandler.md)

##### previousApiReqIndex

`number`

#### Returns

`boolean`

***

### triggerApplyStandardContextTruncationNoticeChange()

> **triggerApplyStandardContextTruncationNoticeChange**(`timestamp`, `taskDirectory`): `Promise`\<`void`\>

Defined in: src/core/context/context-management/ContextManager.ts:402

Public function for triggering potentially setting the truncation message
If the truncation message already exists, does nothing, otherwise adds the message

#### Parameters

##### timestamp

`number`

##### taskDirectory

`string`

#### Returns

`Promise`\<`void`\>

***

### truncateContextHistory()

> **truncateContextHistory**(`timestamp`, `taskDirectory`): `Promise`\<`void`\>

Defined in: src/core/context/context-management/ContextManager.ts:327

removes all context history updates that occurred after the specified timestamp and saves to disk

#### Parameters

##### timestamp

`number`

##### taskDirectory

`string`

#### Returns

`Promise`\<`void`\>
