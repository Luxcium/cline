[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [services/tree-sitter/queries/c](../README.md) / default

# Variable: default

> **default**: "\n(struct\_specifier name: (type\_identifier) @name.definition.class body:(\_)) @definition.class\n\n(declaration type: (union\_specifier name: (type\_identifier) @name.definition.class)) @definition.class\n\n(function\_declarator declarator: (identifier) @name.definition.function) @definition.function\n\n(type\_definition declarator: (type\_identifier) @name.definition.type) @definition.type\n"

Defined in: src/services/tree-sitter/queries/c.ts:7
