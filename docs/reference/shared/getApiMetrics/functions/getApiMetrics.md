[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/getApiMetrics](../README.md) / getApiMetrics

# Function: getApiMetrics()

> **getApiMetrics**(`messages`): `ApiMetrics`

Defined in: src/shared/getApiMetrics.ts:28

Calculates API metrics from an array of ClineMessages.

This function processes 'api_req_started' messages that have been combined with their
corresponding 'api_req_finished' messages by the combineApiRequests function. It also takes into account 'deleted_api_reqs' messages, which are aggregated from deleted messages.
It extracts and sums up the tokensIn, tokensOut, cacheWrites, cacheReads, and cost from these messages.

## Parameters

### messages

[`ClineMessage`](../../ExtensionMessage/interfaces/ClineMessage.md)[]

An array of ClineMessage objects to process.

## Returns

`ApiMetrics`

An ApiMetrics object containing totalTokensIn, totalTokensOut, totalCacheWrites, totalCacheReads, and totalCost.

## Example

```ts
const messages = [
  { type: "say", say: "api_req_started", text: '{"request":"GET /api/data","tokensIn":10,"tokensOut":20,"cost":0.005}', ts: 1000 }
];
const { totalTokensIn, totalTokensOut, totalCost } = getApiMetrics(messages);
// Result: { totalTokensIn: 10, totalTokensOut: 20, totalCost: 0.005 }
```
