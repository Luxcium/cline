[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/combineApiRequests](../README.md) / combineApiRequests

# Function: combineApiRequests()

> **combineApiRequests**(`messages`): [`ClineMessage`](../../ExtensionMessage/interfaces/ClineMessage.md)[]

Defined in: src/shared/combineApiRequests.ts:21

Combines API request start and finish messages in an array of ClineMessages.

This function looks for pairs of 'api_req_started' and 'api_req_finished' messages.
When it finds a pair, it combines them into a single 'api_req_combined' message.
The JSON data in the text fields of both messages are merged.

## Parameters

### messages

[`ClineMessage`](../../ExtensionMessage/interfaces/ClineMessage.md)[]

An array of ClineMessage objects to process.

## Returns

[`ClineMessage`](../../ExtensionMessage/interfaces/ClineMessage.md)[]

A new array of ClineMessage objects with API requests combined.

## Example

```ts
const messages = [
  { type: "say", say: "api_req_started", text: '{"request":"GET /api/data"}', ts: 1000 },
  { type: "say", say: "api_req_finished", text: '{"cost":0.005}', ts: 1001 }
];
const result = combineApiRequests(messages);
// Result: [{ type: "say", say: "api_req_started", text: '{"request":"GET /api/data","cost":0.005}', ts: 1000 }]
```
