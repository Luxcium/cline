[**claude-dev**](../../../../../README.md)

***

[claude-dev](../../../../../README.md) / [services/tree-sitter/queries/swift](../README.md) / default

# Variable: default

> **default**: "\n(class\_declaration\n  name: (type\_identifier) @name) @definition.class\n\n(protocol\_declaration\n  name: (type\_identifier) @name) @definition.interface\n\n(class\_declaration\n    (class\_body\n        \[\n            (function\_declaration\n                name: (simple\_identifier) @name\n            )\n            (subscript\_declaration\n                (parameter (simple\_identifier) @name)\n            )\n            (init\_declaration \"init\" @name)\n            (deinit\_declaration \"deinit\" @name)\n        \]\n    )\n) @definition.method\n\n(class\_declaration\n    (class\_body\n        \[\n            (property\_declaration\n                (pattern (simple\_identifier) @name)\n            )\n        \]\n    )\n) @definition.property\n\n(property\_declaration\n    (pattern (simple\_identifier) @name)\n) @definition.property\n\n(function\_declaration\n    name: (simple\_identifier) @name) @definition.function\n"

Defined in: src/services/tree-sitter/queries/swift.ts:7
