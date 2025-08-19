[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/checkpoints/CheckpointUtils](../README.md) / hashWorkingDir

# Function: hashWorkingDir()

> **hashWorkingDir**(`workingDir`): `string`

Defined in: src/integrations/checkpoints/CheckpointUtils.ts:88

Hashes the current working directory to a 13-character numeric hash.

## Parameters

### workingDir

`string`

The absolute path to the working directory

## Returns

`string`

A 13-character numeric hash string used to identify the workspace

## Throws

If the working directory path is empty or invalid
