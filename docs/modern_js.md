# Modern JavaScript

JavaScript is being developed actively and gets frequent additions.

## CRA with Babel and Webpack

When using `create-react-app` to start your React project, you shouldn't need to touch your
Webpack and Babel configuration for you unless you want to integrate some third-party dependency.

## Babel

Babel is a JS compiler, which allows you to compile next generation JS to JS that runs in all browsers;
so basically it ensures that your web app runs on older browsers.

## Webpack

Webpack is a module bundler; among others things it can combine all your
JS files into a single one and handle imports etc.
It uses Babel to compile your JS and can also process other assets like CSS
or images.

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

## Handling Promises

Promises are a way to handle an asynchronous program flow.

For example, when making a HTTP request it will take some time till you receive a response.
While waiting for that response, you don't want your program to block.

```js
fetch("http://example.com/api")
  .then((response) => console.log(response.json()))
  .catch((error) => {
    console.error("Error:", error)
  })
```

The function passed to the `then()` method get executed as soon as the `fetch()` call receives
it's answer - the promise gets **resolved**.
When the promises gets **rejected**, the function passed to `catch()` will be executed.

## async/await

To make working with promises more comfortable and avoid to many `.then()` calls,
you can use async/await.
You can `await` calls to asynchronous functions and block the current function till the
promises which is being awaited is resolved.

You can only use `await` in an asynchronous function.

```js
async function getData() {
  try {
    // await blocks till it receives the server's response
    const response = await fetch("http://example.com/api")
    return response
  } catch (error) {
    return error
  }
}
```

## Object assignment with same key/value names

When you want to assign a key a value in an object and the key is the same as the variable's name
you would like to use as the value, it suffices to just write the key.

So the following are equivalent:

```js
const myVariable = 1

let obj = { myVariable: myVariable }

// equivalent
obj = { myVariable } // same as { myVariable: myVariable }
```

## Destructuring

The destructuring makes it possible to unpack values from arrays or objects into variables.

```js
const array = [1, 2, 3]
const [a, b, c] = array // a = 1, b = 2, c = 3
const [first, ...rest] = array // first = 1, rest = [2, 3]
```

```js
const object = { x: 1, y: 2, z: 3 }
// Variables must have the same name as the object's key
const { x, y, z } = object // x = 1, y = 2, z = 3

// If you want to use different variable names than the object's keys,
// you can do that the following way:
const { x: i, y: j, z: k } = object // i = 1, j = 2, z = 3

let { x: myX, ...rest } = object // myX = 1, rest = { y: 2, z: 3}
```

## import/export
TODO:

## Modern JS Example:

```js
// port has default value of 80
const get = async ({ host, port = 80, route, params }) => {
  let paramsString = ""
  for (key in params) {
    paramsString += `?${key}=${params[key]}`
  }

  return await fetch(`https://${host}:${port}/${route}${paramsString}`)
}

const options = {
  host: "example.com",
  port: 8080,
  route: "api",
  params: { search: "apple" },
}

get(options)
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
```
