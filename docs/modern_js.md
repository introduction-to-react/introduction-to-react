# Modern JavaScript

JavaScript is being developed actively and gets frequent additions.

## Babel
TODO:

## Webpack
TODO:

## let/const

`let` and `const` were introduced in ECMAScript2015 (ES6) and are a new way to declare variables.
You should avoid `var` when possible, since `var` declare global variables.

Variables declared with `let` are block-scoped and `const` variables are final, so their value can't
be changed.

## Template literals

Template literals/template strings are an easy way to concatinate text with variables.

The following are equivalent:

```js
const x = 1

console.log("x is " + x + "!")
console.log(`x is ${x}!`)
```

As you can see, you simply have to use \` (backticks) and wrap variables (or expressions) within `${}`.

## Arrow functions

Arrow functions are a syntax to write in-line functions.
The following are (in this example) the same:

```js
function increment(number) {
  return number + 1
}

// function can be assigned to variable
const increment = (number) => {
  return number + 1
}

// when omitting the curly braces, the expression after the => will automatically be returned
// this only works when the => is followed by a single expression
const increment = (number) => number + 1

// you can omit the parantheses around the function parameters when it has only a single parameter
const increment = (number) => number + 1

console.log(increment(1)) // prints '2'
```

Normal functions and arrow functions aren't equivalent, though.
Normal functions have their own `this`, arrow functions do not.

Consider the following example:
TODO:

## Promises
TODO:

## async/await
TODO:

## Destructuring
TODO:
