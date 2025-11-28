// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Measuring Tools.css";
import Header from "../Mossey Components/Header&Nav/Header&Nav.jsx";
import Footer from "../Mossey Components/Footer/Footer.jsx";
import {data1} from "./Data.jsx";
import {Link} from "react-router-dom";
import Measuri from "/public/measuring.png";



function Measuring(){
    const source2 = {
        sou1: Measuri
    }
    return(
        <div>
            <Header/>
            <div className="Meagoods">
                <div className="Meabody">
                    <p id="active" ><Link to="/"> Home {">"} </Link></p>
                    <p id="in">Measuring Tools</p>
                </div>
                <div className="subhead1">
                    <div className="img1">
                         <img src={source2.sou1}/>
                    </div>
                    <h2 id="head2">Measuring Tools</h2>
                    <p id="quality1">You Are Valuable Because You Buy Professional Measuring Tools.</p>
                </div>
                <div className="Categories1">
                     <h2 className="cat">Categories</h2>
                     <p className='shortdes1'>Elevate achievements with our professional measuring tools.
                         Impress your clients, colleagues, showcase expertise and define
                         success through precision and efficiency in building.
                         Explore now to find the perfect tool for your expertise.</p>
                     <ul className='selcat'>
                         <li id="selcat">Construction Professionals</li>
                         <li id="selcat">HeavyDuty Workers</li>
                         <li id="selcat">Real Estate Developers</li>
                         <li id="selcat">Local Builders</li>
                         <li id="selcat">DIY(Homeowners/Startups)</li>
                     </ul>
                </div>
                <div className="section1">
                    {data1.map((item) => (
                            <Link id="box1" key={item.id}
                                  to={item.id === 0 ? "/RotationLaser":
                                      item.id === 1 ? "/LineLaser":
                                      item.id === 2 ? "/LaserMea":
                                      item.id === 3 ? "/MeaWheel":
                                      item.id === 4 ? "/AngleMea":""}>
                                <div className="im3">
                                    <img id="im3" src={item.img}/>
                                </div>
                                <br/>
                                <hr/>
                                <div className="detail1">
                                    <p id='d2'>{item.name}</p>
                                    <div className='im4'><img id='im4' src={item.logo}/></div>
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

export default Measuring;