[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/transform/r1-format](../README.md) / convertToR1Format

# Function: convertToR1Format()

> **convertToR1Format**(`messages`): `ChatCompletionMessageParam`[]

Defined in: src/api/transform/r1-format.ts:12

Converts Anthropic messages to OpenAI format and merges consecutive messages with the same role.
This is required for DeepSeek Reasoner which does not support successive messages with the same role.
DeepSeek highly recommends using 'user' role instead of 'system' role for optimal performance.

## Parameters

### messages

`MessageParam`[]

Array of Anthropic messages

## Returns

`ChatCompletionMessageParam`[]

Array of OpenAI messages where consecutive messages with the same role are merged together
