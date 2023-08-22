import React from 'react'
import Style from "./ChangeMode.module.css"

const ChangeMode = (props) => {
  return (
    <button className={Style.btn} onClick={props.funcao}>
        <img src={props.btn} />
    </button>
  )
}

export default ChangeMode