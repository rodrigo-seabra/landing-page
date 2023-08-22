import React from 'react'
import TextMain from './TextMain'
import Image from "./Photos/Image-Main.png"
import "./Main.css"
import Contate from './Contate'

const Main = () => {
  return (
    <>
        <div className="Conteiner">
            <TextMain/> 
            <img src={Image} alt="" />
        </div>
        <div>
            <Contate/>
        </div>
    </>
    
  )
}

export default Main