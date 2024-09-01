// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import "./Screw Bits.css";
import Header from "../Header&Nav/Header&Nav.jsx";
import Footer from "../Footer/Footer.jsx";
import {screwbit} from "./Accessories data.jsx";
import {Link} from "react-router-dom";
import ChatButton from "../Powertools Product List/WhatsApp.jsx";
import Danger from "../../../public/danger.png";
import QRcode from "../../../public/QRcode.png";


function ScrewBit(){
        const cauicon = {
             cau1:Danger,
             cau2:QRcode,
             Mos1: "https://maps.app.goo.gl/m461g6veVuKHT5Du7"
        }

    const dealerNumber = '+233243010697';

    const [selectedImage, setSelectedImage] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [selectedProductId, setSelectedProductId] = useState(null);

    // eslint-disable-next-line no-unused-vars
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
            <div className="scrpage">
                <div className="drbody">
                        <p id="act" > <Link to="/">Home {">"}</Link> <Link to="/Accessories"> Accessories {">"}</Link>  <span id="act1">Screw Bits</span></p>
                </div>
                <Link className='caution' to="/Contact" >
                    <div className="cauimg"><img src={cauicon.cau1} alt=""/></div>
                    <div className="cautext">
                        <p id="cautext"><span id='spatex'>Important Notice</span>: Protect Your Transactions</p>
                        <p id="cautext1"> Due to increasing internet fraud and scams, please engage in a direct
                            conversation with <Link id="spantex" to="/Contact" >Mossey Enterprise</Link> to confirm transactions on every product.
                            Preserve integrity, transparency, and prevent financial loss. Your pain of losing is also our pain. </p>
                    </div>
                </Link>
                 <div className='groupdr'>
                    {/*Take note when making the css for the link us "a" eg .group a{}*/}
                    {screwbit.map((item) => (
                        <div id='indivdr' key={item.id}>
                                <div className="maindr">
                                        <img src={selectedImage[item.id] || item.img1} alt="main image" />
                                </div>
                                <div className="fundr">
                                    <p id="mat">Materials</p>
                                    <div id="fundr"><img src={item.func} alt="img2"/></div>
                                    <div id="fundr"><img src={item.func1}  alt="img3"/></div>
                                    <div id="fundr"><img src={item.func2}  alt="img4"/></div>
                                    <div id="fundr"><img src={item.func3}  alt="img5"/></div>
                                </div>
                                <div className="prodr">
                                    <ul id="availdr">
                                        <li id="pronadr" >{item.name}</li>
                                        <li id="pronadr1" >{item.name1}</li>
                                    </ul>
                                    <ul id="availdr2">
                                        <li id="prodr">{item.description}</li>
                                        <li id="price1">{item.price}</li>
                                        <li id="stock1">In stock: {item.min} pieces</li>
                                        <li id="quali1">Quality: <div id="quala"><img src={item.quality} /></div></li>
                                    </ul>
                                    <ul id="availn">
                                        <li><a href={cauicon.Mos1}>Available currently at any nearby Mossey Enterprise.</a></li>
                                    </ul>
                                </div>
                                <div className="chat1">
                                    <ChatButton productName={item.name} productName1={item.name1} dealerNumber={dealerNumber}/>
                                    <p id="scan1">OR</p>
                                    <div  className="QR1">
                                        <img src={cauicon.cau2} alt="QRcode"/>
                                    </div>
                                    <p className="scan1">Scan Code</p>
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

export default ScrewBit;