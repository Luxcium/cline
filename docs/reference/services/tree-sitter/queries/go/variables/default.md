[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [services/tree-sitter/queries/go](../README.md) / default

# Variable: default

> **default**: "\n(\n  (comment)\* @doc\n  .\n  (function\_declaration\n    name: (identifier) @name.definition.function) @definition.function\n  (#strip! @doc \"^//\\s\*\")\n  (#set-adjacent! @doc @definition.function)\n)\n\n(\n  (comment)\* @doc\n  .\n  (method\_declaration\n    name: (field\_identifier) @name.definition.method) @definition.method\n  (#strip! @doc \"^//\\s\*\")\n  (#set-adjacent! @doc @definition.method)\n)\n\n(type\_spec\n  name: (type\_identifier) @name.definition.type) @definition.type\n"

Defined in: src/services/tree-sitter/queries/go.ts:6
