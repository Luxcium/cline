[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/transform/openrouter-stream](../README.md) / createOpenRouterStream

# Function: createOpenRouterStream()

> **createOpenRouterStream**(`client`, `systemPrompt`, `messages`, `model`, `reasoningEffort?`, `thinkingBudgetTokens?`, `openRouterProviderSorting?`): `Promise`\<`ChatCompletion` & `object` & `Stream`\<`ChatCompletionChunk`\>\>

Defined in: src/api/transform/openrouter-stream.ts:7

## Parameters

### client

`OpenAI`

### systemPrompt

`string`

### messages

`MessageParam`[]

### model

#### id

`string`

#### info

[`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

### reasoningEffort?

`string`

### thinkingBudgetTokens?

`number`

### openRouterProviderSorting?

`string`

## Returns

`Promise`\<`ChatCompletion` & `object` & `Stream`\<`ChatCompletionChunk`\>\>
