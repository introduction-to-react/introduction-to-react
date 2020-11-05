import React from "react"

function NavbarItem(props) {
  return (
    <a style={{ color: props.color, marginRight: "5px" }} href={props.href}>
      {props.children}
    </a>
  )
}

export default NavbarItem