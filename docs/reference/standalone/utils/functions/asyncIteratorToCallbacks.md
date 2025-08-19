[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [standalone/utils](../README.md) / asyncIteratorToCallbacks

# Function: asyncIteratorToCallbacks()

> **asyncIteratorToCallbacks**\<`T`\>(`stream`, `callbacks`): `Promise`\<`void`\>

Defined in: src/standalone/utils.ts:36

Converts an AsyncIterable to a callback-based API

## Type Parameters

### T

`T`

## Parameters

### stream

`AsyncIterable`\<`T`\>

The AsyncIterable stream to process

### callbacks

[`StreamingCallbacks`](../../../hosts/host-provider-types/interfaces/StreamingCallbacks.md)\<`T`\>

The callbacks to invoke for stream events

## Returns

`Promise`\<`void`\>
