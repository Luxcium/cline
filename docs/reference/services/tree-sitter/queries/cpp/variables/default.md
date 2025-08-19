[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [services/tree-sitter/queries/cpp](../README.md) / default

# Variable: default

> **default**: "\n(struct\_specifier name: (type\_identifier) @name.definition.class body:(\_)) @definition.class\n\n(declaration type: (union\_specifier name: (type\_identifier) @name.definition.class)) @definition.class\n\n(function\_declarator declarator: (identifier) @name.definition.function) @definition.function\n\n(function\_declarator declarator: (field\_identifier) @name.definition.function) @definition.function\n\n(function\_declarator declarator: (qualified\_identifier scope: (namespace\_identifier) @scope name: (identifier) @name.definition.method)) @definition.method\n\n(type\_definition declarator: (type\_identifier) @name.definition.type) @definition.type\n\n(class\_specifier name: (type\_identifier) @name.definition.class) @definition.class\n"

Defined in: src/services/tree-sitter/queries/cpp.ts:9
