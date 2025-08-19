[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [utils/validation](../README.md) / validateThinkingBudget

# Function: validateThinkingBudget()

> **validateThinkingBudget**(`value`, `maxTokens`): `number`

Defined in: src/utils/validation.ts:14

Validates the thinking budget token value according to the specified rules:
- If disabled (0), return as is
- If enabled but less than minimum (1024), set to minimum
- If greater than or equal to max tokens, set to max tokens - 1
- Otherwise, return the original value

## Parameters

### value

`number`

The thinking budget token value to validate

### maxTokens

`number` = `...`

The maximum tokens for the current model

## Returns

`number`

The validated thinking budget token value
