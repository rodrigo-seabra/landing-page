import React from 'react'
import Style from "./ButtonContact.module.css"
const ButtonContact = (props) => {
  return (
    <button className={Style.button}>{props.name}</button>
  )
}

export default ButtonContact