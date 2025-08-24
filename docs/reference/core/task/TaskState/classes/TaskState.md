[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/task/TaskState](../README.md) / TaskState

# Class: TaskState

Defined in: src/core/task/TaskState.ts:5

## Constructors

### Constructor

> **new TaskState**(): `TaskState`

#### Returns

`TaskState`

## Properties

### abandoned

> **abandoned**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:60

***

### abort

> **abort**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:58

***

### apiRequestCount

> **apiRequestCount**: `number` = `0`

Defined in: src/core/task/TaskState.ts:52

***

### apiRequestsSinceLastTodoUpdate

> **apiRequestsSinceLastTodoUpdate**: `number` = `0`

Defined in: src/core/task/TaskState.ts:53

***

### askResponse?

> `optional` **askResponse**: [`ClineAskResponse`](../../../../shared/WebviewMessage/type-aliases/ClineAskResponse.md)

Defined in: src/core/task/TaskState.ts:22

***

### askResponseFiles?

> `optional` **askResponseFiles**: `string`[]

Defined in: src/core/task/TaskState.ts:25

***

### askResponseImages?

> `optional` **askResponseImages**: `string`[]

Defined in: src/core/task/TaskState.ts:24

***

### askResponseText?

> `optional` **askResponseText**: `string`

Defined in: src/core/task/TaskState.ts:23

***

### assistantMessageContent

> **assistantMessageContent**: [`AssistantMessageContent`](../../../assistant-message/type-aliases/AssistantMessageContent.md)[] = `[]`

Defined in: src/core/task/TaskState.ts:13

***

### checkpointTrackerErrorMessage?

> `optional` **checkpointTrackerErrorMessage**: `string`

Defined in: src/core/task/TaskState.ts:46

***

### consecutiveAutoApprovedRequestsCount

> **consecutiveAutoApprovedRequestsCount**: `number` = `0`

Defined in: src/core/task/TaskState.ts:41

***

### consecutiveMistakeCount

> **consecutiveMistakeCount**: `number` = `0`

Defined in: src/core/task/TaskState.ts:44

***

### conversationHistoryDeletedRange?

> `optional` **conversationHistoryDeletedRange**: \[`number`, `number`\]

Defined in: src/core/task/TaskState.ts:33

***

### currentFocusChainChecklist

> **currentFocusChainChecklist**: `null` \| `string` = `null`

Defined in: src/core/task/TaskState.ts:54

***

### currentlySummarizing

> **currentlySummarizing**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:63

***

### currentStreamingContentIndex

> **currentStreamingContentIndex**: `number` = `0`

Defined in: src/core/task/TaskState.ts:12

***

### didAlreadyUseTool

> **didAlreadyUseTool**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:37

***

### didAutomaticallyRetryFailedApiRequest

> **didAutomaticallyRetryFailedApiRequest**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:45

***

### didCompleteReadingStream

> **didCompleteReadingStream**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:9

***

### didEditFile

> **didEditFile**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:38

***

### didFinishAbortingStream

> **didFinishAbortingStream**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:59

***

### didRejectTool

> **didRejectTool**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:36

***

### didRespondToPlanAskBySwitchingMode

> **didRespondToPlanAskBySwitchingMode**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:30

***

### isAwaitingPlanResponse

> **isAwaitingPlanResponse**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:29

***

### isInitialized

> **isInitialized**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:49

***

### isStreaming

> **isStreaming**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:7

***

### isWaitingForFirstChunk

> **isWaitingForFirstChunk**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:8

***

### lastAutoCompactTriggerIndex?

> `optional` **lastAutoCompactTriggerIndex**: `number`

Defined in: src/core/task/TaskState.ts:64

***

### lastMessageTs?

> `optional` **lastMessageTs**: `number`

Defined in: src/core/task/TaskState.ts:26

***

### presentAssistantMessageHasPendingUpdates

> **presentAssistantMessageHasPendingUpdates**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:19

***

### presentAssistantMessageLocked

> **presentAssistantMessageLocked**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:18

***

### todoListWasUpdatedByUser

> **todoListWasUpdatedByUser**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:55

***

### userMessageContent

> **userMessageContent**: (`TextBlockParam` \| `ImageBlockParam`)[] = `[]`

Defined in: src/core/task/TaskState.ts:14

***

### userMessageContentReady

> **userMessageContentReady**: `boolean` = `false`

Defined in: src/core/task/TaskState.ts:15
