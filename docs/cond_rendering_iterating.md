# Conditional rendering and iterating

## Conditional rendering

To render an element only when a given condition is true, you can do the following:

```jsx
import React, { useState } from "react"

export default () => {
  const [showElement, setShowElement] = useState(true)

  return (
    <div>
      {showElement && <p>Hello ;)</p>}
      <button
        onClick={() => {
          setShowElement(!showElement)
        }}
      >
        Toggle visibility
      </button>
    </div>
  )
}
```

The `p` tag is only rendered when the expression on the left side of the `&&` evalutes to true,
so when `showElement` is true.

## Iterating

```jsx
import React from "react"

export default () => {
  const courses = [
    {
      name: "Kubernetes",
      price: 69.99,
    },
    {
      name: "Ansible",
      price: 42.99,
    },
    {
      name: "Framer",
      price: 23.99,
    },
  ]

  return (
    <div>
      {courses.map((value, index) => {
        return (
          <div key={index}>
            <span>
              {value.name}, {value.price}$
            </span>
          </div>
        )
      })}
    </div>
  )
}
```

You can use the `map()` method of an array to iterate over it and return JSX elements.
Note that the top element returned from the loop must have a `key` attribute set; it must be
different among all the elements returned by the loop, so the loop's index is very well suited for
it.
