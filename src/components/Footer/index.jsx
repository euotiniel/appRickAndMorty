import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { Footer, DivName, DivSocialMidia } from './styles'

export default function () {
  return (
    <Footer>
        <div>
            <DivName>
                <p></p>
            </DivName>
            <DivSocialMidia>
                <ul>
                    <li><a href="https://github.com/otonielemanuel" target='_blank'><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/otoniel-emanuel-b80727261/" target='_blank'><FaLinkedinIn /></a></li>
                    <li><a href="https://www.instagram.com/eusouootis_/" target='_blank'><FaInstagram /></a></li>
                </ul>
            </DivSocialMidia>
        </div>
    </Footer>
  )
}
