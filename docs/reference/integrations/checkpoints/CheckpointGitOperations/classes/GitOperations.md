[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [integrations/checkpoints/CheckpointGitOperations](../README.md) / GitOperations

# Class: GitOperations

Defined in: src/integrations/checkpoints/CheckpointGitOperations.ts:26

GitOperations Class

Handles git-specific operations for Cline's Checkpoints system.

Key responsibilities:
- Git repository initialization and configuration
- Git settings management (user, LFS, etc.)
- Worktree configuration and management
- Managing nested git repositories during checkpoint operations
- File staging and checkpoint creation
- Shadow git repository maintenance and cleanup

## Constructors

### Constructor

> **new GitOperations**(`cwd`): `GitOperations`

Defined in: src/integrations/checkpoints/CheckpointGitOperations.ts:34

Creates a new GitOperations instance.

#### Parameters

##### cwd

`string`

The current working directory for git operations

#### Returns

`GitOperations`

## Methods

### addCheckpointFiles()

> **addCheckpointFiles**(`git`): `Promise`\<`CheckpointAddResult`\>

Defined in: src/integrations/checkpoints/CheckpointGitOperations.ts:191

Adds files to the shadow git repository while handling nested git repos.
Uses git commands to list files and stages them for commit.
Respects .gitignore and handles LFS patterns.

Process:
1. Updates exclude patterns from LFS config
2. Temporarily disables nested git repos
3. Gets list of tracked and untracked files from git (respecting .gitignore)
4. Adds all files to git staging
5. Re-enables nested git repos

#### Parameters

##### git

`SimpleGit`

SimpleGit instance configured for the shadow git repo

#### Returns

`Promise`\<`CheckpointAddResult`\>

Promise<CheckpointAddResult> Object containing success status, message, and file count

#### Throws

Error if:
 - File operations fail
 - Git commands error
 - LFS pattern updates fail
 - Nested git repo handling fails

***

### getShadowGitConfigWorkTree()

> **getShadowGitConfigWorkTree**(`gitPath`): `Promise`\<`undefined` \| `string`\>

Defined in: src/integrations/checkpoints/CheckpointGitOperations.ts:119

Retrieves the worktree path from the shadow git configuration.
The worktree path indicates where the shadow git repository is tracking files,
which should match the current workspace directory.

#### Parameters

##### gitPath

`string`

Path to the .git directory

#### Returns

`Promise`\<`undefined` \| `string`\>

Promise<string | undefined> The worktree path or undefined if not found

#### Throws

Error if unable to get worktree path

***

### initShadowGit()

> **initShadowGit**(`gitPath`, `cwd`, `taskId`): `Promise`\<`string`\>

Defined in: src/integrations/checkpoints/CheckpointGitOperations.ts:57

Initializes or verifies a shadow Git repository for checkpoint tracking.
Creates a new repository if one doesn't exist, or verifies the worktree
configuration if it does.

Key operations:
- Creates/verifies shadow git repository
- Configures git settings (user, LFS, etc.)
- Sets up worktree to point to workspace

#### Parameters

##### gitPath

`string`

Path to the .git directory

##### cwd

`string`

The current working directory for git operations

##### taskId

`string`

#### Returns

`Promise`\<`string`\>

Promise<string> Path to the initialized .git directory

#### Throws

Error if:
- Worktree verification fails for existing repository
- Git initialization or configuration fails
- Unable to create initial commit
- LFS pattern setup fails

***

### renameNestedGitRepos()

> **renameNestedGitRepos**(`disable`): `Promise`\<`void`\>

Defined in: src/integrations/checkpoints/CheckpointGitOperations.ts:141

Since we use git to track checkpoints, we need to temporarily disable nested git repos to work around git's
requirement of using submodules for nested repos.

This method renames nested .git directories by adding/removing a suffix to temporarily disable/enable them.
The root .git directory is preserved. Uses VS Code's workspace API to find nested .git directories and
only processes actual directories (not files named .git).

#### Parameters

##### disable

`boolean`

If true, adds suffix to disable nested git repos. If false, removes suffix to re-enable them.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if renaming any .git directory fails
