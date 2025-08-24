[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [services/tree-sitter/queries/javascript](../README.md) / default

# Variable: default

> **default**: "\n(\n  (comment)\* @doc\n  .\n  (method\_definition\n    name: (property\_identifier) @name) @definition.method\n  (#not-eq? @name \"constructor\")\n  (#strip! @doc \"^\[\\s\\\*/\]+\|^\[\\s\\\*/\]$\")\n  (#select-adjacent! @doc @definition.method)\n)\n\n(\n  (comment)\* @doc\n  .\n  \[\n    (class\n      name: (\_) @name)\n    (class\_declaration\n      name: (\_) @name)\n  \] @definition.class\n  (#strip! @doc \"^\[\\s\\\*/\]+\|^\[\\s\\\*/\]$\")\n  (#select-adjacent! @doc @definition.class)\n)\n\n(\n  (comment)\* @doc\n  .\n  \[\n    (function\_declaration\n      name: (identifier) @name)\n    (generator\_function\_declaration\n      name: (identifier) @name)\n  \] @definition.function\n  (#strip! @doc \"^\[\\s\\\*/\]+\|^\[\\s\\\*/\]$\")\n  (#select-adjacent! @doc @definition.function)\n)\n\n(\n  (comment)\* @doc\n  .\n  (lexical\_declaration\n    (variable\_declarator\n      name: (identifier) @name\n      value: \[(arrow\_function) (function\_expression)\]) @definition.function)\n  (#strip! @doc \"^\[\\s\\\*/\]+\|^\[\\s\\\*/\]$\")\n  (#select-adjacent! @doc @definition.function)\n)\n\n(\n  (comment)\* @doc\n  .\n  (variable\_declaration\n    (variable\_declarator\n      name: (identifier) @name\n      value: \[(arrow\_function) (function\_expression)\]) @definition.function)\n  (#strip! @doc \"^\[\\s\\\*/\]+\|^\[\\s\\\*/\]$\")\n  (#select-adjacent! @doc @definition.function)\n)\n"

Defined in: src/services/tree-sitter/queries/javascript.ts:7
