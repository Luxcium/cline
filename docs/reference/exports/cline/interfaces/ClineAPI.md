[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [exports/cline](../README.md) / ClineAPI

# Interface: ClineAPI

Defined in: src/exports/cline.d.ts:1

## Methods

### pressPrimaryButton()

> **pressPrimaryButton**(): `Promise`\<`void`\>

Defined in: src/exports/cline.d.ts:19

Simulates pressing the primary button in the chat interface.

#### Returns

`Promise`\<`void`\>

***

### pressSecondaryButton()

> **pressSecondaryButton**(): `Promise`\<`void`\>

Defined in: src/exports/cline.d.ts:24

Simulates pressing the secondary button in the chat interface.

#### Returns

`Promise`\<`void`\>

***

### sendMessage()

> **sendMessage**(`message?`, `images?`): `Promise`\<`void`\>

Defined in: src/exports/cline.d.ts:14

Sends a message to the current task.

#### Parameters

##### message?

`string`

Optional message to send.

##### images?

`string`[]

Optional array of image data URIs (e.g., "data:image/webp;base64,...").

#### Returns

`Promise`\<`void`\>

***

### startNewTask()

> **startNewTask**(`task?`, `images?`): `Promise`\<`void`\>

Defined in: src/exports/cline.d.ts:7

Starts a new task with an optional initial message and images.

#### Parameters

##### task?

`string`

Optional initial task message.

##### images?

`string`[]

Optional array of image data URIs (e.g., "data:image/webp;base64,...").

#### Returns

`Promise`\<`void`\>
