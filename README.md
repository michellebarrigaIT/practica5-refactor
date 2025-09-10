# Refactor
## Assignment
Refactor the code to eliminate hoisting “gotchas” by:
- Uses const or let (no more var),

- Converts all functions to const-bound arrow functions or function expressions
assigned to const,

- Moves every declaration above its first use,

- Eliminates any temporal-dead-zone or “undefined” pitfalls.


## Explanation
- By using `let/const` instead of `var` we have a clear runtime error instead of having a `undefined` without realizing.
- By converting function declarations into const arrow functions, we removed function hoisting, so functions must be defined before they are called.
- These changes make the code safer and more predictable because they eliminate silent bugs caused by `undefined`.
- - It means that ensure that variables and functions can't be used before they are ready.
- - Also, this changes make the code more readable, and reduce confusion.
