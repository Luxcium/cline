[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/terminal/TerminalManager](../README.md) / TerminalManager

# Class: TerminalManager

Defined in: src/integrations/terminal/TerminalManager.ts:93

## Constructors

### Constructor

> **new TerminalManager**(): `TerminalManager`

Defined in: src/integrations/terminal/TerminalManager.ts:102

#### Returns

`TerminalManager`

## Methods

### closeAllTerminals()

> **closeAllTerminals**(): `number`

Defined in: src/integrations/terminal/TerminalManager.ts:458

Forces closure of all terminals (including busy ones)

#### Returns

`number`

Number of terminals closed

***

### closeTerminals()

> **closeTerminals**(`filterFn`, `force`): `number`

Defined in: src/integrations/terminal/TerminalManager.ts:405

Closes terminals that match the provided criteria

#### Parameters

##### filterFn

(`terminal`) => `boolean`

Function that accepts TerminalInfo and returns boolean for terminals to close

##### force

`boolean` = `false`

If true, closes even busy terminals (with warning)

#### Returns

`number`

Number of terminals closed

***

### disposeAll()

> **disposeAll**(): `void`

Defined in: src/integrations/terminal/TerminalManager.ts:331

#### Returns

`void`

***

### filterTerminals()

> **filterTerminals**(`filterFn`): [`TerminalInfo`](../../TerminalRegistry/interfaces/TerminalInfo.md)[]

Defined in: src/integrations/terminal/TerminalManager.ts:394

Filters terminals based on a provided criteria function

#### Parameters

##### filterFn

(`terminal`) => `boolean`

Function that accepts TerminalInfo and returns boolean

#### Returns

[`TerminalInfo`](../../TerminalRegistry/interfaces/TerminalInfo.md)[]

Array of terminals that match the criteria

***

### getOrCreateTerminal()

> **getOrCreateTerminal**(`cwd`): `Promise`\<[`TerminalInfo`](../../TerminalRegistry/interfaces/TerminalInfo.md)\>

Defined in: src/integrations/terminal/TerminalManager.ts:226

#### Parameters

##### cwd

`string`

#### Returns

`Promise`\<[`TerminalInfo`](../../TerminalRegistry/interfaces/TerminalInfo.md)\>

***

### getTerminals()

> **getTerminals**(`busy`): `object`[]

Defined in: src/integrations/terminal/TerminalManager.ts:311

#### Parameters

##### busy

`boolean`

#### Returns

`object`[]

***

### getUnretrievedOutput()

> **getUnretrievedOutput**(`terminalId`): `string`

Defined in: src/integrations/terminal/TerminalManager.ts:318

#### Parameters

##### terminalId

`number`

#### Returns

`string`

***

### handleTerminalProfileChange()

> **handleTerminalProfileChange**(`newShellPath`): `object`

Defined in: src/integrations/terminal/TerminalManager.ts:438

Handles terminal management when the terminal profile changes

#### Parameters

##### newShellPath

New shell path to use

`undefined` | `string`

#### Returns

`object`

Object with information about closed terminals and remaining busy terminals

##### busyTerminals

> **busyTerminals**: [`TerminalInfo`](../../TerminalRegistry/interfaces/TerminalInfo.md)[]

##### closedCount

> **closedCount**: `number`

***

### isProcessHot()

> **isProcessHot**(`terminalId`): `boolean`

Defined in: src/integrations/terminal/TerminalManager.ts:326

#### Parameters

##### terminalId

`number`

#### Returns

`boolean`

***

### processOutput()

> **processOutput**(`outputLines`): `string`

Defined in: src/integrations/terminal/TerminalManager.ts:353

#### Parameters

##### outputLines

`string`[]

#### Returns

`string`

***

### runCommand()

> **runCommand**(`terminalInfo`, `command`): [`TerminalProcessResultPromise`](../../TerminalProcess/type-aliases/TerminalProcessResultPromise.md)

Defined in: src/integrations/terminal/TerminalManager.ts:158

#### Parameters

##### terminalInfo

[`TerminalInfo`](../../TerminalRegistry/interfaces/TerminalInfo.md)

##### command

`string`

#### Returns

[`TerminalProcessResultPromise`](../../TerminalProcess/type-aliases/TerminalProcessResultPromise.md)

***

### setDefaultTerminalProfile()

> **setDefaultTerminalProfile**(`profileId`): `object`

Defined in: src/integrations/terminal/TerminalManager.ts:363

#### Parameters

##### profileId

`string`

#### Returns

`object`

##### busyTerminals

> **busyTerminals**: [`TerminalInfo`](../../TerminalRegistry/interfaces/TerminalInfo.md)[]

##### closedCount

> **closedCount**: `number`

***

### setShellIntegrationTimeout()

> **setShellIntegrationTimeout**(`timeout`): `void`

Defined in: src/integrations/terminal/TerminalManager.ts:341

#### Parameters

##### timeout

`number`

#### Returns

`void`

***

### setTerminalOutputLineLimit()

> **setTerminalOutputLineLimit**(`limit`): `void`

Defined in: src/integrations/terminal/TerminalManager.ts:349

#### Parameters

##### limit

`number`

#### Returns

`void`

***

### setTerminalReuseEnabled()

> **setTerminalReuseEnabled**(`enabled`): `void`

Defined in: src/integrations/terminal/TerminalManager.ts:345

#### Parameters

##### enabled

`boolean`

#### Returns

`void`
