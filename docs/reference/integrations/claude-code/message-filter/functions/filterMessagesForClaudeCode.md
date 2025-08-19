[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/claude-code/message-filter](../README.md) / filterMessagesForClaudeCode

# Function: filterMessagesForClaudeCode()

> **filterMessagesForClaudeCode**(`messages`): `MessageParam`[]

Defined in: src/integrations/claude-code/message-filter.ts:7

Filters out image blocks from messages since Claude Code doesn't support images.
Replaces image blocks with text placeholders similar to how VSCode LM provider handles it.

## Parameters

### messages

`MessageParam`[]

## Returns

`MessageParam`[]
