// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Accessories.css";
import Header from "../Mossey Components/Header&Nav/Header&Nav.jsx";
import Footer from "../Mossey Components/Footer/Footer.jsx";
import {Link} from "react-router-dom";
import {data2} from "./Data.jsx";
import Acces from "/public/accessories..png";


function Accessories(){
    const source = {
        sou1: Acces
    }
    return(
        <div>
            <Header/>
            <div className="Accgoods">
                <div className="Accbody">
                    <p id="active" > <Link to="/">Home {">"} </Link></p>
                    <p id="in">Accessories</p>
                </div>
                <div className="subhead3">
                     <div className="img3">
                         <img src={source.sou1}/>
                    </div>
                    <h2 id="head3">Accessories</h2>
                    <p id="quality3">You Are Valuable Because You Buy Professional Accessories.</p>
                </div>
                <div className="Categories3">
                     <h2 className="cat">Categories</h2>
                     <p className='shortdes3'>Elevate achievements with our professional accessories.
                         Impress your clients, colleagues, showcase expertise and define
                         success through precision and efficiency in building.
                         Explore now to find the perfect accessories for your expertise.</p>
                    <ul className='selcat'>
                         <li id="selcat">Construction Professionals</li>
                         <li id="selcat">HeavyDuty Workers</li>
                         <li id="selcat">Real Estate Developers</li>
                         <li id="selcat">Local Builders</li>
                         <li id="selcat">DIY(Homeowners/Startups)</li>
                     </ul>
                </div>
                <div className="sectiona">
                    {data2.map((item) => (
                            <Link id="box" key={item.id}
                                  to={item.id === 0 ? "/DrillBits":
                                      item.id === 1 ? "/DiamondDisc":
                                      item.id === 3 ? "/Chisels":
                                      item.id === 4 ? "/SawBlades":
                                      item.id === 5 ? "/SandingDisc":
                                      item.id === 6 ? "/ScrewBit":
                                      item.id === 7 ? "/Sets":""}>
                                <div className="ima">
                                    <img id="ima" src={item.img}/>
                                </div>
                                <br/>
                                <hr/>
                                <div className="detail">
                                    <p id='d1'>{item.name}</p>
                                    <div className='im2'><img id='im2' src={item.logo}/></div>
                                </div>
                                <br/>
                           </Link>
                    ))}
                </div>
            </div>
            <Footer/>
            <div className="pattern" />
        </div>
    )
}

export default Accessories;