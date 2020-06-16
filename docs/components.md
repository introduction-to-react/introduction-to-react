# Basics + Components

## JSX

JSX is a syntax extension used by React to create UI elements. You can kind of think of it as
"HTML tags within JS" (except they're actual JS elements). Its syntax doesn't differ a lot from
HTML, but there are a few exceptions:

- HTML's `class` attribute becomes `className`
- HTML's `for` attribute becomes `htmlFor`
- ...

## Components and Props

[As introduced earlier](concepts.md#components), components are basically your self-written
custom "HTML tags" that you can re-use.
Every component usually gets their own file.
Typical components would be navbars, buttons, data pickers, color pickers and so on.
But also every route of your web app (like `/about` or `/contact`) will most likely get their own
file. Your components can also receive **props** to allow them to be more flexible.

### Example component

`navbar-item.js`:

```jsx
import React from "react"

function NavbarItem(props) {
  return (
    <a style={{ color: props.color, marginRight: "5px" }} href={props.href}>
      {props.children}
    </a>
  )
}

export default NavbarItem
```

As you can see, the components is just an exported function that receives a `props` object.
To use a JS expression (like a variable) within JSX, you have to put that expression within `{ }`.
`props.children` contains the element's children (Example: `<b>Here are the b tag's children</b>`)

You can the import the component in another file and use it:

`App.js`:

```jsx
import React from "react"
import NavbarItem from "./components/navbar-item"

function App() {
  return (
    <div>
      <NavbarItem href="/" color="blue">
        Home
      </NavbarItem>
      <NavbarItem href="/about" color="red">
        about
      </NavbarItem>
      <NavbarItem href="/contact" color="green">
        contact
      </NavbarItem>
    </div>
  )
}

export default App
```

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

## Function vs class-based components
