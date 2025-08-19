[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/test/GitHelper](../README.md) / calculateToolSuccessRate

# Function: calculateToolSuccessRate()

> **calculateToolSuccessRate**(`toolCalls`, `toolFailures`): `number`

Defined in: src/services/test/GitHelper.ts:209

Calculates the tool success rate based on calls and failures

## Parameters

### toolCalls

`Record`\<`string`, `number`\>

Record of tool calls by name

### toolFailures

`Record`\<`string`, `number`\>

Record of tool failures by name

## Returns

`number`

The success rate as a number between 0 and 1
