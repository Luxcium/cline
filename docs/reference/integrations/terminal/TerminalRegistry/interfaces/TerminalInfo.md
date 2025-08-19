[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/terminal/TerminalRegistry](../README.md) / TerminalInfo

# Interface: TerminalInfo

Defined in: src/integrations/terminal/TerminalRegistry.ts:3

## Properties

### busy

> **busy**: `boolean`

Defined in: src/integrations/terminal/TerminalRegistry.ts:5

***

### cwdResolved?

> `optional` **cwdResolved**: `object`

Defined in: src/integrations/terminal/TerminalRegistry.ts:11

#### reject()

> **reject**: (`error`) => `void`

##### Parameters

###### error

`Error`

##### Returns

`void`

#### resolve()

> **resolve**: () => `void`

##### Returns

`void`

***

### id

> **id**: `number`

Defined in: src/integrations/terminal/TerminalRegistry.ts:7

***

### lastActive

> **lastActive**: `number`

Defined in: src/integrations/terminal/TerminalRegistry.ts:9

***

### lastCommand

> **lastCommand**: `string`

Defined in: src/integrations/terminal/TerminalRegistry.ts:6

***

### pendingCwdChange?

> `optional` **pendingCwdChange**: `string`

Defined in: src/integrations/terminal/TerminalRegistry.ts:10

***

### shellPath?

> `optional` **shellPath**: `string`

Defined in: src/integrations/terminal/TerminalRegistry.ts:8

***

### terminal

> **terminal**: `Terminal`

Defined in: src/integrations/terminal/TerminalRegistry.ts:4
