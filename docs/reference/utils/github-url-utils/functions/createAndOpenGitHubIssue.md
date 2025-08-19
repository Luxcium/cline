[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [utils/github-url-utils](../README.md) / createAndOpenGitHubIssue

# Function: createAndOpenGitHubIssue()

> **createAndOpenGitHubIssue**(`repoOwner`, `repoName`, `issueTemplate`, `params`): `Promise`\<`void`\>

Defined in: src/utils/github-url-utils.ts:195

Utility function to create and open a GitHub issue with the specified parameters.

This is a high-level function that combines URL creation and opening while
working around VS Code's URI handling limitations (issue #85930). It provides
a simple API for the common use case of opening GitHub issue templates with
pre-filled fields.

The function:
1. Constructs a correctly formatted GitHub issue URL
2. Properly encodes all special characters in parameters
3. Opens the URL directly using OS commands to avoid VS Code's problematic URI handling
4. Provides fallback options if opening fails

Reference for the VS Code URI handling issue:
https://github.com/microsoft/vscode/issues/85930

## Parameters

### repoOwner

`string`

GitHub repository owner/organization

### repoName

`string`

GitHub repository name

### issueTemplate

Template name to use (e.g., 'bug_report.yml')

`null` | `string`

### params

`Map`\<`string`, `string`\>

Map of parameter names to values for the issue form

## Returns

`Promise`\<`void`\>
