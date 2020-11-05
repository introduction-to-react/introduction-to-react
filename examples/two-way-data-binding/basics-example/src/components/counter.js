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
