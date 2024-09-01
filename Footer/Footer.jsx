// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";
import Customer from "/public/customer-service.png";
import Mail from "/public/mail-send.png";
import Video from "/public/video.mp4";


function Footer(){
    const foot={
        ft: Customer,
        ft2: Mail,
        ft3: Video
    }
    const dealerNumber = '+233243010697';
     const handleClick = () => {
    const userMessage = `Hello Mossey Enterprise, Please I want to purchase your Professional Powertools and Building materials. Can we Whatsapp?`;

    // Construct the WhatsApp URL with the custom user message
    const userWhatsAppURL = `https://wa.me/${dealerNumber}?text=${encodeURIComponent(userMessage)}`;

    // Open the WhatsApp chat in a new tab/window
      // eslint-disable-next-line no-unused-vars
    const userWindow = window.open(userWhatsAppURL, '_blank');

  };

    const handleEmailClick = () => {
        window.location.href = 'mailto:mosseyentuk@yahoo.com';
  };


    return(
        <div className="footer">
            <div className="contact">
                <h2 id="fh">SERVICE HOTLINE</h2><br/>
                <p id="fp">Have any questions about our products and service?</p><br/>
                <p id="fp"><b>Monday - Saturday:</b> 07:00 - 18:00</p><br/>
                <p className="align" onClick={handleClick}><img src={foot.ft} className="ft" /> +233243010697 </p>
                <p className="align" onClick={handleEmailClick}><img src={foot.ft2} className="ft"/> mosseyentuk@yahoo.com</p><br/>
            </div>
            <div className="contact1">
                <p><Link id="fa" to="/About"> Our Company</Link></p>
                <p><Link id="fa" to="/Powertools">Power Tools</Link></p>
                <p><Link id="fa" to="/Measuring Tools">Measuring Tools</Link></p>
                <p><Link id="fa" to="/Accessories">Accessories</Link></p>
                <p><Link id="fa" to="/Services"> Service</Link></p>
                <p><Link id="fa" to="/Knowledge & Guide">Knowledge & Guide</Link></p>
            </div>
            <div className="contact2">
                <video src={foot.ft3} controls loop={foot.ft3} autoPlay={foot.ft3}></video>
            </div>
            {/* eslint-disable-next-line no-irregular-whitespace */}
            <p id="fp1">© 2024 Mossey Enterprise Ghana. All rights reserved.</p>
        </div>
    )
}

export default Footer