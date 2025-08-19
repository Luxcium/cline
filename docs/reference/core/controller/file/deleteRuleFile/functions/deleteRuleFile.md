[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/file/deleteRuleFile](../README.md) / deleteRuleFile

# Function: deleteRuleFile()

> **deleteRuleFile**(`controller`, `request`): `Promise`\<`RuleFile`\>

Defined in: src/core/controller/file/deleteRuleFile.ts:15

Deletes a rule file from either global or workspace rules directory

## Parameters

### controller

[`Controller`](../../../classes/Controller.md)

The controller instance

### request

`RuleFileRequest`

The request containing rule path and isGlobal flag

## Returns

`Promise`\<`RuleFile`\>

Result with file path and display name

## Throws

Error if operation fails
