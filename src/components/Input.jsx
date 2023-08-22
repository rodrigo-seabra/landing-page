import React from 'react'
import Style from "./Input.module.css"

const Input = (props) => {
  return (
    <div className={Style.coolinput}>
        <label for={props.name}  className={Style.text}>{props.title}</label>
        <input type={props.type} name={props.name} className={Style.input}/>
    </div>
  )
}

export default Input