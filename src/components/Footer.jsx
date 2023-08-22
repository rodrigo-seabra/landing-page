import React from 'react'
import Social from './Social'
import Syle from "./Footer.css"

import GitHubB from './Photos/GitHub-Black.svg'
import FacebookB from "./Photos/Facebook-Black.svg"
import InstaB from "./Photos/Instagram-Black.svg"
import LinkB from "./Photos/LinkedIn-black.svg"


const Footer = (props) => {

  return (
    <footer className={props.cor}>
      <div className="text">
        <span>Copyright 2023 © - TechSolutions</span>
      </div>
      <div className="social"> 
      <Social ImgSocial = {GitHubB} />
      <Social ImgSocial = {FacebookB} />
      <Social ImgSocial =  {LinkB} />
      <Social ImgSocial =  {InstaB} />
      </div>


    </footer>
  )
}

export default Footer