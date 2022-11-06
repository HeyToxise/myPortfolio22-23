import React, { useRef } from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_haixy9l', 'template_r5ezt64', form.current, 'in-jk8WACEeR7xzla')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>cofussi.alessandro@gmail.com</h5>
            <a href='mailto:cofussi.alessandro@gmail.com' target='_blank' rel="noopener noreferrer">Send a Message</a>
          </article>
          <article className='contact__option'>
          <AiOutlineLinkedin className='contact__option-icon'  />
            <h4>Linkedin</h4>
            <h5>Alessandro Cofussi</h5>
            <a href='https://www.linkedin.com/in/alessandro-cofussi-ab4b95244' target='_blank' rel="noopener noreferrer">Send a Message</a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'  />
            <h4>Whatsapp</h4>
            <h5>+39| 348 707 3803</h5>
            <a href='https://api.whatsapp.com/send?phone=3487073803' target='_blank' rel="noopener noreferrer">Send a Message</a>
          </article>
        </div>
        {/* Fine Opzione COntatti */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' />
          <textarea name='message' rows='7' placeholder='Yout Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact