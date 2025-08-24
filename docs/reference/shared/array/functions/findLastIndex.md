[**claude-dev**](../../../README.md)

***

[claude-dev](../../../README.md) / [shared/array](../README.md) / findLastIndex

# Function: findLastIndex()

> **findLastIndex**\<`T`\>(`array`, `predicate`): `number`

Defined in: src/shared/array.ts:9

Returns the index of the last element in the array where predicate is true, and -1
otherwise.

## Type Parameters

### T

`T`

## Parameters

### array

`T`[]

The source array to search in

### predicate

(`value`, `index`, `obj`) => `boolean`

find calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.

## Returns

`number`
