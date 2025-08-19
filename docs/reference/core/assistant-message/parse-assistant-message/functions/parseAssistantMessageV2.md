[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/assistant-message/parse-assistant-message](../README.md) / parseAssistantMessageV2

# Function: parseAssistantMessageV2()

> **parseAssistantMessageV2**(`assistantMessage`): [`AssistantMessageContent`](../../type-aliases/AssistantMessageContent.md)[]

Defined in: src/core/assistant-message/parse-assistant-message.ts:26

## Parameters

### assistantMessage

`string`

The raw string output from the assistant.

## Returns

[`AssistantMessageContent`](../../type-aliases/AssistantMessageContent.md)[]

An array of `AssistantMessageContent` objects, which can be `TextContent` or `ToolUse`.
         Blocks that were not fully closed by the end of the input string will have their `partial` flag set to `true`.

## Description

**Version 2**
Parses an assistant message string potentially containing mixed text and tool usage blocks
marked with XML-like tags into an array of structured content objects.

This version aims for efficiency by avoiding the character-by-character accumulator of V1.
It iterates through the string using an index `i`. At each position, it checks if the substring
*ending* at `i` matches any known opening or closing tags for tools or parameters using `startsWith`
with an offset.
It uses pre-computed Maps (`toolUseOpenTags`, `toolParamOpenTags`) for quick tag lookups.
State is managed using indices (`currentTextContentStart`, `currentToolUseStart`, `currentParamValueStart`)
pointing to the start of the current block within the original `assistantMessage` string.
Slicing is used to extract content only when a block (text, parameter, or tool use) is completed.
Special handling for `write_to_file` and `new_rule` content parameters is included, using `indexOf`
and `lastIndexOf` on the relevant slice to handle potentially nested closing tags.
If the input string ends mid-block, the last open block is added and marked as partial.
