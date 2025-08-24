[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [utils/github-url-utils](../README.md) / createGitHubIssueUrl

# Function: createGitHubIssueUrl()

> **createGitHubIssueUrl**(`baseUrl`, `params`): `string`

Defined in: src/utils/github-url-utils.ts:41

Creates a properly encoded GitHub issue URL.

This function manually encodes each parameter value using encodeURIComponent()
to ensure consistent and correct encoding of all special characters. This is
necessary because VS Code's URI handling (vscode.Uri.parse) has issues with
encoding/decoding URL parameters, as documented in:
https://github.com/microsoft/vscode/issues/85930

Specifically, VS Code's URI handling:
- Double-encodes some characters like # (hash) becoming %2523 instead of %23
- Inconsistently handles other characters like & (ampersand) and + (plus)
- Can corrupt query parameters containing special characters

## Parameters

### baseUrl

`string`

The base GitHub repository URL (e.g., 'https://github.com/owner/repo/issues/new')

### params

`Map`\<`string`, `string`\>

Map of parameter names to values for the issue form

## Returns

`string`

The properly encoded full URL
