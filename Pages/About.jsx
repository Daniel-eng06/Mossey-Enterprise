// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Header from "../Mossey Components/Header&Nav/Header&Nav.jsx";
import Footer from "../Mossey Components/Footer/Footer.jsx";
import Abouti from "/public/About.png";

function About() {
  const about={
       a: Abouti
  }
  return (
        <div>
            <Header/>
            <div className="about-container">
              <div className='about1'>
                <img src={about.a}/>
                  <div className="float">
                    <h2>Welcome to <Link to="/">Mossey Enterprise</Link></h2>
                  </div>
              </div>
              <div className="relate">
                  <p>Your Trusted Partner in Power Tools and Building Materials for Over 30 Years!
                    At <Link to="#">Mossey Enterprise Ghana</Link>,
                    we pride ourselves on being more than just a dealer for power tools and building materials. For three decades,
                      we have been committed to serving our customers with excellence,
                    reliability, and integrity.</p>
               </div>
              <div className="about-section">
                <h3>Our Goal</h3>
                <p>The goal at <Link to="#">Mossey Enterprise</Link> is simple: To be your go-to destination for all your construction and DIY needs.
                    We strive to provide the highest quality products and the best customer service in the industry. Our aim is to empower our customers with the tools and materials
                    they need to bring their projects to life.</p>
              </div>

              <div className="about-section">
                <h3>Our Target</h3>
                <p>The target is clear: Anyone who values quality, reliability, and expertise in their construction endeavors.
                    Whether you are a seasoned professional contractor, a passionate DIY enthusiast, or a homeowner embarking on a mastermind project,
                    we are here to support you every step of the way. Our diverse range of products caters to a wide audience,
                    ensuring that there is something for everyone at <Link to="https://www.mosseyenterprise.com">Mossey Enterprise</Link>.</p>
              </div>

              <div className="about-section">
                <h3>Our Plan for Customers</h3>
                <p>At <Link to="#">Mossey Enterprise</Link>, we believe in building lasting relationships with our customers based on trust, transparency, and mutual respect.
                    Our plan is to continue providing exceptional service and unparalleled expertise to meet your evolving needs. From offering expert advice and guidance to providing top-notch products and convenient services,
                    we are dedicated to exceeding your expectations.</p>
              </div>

              <div className="why-choose">
                <h3>Why Choose Mossey Enterprise?</h3>
                <ul>
                  <li>Unmatched Experience: With over 30 years of industry experience, we bring unparalleled expertise to every interaction.</li>
                  <li>Superior Quality: We source our products from trusted manufacturers to ensure the highest standards of quality and performance.</li>
                  <li>Personalized Service: Our team is committed to providing personalized assistance and tailored solutions to meet your specific requirements.</li>
                  <li>Reliable Support: Whether you have a question, need assistance, or require product recommendations, we are here to help every step of the way.</li>
                </ul>
              </div>

              <p className="thankyou">Thank you for considering <Link to="#">Mossey Enterprise</Link> as your partner in Professional construction and DIY projects. We look forward to serving you and helping you achieve your goals.</p>
            </div>
           <Footer/>
            <div className="pattern" />
        </div>
  );
}

export default About;
