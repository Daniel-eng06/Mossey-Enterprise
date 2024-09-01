// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import "./Safety Wears.css";
import Header from "../Header&Nav/Header&Nav.jsx";
import Footer from "../Footer/Footer.jsx";
import {telelad} from "./S&E data.jsx";
import {Link} from "react-router-dom";
import ChatButton from "../Powertools Product List/WhatsApp.jsx";
import Danger from "../../../public/danger.png";
import QRcode from "../../../public/QRcode.png";

function TeleLadder(){
    const cauicon = {
        cau1:Danger,
         cau2:QRcode,
        Mos1: "https://maps.app.goo.gl/m461g6veVuKHT5Du7"
    }
    const dealerNumber = '+233243010697';

    const [selectedImage, setSelectedImage] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleImageClick = (productId, imageSrc) => {
        setSelectedProductId(productId);
        setSelectedImage(prevState => ({
            ...prevState,
            [productId]: imageSrc
        }));
    };

    return(
        <div>
            <Header/>
            <div className="clopage">
                <div className="clobody">
                    <p id="act" > <Link to="/">Home {">"}</Link> <Link to="/Safety Wears & Equipments">Equipments {">"}</Link> <span id="act1">Ladder</span> </p>
                </div>
                <Link className='caution' to="/Contact">
                    <div className="cauimg"><img src={cauicon.cau1} alt="caution"/></div>
                    <div className="cautext">
                        <p id="cautext"><span id='spatex'>Important Notice</span>: Protect Your Transactions</p>
                        <p id="cautext1"> Due to increasing internet fraud and scams, please engage in a direct
                            conversation with <Link id="spantex" to="/Contact" >Mossey Enterprise</Link> to confirm transactions on every product.
                            Preserve integrity, transparency, and prevent financial losses. Your pain of losing is also our pain.  </p>
                    </div>
                </Link>
                <div className='grpsaf'>
                    {/*Take note when making the css for the link us "a" eg .group a{}*/}
                    {telelad.map((item) => (
                        <div id='indsaf' key={item.id}>
                                <div className="mainsaf">
                                        <img src={selectedImage[item.id] || item.img1} alt="main image" />
                                </div>
                                <div className="subsaf">
                                    <div id="subsaf" onClick={() => handleImageClick(item.id, item.img1)}>
                                        <img src={item.img1} alt="img2"/>
                                    </div>
                                    <div id="subsaf" onClick={() => handleImageClick(item.id, item.img2)}>
                                        <img src={item.img2} alt="img2"/>
                                    </div>
                                    <div id="subsaf" onClick={() => handleImageClick(item.id, item.img3)}>
                                        <img src={item.img3}  alt="img3"/>
                                    </div>
                                </div>
                                <div className="prodsaf">
                                    <ul id="avsaf1">
                                        <li id="pronsaf" >{item.name}</li>
                                        <li id="pronsaf1" >{item.name1}</li>
                                    </ul>
                                    <ul id="avsaf2">
                                        <li id="prodsaf">{item.description}</li>
                                        <li id="prisaf">{item.price}</li>
                                        <li id="stosaf">In stock: {item.min} pieces</li>
                                        <li id="quasaf">Quality: <div id="qualsaf"><img src={item.quality} /></div></li>
                                    </ul>
                                    <ul id="avsaf">
                                        <li><a href={cauicon.Mos1}>Available currently at any nearby Mossey Enterprise.</a></li>
                                    </ul>
                                </div>
                                <div className="chatsaf">
                                    <ChatButton productName={item.name} productName1={item.name1} dealerNumber={dealerNumber}/>
                                    <p id="scan">OR</p>
                                    <div  className="QR">
                                        <img src={cauicon.cau2} alt="QRcode"/>
                                    </div>
                                    <p className="scan">Scan Code</p>
                                </div>
                        </div>
                        ))}
                </div>
            </div>
            <Footer/>
            <div className="pattern" />
        </div>
    )
}

export default TeleLadder;