import React from 'react'
import "./Header.css"
import ChangeMode from './ChangeMode'
import ButtonContact from './ButtonContact'
import Sol from "./Photos/Sol.svg"
import LogoB from "./Photos/Logo-Black.svg"

const Header = () => {
  return (
    <header>
      <img src={LogoB} alt="" />
        <div className="Buttons">
        <ButtonContact name="Contate"/>
        <ChangeMode btn = {Sol}/>
        </div>
    </header>
  )
}

export default Header