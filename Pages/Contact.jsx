// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Contact.css';
import Header from "../Mossey Components/Header&Nav/Header&Nav.jsx";
import Footer from "../Mossey Components/Footer/Footer.jsx";
import Contactus from  "/public/Contact Us.png";
import Mapmoses from "/public/MOSSEY ENTERPRISE map.png";
import Locat1 from "/public/location.png";




function Contact(){
         const pic ={
            srco : Contactus,
         }
        const locations ={
            loc1: Mapmoses,
            loc2: Locat1,
            Mos1: "https://maps.app.goo.gl/m461g6veVuKHT5Du7",
            Mos2: "https://maps.app.goo.gl/7qSSSVNAD91nuwKM8",
            Mos3: "https://maps.app.goo.gl/PfmEy5NjLHmBzMf6A"
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
        <div>
            <Header/>
            <div className="contact-container">
                <div className="contimg">
                    <img src={pic.srco}/>
                    <h1>Contact Us</h1>
                </div>
                <div className="contact-info">
                    <div className="contact-item" onClick={handleClick}>
                          <h2>Phone Number:</h2>
                          <p>+233243010697 / +233208126538</p>
                    </div>
                    <div className="contact-item" onClick={handleEmailClick}>
                          <h2>Email:</h2>
                          <p>mosseyentuk@yahoo.com</p>
                    </div>
                    <div className="contact-item" onClick={handleClick}>
                          <h2>WhatsApp:</h2>
                          <p>+233243010697</p>
                    </div>
                </div>
          <div className="map">
            <h2>FIND A MOSSEY ENTERPRISE AUTHORISED <br/>SHOP NEAR YOU</h2>
            <div className="locate">
                <img src={locations.loc1}/>
            </div>
            <div className="text">
                <div className="spots">
                    <p className="tx">
                        <img id="loc" src={locations.loc2}/>
                        <a href={locations.Mos1} className="mos1">Mossey Enterprise
                            Ofankor Sowutoum, Accra, Ghana.
                        </a>
                    </p>
                </div>
                 <div className="spots">
                     <p className="tx">
                         <img id="loc1" src={locations.loc2}/>
                         <a href={locations.Mos3} className="mos1">Mossey Enterprise Kaneshie Dr. Busia Highway
                         Accra, Ghana.
                        </a>
                     </p>
                </div>
                <div className="spots">
                    <p className="tx">
                        <img id="loc2" src={locations.loc2}/>
                        <a href={locations.Mos2} className="mos1">Mossey Enterprise Kwashieman
                            Ofankor Ave Accra, Ghana.
                        </a>
                    </p>
                </div>
            </div>
        </div>
            </div>
             <Footer/>
            <div className="pattern" />
        </div>
    )

}

export default Contact;