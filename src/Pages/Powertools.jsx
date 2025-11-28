// eslint-disable-next-line no-unused-vars
import React, {useState}from 'react';
import "./Powertools.css";
import Header from "../Mossey Components/Header&Nav/Header&Nav.jsx";
import Footer from "../Mossey Components/Footer/Footer.jsx";
import {data} from "./Data.jsx";
import {Link} from "react-router-dom";
import Power1 from "/public/Power..png";


function Powertools(){
    const source = {
        sou1:Power1
    }

    return(
        <div>
            <Header/>
            <div className="powergoods">
                <div className="powerbody">
                    <p id="active" ><Link to="/"> Home {">"} </Link></p>
                    <p id="in">Power Tools</p>
                </div>
                <div className="subhead">
                    <div className="img2">
                         <img src={source.sou1}/>
                    </div>
                    <h2 id="head1">Power Tools</h2>
                    <p id="quality">You Are Valuable Because You Buy Professional Power Tools.</p>
                </div>
                 <div className="Categories"> 
                     <h2 className="cat">Categories</h2>
                     <p className='shortdes'>Elevate achievements with our professional powertools.
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
                <div className="section" >
                    {data.map((item) => (
                            <Link id="box" key={item.id}
                                  to={item.id === 0 ? "/Cordless" :
                                      item.id === 1 ? "/Drills" :
                                      item.id === 2 ? "/Rotary":
                                      item.id === 3 ? "/Grinder":
                                      item.id === 4 ? "/BenchTop":
                                      item.id === 5 ? "/Sanders":
                                      item.id === 6 ? "/Routers":
                                      item.id === 7 ? "/Saws":
                                      item.id === 8 ? "/Extractor":
                                      item.id === 9 ? "/HeatGun":
                                      item.id === 10 ? "/SparePart":""}>
                                <div className="im1">
                                    <img id="im1" src={item.img}/>
                                </div>
                                <br/>
                                <hr className="hr"/>
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

export default Powertools;