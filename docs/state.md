## State

Components can have a state, which are variables that belong to the component and
[are reactive](concepts.md#reactive). When you use those variables in your component and that
variable's value changes, your components re-renders to show the current value.

### Example

```jsx
import React, { useState } from "react"

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}
```

As you can see, we can receive a new state variable and setter using the `useState()` hook and tell
it its initial value.
Whenever you want to change the variables value, you **have to use its setter**.

Also, as you can see, React allows you to pass the `<button>` a function that will be executed when
you click on it.

## Two-way binding (binding state to input)

```jsx
import React, { useState } from "react"

export default () => {
  const [text, setText] = useState("")

  const handleChange = (event) => {
    setText(event.target.value) // set new value
  }

  return (
    <div>
      <input value={text} type="text" onChange={handleChange} />
      <br />
      current value: {text}
    </div>
  )
}
```

You can simply bind the value of `text` to the value attribute from the `<input>` element.
Whenever the input's value changes, the function passed to `onChange` will be executed and receive
the new value.
Now, in `handleChange()`, we set the new value using `text`'s setter.