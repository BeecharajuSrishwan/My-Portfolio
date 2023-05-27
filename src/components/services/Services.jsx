import React, { useState } from 'react'
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">
                    Ui/Ux <br/> Designer
                </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)} >
                View More
            <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Ui/Ux designer</h3>
                    <p className="services__modal-description">
                        As a fresher looking to serve, and 
                        provide quality work to clients and companies. </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop the user interface
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Enhance the user experience
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I can provide the best color cominations
                                </p>
                            </li>

                        </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">
                    Logo <br/> Designer
                </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)} >
                View More
            <i className="uil uil-arrow-right services__button-icon"></i> </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Logo Designer</h3>
                    <p className="services__modal-description">
                        As a fresher looking to serve, and provide quality work to clients and companies. </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I can make the most appropriate Logo's accordingly
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Dynamic and Attractive
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I can design logos based on your names!
                                </p>
                            </li>

                        </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
        <div>
                <i className="uil uil-camera services__icon"></i>
                <h3 className="services__title">
                    Photography and<br/> Video maker
                </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)} >
                View More
            <i className="uil uil-arrow-right services__button-icon"></i> </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>


                    <h3 className="services__modal-title">Multimedia Making</h3>
                    <p className="services__modal-description">
                        As a fresher looking to serve, and provide quality work to clients. </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I make photos for different events
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Video shooting and editing
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Indoor and Outdoor photography
                                </p>
                            </li>

                        </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services