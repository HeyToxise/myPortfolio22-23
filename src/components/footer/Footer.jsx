import React from 'react'
import './footer.css';
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer__logo'> ALESSANDRO</a>

    <ul className='permalinks'>
      <li>
        <a href='#'>Home</a>
      </li>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#experience'>Experience</a>
      </li>
      <li>
        <a href='#contact'>contact</a>
      </li>     
    </ul>

    <div className='footer__socials'>
        <a href='https://instagram.com'><BsInstagram /> </a>
        <a href='https://twitter.com'><BsTwitter /></a>
        <a href='https://github.com'><BsGithub /></a>
    </div>

    <div className='footer__copyright'>
      <small>&copy; Alessandro Cofussi.</small>
    </div>
   </footer>
  )
}

export default Footer