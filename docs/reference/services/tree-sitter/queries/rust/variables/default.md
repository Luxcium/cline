[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [services/tree-sitter/queries/rust](../README.md) / default

# Variable: default

> **default**: "\n(struct\_item\n    name: (type\_identifier) @name.definition.class) @definition.class\n\n(declaration\_list\n    (function\_item\n        name: (identifier) @name.definition.method)) @definition.method\n\n(function\_item\n    name: (identifier) @name.definition.function) @definition.function\n"

Defined in: src/services/tree-sitter/queries/rust.ts:6
