import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import"./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_t9bltu4', 'template_cijbok7', form.current, 'TYorHAtwLK7hHE0xE')
        e.target.reset()
    };
    
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">saisrishwan.567@gmail.com</span>

                        <a href="mailto:saisrishwan.567@gmail.com.com" className="contact__button">Write me{" "}
                        <i className="bx bx-right-arrow-alt contact__button-icon">
                        </i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">+91 9391380356</span>

                        <a href="https://api.whatsapp.com/send?phone=9391380356&text=Hello, more information!" className="contact__button">Write me{" "}
                        <i className="bx bx-right-arrow-alt contact__button-icon">
                        </i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-instagram contact__card-icon"></i>

                        <h3 className="contact__card-title">Instagram</h3>
                        <span className="contact__card-data">sai_srishwan</span>

                        <a href="https://www.instagram.com/sai_srishwan/" className="contact__button">Write me{" "}
                        <i className="bx bx-right-arrow-alt contact__button-icon">
                        </i></a>
                    </div>
                </div>
            </div>

            <div>
                <div className="contact__content">
                    <h3 className="contact__title">Write me your query</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label  className="contact__form-tag">Name</label>
                            <input 
                              type="text" 
                              name='name' 
                              className='contact__form-input'
                              placeholder='Insert your name'
                            />
                        </div>

                        <div className="contact__form-div">
                            <label  className="contact__form-tag">Email</label>
                            <input 
                              type="email" 
                              name='emai' 
                              className='contact__form-input'
                              placeholder='Insert your emial'
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label  className="contact__form-tag">project</label>
                            <textarea name="project" 
                             cols="30"  
                             rows="10"
                             className="contact__form-input"
                             placeholder='Write up your query / project'  >
                            </textarea>
                        </div>

                        <button className="button button--flex">
            Send Message
            <svg
            width="36"
            height="36"
            viewBox="0 0 1024 1024" 
            class="icon"  
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M633.319 722.634L429 860.298V672.034z" fill="var(--container-color)" /><path d="M446.662 681.407l388.442 104.557L960 163.702l-159.706 99.826L64 723.667z" fill="var(--container-color)" />
            <path d="M446.662 681.407L960 163.702l-159.706 99.826L64 723.667z" fill="var(--container-color)" /></svg>
        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact