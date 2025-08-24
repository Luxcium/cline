[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/array](../README.md) / parsePartialArrayString

# Function: parsePartialArrayString()

> **parsePartialArrayString**(`arrayString`): `string`[]

Defined in: src/shared/array.ts:31

Converts a partial or complete stringified array into an actual array.
Handles both complete JSON strings and incomplete array strings.
Splits on the specific tokens: ["  ", "  "]

## Parameters

### arrayString

`string`

A string representation of an array, which may be incomplete

## Returns

`string`[]

Array of strings parsed from the input
