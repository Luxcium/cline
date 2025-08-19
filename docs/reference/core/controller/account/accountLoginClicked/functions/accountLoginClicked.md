[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/account/accountLoginClicked](../README.md) / accountLoginClicked

# Function: accountLoginClicked()

> **accountLoginClicked**(`_controller`, `_`): `Promise`\<`String`\>

Defined in: src/core/controller/account/accountLoginClicked.ts:13

Handles the user clicking the login link in the UI.
Generates a secure nonce for state validation, stores it in secrets,
and opens the authentication URL in the external browser.

## Parameters

### \_controller

[`Controller`](../../../classes/Controller.md)

### \_

`EmptyRequest`

## Returns

`Promise`\<`String`\>

The login URL as a string.
