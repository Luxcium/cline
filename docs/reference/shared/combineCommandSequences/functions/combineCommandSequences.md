[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/combineCommandSequences](../README.md) / combineCommandSequences

# Function: combineCommandSequences()

> **combineCommandSequences**(`messages`): [`ClineMessage`](../../ExtensionMessage/interfaces/ClineMessage.md)[]

Defined in: src/shared/combineCommandSequences.ts:23

Combines sequences of command and command_output messages in an array of ClineMessages.

This function processes an array of ClineMessages objects, looking for sequences
where a 'command' message is followed by one or more 'command_output' messages.
When such a sequence is found, it combines them into a single message, merging
their text contents.

## Parameters

### messages

[`ClineMessage`](../../ExtensionMessage/interfaces/ClineMessage.md)[]

An array of ClineMessage objects to process.

## Returns

[`ClineMessage`](../../ExtensionMessage/interfaces/ClineMessage.md)[]

A new array of ClineMessage objects with command sequences combined.

## Example

```ts
const messages: ClineMessage[] = [
  { type: 'ask', ask: 'command', text: 'ls', ts: 1625097600000 },
  { type: 'ask', ask: 'command_output', text: 'file1.txt', ts: 1625097601000 },
  { type: 'ask', ask: 'command_output', text: 'file2.txt', ts: 1625097602000 }
];
const result = simpleCombineCommandSequences(messages);
// Result: [{ type: 'ask', ask: 'command', text: 'ls\nfile1.txt\nfile2.txt', ts: 1625097600000 }]
```
