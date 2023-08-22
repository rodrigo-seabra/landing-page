import Style from './Social.module.css'


const Social = (props) => {
  return (
    <a href={props.link}><img src={props.ImgSocial} className={Style.social} /></a>
  )
}

export default Social