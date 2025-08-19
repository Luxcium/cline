[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/file/createRuleFile](../README.md) / createRuleFile

# Function: createRuleFile()

> **createRuleFile**(`controller`, `request`): `Promise`\<`RuleFile`\>

Defined in: src/core/controller/file/createRuleFile.ts:19

Creates a rule file in either global or workspace rules directory

## Parameters

### controller

[`Controller`](../../../classes/Controller.md)

The controller instance

### request

`RuleFileRequest`

The request containing filename and isGlobal flag

## Returns

`Promise`\<`RuleFile`\>

Result with file path and display name

## Throws

Error if operation fails
