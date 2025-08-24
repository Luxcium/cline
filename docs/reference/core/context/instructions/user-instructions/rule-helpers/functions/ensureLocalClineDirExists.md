[**claude-dev**](../../../../../../README.md)

***

[claude-dev](../../../../../../README.md) / [core/context/instructions/user-instructions/rule-helpers](../README.md) / ensureLocalClineDirExists

# Function: ensureLocalClineDirExists()

> **ensureLocalClineDirExists**(`clinerulePath`, `defaultRuleFilename`): `Promise`\<`boolean`\>

Defined in: src/core/context/instructions/user-instructions/rule-helpers.ts:136

Handles converting any directory into a file (specifically used for .clinerules and .clinerules/workflows)
The old .clinerules file or .clinerules/workflows file will be renamed to a default filename
Doesn't do anything if the dir already exists or doesn't exist
Returns whether there are any uncaught errors

## Parameters

### clinerulePath

`string`

### defaultRuleFilename

`string`

## Returns

`Promise`\<`boolean`\>
