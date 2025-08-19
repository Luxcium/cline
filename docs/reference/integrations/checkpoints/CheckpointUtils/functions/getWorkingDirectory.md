[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/checkpoints/CheckpointUtils](../README.md) / getWorkingDirectory

# Function: getWorkingDirectory()

> **getWorkingDirectory**(): `Promise`\<`string`\>

Defined in: src/integrations/checkpoints/CheckpointUtils.ts:48

Gets the current working directory from the VS Code workspace.
Validates that checkpoints are not being used in protected directories
like home, Desktop, Documents, or Downloads. Checks to confirm that the workspace
is accessible and that we will not encounter breaking permissions issues when
creating checkpoints.

Protected directories:
- User's home directory
- Desktop
- Documents
- Downloads

## Returns

`Promise`\<`string`\>

Promise<string> The absolute path to the current working directory

## Throws

Error if no workspace is detected, if in a protected directory, or if no read access
