[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/ExtensionMessage](../README.md) / ExtensionState

# Interface: ExtensionState

Defined in: src/shared/ExtensionMessage.ts:31

## Properties

### apiConfiguration?

> `optional` **apiConfiguration**: [`ApiConfiguration`](../../api/type-aliases/ApiConfiguration.md)

Defined in: src/shared/ExtensionMessage.ts:34

***

### autoApprovalSettings

> **autoApprovalSettings**: [`AutoApprovalSettings`](../../AutoApprovalSettings/interfaces/AutoApprovalSettings.md)

Defined in: src/shared/ExtensionMessage.ts:35

***

### browserSettings

> **browserSettings**: [`BrowserSettings`](../../BrowserSettings/interfaces/BrowserSettings.md)

Defined in: src/shared/ExtensionMessage.ts:36

***

### checkpointTrackerErrorMessage?

> `optional` **checkpointTrackerErrorMessage**: `string`

Defined in: src/shared/ExtensionMessage.ts:41

***

### clineMessages

> **clineMessages**: [`ClineMessage`](ClineMessage.md)[]

Defined in: src/shared/ExtensionMessage.ts:42

***

### currentFocusChainChecklist?

> `optional` **currentFocusChainChecklist**: `null` \| `string`

Defined in: src/shared/ExtensionMessage.ts:44

***

### currentTaskItem?

> `optional` **currentTaskItem**: [`HistoryItem`](../../HistoryItem/type-aliases/HistoryItem.md)

Defined in: src/shared/ExtensionMessage.ts:43

***

### defaultTerminalProfile?

> `optional` **defaultTerminalProfile**: `string`

Defined in: src/shared/ExtensionMessage.ts:56

***

### distinctId

> **distinctId**: `string`

Defined in: src/shared/ExtensionMessage.ts:60

***

### enableCheckpointsSetting?

> `optional` **enableCheckpointsSetting**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:48

***

### focusChainFeatureFlagEnabled?

> `optional` **focusChainFeatureFlagEnabled**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:70

***

### focusChainSettings

> **focusChainSettings**: [`FocusChainSettings`](../../FocusChainSettings/interfaces/FocusChainSettings.md)

Defined in: src/shared/ExtensionMessage.ts:69

***

### globalClineRulesToggles

> **globalClineRulesToggles**: [`ClineRulesToggles`](../../cline-rules/type-aliases/ClineRulesToggles.md)

Defined in: src/shared/ExtensionMessage.ts:61

***

### globalWorkflowToggles

> **globalWorkflowToggles**: [`ClineRulesToggles`](../../cline-rules/type-aliases/ClineRulesToggles.md)

Defined in: src/shared/ExtensionMessage.ts:64

***

### isNewUser

> **isNewUser**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:32

***

### localClineRulesToggles

> **localClineRulesToggles**: [`ClineRulesToggles`](../../cline-rules/type-aliases/ClineRulesToggles.md)

Defined in: src/shared/ExtensionMessage.ts:62

***

### localCursorRulesToggles

> **localCursorRulesToggles**: [`ClineRulesToggles`](../../cline-rules/type-aliases/ClineRulesToggles.md)

Defined in: src/shared/ExtensionMessage.ts:65

***

### localWindsurfRulesToggles

> **localWindsurfRulesToggles**: [`ClineRulesToggles`](../../cline-rules/type-aliases/ClineRulesToggles.md)

Defined in: src/shared/ExtensionMessage.ts:66

***

### localWorkflowToggles

> **localWorkflowToggles**: [`ClineRulesToggles`](../../cline-rules/type-aliases/ClineRulesToggles.md)

Defined in: src/shared/ExtensionMessage.ts:63

***

### mcpDisplayMode

> **mcpDisplayMode**: [`McpDisplayMode`](../../McpDisplayMode/type-aliases/McpDisplayMode.md)

Defined in: src/shared/ExtensionMessage.ts:46

***

### mcpMarketplaceEnabled?

> `optional` **mcpMarketplaceEnabled**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:45

***

### mcpResponsesCollapsed?

> `optional` **mcpResponsesCollapsed**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:67

***

### mode

> **mode**: [`Mode`](../../storage/types/type-aliases/Mode.md)

Defined in: src/shared/ExtensionMessage.ts:40

***

### openaiReasoningEffort?

> `optional` **openaiReasoningEffort**: [`OpenaiReasoningEffort`](../../storage/types/type-aliases/OpenaiReasoningEffort.md)

Defined in: src/shared/ExtensionMessage.ts:39

***

### planActSeparateModelsSetting

> **planActSeparateModelsSetting**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:47

***

### platform

> **platform**: [`Platform`](../type-aliases/Platform.md)

Defined in: src/shared/ExtensionMessage.ts:49

***

### preferredLanguage?

> `optional` **preferredLanguage**: `string`

Defined in: src/shared/ExtensionMessage.ts:38

***

### remoteBrowserHost?

> `optional` **remoteBrowserHost**: `string`

Defined in: src/shared/ExtensionMessage.ts:37

***

### shellIntegrationTimeout

> **shellIntegrationTimeout**: `number`

Defined in: src/shared/ExtensionMessage.ts:53

***

### shouldShowAnnouncement

> **shouldShowAnnouncement**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:50

***

### strictPlanModeEnabled?

> `optional` **strictPlanModeEnabled**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:68

***

### taskHistory

> **taskHistory**: [`HistoryItem`](../../HistoryItem/type-aliases/HistoryItem.md)[]

Defined in: src/shared/ExtensionMessage.ts:51

***

### telemetrySetting

> **telemetrySetting**: [`TelemetrySetting`](../../TelemetrySetting/type-aliases/TelemetrySetting.md)

Defined in: src/shared/ExtensionMessage.ts:52

***

### terminalOutputLineLimit

> **terminalOutputLineLimit**: `number`

Defined in: src/shared/ExtensionMessage.ts:55

***

### terminalReuseEnabled?

> `optional` **terminalReuseEnabled**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:54

***

### uriScheme?

> `optional` **uriScheme**: `string`

Defined in: src/shared/ExtensionMessage.ts:57

***

### userInfo?

> `optional` **userInfo**: [`UserInfo`](../../UserInfo/interfaces/UserInfo.md)

Defined in: src/shared/ExtensionMessage.ts:58

***

### version

> **version**: `string`

Defined in: src/shared/ExtensionMessage.ts:59

***

### welcomeViewCompleted

> **welcomeViewCompleted**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:33
