import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import profileImg from './assets/dm1.png'; 
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';

import siklabImg from './assets/siklab.jpg';
import awesomeImg from './assets/awesometodos.jpg';
import itpeImg from './assets/itpe.jpg';

function App() {
  return (
    <div className="portfolio-container-new">

      <div className="blob-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <nav className="navbar-top">
        <div className="nav-wrapper-outline">
          <div className="logo-main"><span>i</span>Portfolio</div>
          <ul className="nav-links-new">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>  
          </ul>
        </div>
      </nav>

      <main id="home" className="main-hero-area">
        <div className="main-content">
          <h1>
            <span className="typing-name">Denmark P. Escobañez</span>
          </h1>

          <div className="typing-text">
            <span className="highlight-pink">BSIT</span> Student | 
            <span className="highlight-pink"> UX</span> Engineer
          </div>
          
          <p>
            "A 2nd-year IT student and self-taught developer driven by a passion for innovation. My goal is simple: to transform curiosity into meaningful digital experiences."
            <br/>
            <strong>"Dream BIG, Work HARD."</strong>
          </p>

          <div className="hero-action-area">
            
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <button className="pink-action-btn">Resume</button>
            </a>

            <div className="hero-social-links">
              <a href="https://github.com/denmark25escobanez-oss" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fab fa-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/escoba%C3%B1ez-denmark-p-608690343/" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://www.facebook.com/denmark.escobanez" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>

              <a href="https://www.instagram.com/anaknirosette/" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-area">
          <img src={profileImg} alt="Denmark Escobanez" className="hero-profile-img"/>
        </div>
      </main>
          {/*About me*/}
      <section id="about" className="about-resume-section">
        <div className="about-blob-container">
          <div className="about-blob blob-top"></div>
          <div className="about-blob blob-bottom"></div>
        </div>

        <div className="resume-wrapper">

          <div className="resume-left-profile">
            <div className="mini-slideshow">
              <img src={pic1} className="about-slide a1" alt="slide1"/>
              <img src={pic2} className="about-slide a2" alt="slide2"/>
              <img src={pic3} className="about-slide a3" alt="slide3"/>
              <img src={pic4} className="about-slide a4" alt="slide4"/>
            </div>
          </div>

          <div className="resume-right-details">

            <h1 className="resume-header-title">ABOUT ME</h1>

            <div className="resume-highlights-container">
              <p className="resume-tagline highlight-pink">Software Developer</p>

              <p className="resume-short-bio">
                Driven by relentless curiosity and a 'galang kalye' spirit, I approach software development with a unique blend of street-smart grit and technical precision. I don’t just write code; I navigate complex digital landscapes with the same adaptability and resourcefulness I learned from the streets. Whether its architecting a scalable backend or troubleshooting a stubborn bug, I bring a hands-on, 'find-a-way' attitude to every project, ensuring that the solutions I build are as robust as they are innovative.
                </p>
            </div>

            <div className="resume-grid-columns">

              <div className="resume-column">

                <h3 className="column-label">Education</h3>

                <div className="resume-entry">
                  <span className="entry-date">2025 - PRESENT</span>
                  <p className="entry-bold">Western Institute of Technology</p>
                  <p className="entry-sub">BS Information Technology</p>
                </div>

                <div className="resume-entry">
                  <span className="entry-date">2022 - 2025</span>
                  <p className="entry-bold">STI College Caloocan</p>
                  <p className="entry-sub">BSIT Information Technology</p>
                </div>

              </div>

              <div className="resume-column">

                <h3 className="column-label">Experience</h3>

                <div className="resume-entry">
                  <span className="entry-date">2023</span>
                  <p className="entry-bold">Student Assistant</p>
                  <p className="entry-sub">Office Management and Art Support</p>
                </div>

                <div className="resume-entry">
                  <span className="entry-date">Family Business</span>
                  <p className="entry-bold">Farm Operations</p>
                  <p className="entry-sub">Logistics and delivery</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
          {/*Projek*/}
      <section id="projects" className="content-section grey-bg">

        <div className="content-wrapper-new">

          <div className="section-header-container" style={{ textAlign: 'center', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="section-header">
              <span className="section-index highlight-pink">Created</span>
              <span className="section-label text-muted"> PROJECTS</span>
            </div>
            <h2 className="section-title-new text-white" style={{ margin: '0', fontWeight: '900' }}>DESIGNS AND PROJECTS</h2>
            <div className="header-underline" style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #ff007a, #7000ff)', marginTop: '15px', borderRadius: '2px' }}></div>
          </div>

          <div className="project-grid-new">

            <a href="https://1drv.ms/p/c/a487d87732b02ef1/IQB3BnMqqQ3tSpXd8BTN7ATbAfEUYl_1xslNw3ZPqgfWVPc" target="_blank" rel="noopener noreferrer">

              <div className="project-card-new">

                <div className="project-image-wrapper">
                  <img src={siklabImg} className="project-screenshot" alt="Siklab"/>
                </div>

                <h3 className="project-title text-white">SIKLAB</h3>

              </div>

            </a>

            <a href="https://escobaneznotion.onrender.com/" target="_blank" rel="noopener noreferrer">

              <div className="project-card-new">

                <div className="project-image-wrapper">
                  <img src={awesomeImg} className="project-screenshot" alt="AwesomeTodos"/>
                </div>

                <h3 className="project-title text-white">AWESOMETODOS</h3>

              </div>

            </a>

            <a href="https://denmark25escobanez-oss.github.io/Porfolio/" target="_blank" rel="noopener noreferrer">

              <div className="project-card-new">

                <div className="project-image-wrapper">
                  <img src={itpeImg} className="project-screenshot" alt="1st Portfolio"/>
                </div>

                <h3 className="project-title text-white">1ST PORTFOLIO</h3>

              </div>

            </a>

          </div>

        </div>

      </section>

      
      <div className="resume-skills-footer">
        <div className="content-wrapper-new">
          <h1 className="resume-header-title" style={{ fontSize: '1.2rem', marginTop: '30px', marginBottom: '15px' }}>
            TECHNICAL SKILLS
          </h1>
        </div>
        <div className="skills-marquee-wrapper">
          <div className="skills-marquee-content">
            <span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span>
            <span>Java</span><span>Python</span><span>C#</span><span>Full Stack</span>
            <span>UI/UX</span><span>Figma</span><span>Git</span><span>MySQL</span>
            
            <span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span>
            <span>Java</span><span>Python</span><span>C#</span><span>Full Stack</span>
            <span>UI/UX</span><span>Figma</span><span>Git</span><span>MySQL</span>
          </div>
        </div>
      </div>
          {/*contact*/}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          
          <div className="section-header-container" style={{ textAlign: 'center', marginBottom: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="section-index highlight-pink">Get in Touch</span>
            <h2 className="section-title-new text-white" style={{ margin: '0', fontWeight: '900', fontSize: '2.5rem' }}>LET'S CONNECT</h2>
            <div className="header-underline" style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #ff007a, #7000ff)', marginTop: '10px', borderRadius: '2px' }}></div>
          </div>

          <div className="contact-grid">  
            <div className="contact-info-side">
              <div className="info-card">
                <div className="info-icon"><i className="fas fa-envelope"></i></div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>denmark25escobanez@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>09568045872</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Oton, Cagbang, Iloilo</p>
                </div>
              </div>
            </div>

            
            <div className="contact-form-side">
              <form className="contact-form">
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <textarea placeholder="Message" rows="5" required></textarea>
                <button type="submit" className="pink-action-btn" style={{ width: '100%', cursor: 'pointer' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      <footer className="footer-bar">
        <p className="copyright text-muted">
          © 2026 Escobanez Denmark P.
        </p>
      </footer>

    </div>
  );
}

export default App;