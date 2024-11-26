# JavaScript Comparisons and Type Coercion

This script explores JavaScript's comparison operators, type conversion, and behavior with `null`, `undefined`, and `NaN`, along with basic usage of bitwise operators. Below are the key topics covered:

## Comparisons (`==`, `===`, `<`, `>`)
- `==` compares values after type coercion, while `===` checks both type and value.
- Special cases with `null` and `undefined`:
  - `null == undefined` is `true`.
  - `null === undefined` is `false`.

## Type Conversion
- String-to-number conversion is automatic in `==` but not in `===`.
- Examples of implicit type conversion are shown for `null` and `undefined`.

## `null` and `undefined` Behavior
- `null` is loosely equal (`==`) to `undefined`, but not strictly equal (`===`).
- Comparisons like `null <= 0` evaluate to `true` due to type conversion.

## `NaN` Behavior
- `NaN` is not equal to itself (`NaN == NaN` is `false`).
- Demonstrates the result of `Number(undefined)` and its impact on comparisons.

## Bitwise Operators
- Demonstrates basic bitwise operations:
  - `&` (AND): Performs a bitwise AND.
  - `|` (OR): Performs a bitwise OR.

## Output Examples
- Provides console outputs for all the scenarios to understand how JavaScript evaluates each expression.

This script is a useful reference for understanding JavaScript quirks in type coercion and comparisons, helping developers debug and write robust code.