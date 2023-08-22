import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Style from "./Contate.module.css"
import ButtonContact from './ButtonContact'

const Contate = () => {
  return (
    <div className={Style.conteiner}>
      <div className={Style.Contate}>
          <h2>Contate</h2>
        <div>
          <Input type = "text" name = "name" title = "Nome"/>
          <Input type = "email" name = "email" title = "Email"/>
          <Input type = "tel" name = "tel" title = "Telefone"/>
          <Textarea name= "mensagem" title="Digite sua mensagem"/>
          <ButtonContact name="Enviar"/>
        </div>
      </div>
    </div>
  )
}

export default Contate