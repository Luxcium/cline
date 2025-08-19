[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/ExtensionMessage](../README.md) / ClineApiReqInfo

# Interface: ClineApiReqInfo

Defined in: src/shared/ExtensionMessage.ts:199

## Properties

### cacheReads?

> `optional` **cacheReads**: `number`

Defined in: src/shared/ExtensionMessage.ts:204

***

### cacheWrites?

> `optional` **cacheWrites**: `number`

Defined in: src/shared/ExtensionMessage.ts:203

***

### cancelReason?

> `optional` **cancelReason**: [`ClineApiReqCancelReason`](../type-aliases/ClineApiReqCancelReason.md)

Defined in: src/shared/ExtensionMessage.ts:206

***

### cost?

> `optional` **cost**: `number`

Defined in: src/shared/ExtensionMessage.ts:205

***

### request?

> `optional` **request**: `string`

Defined in: src/shared/ExtensionMessage.ts:200

***

### retryStatus?

> `optional` **retryStatus**: `object`

Defined in: src/shared/ExtensionMessage.ts:208

#### attempt

> **attempt**: `number`

#### delaySec

> **delaySec**: `number`

#### errorSnippet?

> `optional` **errorSnippet**: `string`

#### maxAttempts

> **maxAttempts**: `number`

***

### streamingFailedMessage?

> `optional` **streamingFailedMessage**: `string`

Defined in: src/shared/ExtensionMessage.ts:207

***

### tokensIn?

> `optional` **tokensIn**: `number`

Defined in: src/shared/ExtensionMessage.ts:201

***

### tokensOut?

> `optional` **tokensOut**: `number`

Defined in: src/shared/ExtensionMessage.ts:202
