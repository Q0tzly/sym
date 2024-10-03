# 3. Syntax Overview

Sym language commands are divided into six categories: stack operations, arithmetic operations, comparison, control flow, input/output, and debugging.

---

### 3.1 Stack Operations

Sym language uses a stack to manipulate data. Below are the commands related to stack operations.

| Command | Description | Usage example |
|--------|----------------------------------|---------|
| `_` | Remove the value at the top of the stack. | `_` |
| `@` | Copy the value at the top of the stack. | `@` |
| `&` | Swap the two values ​​at the top of the stack. | `&` |
| `n` | Push `n` onto the stack (e.g. 10). | `10` |

### 3.2 Arithmetic Operations

Sym language allows basic arithmetic operations to be performed on numbers in the stack. Arithmetic commands use the value at the top of the stack to perform operations.

| Command | Description | Example |
|--------|----------------------------------|---------|
| `+` | Add the two values ​​on the top of the stack. | `+` |
| `-` | Subtract the two values ​​on the top of the stack. | `-` |
| `*` | Multiply the two values ​​on the top of the stack. | `*` |
| `/` | Divide the two values ​​on the top of the stack. | `/` |
| `%` | Calculate the remainder of the two values ​​on the top of the stack. | `%` |

### 3.3 Comparison Operations

The Sym language provides instructions for comparing values. These instructions compare the values ​​on the top of the stack and push the result onto the stack (`1` or `0`).

| Command | Description | Example |
|--------|----------------------------------|---------|
| `=` | Compare whether the two values ​​on the top of the stack are equal. | `=` |
| `>` | Is the top value of the stack greater than the second value? | `>` |
| `<` | Is the top value of the stack less than the second value? | `<` |

### 3.4 Control Flow

Control flow commands allow you to branch program execution. They allow you to jump or loop based on certain conditions.

| Command | Description | Usage example |
|--------|----------------------------------|---------|
| `^n` | Unconditionally jump to the specified line number `n`. | `^10` |
| `\|n` | If the top of the stack is `0`, jump to line number `n`. | `\|10` |
| `~n` | If the top of the stack is not `0`, jump to line number `n`. | `~10` |
| `;` | Stop the program. | `;` |

### 3.5 Input/Output

The Sym language provides basic input/output commands. These allow you to receive values ​​from standard input and display values ​​on standard output.

| Command | Description | Example |
|--------|----------------------------------|---------|
| `?` | Receive a single value from standard input and push it onto the stack. | `?` |
| `!` | Print the top value on the stack to standard output. | `!` |

### 3.6 Debugging

There are also several debugging commands. You can check the state of the stack while the program is running, and input and output debugging information.

| Command | Description | Example |
|--------|----------------------------------|---------|
| `$?` | Receive a number from standard input and push it onto the stack. | `$?` |
| `$!` | Print the top value on the stack for debugging purposes. | `$!` |

### 3.7 Comments

A line is a comment only if the first character of the line is `#`.

<br>

The Sym language instruction set is designed to be simple and intuitive. Understanding these basic instructions will give you the foundations of programming in the Sym language.
