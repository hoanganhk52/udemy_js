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

# 5. object-oriented javascript and prototypal inheritance

#### prototype

- all object include function have "proto" property

#### everything is an Object (or primitive)

- prototype chain

#### reflection and extend

#### Building objects

#### 63: Object.create and purge prototypal inheritance

#### 64: ES6 and classes

- my fear though is that rather than appreciating the differences and the beauty of prototypal inheritance, those who are coming form the programming languages will simply see the class key word and immediately begin to design object structures the way they do in C#

- it's still attempt to appease those coming from other languages

#### 65: Initialization

#### 66: typeof, instanceof and figuring out what something is

#### 67: Strict mode

# 8. Examining famous frameworks and libraries
