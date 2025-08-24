[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/vscode-lm](../README.md) / VsCodeLmHandler

# Class: VsCodeLmHandler

Defined in: src/api/providers/vscode-lm.ts:130

Handles interaction with VS Code's Language Model API for chat-based operations.
This handler implements the ApiHandler interface to provide VS Code LM specific functionality.

## Implements

## Remarks

The handler manages a VS Code language model chat client and provides methods to:
- Create and manage chat client instances
- Stream messages using VS Code's Language Model API
- Retrieve model information

## Example

```typescript
const options = {
  vsCodeLmModelSelector: { vendor: "copilot", family: "gpt-4" }
};
const handler = new VsCodeLmHandler(options);

// Stream a conversation
const systemPrompt = "You are a helpful assistant";
const messages = [{ role: "user", content: "Hello!" }];
for await (const chunk of handler.createMessage(systemPrompt, messages)) {
  console.log(chunk);
}
```

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)
- [`SingleCompletionHandler`](../../../interfaces/SingleCompletionHandler.md)

## Constructors

### Constructor

> **new VsCodeLmHandler**(`options`): `VsCodeLmHandler`

Defined in: src/api/providers/vscode-lm.ts:136

#### Parameters

##### options

`VsCodeLmHandlerOptions`

#### Returns

`VsCodeLmHandler`

## Methods

### completePrompt()

> **completePrompt**(`prompt`): `Promise`\<`string`\>

Defined in: src/api/providers/vscode-lm.ts:577

#### Parameters

##### prompt

`string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`SingleCompletionHandler`](../../../interfaces/SingleCompletionHandler.md).[`completePrompt`](../../../interfaces/SingleCompletionHandler.md#completeprompt)

***

### createClient()

> **createClient**(`selector`): `Promise`\<`LanguageModelChat`\>

Defined in: src/api/providers/vscode-lm.ts:175

Creates a language model chat client based on the provided selector.

#### Parameters

##### selector

`LanguageModelChatSelector`

Selector criteria to filter language model chat instances

#### Returns

`Promise`\<`LanguageModelChat`\>

Promise resolving to the first matching language model chat instance

#### Throws

Error when no matching models are found with the given selector

#### Example

```ts
const selector = { vendor: "copilot", family: "gpt-4o" };
const chatClient = await createClient(selector);
```

***

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/vscode-lm.ts:373

#### Parameters

##### systemPrompt

`string`

##### messages

`MessageParam`[]

#### Returns

[`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`createMessage`](../../../interfaces/ApiHandler.md#createmessage)

***

### dispose()

> **dispose**(): `void`

Defined in: src/api/providers/vscode-lm.ts:229

Creates and streams a message using the VS Code Language Model API.

#### Returns

`void`

#### Yields

An async generator that yields either text chunks or tool calls from the model response

#### Throws

When vsCodeLmModelSelector option is not provided

#### Throws

When the response stream encounters an error

#### Remarks

This method handles the initialization of the VS Code LM client if not already created,
converts the messages to VS Code LM format, and streams the response chunks.
Tool calls handling is currently a work in progress.

***

### getModel()

> **getModel**(): `object`

Defined in: src/api/providers/vscode-lm.ts:521

#### Returns

`object`

##### id

> **id**: `string`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
