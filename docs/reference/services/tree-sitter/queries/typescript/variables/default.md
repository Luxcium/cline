[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [services/tree-sitter/queries/typescript](../README.md) / default

# Variable: default

> **default**: "\n(function\_signature\n  name: (identifier) @name.definition.function) @definition.function\n\n(method\_signature\n  name: (property\_identifier) @name.definition.method) @definition.method\n\n(abstract\_method\_signature\n  name: (property\_identifier) @name.definition.method) @definition.method\n\n(abstract\_class\_declaration\n  name: (type\_identifier) @name.definition.class) @definition.class\n\n(module\n  name: (identifier) @name.definition.module) @definition.module\n\n(function\_declaration\n  name: (identifier) @name.definition.function) @definition.function\n\n(method\_definition\n  name: (property\_identifier) @name.definition.method) @definition.method\n\n(class\_declaration\n  name: (type\_identifier) @name.definition.class) @definition.class\n"

Defined in: src/services/tree-sitter/queries/typescript.ts:8
