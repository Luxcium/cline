[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/ui/getWebviewHtml](../README.md) / getWebviewHtml

# Function: getWebviewHtml()

> **getWebviewHtml**(`_controller`, `_`): `Promise`\<`String`\>

Defined in: src/core/controller/ui/getWebviewHtml.ts:11

Returns the HTML content of the webview.

This is only used by the standalone service. The Vscode extension gets the HTML directly from the webview when it
resolved through `resolveWebviewView()`.

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### \_

`EmptyRequest`

## Returns

`Promise`\<`String`\>
