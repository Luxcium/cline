[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [services/posthog/telemetry/TelemetryService](../README.md) / TelemetryService

# Class: TelemetryService

Defined in: src/services/posthog/telemetry/TelemetryService.ts:30

## Constructors

### Constructor

> **new TelemetryService**(`provider`): `TelemetryService`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:123

Constructor that accepts a PostHogClientProvider instance

#### Parameters

##### provider

[`PostHogClientProvider`](../../../PostHogClientProvider/classes/PostHogClientProvider.md)

PostHogClientProvider instance for sending analytics events

#### Returns

`TelemetryService`

## Methods

### capture()

> **capture**(`event`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:180

Captures a telemetry event if telemetry is enabled

#### Parameters

##### event

The event to capture with its properties

###### event

`string`

###### properties?

`unknown`

#### Returns

`void`

***

### captureBrowserError()

> **captureBrowserError**(`ulid`, `errorType`, `errorMessage`, `context?`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:490

Records when browser errors occur during a task

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### errorType

`string`

Type of error that occurred (e.g., "launch_error", "connection_error", "navigation_error")

##### errorMessage

`string`

The error message

##### context?

Additional context about where the error occurred

###### action?

`string`

###### isRemote?

`boolean`

###### url?

`string`

#### Returns

`void`

***

### captureBrowserToolEnd()

> **captureBrowserToolEnd**(`ulid`, `stats`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:459

Records when the browser tool is completed

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### stats

Statistics about the browser session

###### actionCount

`number`

###### actions?

`string`[]

###### duration

`number`

#### Returns

`void`

***

### captureBrowserToolStart()

> **captureBrowserToolStart**(`ulid`, `browserSettings`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:437

Records when the browser tool is started

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### browserSettings

[`BrowserSettings`](../../../../../shared/BrowserSettings/interfaces/BrowserSettings.md)

The browser settings being used

#### Returns

`void`

***

### captureButtonClick()

> **captureButtonClick**(`button`, `ulid?`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:598

#### Parameters

##### button

`string`

##### ulid?

`string`

#### Returns

`void`

***

### captureCheckpointUsage()

> **captureCheckpointUsage**(`ulid`, `action`, `durationMs?`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:380

Records interactions with the git-based checkpoint system

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### action

The type of checkpoint action

`"shadow_git_initialized"` | `"commit_created"` | `"restored"` | `"diff_generated"`

##### durationMs?

`number`

Optional duration of the operation in milliseconds

#### Returns

`void`

***

### captureConversationTurnEvent()

> **captureConversationTurnEvent**(`ulid`, `provider`, `model`, `source`, `tokenUsage`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:247

Captures that a message was sent, and includes the API provider and model used

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### provider

`string` = `"unknown"`

The API provider (e.g., OpenAI, Anthropic)

##### model

`string` = `"unknown"`

The specific model used (e.g., GPT-4, Claude)

##### source

The source of the message ("user" | "model"). Used to track message patterns and identify when users need to correct the model's responses.

`"user"` | `"assistant"`

##### tokenUsage

Optional token usage data

###### cacheReadTokens?

`number`

###### cacheWriteTokens?

`number`

###### tokensIn?

`number`

###### tokensOut?

`number`

###### totalCost?

`number`

#### Returns

`void`

***

### captureDiffEditFailure()

> **captureDiffEditFailure**(`ulid`, `modelId`, `errorType?`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:404

Records when a diff edit (replace_in_file) operation fails

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### modelId

`string`

##### errorType?

`string`

Type of error that occurred (e.g., "search_not_found", "invalid_format")

#### Returns

`void`

***

### captureExtensionActivated()

> **captureExtensionActivated**(): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:187

#### Returns

`void`

***

### captureFocusChainIncompleteOnCompletion()

> **captureFocusChainIncompleteOnCompletion**(`ulid`, `totalItems`, `completedItems`, `incompleteItems`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:699

Records when a task ends but the task progress list is not complete

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### totalItems

`number`

Total number of items in the focus chain list

##### completedItems

`number`

Number of completed items

##### incompleteItems

`number`

Number of incomplete items

#### Returns

`void`

***

### captureFocusChainListOpened()

> **captureFocusChainListOpened**(`ulid`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:725

Records when users click to open the focus chain markdown file

#### Parameters

##### ulid

`string`

Unique identifier for the task

#### Returns

`void`

***

### captureFocusChainListWritten()

> **captureFocusChainListWritten**(`ulid`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:742

Records when users save and write to the focus chain markdown file

#### Parameters

##### ulid

`string`

Unique identifier for the task

#### Returns

`void`

***

### captureFocusChainProgressFirst()

> **captureFocusChainProgressFirst**(`ulid`, `totalItems`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:656

Records when a task progress list is returned by the model for the first time in a task

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### totalItems

`number`

Number of items in the initial focus chain list

#### Returns

`void`

***

### captureFocusChainProgressUpdate()

> **captureFocusChainProgressUpdate**(`ulid`, `totalItems`, `completedItems`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:676

Records when a task progress list is updated by the model mid-task

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### totalItems

`number`

Total number of items in the focus chain list

##### completedItems

`number`

Number of completed items in the focus chain list

#### Returns

`void`

***

### captureFocusChainToggle()

> **captureFocusChainToggle**(`enabled`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:638

Records when focus chain is enabled/disabled by the user

#### Parameters

##### enabled

`boolean`

Whether focus chain was enabled (true) or disabled (false)

#### Returns

`void`

***

### captureGeminiApiPerformance()

> **captureGeminiApiPerformance**(`ulid`, `modelId`, `data`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:557

Captures Gemini API performance metrics.

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### modelId

`string`

Specific Gemini model ID

##### data

Performance data including TTFT, durations, token counts, cache stats, and API success status

###### apiError?

`string`

###### apiSuccess

`boolean`

###### cacheHit

`boolean`

###### cacheHitPercentage?

`number`

###### cacheReadTokens

`number`

###### outputTokens

`number`

###### promptTokens

`number`

###### throughputTokensPerSec?

`number`

###### totalDurationSec?

`number`

###### ttftSec?

`number`

#### Returns

`void`

***

### captureModelFavoritesUsage()

> **captureModelFavoritesUsage**(`model`, `isFavorited`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:588

Records when the user uses the model favorite button in the model picker

#### Parameters

##### model

`string`

The name of the model the user has interacted with

##### isFavorited

`boolean`

Whether the model is being favorited (true) or unfavorited (false)

#### Returns

`void`

***

### captureModelSelected()

> **captureModelSelected**(`model`, `provider`, `ulid?`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:421

Records when a different model is selected for use

#### Parameters

##### model

`string`

Name of the selected model

##### provider

`string`

Provider of the selected model

##### ulid?

`string`

Optional task identifier if model was selected during a task

#### Returns

`void`

***

### captureModeSwitch()

> **captureModeSwitch**(`ulid`, `mode`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:305

Records when a task switches between plan and act modes

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### mode

[`Mode`](../../../../../shared/storage/types/type-aliases/Mode.md)

The mode being switched to (plan or act)

#### Returns

`void`

***

### captureOptionSelected()

> **captureOptionSelected**(`ulid`, `qty`, `mode`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:523

Records when a user selects an option from AI-generated followup questions

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### qty

`number`

The quantity of options that were presented

##### mode

[`Mode`](../../../../../shared/storage/types/type-aliases/Mode.md)

The mode in which the option was selected ("plan" or "act")

#### Returns

`void`

***

### captureOptionsIgnored()

> **captureOptionsIgnored**(`ulid`, `qty`, `mode`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:540

Records when a user types a custom response instead of selecting one of the AI-generated followup questions

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### qty

`number`

The quantity of options that were presented

##### mode

[`Mode`](../../../../../shared/storage/types/type-aliases/Mode.md)

The mode in which the custom response was provided ("plan" or "act")

#### Returns

`void`

***

### captureProviderApiError()

> **captureProviderApiError**(`args`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:617

Records telemetry when an API provider returns an error

#### Parameters

##### args

###### errorMessage

`string`

###### errorStatus?

`number`

###### model

`string`

###### requestId?

`string`

###### ulid

`string`

#### Returns

`void`

***

### captureSummarizeTask()

> **captureSummarizeTask**(`ulid`, `modelId`, `currentTokens`, `maxContextWindow`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:322

Records when context summarization is triggered due to context window pressure

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### modelId

`string`

The model that triggered summarization

##### currentTokens

`number`

Total tokens in context window when summarization was triggered

##### maxContextWindow

`number`

Maximum context window size for the model

#### Returns

`void`

***

### captureTaskCompleted()

> **captureTaskCompleted**(`ulid`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:232

Records when cline calls the task completion_result tool signifying that cline is done with the task

#### Parameters

##### ulid

`string`

Unique identifier for the task

#### Returns

`void`

***

### captureTaskCreated()

> **captureTaskCreated**(`ulid`, `apiProvider?`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:209

Records when a new task/conversation is started

#### Parameters

##### ulid

`string`

Unique identifier for the new task

##### apiProvider?

`string`

Optional API provider

#### Returns

`void`

***

### captureTaskFeedback()

> **captureTaskFeedback**(`ulid`, `feedbackType`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:339

Records user feedback on completed tasks

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### feedbackType

[`TaskFeedbackType`](../../../../../shared/WebviewMessage/type-aliases/TaskFeedbackType.md)

The type of feedback ("thumbs_up" or "thumbs_down")

#### Returns

`void`

***

### captureTaskRestarted()

> **captureTaskRestarted**(`ulid`, `apiProvider?`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:221

Records when a task/conversation is restarted

#### Parameters

##### ulid

`string`

Unique identifier for the new task

##### apiProvider?

`string`

Optional API provider

#### Returns

`void`

***

### captureTokenUsage()

> **captureTokenUsage**(`ulid`, `tokensIn`, `tokensOut`, `model`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:288

Records token usage metrics for cost tracking and usage analysis

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### tokensIn

`number`

Number of input tokens consumed

##### tokensOut

`number`

Number of output tokens generated

##### model

`string`

The model used for token calculation

#### Returns

`void`

***

### captureToolUsage()

> **captureToolUsage**(`ulid`, `tool`, `modelId`, `autoApproved`, `success`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:361

Records when a tool is used during task execution

#### Parameters

##### ulid

`string`

Unique identifier for the task

##### tool

`string`

Name of the tool being used

##### modelId

`string`

##### autoApproved

`boolean`

Whether the tool was auto-approved based on settings

##### success

`boolean`

Whether the tool execution was successful

#### Returns

`void`

***

### identifyAccount()

> **identifyAccount**(`userInfo`): `void`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:196

Identifies the accounts user

#### Parameters

##### userInfo

[`ClineAccountUserInfo`](../../../../auth/AuthService/interfaces/ClineAccountUserInfo.md)

The user's information

#### Returns

`void`

***

### isCategoryEnabled()

> **isCategoryEnabled**(`category`): `boolean`

Defined in: src/services/posthog/telemetry/TelemetryService.ts:760

Checks if a specific telemetry category is enabled

#### Parameters

##### category

`TelemetryCategory`

The telemetry category to check

#### Returns

`boolean`

Boolean indicating whether the specified telemetry category is enabled

***

### updateTelemetryState()

> **updateTelemetryState**(`didUserOptIn`): `Promise`\<`void`\>

Defined in: src/services/posthog/telemetry/TelemetryService.ts:133

Updates the telemetry state based on user preferences and VSCode settings
Only enables telemetry if both VSCode global telemetry is enabled and user has opted in

#### Parameters

##### didUserOptIn

`boolean`

Whether the user has explicitly opted into telemetry

#### Returns

`Promise`\<`void`\>
