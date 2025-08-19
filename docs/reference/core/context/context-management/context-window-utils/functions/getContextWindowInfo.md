[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/context/context-management/context-window-utils](../README.md) / getContextWindowInfo

# Function: getContextWindowInfo()

> **getContextWindowInfo**(`api`): `object`

Defined in: src/core/context/context-management/context-window-utils.ts:10

Gets context window information for the given API handler

## Parameters

### api

[`ApiHandler`](../../../../../api/interfaces/ApiHandler.md)

The API handler to get context window information for

## Returns

`object`

An object containing the raw context window size and the effective max allowed size

### contextWindow

> **contextWindow**: `number`

### maxAllowedSize

> **maxAllowedSize**: `number`
