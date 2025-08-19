[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [core/task/focus-chain](../README.md) / FocusChainManager

# Class: FocusChainManager

Defined in: src/core/task/focus-chain/index.ts:32

## Constructors

### Constructor

> **new FocusChainManager**(`dependencies`): `FocusChainManager`

Defined in: src/core/task/focus-chain/index.ts:45

#### Parameters

##### dependencies

[`FocusChainDependencies`](../interfaces/FocusChainDependencies.md)

#### Returns

`FocusChainManager`

## Methods

### checkIncompleteProgressOnCompletion()

> **checkIncompleteProgressOnCompletion**(): `void`

Defined in: src/core/task/focus-chain/index.ts:485

Analyzes the current focus chain list for incomplete items when a task is marked as complete.
Captures telemetry data about unfinished progress items to help improve the focus chain system.

#### Returns

`void`

void - Sends telemetry data if incomplete items found, no return value

#### Requires

this.focusChainSettings.enabled and this.taskState.currentFocusChainChecklist to exist

***

### dispose()

> **dispose**(): `void`

Defined in: src/core/task/focus-chain/index.ts:503

Performs cleanup operations when the focus chain manager is no longer needed.
Cancels active file watchers and clears any pending debounce timers to prevent memory leaks.

#### Returns

`void`

void - Cleans up timers and watchers, no return value

#### Requires

No parameters needed

***

### generateFocusChainInstructions()

> **generateFocusChainInstructions**(): `string`

Defined in: src/core/task/focus-chain/index.ts:172

Generates contextual instructions for focus chain list creation and management based on current task state.
Returns formatted markdown instructions that guide the AI on when and how to update progress tracking.

#### Returns

`string`

string - Formatted markdown instructions for focus chain list management, varies by context

#### Requires

this.taskState with current focus chain list state and API request counts

***

### setupFocusChainFileWatcher()

> **setupFocusChainFileWatcher**(): `Promise`\<`void`\>

Defined in: src/core/task/focus-chain/index.ts:92

Sets up a file watcher to monitor changes to the focus chain list markdown file.
Automatically updates the UI when the file is created, modified, or deleted by external editors.

#### Returns

`Promise`\<`void`\>

Promise<void> - Resolves when watcher is set up, logs errors if setup fails

#### Requires

this.taskId, this.context to be initialized

***

### shouldIncludeFocusChainInstructions()

> **shouldIncludeFocusChainInstructions**(): `boolean`

Defined in: src/core/task/focus-chain/index.ts:452

Evaluates multiple conditions to determine if focus chain list instructions should be included in the AI prompt.
Returns true when in plan mode, after mode switches, when user edits exist, or at reminder intervals.

#### Returns

`boolean`

boolean - True if instructions should be included in AI prompt, false otherwise

#### Requires

this.mode, this.taskState, and this.focusChainSettings to be initialized

***

### updateFCListFromToolResponse()

> **updateFCListFromToolResponse**(`taskProgress`): `Promise`\<`void`\>

Defined in: src/core/task/focus-chain/index.ts:388

Processes focus chain list updates from the AI model's task_progress parameter and persists them to disk.
Handles telemetry tracking for progress updates and falls back to reading existing files if no update provided.
Also manages the apiRequestsSinceLastTodoUpdate counter and includes comprehensive error handling.

#### Parameters

##### taskProgress

Optional focus chain list string from AI model's task_progress parameter

`undefined` | `string`

#### Returns

`Promise`\<`void`\>

Promise<void> - Updates taskState.currentFocusChainChecklist and sends UI messages

#### Requires

this.taskState, this.say method, and telemetryService to be available

***

### updateMode()

> **updateMode**(`mode`): `void`

Defined in: src/core/task/focus-chain/index.ts:82

Updates the local mode state to reflect the current Plan/Act mode.
Called when the task switches between planning and execution modes.

#### Parameters

##### mode

[`Mode`](../../../../shared/storage/types/type-aliases/Mode.md)

The new Mode value ("plan" or "act")

#### Returns

`void`

void - No return value
