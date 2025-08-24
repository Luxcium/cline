[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/file/searchCommits](../README.md) / searchCommits

# Function: searchCommits()

> **searchCommits**(`_controller`, `request`): `Promise`\<`GitCommits`\>

Defined in: src/core/controller/file/searchCommits.ts:14

Searches for git commits in the workspace repository

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### request

`StringRequest`

The request message containing the search query in the 'value' field

## Returns

`Promise`\<`GitCommits`\>

GitCommits containing the matching commits
