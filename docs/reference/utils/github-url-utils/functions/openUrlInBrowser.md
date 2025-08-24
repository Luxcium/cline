[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [utils/github-url-utils](../README.md) / openUrlInBrowser

# Function: openUrlInBrowser()

> **openUrlInBrowser**(`url`): `Promise`\<`void`\>

Defined in: src/utils/github-url-utils.ts:80

Opens a URL using platform-specific commands to bypass VS Code's URI handling issues.

IMPORTANT: This function intentionally avoids using VS Code's built-in URI handling
(vscode.Uri.parse() and vscode.env.openExternal()) due to known encoding issues with URLs
that contain special characters in query parameters. See:
https://github.com/microsoft/vscode/issues/85930

The specific issues with VS Code's URI handling include:
1. Double-encoding of certain characters (e.g., # becomes %23 then %2523)
2. Inconsistent handling where some characters are encoded and others are decoded
3. Issues with parameters in the query string being incorrectly processed

Instead, this function:
- Uses direct OS commands to open the browser with the URL
- Preserves the exact encoding of the URL as provided
- Provides multiple fallback approaches if the primary method fails

## Parameters

### url

`string`

The URL to open

## Returns

`Promise`\<`void`\>

A promise that resolves when an attempt to open the URL has completed
