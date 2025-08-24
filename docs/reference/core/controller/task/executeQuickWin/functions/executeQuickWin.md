[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/task/executeQuickWin](../README.md) / executeQuickWin

# Function: executeQuickWin()

> **executeQuickWin**(`controller`, `request`): `Promise`\<`Empty`\>

Defined in: src/core/controller/task/executeQuickWin.ts:25

Executes a quick win task with command and title

## Parameters

### controller

[`Controller`](../../../classes/Controller.md)

The controller instance

### request

`ExecuteQuickWinRequest`

The execute quick win request

## Returns

`Promise`\<`Empty`\>

Empty response

## Example

```ts
// Usage from webview:
import { TaskServiceClient } from "@/services/grpc-client"
import { ExecuteQuickWinRequest } from "@shared/proto/cline/task"

const request: ExecuteQuickWinRequest = {
  command: "npm install",
  title: "Install dependencies"
}

TaskServiceClient.executeQuickWin(request)
  .then(() => console.log("Quick win executed successfully"))
  .catch(error => console.error("Failed to execute quick win:", error))
```
