[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/checkpoints/CheckpointUtils](../README.md) / getShadowGitPath

# Function: getShadowGitPath()

> **getShadowGitPath**(`globalStoragePath`, `taskId`, `cwdHash`): `Promise`\<`string`\>

Defined in: src/integrations/checkpoints/CheckpointUtils.ts:22

Gets the path to the shadow Git repository in globalStorage.

Checkpoints path structure:
globalStorage/
  checkpoints/
    {cwdHash}/
      .git/

## Parameters

### globalStoragePath

`string`

The VS Code global storage path

### taskId

`string`

The ID of the task

### cwdHash

`string`

Hash of the working directory path

## Returns

`Promise`\<`string`\>

Promise<string> The absolute path to the shadow git directory

## Throws

Error if global storage path is invalid
