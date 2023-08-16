import { useState } from "react"

const BoasVindas = () => {
    const [nome, setNome] = useState('')
    return (
        <>
            <div>
                <input type="text" onChange={(e) => {
                    setNome(e.target.value)
                }}/>
            </div>
            <div>
                <span>{nome}</span>           
            </div>
        </>
    )
}

export default BoasVindas