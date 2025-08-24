[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/checkpoints/CheckpointMigration](../README.md) / cleanupLegacyCheckpoints

# Function: cleanupLegacyCheckpoints()

> **cleanupLegacyCheckpoints**(`globalStoragePath`): `Promise`\<`void`\>

Defined in: src/integrations/checkpoints/CheckpointMigration.ts:13

Cleans up legacy checkpoints from task folders.
This is a one-time operation that runs when the extension is updated to use the new checkpoint system.

## Parameters

### globalStoragePath

`string`

Path to the extension's global storage

## Returns

`Promise`\<`void`\>
