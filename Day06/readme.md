# JavaScript String and Object Concepts

## 1. Non-Primitive Objects
- **Objects are mutable:** Properties of an object can be modified even if it is declared as `const`.
- **Reassignment restriction:** A `const` object cannot be reassigned to a new reference.

## 2. Strings
### Creation
- Strings can be created using double quotes (`"`), single quotes (`'`), or template literals (`` ` ``).
- Template literals allow embedding expressions using `${expression}`.

### String Concatenation
- Use the `+` operator to join strings.

### Length
- The `.length` property returns the number of characters in a string.

### Escape Characters
- `\n`: Newline
- `\\`: Backslash

### Quotes Inside Strings
- Use escaped quotes or different types of quotes to include them inside strings.

## 3. String Methods
### Case Conversion
- `toLowerCase()`: Converts the string to lowercase.
- `toUpperCase()`: Converts the string to uppercase.

### Character Access
- Use bracket notation (`str[index]`) or `charAt(index)`.

### Searching
- `indexOf()`: Returns the first occurrence of a substring.
- `lastIndexOf()`: Returns the last occurrence of a substring.
- `includes()`: Checks if a substring exists.

### Extracting Substrings
- `slice(start, end)`: Extracts part of a string. Accepts negative indices.
- `substring(start, end)`: Similar to `slice`, but does not accept negative indices.

### Replacing Substrings
- `replace()`: Replaces the first occurrence of a substring.
- `replaceAll()`: Replaces all occurrences of a substring.

### Splitting Strings
- `split(delimiter)`: Splits a string into an array using a specified delimiter.

### Trimming Whitespaces
- `trim()`: Removes whitespaces from the start and end of a string.

## 4. String Objects
- Strings created with the `new` keyword are objects, stored in heap memory.
