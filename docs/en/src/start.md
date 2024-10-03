# 2. Getting Started

Here are the basic steps to write your first program using the language.

### 2.1 Installation

**Installation using Cargo**

Sym is written in Rust and can be installed using Cargo. Run the following command to install it:

``` sh
cargo install sym-lang
```

### 2.2 Hello World

As your first coding exercise in the Sym language, let's write a program that prints "Hello World".

``` sym
10 13 100 108 114 111 87 32 111 108 108 101 72
13
& ! 1 - @ ~3
```

This code looks a bit complicated, but we'll break it down step by step. First, let's convert this code into a more understandable form.

```
`n` `\` `d` `l` `r` `o` `W` ` ` ` `o` `l` `l` `e` `H`
13
swap out 1 - dup jnz(3)
```

First, the premise is that the Sym language separates commands with spaces and newlines.

**Line 1**
Numbers are lined up. In the Sym language, only numbers (0 to 255) can be treated as data.
Numbers can be pushed onto the stack by writing them as they are.

In the Sym language, there are no characters or strings, and ascii codes are handled in decimal notation.
These numbers are decimal ascii, and "Hello World\n" is pushed in reverse.
Also, the first `10 13` is a newline character.

Note: Characters, strings, and reverse operations are scheduled to be added in version 1.1.0.

**Line 2**
The number 13 is pushed onto the stack.
This is the length of the string to be output. It will be used for loop control in later processing.

**Line 3**
The third line performs the process to output characters one by one.
I will explain it step by step.

- &(swap): Swaps the number 13 (length of string) at the top of the stack with the first character 'H' (72) below it. This allows the next command to output a character.
- !(out): Outputs the character 'H' (72) at the top of the stack as ASCII.
- 1 -: Since one character has been output, subtract 1 from the length of the string. This will allow the remaining string to be known the next time the loop is performed.
- @(dup): Copies the value at the top of the stack that is the length of the string after subtraction. This value is used for the next command.
- ~3(jnz(3)) : If the value on the top of the stack is not 0, jump to the third line. This will cause the loop to repeat until the entire string has been printed.
