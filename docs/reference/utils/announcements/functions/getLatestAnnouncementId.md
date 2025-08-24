[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [utils/announcements](../README.md) / getLatestAnnouncementId

# Function: getLatestAnnouncementId()

> **getLatestAnnouncementId**(`context`): `string`

Defined in: src/utils/announcements.ts:10

Gets the latest announcement ID based on the extension version
Uses major.minor version format (e.g., "1.2" from "1.2.3")

## Parameters

### context

`ExtensionContext`

The VSCode extension context

## Returns

`string`

The announcement ID string (major.minor version) or empty string if unavailable
