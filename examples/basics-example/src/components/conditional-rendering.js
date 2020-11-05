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
