[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [services/tree-sitter/queries/ruby](../README.md) / default

# Variable: default

> **default**: "\n(\n  (comment)\* @doc\n  .\n  \[\n    (method\n      name: (\_) @name.definition.method) @definition.method\n    (singleton\_method\n      name: (\_) @name.definition.method) @definition.method\n  \]\n  (#strip! @doc \"^#\\s\*\")\n  (#select-adjacent! @doc @definition.method)\n)\n\n(alias\n  name: (\_) @name.definition.method) @definition.method\n\n(\n  (comment)\* @doc\n  .\n  \[\n    (class\n      name: \[\n        (constant) @name.definition.class\n        (scope\_resolution\n          name: (\_) @name.definition.class)\n      \]) @definition.class\n    (singleton\_class\n      value: \[\n        (constant) @name.definition.class\n        (scope\_resolution\n          name: (\_) @name.definition.class)\n      \]) @definition.class\n  \]\n  (#strip! @doc \"^#\\s\*\")\n  (#select-adjacent! @doc @definition.class)\n)\n\n(\n  (module\n    name: \[\n      (constant) @name.definition.module\n      (scope\_resolution\n        name: (\_) @name.definition.module)\n    \]) @definition.module\n)\n"

Defined in: src/services/tree-sitter/queries/ruby.ts:6
