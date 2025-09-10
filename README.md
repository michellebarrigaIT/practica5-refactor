Refactor the code to eliminate hoisting “gotchas” by:
- Uses const or let (no more var),

- Converts all functions to const-bound arrow functions or function expressions
assigned to const,

- Moves every declaration above its first use,

- Eliminates any temporal-dead-zone or “undefined” pitfalls.
