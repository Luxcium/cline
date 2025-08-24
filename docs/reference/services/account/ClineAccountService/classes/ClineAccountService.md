[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [services/account/ClineAccountService](../README.md) / ClineAccountService

# Class: ClineAccountService

Defined in: src/services/account/ClineAccountService.ts:13

## Constructors

### Constructor

> **new ClineAccountService**(): `ClineAccountService`

Defined in: src/services/account/ClineAccountService.ts:18

#### Returns

`ClineAccountService`

## Accessors

### baseUrl

#### Get Signature

> **get** **baseUrl**(): `string`

Defined in: src/services/account/ClineAccountService.ts:37

Returns the base URL for the Cline API

##### Returns

`string`

The base URL as a string

## Methods

### fetchBalanceRPC()

> **fetchBalanceRPC**(): `Promise`\<`undefined` \| [`BalanceResponse`](../../../../shared/ClineAccount/interfaces/BalanceResponse.md)\>

Defined in: src/services/account/ClineAccountService.ts:87

RPC variant that fetches the user's current credit balance without posting to webview

#### Returns

`Promise`\<`undefined` \| [`BalanceResponse`](../../../../shared/ClineAccount/interfaces/BalanceResponse.md)\>

Balance data or undefined if failed

***

### fetchMe()

> **fetchMe**(): `Promise`\<`undefined` \| [`UserResponse`](../../../../shared/ClineAccount/interfaces/UserResponse.md)\>

Defined in: src/services/account/ClineAccountService.ts:146

Fetches the current user data

#### Returns

`Promise`\<`undefined` \| [`UserResponse`](../../../../shared/ClineAccount/interfaces/UserResponse.md)\>

UserResponse or undefined if failed

***

### fetchOrganizationCreditsRPC()

> **fetchOrganizationCreditsRPC**(`organizationId`): `Promise`\<`undefined` \| [`OrganizationBalanceResponse`](../../../../shared/ClineAccount/interfaces/OrganizationBalanceResponse.md)\>

Defined in: src/services/account/ClineAccountService.ts:178

Fetches the current user's organization credits

#### Parameters

##### organizationId

`string`

#### Returns

`Promise`\<`undefined` \| [`OrganizationBalanceResponse`](../../../../shared/ClineAccount/interfaces/OrganizationBalanceResponse.md)\>

A promise that resolves to the active organization balance.

***

### fetchOrganizationUsageTransactionsRPC()

> **fetchOrganizationUsageTransactionsRPC**(`organizationId`): `Promise`\<`undefined` \| [`OrganizationUsageTransaction`](../../../../shared/ClineAccount/interfaces/OrganizationUsageTransaction.md)[]\>

Defined in: src/services/account/ClineAccountService.ts:194

Fetches the current user's organization transactions

#### Parameters

##### organizationId

`string`

#### Returns

`Promise`\<`undefined` \| [`OrganizationUsageTransaction`](../../../../shared/ClineAccount/interfaces/OrganizationUsageTransaction.md)[]\>

A promise that resolves to the active organization transactions.

***

### fetchPaymentTransactionsRPC()

> **fetchPaymentTransactionsRPC**(): `Promise`\<`undefined` \| [`PaymentTransaction`](../../../../shared/ClineAccount/interfaces/PaymentTransaction.md)[]\>

Defined in: src/services/account/ClineAccountService.ts:125

RPC variant that fetches the user's payment transactions without posting to webview

#### Returns

`Promise`\<`undefined` \| [`PaymentTransaction`](../../../../shared/ClineAccount/interfaces/PaymentTransaction.md)[]\>

Payment transactions or undefined if failed

***

### fetchUsageTransactionsRPC()

> **fetchUsageTransactionsRPC**(): `Promise`\<`undefined` \| [`UsageTransaction`](../../../../shared/ClineAccount/interfaces/UsageTransaction.md)[]\>

Defined in: src/services/account/ClineAccountService.ts:106

RPC variant that fetches the user's usage transactions without posting to webview

#### Returns

`Promise`\<`undefined` \| [`UsageTransaction`](../../../../shared/ClineAccount/interfaces/UsageTransaction.md)[]\>

Usage transactions or undefined if failed

***

### fetchUserOrganizationsRPC()

> **fetchUserOrganizationsRPC**(): `Promise`\<`undefined` \| \[\{ `active`: `boolean`; `memberId`: `string`; `name`: `string`; `organizationId`: `string`; `roles`: \[`"admin"` \| `"member"` \| `"owner"`\]; \}\]\>

Defined in: src/services/account/ClineAccountService.ts:160

Fetches the current user's organizations

#### Returns

`Promise`\<`undefined` \| \[\{ `active`: `boolean`; `memberId`: `string`; `name`: `string`; `organizationId`: `string`; `roles`: \[`"admin"` \| `"member"` \| `"owner"`\]; \}\]\>

UserResponse["organizations"] or undefined if failed

***

### switchAccount()

> **switchAccount**(`organizationId?`): `Promise`\<`void`\>

Defined in: src/services/account/ClineAccountService.ts:222

Switches the active account to the specified organization or personal account.

#### Parameters

##### organizationId?

`string`

Optional organization ID to switch to. If not provided, it will switch to the personal account.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the account switch is complete.

#### Throws

If the account switch fails, an error will be thrown.

***

### getInstance()

> `static` **getInstance**(): `ClineAccountService`

Defined in: src/services/account/ClineAccountService.ts:26

Returns the singleton instance of ClineAccountService

#### Returns

`ClineAccountService`

Singleton instance of ClineAccountService
