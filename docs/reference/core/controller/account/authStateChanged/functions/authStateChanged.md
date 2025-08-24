[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [core/controller/account/authStateChanged](../README.md) / authStateChanged

# Function: authStateChanged()

> **authStateChanged**(`controller`, `request`): `Promise`\<`AuthState`\>

Defined in: src/core/controller/account/authStateChanged.ts:11

Handles authentication state changes from the Firebase context.
Updates the user info in global state and returns the updated value.

## Parameters

### controller

[`Controller`](../../../classes/Controller.md)

The controller instance

### request

`AuthStateChangedRequest`

The auth state change request

## Returns

`Promise`\<`AuthState`\>

The updated user info
