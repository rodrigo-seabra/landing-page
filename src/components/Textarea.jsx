import Style from "./Textarea.module.css"

const Textarea = (props) => {
  return (
    <div className={Style.coolinput}>
        <label for={props.name}  className={Style.text}>{props.title}</label>
        <textarea  name={props.name} className={Style.input}/>
    </div>  
    )
}

export default Textarea