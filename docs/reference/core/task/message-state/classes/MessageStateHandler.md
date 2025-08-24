[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/task/message-state](../README.md) / MessageStateHandler

# Class: MessageStateHandler

Defined in: src/core/task/message-state.ts:27

## Constructors

### Constructor

> **new MessageStateHandler**(`params`): `MessageStateHandler`

Defined in: src/core/task/message-state.ts:39

#### Parameters

##### params

`MessageStateHandlerParams`

#### Returns

`MessageStateHandler`

## Methods

### addToApiConversationHistory()

> **addToApiConversationHistory**(`message`): `Promise`\<`void`\>

Defined in: src/core/task/message-state.ts:115

#### Parameters

##### message

`MessageParam`

#### Returns

`Promise`\<`void`\>

***

### addToClineMessages()

> **addToClineMessages**(`message`): `Promise`\<`void`\>

Defined in: src/core/task/message-state.ts:125

#### Parameters

##### message

[`ClineMessage`](../../../../shared/ExtensionMessage/interfaces/ClineMessage.md)

#### Returns

`Promise`\<`void`\>

***

### getApiConversationHistory()

> **getApiConversationHistory**(): `MessageParam`[]

Defined in: src/core/task/message-state.ts:53

#### Returns

`MessageParam`[]

***

### getClineMessages()

> **getClineMessages**(): [`ClineMessage`](../../../../shared/ExtensionMessage/interfaces/ClineMessage.md)[]

Defined in: src/core/task/message-state.ts:61

#### Returns

[`ClineMessage`](../../../../shared/ExtensionMessage/interfaces/ClineMessage.md)[]

***

### overwriteApiConversationHistory()

> **overwriteApiConversationHistory**(`newHistory`): `Promise`\<`void`\>

Defined in: src/core/task/message-state.ts:120

#### Parameters

##### newHistory

`MessageParam`[]

#### Returns

`Promise`\<`void`\>

***

### overwriteClineMessages()

> **overwriteClineMessages**(`newMessages`): `Promise`\<`void`\>

Defined in: src/core/task/message-state.ts:134

#### Parameters

##### newMessages

[`ClineMessage`](../../../../shared/ExtensionMessage/interfaces/ClineMessage.md)[]

#### Returns

`Promise`\<`void`\>

***

### saveClineMessagesAndUpdateHistory()

> **saveClineMessagesAndUpdateHistory**(): `Promise`\<`void`\>

Defined in: src/core/task/message-state.ts:69

#### Returns

`Promise`\<`void`\>

***

### setApiConversationHistory()

> **setApiConversationHistory**(`newHistory`): `void`

Defined in: src/core/task/message-state.ts:57

#### Parameters

##### newHistory

`MessageParam`[]

#### Returns

`void`

***

### setCheckpointTracker()

> **setCheckpointTracker**(`tracker`): `void`

Defined in: src/core/task/message-state.ts:49

#### Parameters

##### tracker

`undefined` | [`default`](../../../../integrations/checkpoints/CheckpointTracker/classes/default.md)

#### Returns

`void`

***

### setClineMessages()

> **setClineMessages**(`newMessages`): `void`

Defined in: src/core/task/message-state.ts:65

#### Parameters

##### newMessages

[`ClineMessage`](../../../../shared/ExtensionMessage/interfaces/ClineMessage.md)[]

#### Returns

`void`

***

### updateClineMessage()

> **updateClineMessage**(`index`, `updates`): `Promise`\<`void`\>

Defined in: src/core/task/message-state.ts:139

#### Parameters

##### index

`number`

##### updates

`Partial`\<[`ClineMessage`](../../../../shared/ExtensionMessage/interfaces/ClineMessage.md)\>

#### Returns

`Promise`\<`void`\>
