import { useState } from "react"


const Contador = ( props ) => {
    const [contador, setContador] = useState(0)

    function Aumentar (){
        setContador (contador + 1)
    }
    function Diminuir (){
        setContador (contador - 1)
    }

  return (
    <div>
    <button onClick={Aumentar}>+</button>
      <span>{contador}</span>
      <button onClick={Diminuir}>-</button>
    </div>
  )
}

export default Contador