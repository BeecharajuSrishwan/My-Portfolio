import React from 'react';
import "./about.css";
import AboutImg from "../../assets/about3.JPG";
import CV from "../../assets/srishwan-CV.docx";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info/>
        
        
        <p className="about__description">Frontend developer, I create web pages with UI / UX interface. And iam always ready to serve the people accordingly with only one click!!</p>
        <a download="" href={CV} className="button button--flex">Download CV
        <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="var(--container-color)" d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"/></svg>
       
        
        </a>

      </div>
      </div>
    </section>
  )
}

export default About