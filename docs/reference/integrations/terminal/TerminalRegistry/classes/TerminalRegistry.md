[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/terminal/TerminalRegistry](../README.md) / TerminalRegistry

# Class: TerminalRegistry

Defined in: src/integrations/terminal/TerminalRegistry.ts:19

## Constructors

### Constructor

> **new TerminalRegistry**(): `TerminalRegistry`

#### Returns

`TerminalRegistry`

## Methods

### createTerminal()

> `static` **createTerminal**(`cwd?`, `shellPath?`): [`TerminalInfo`](../interfaces/TerminalInfo.md)

Defined in: src/integrations/terminal/TerminalRegistry.ts:23

#### Parameters

##### cwd?

`string` | `Uri`

##### shellPath?

`string`

#### Returns

[`TerminalInfo`](../interfaces/TerminalInfo.md)

***

### getAllTerminals()

> `static` **getAllTerminals**(): [`TerminalInfo`](../interfaces/TerminalInfo.md)[]

Defined in: src/integrations/terminal/TerminalRegistry.ts:71

#### Returns

[`TerminalInfo`](../interfaces/TerminalInfo.md)[]

***

### getTerminal()

> `static` **getTerminal**(`id`): `undefined` \| [`TerminalInfo`](../interfaces/TerminalInfo.md)

Defined in: src/integrations/terminal/TerminalRegistry.ts:51

#### Parameters

##### id

`number`

#### Returns

`undefined` \| [`TerminalInfo`](../interfaces/TerminalInfo.md)

***

### removeTerminal()

> `static` **removeTerminal**(`id`): `void`

Defined in: src/integrations/terminal/TerminalRegistry.ts:67

#### Parameters

##### id

`number`

#### Returns

`void`

***

### updateTerminal()

> `static` **updateTerminal**(`id`, `updates`): `void`

Defined in: src/integrations/terminal/TerminalRegistry.ts:60

#### Parameters

##### id

`number`

##### updates

`Partial`\<[`TerminalInfo`](../interfaces/TerminalInfo.md)\>

#### Returns

`void`
