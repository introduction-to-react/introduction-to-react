import React, { useState } from "react"

const App = () => {
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

export default App
