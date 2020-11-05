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
