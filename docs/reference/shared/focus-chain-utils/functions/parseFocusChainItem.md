[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/focus-chain-utils](../README.md) / parseFocusChainItem

# Function: parseFocusChainItem()

> **parseFocusChainItem**(`line`): `null` \| \{ `checked`: `boolean`; `text`: `string`; \}

Defined in: src/shared/focus-chain-utils.ts:35

Parse focus chain item using flexible regex (allows spacing variations)

## Parameters

### line

`string`

The trimmed line to parse

## Returns

`null` \| \{ `checked`: `boolean`; `text`: `string`; \}

Object with checked status and text, or null if not a focus chain item
