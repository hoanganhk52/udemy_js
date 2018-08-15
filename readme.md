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
- ## Classical VS prototypal inheritance

# Dangerous aside

### automatic semicolon insertion

- should put semicolon

# Big word alert

### namespace: a container for variable and functions

- typically to keep variables and functions with the same name separate

### first class function

- everything you can do with other types you can do with functions
- assign them to variables, pass them around, create them on the fly

### expression

- A unit of code that results in a value
- it doesn't have to save to a variable

### mutate

- to change something
- "immutable" means it cant be changed

### Arguments

- The parameters you pass to a function
- JS gives you a keyword of the same name which contains them all

### Whitespace

- Invisible characters that create literal 'space' in your written code
- Like: carriage returns, tabs, spaces

### Callback function

- A function you give to another function, to be run when the other function is finished

### Inheritance: one object gets access to the properties and methods of another object

# 01.Execution Contexts and lexical Environments

#### The global environment and The global object

- Execution Context (Global)
  - Whenever code is run in Js, it's run inside an execution context
  - JS engine create Global object and "this"

#### The Execution context - Creation and Hoisting

- The execution context is created in two phases
  - The creation phase: global object, this, outer environment, the parser run through the code and sets up the memory space for variables and functions. it mean before code begins to executed line by line, the JS engine has already set aside memory space for variables and functions in all of code ( variable = undefined )
  - The execution phase:

#### Functions, Context and variables environments

- variable environment: where the variables live and how they relate to each other in memory

#### The scope chain

- every execution context has a reference to its outer environment what depends on its lexical en vironment

#### Scope, ES6 and let

- Scope: where a variavle is available in your code

#### Asynchronous Callback

- Asynchronous: more than one at a time

# 02. Types and Operators

#### Primitive types: something that isn't an object

- undefined: you shouldn't set a variable to this
- null: something doesn't exist, you can set a variable to this
- boolean
- number
- string
- symbol

#### Operator Precedence and Associativity(quyen uu tien va ket hop)

- operator precedence: functions art called in order of precedence (HIGHER precedence wins)
- Associativity: what order operator functions get called in: left-to-right or right-to-left. Whwn functions have the same precedence - [refs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

#### Comparison operators: [refs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

#### Existence and booleans

# 02. Objects and functions

#### objects and the dot

```javascript
obj["a"]["b"] = obj.a.b;
```

#### objects and objects literals

- Object literals

```javascript
var a = { a: "a", b: "b" };
```

#### functions are objects

#### functions statements and function expressions

#### By value and by reference

- All primitive types are by value
- All objects are by reference

#### Objects, functions and "this"

#### Arguments and spread

#### IIFE and save code

#### Closure: closure.js

#### Function factory

#### closure and callback

#### call(), apply() and bind()

# 3. object-oriented javascript and prototypal inheritance

#### prototype

- all object include function have "proto" property

#### everything is an Object (or primitive)

- prototype chain

#### reflection and extend
