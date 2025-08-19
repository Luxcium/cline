[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/checkpoints/CheckpointExclusions](../README.md) / writeExcludesFile

# Function: writeExcludesFile()

> **writeExcludesFile**(`gitPath`, `lfsPatterns`): `Promise`\<`void`\>

Defined in: src/integrations/checkpoints/CheckpointExclusions.ts:296

Writes the combined exclusion patterns to Git's exclude file.
Creates the info directory if it doesn't exist.

## Parameters

### gitPath

`string`

Path to the .git directory

### lfsPatterns

`string`[] = `[]`

Optional array of Git LFS patterns to include

## Returns

`Promise`\<`void`\>
