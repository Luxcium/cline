[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/checkpoints/CheckpointExclusions](../README.md) / getLfsPatterns

# Function: getLfsPatterns()

> **getLfsPatterns**(`workspacePath`): `Promise`\<`string`[]\>

Defined in: src/integrations/checkpoints/CheckpointExclusions.ts:311

Retrieves Git LFS patterns from the workspace's .gitattributes file.
Returns an empty array if no patterns found or file doesn't exist.

## Parameters

### workspacePath

`string`

Path to the workspace root

## Returns

`Promise`\<`string`[]\>

Array of Git LFS patterns found in .gitattributes
