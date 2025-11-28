// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Services.css";
import Header from "../Mossey Components/Header&Nav/Header&Nav.jsx";
import Footer from "../Mossey Components/Footer/Footer.jsx";
import Souser from "/public/Service 1.png";
import Souser2 from "/public/wired-lineal-18-location-pin (1).gif";
import Souser3 from "/public/wired-lineal-1754-nails-screw-carpentry.gif";
import Souser4 from "/public/wired-lineal-63-home.gif";
import {Link} from "react-router-dom";


function Services(){
     const source6 = {
        sou1:Souser,
        sou2:Souser2,
        sou3:Souser3,
        sou4:Souser4
    }

    return(
        <div>
            <Header/>
            <div className="service-container">
                 <div className="sbody">
                    <p id="sactive" ><Link to="/"> Home {">"} </Link></p>
                    <p id="sin">Services</p>
                </div>
                <div className="subhead7">
                    <div className="img6">
                         <img src={source6.sou1}/>
                    </div>
                    <h2 id="shead5">Services</h2>
                    <p id="quality5">You Are Valuable Because You Want the Best Services.</p>
                </div>
                  <div className="service-description">
                   <div className="vidser"><img src={source6.sou3} id="vidser"/></div>
                   <div className='sernew'>
                        <h3 className='sernew1'>Power Tools and Building Materials</h3>
                        <p className='sernew2'>
                          We offer a comprehensive selection of high-quality professional power tools and building materials to cater to your construction and DIY needs.
                            From drills and saws to nails, ladders, door locks and screws, we provide everything you need for your projects and crafts.
                        </p>
                   </div>
                  </div>
                  <div className="delivery-services">
                    <div className="vidser"><img src={source6.sou2} id="vidser"/></div>
                      <div className='sernew'>
                        <h3 className='sernew1'>Fast and Reliable Delivery Services</h3>
                        <p className='sernew2'>
                          Our delivery services are designed to be fast, reliable, and hassle-free on the bases of high purchases. Whether you are ordering power tools or building materials,
                            we ensure that your orders are delivered to your doorstep promptly and securely. With our efficient logistics network, you can count on us to get your items to you on time.
                        </p>
                      </div>
                  </div>
                  <div className="door-to-door">
                   <div className="vidser"><img src={source6.sou4} id="vidser"/></div>
                   <div className='sernew'>
                    <h3 className='sernew1'>Convenient Door-to-Door Display</h3>
                    <p className='sernew2'>
                      Experience the convenience of our door-to-door display service, where we bring our products directly to your workplace.
                        Our knowledgeable staff will showcase our range of power tools and building materials, allowing you to see, touch, and evaluate the products based on what can get the job done faster before making a purchase. With our door-to-door display service, you can make informed decisions and find the right solutions for your projects without leaving your premises.
                    </p>
                   </div>
                  </div>
            </div>
            <Footer/>
            <div className="pattern" />
        </div>
    )
}

export default Services