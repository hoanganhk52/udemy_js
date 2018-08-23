# Conceptual aside

- syntax parsers:

  - A program that reads your code and determines what it does and if its grammar is valid
    > your code isn't magic. Someone else wrote a program to translate it for the computer
  - Is a part of compiler

- Lexical environment: where something sits physically in the code you write (where it's written and what surrounds it)

  > 'Lexical' means 'having to do with words or grammar'. A lexical environment exists in programming languages in which where you write something is important.

- Execution context: A wrapper to help manage the code that is running

  > There are lots of lexical environments. Which one is currently running is mamaged via execution contexts. It can contain things beyond what you're written in your code

- Object: A collection of name/value pairs
- undefined: special value that is also a special keyword in JavaScript, it's the value that variables receive during the creation phase.
- Operators: A special function that is syntactically (written) differently
- coercion: converting a value from one type to another
  - example: 1 + '2' = '12'
- Classical VS prototypal inheritance

- Built-in function constructors: creat an object
  - example
