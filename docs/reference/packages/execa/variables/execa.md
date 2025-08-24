[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [packages/execa](../README.md) / execa

# Variable: execa

> `const` **execa**: `ExecaMethod`\<\{ \}\>

Defined in: node\_modules/execa/types/methods/main-async.d.ts:350

Executes a command using `file ...arguments`.

When `command` is a template string, it includes both the `file` and its `arguments`.

`execa(options)` can be used to return a new instance of this method but with different default `options`. Consecutive calls are merged to previous ones.

## Param

The program/script to execute, as a string or file URL

## Param

Arguments to pass to `file` on execution.

## Returns

A `ResultPromise` that is both:
- the subprocess.
- a `Promise` either resolving with its successful `result`, or rejecting with its `error`.

## Throws

`ExecaError`

## Examples

```
import {execa} from 'execa';

const {stdout} = await execa`npm run build`;
// Print command's output
console.log(stdout);
```

```
import {$} from 'execa';

const {stdout: name} = await $`cat package.json`.pipe`grep name`;
console.log(name);

const branch = await $`git branch --show-current`;
await $`dep deploy --branch=${branch}`;

await Promise.all([
	$`sleep 1`,
	$`sleep 2`,
	$`sleep 3`,
]);

const directoryName = 'foo bar';
await $`mkdir /tmp/${directoryName}`;
```

```
$ npm install -D eslint
```

```
await execa({preferLocal: true})`eslint`;
```

```
const {stdout, pipedFrom} = await execa`npm run build`
	.pipe`sort`
	.pipe`head -n 2`;

// Output of `npm run build | sort | head -n 2`
console.log(stdout);
// Output of `npm run build | sort`
console.log(pipedFrom[0].stdout);
// Output of `npm run build`
console.log(pipedFrom[0].pipedFrom[0].stdout);
```

```
const {all} = await execa({all: true})`npm run build`;
// stdout + stderr, interleaved
console.log(all);
```

```
const {stdout} = await execa({stdout: ['pipe', 'inherit']})`npm run build`;
// stdout is also printed to the terminal
console.log(stdout);
```

```
const getInputString = () => { /* ... */ };
const {stdout} = await execa({input: getInputString()})`sort`;
console.log(stdout);
```

```
// Similar to: npm run build < input.txt
await execa({stdin: {file: 'input.txt'}})`npm run build`;
```

```
// Similar to: npm run build > output.txt
await execa({stdout: {file: 'output.txt'}})`npm run build`;
```

```
const {stdout} = await execa({lines: true})`npm run build`;
// Print first 10 lines
console.log(stdout.slice(0, 10).join('\n'));
```

```
for await (const line of execa`npm run build`) {
	if (line.includes('WARN')) {
		console.warn(line);
	}
}
```

```
let count = 0;

// Filter out secret lines, then prepend the line number
const transform = function * (line) {
	if (!line.includes('secret')) {
		yield `[${count++}] ${line}`;
	}
};

await execa({stdout: transform})`npm run build`;
```

```
const response = await fetch('https://example.com');
await execa({stdin: response.body})`sort`;
```

```
import {execa} from 'execa';
import {pipeline} from 'node:stream/promises';
import {createReadStream, createWriteStream} from 'node:fs';

await pipeline(
	createReadStream('./input.txt'),
	execa`node ./transform.js`.duplex(),
	createWriteStream('./output.txt'),
);
```

```
// parent.js
import {execaNode} from 'execa';

const subprocess = execaNode`child.js`;
await subprocess.sendMessage('Hello from parent');
const message = await subprocess.getOneMessage();
console.log(message); // 'Hello from child'
```

```
// child.js
import {getOneMessage, sendMessage} from 'execa';

const message = await getOneMessage(); // 'Hello from parent'
const newMessage = message.replace('parent', 'child'); // 'Hello from child'
await sendMessage(newMessage);
```

```
// main.js
import {execaNode} from 'execa';

const ipcInput = [
	{task: 'lint', ignore: /test\.js/},
	{task: 'copy', files: new Set(['main.js', 'index.js']),
}];
await execaNode({ipcInput})`build.js`;
```

```
// build.js
import {getOneMessage} from 'execa';

const ipcInput = await getOneMessage();
```

```
// main.js
import {execaNode} from 'execa';

const {ipcOutput} = await execaNode`build.js`;
console.log(ipcOutput[0]); // {kind: 'start', timestamp: date}
console.log(ipcOutput[1]); // {kind: 'stop', timestamp: date}
```

```
// build.js
import {sendMessage} from 'execa';

const runBuild = () => { /* ... */ };

await sendMessage({kind: 'start', timestamp: new Date()});
await runBuild();
await sendMessage({kind: 'stop', timestamp: new Date()});
```

```
// main.js
import {execaNode} from 'execa';

const controller = new AbortController();
setTimeout(() => {
	controller.abort();
}, 5000);

await execaNode({
	cancelSignal: controller.signal,
	gracefulCancel: true,
})`build.js`;
```

```
// build.js
import {getCancelSignal} from 'execa';

const cancelSignal = await getCancelSignal();
const url = 'https://example.com/build/info';
const response = await fetch(url, {signal: cancelSignal});
```

```
import {execa, ExecaError} from 'execa';

try {
	await execa`unknown command`;
} catch (error) {
	if (error instanceof ExecaError) {
		console.log(error);
	}
	/*
	ExecaError: Command failed with ENOENT: unknown command
	spawn unknown ENOENT
			at ...
			at ... {
		shortMessage: 'Command failed with ENOENT: unknown command\nspawn unknown ENOENT',
		originalMessage: 'spawn unknown ENOENT',
		command: 'unknown command',
		escapedCommand: 'unknown command',
		cwd: '/path/to/cwd',
		durationMs: 28.217566,
		failed: true,
		timedOut: false,
		isCanceled: false,
		isTerminated: false,
		isMaxBuffer: false,
		code: 'ENOENT',
		stdout: '',
		stderr: '',
		stdio: [undefined, '', ''],
		pipedFrom: []
		[cause]: Error: spawn unknown ENOENT
				at ...
				at ... {
			errno: -2,
			code: 'ENOENT',
			syscall: 'spawn unknown',
			path: 'unknown',
			spawnargs: [ 'command' ]
		}
	}
	*/
}
```

```
await execa`npm run build`;
await execa`npm run test`;
```

```
$ NODE_DEBUG=execa node build.js
[00:57:44.581] [0] $ npm run build
[00:57:44.653] [0]   Building application...
[00:57:44.653] [0]   Done building.
[00:57:44.658] [0] ✔ (done in 78ms)
[00:57:44.658] [1] $ npm run test
[00:57:44.740] [1]   Running tests...
[00:57:44.740] [1]   Error: the entrypoint is invalid.
[00:57:44.747] [1] ✘ Command failed with exit code 1: npm run test
[00:57:44.747] [1] ✘ (done in 89ms)
```

```
import {execa as execa_} from 'execa';
import {createLogger, transports} from 'winston';

// Log to a file using Winston
const transport = new transports.File({filename: 'logs.txt'});
const logger = createLogger({transports: [transport]});
const LOG_LEVELS = {
	command: 'info',
	output: 'verbose',
	ipc: 'verbose',
	error: 'error',
	duration: 'info',
};

const execa = execa_({
	verbose(verboseLine, {message, ...verboseObject}) {
		const level = LOG_LEVELS[verboseObject.type];
		logger[level](message, verboseObject);
	},
});

await execa`npm run build`;
await execa`npm run test`;
```
