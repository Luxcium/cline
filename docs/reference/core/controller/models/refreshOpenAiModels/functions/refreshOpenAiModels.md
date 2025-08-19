[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/models/refreshOpenAiModels](../README.md) / refreshOpenAiModels

# Function: refreshOpenAiModels()

> **refreshOpenAiModels**(`controller`, `request`): `Promise`\<`StringArray`\>

Defined in: src/core/controller/models/refreshOpenAiModels.ts:13

Fetches available models from the OpenAI API

## Parameters

### controller

[`Controller`](../../../classes/Controller.md)

The controller instance

### request

`OpenAiModelsRequest`

Request containing the base URL and API key

## Returns

`Promise`\<`StringArray`\>

Array of model names
