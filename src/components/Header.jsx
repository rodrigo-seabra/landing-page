import React from 'react'
import "./Header.css"
import ChangeMode from './ChangeMode'
import ButtonContact from './ButtonContact'
import Sol from "./Photos/Sol.svg"
import LogoB from "./Photos/Logo-Black.svg"
import LogoW from "./Photos/LogoW.svg"
import Lua from "./Photos/Lua.svg"



const Header = () => {
  return (
    <>

      <header>
        <img src={LogoB} alt="" />
        <div className="Buttons">
        <ButtonContact name="Contate"/>
        <ChangeMode name = "btn" btn = {Sol}/>
        </div>
      </header>
    </>
  )
}

export default Header