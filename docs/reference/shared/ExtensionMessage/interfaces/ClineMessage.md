[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/ExtensionMessage](../README.md) / ClineMessage

# Interface: ClineMessage

Defined in: src/shared/ExtensionMessage.ts:73

## Properties

### ask?

> `optional` **ask**: [`ClineAsk`](../type-aliases/ClineAsk.md)

Defined in: src/shared/ExtensionMessage.ts:76

***

### conversationHistoryDeletedRange?

> `optional` **conversationHistoryDeletedRange**: \[`number`, `number`\]

Defined in: src/shared/ExtensionMessage.ts:87

***

### conversationHistoryIndex?

> `optional` **conversationHistoryIndex**: `number`

Defined in: src/shared/ExtensionMessage.ts:86

***

### files?

> `optional` **files**: `string`[]

Defined in: src/shared/ExtensionMessage.ts:81

***

### images?

> `optional` **images**: `string`[]

Defined in: src/shared/ExtensionMessage.ts:80

***

### isCheckpointCheckedOut?

> `optional` **isCheckpointCheckedOut**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:84

***

### isOperationOutsideWorkspace?

> `optional` **isOperationOutsideWorkspace**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:85

***

### lastCheckpointHash?

> `optional` **lastCheckpointHash**: `string`

Defined in: src/shared/ExtensionMessage.ts:83

***

### partial?

> `optional` **partial**: `boolean`

Defined in: src/shared/ExtensionMessage.ts:82

***

### reasoning?

> `optional` **reasoning**: `string`

Defined in: src/shared/ExtensionMessage.ts:79

***

### say?

> `optional` **say**: [`ClineSay`](../type-aliases/ClineSay.md)

Defined in: src/shared/ExtensionMessage.ts:77

***

### text?

> `optional` **text**: `string`

Defined in: src/shared/ExtensionMessage.ts:78

***

### ts

> **ts**: `number`

Defined in: src/shared/ExtensionMessage.ts:74

***

### type

> **type**: `"ask"` \| `"say"`

Defined in: src/shared/ExtensionMessage.ts:75
