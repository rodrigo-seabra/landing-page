const ExibeNota = ( props ) => {
    
    function ExibeNota ()
    {
        alert(props.nota)
    }
  

    return (
        <div>
            <h1>{props.nome}</h1>
            <button onClick={ExibeNota} >Veja sua nota</button>
        </div>
  )
}

export default ExibeNota