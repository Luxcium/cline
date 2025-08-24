[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/ignore/ClineIgnoreController](../README.md) / ClineIgnoreController

# Class: ClineIgnoreController

Defined in: src/core/ignore/ClineIgnoreController.ts:14

Controls LLM access to files by enforcing ignore patterns.
Designed to be instantiated once in Cline.ts and passed to file manipulation services.
Uses the 'ignore' library to support standard .gitignore syntax in .clineignore files.

## Constructors

### Constructor

> **new ClineIgnoreController**(`cwd`): `ClineIgnoreController`

Defined in: src/core/ignore/ClineIgnoreController.ts:20

#### Parameters

##### cwd

`string`

#### Returns

`ClineIgnoreController`

## Properties

### clineIgnoreContent

> **clineIgnoreContent**: `undefined` \| `string`

Defined in: src/core/ignore/ClineIgnoreController.ts:18

## Methods

### dispose()

> **dispose**(): `void`

Defined in: src/core/ignore/ClineIgnoreController.ts:241

Clean up resources when the controller is no longer needed

#### Returns

`void`

***

### filterPaths()

> **filterPaths**(`paths`): `string`[]

Defined in: src/core/ignore/ClineIgnoreController.ts:223

Filter an array of paths, removing those that should be ignored

#### Parameters

##### paths

`string`[]

Array of paths to filter (relative to cwd)

#### Returns

`string`[]

Array of allowed paths

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: src/core/ignore/ClineIgnoreController.ts:32

Initialize the controller by loading custom patterns
Must be called after construction and before using the controller

#### Returns

`Promise`\<`void`\>

***

### validateAccess()

> **validateAccess**(`filePath`): `boolean`

Defined in: src/core/ignore/ClineIgnoreController.ts:143

Check if a file should be accessible to the LLM

#### Parameters

##### filePath

`string`

Path to check (relative to cwd)

#### Returns

`boolean`

true if file is accessible, false if ignored

***

### validateCommand()

> **validateCommand**(`command`): `undefined` \| `string`

Defined in: src/core/ignore/ClineIgnoreController.ts:167

Check if a terminal command should be allowed to execute based on file access patterns

#### Parameters

##### command

`string`

Terminal command to validate

#### Returns

`undefined` \| `string`

path of file that is being accessed if it is being accessed, undefined if command is allowed
