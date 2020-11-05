import React from "react"
import NavbarItem from "./components/navbar-item"
import Counter from "./components/counter"
import MyInput from "./components/my-input"
import ConditionalRendering from "./components/conditional-rendering"
import Iterating from "./components/iterating"

function App() {
  return (
    <div>
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
      <br />
      <Counter />
      <br />
      <MyInput />
      <br />
      <ConditionalRendering />
      <br />
      <Iterating />
    </div>
  )
}

export default App
