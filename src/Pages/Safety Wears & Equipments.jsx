// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Safety Wears & Equipments.css";
import Header from "../Mossey Components/Header&Nav/Header&Nav.jsx";
import Footer from "../Mossey Components/Footer/Footer.jsx";
import {Link} from "react-router-dom";
import {datawear,dataE,dataL} from "./Data.jsx";
import Safe3 from "/public/safety.png";


function SandE(){
    const source5 = {
        sou1:Safe3
    }
    return(
        <div>
            <Header/>
            <div className="SEgoods">
                <div className="SEbody">
                    <p id="active" ><Link to="/"> Home {">"} </Link></p>
                    <p id="in">Safety Wears & Equipments</p>
                </div>
                <div className="subhead4">
                     <div className="img5">
                         <img src={source5.sou1}/>
                    </div>
                    <h2 id="head4">Safety Wears & Equipments</h2>
                    <p id="quality4">You Are Valuable Because You Buy Professional Safety Wears & Equipments.</p>
                </div>
                <div className="Categories4">
                    <h2 className="cat">Categories</h2>
                     <p className='shortdes4'>Elevate achievements with our professional safety wears and equipments.
                         Impress your clients, colleagues, showcase expertise and define
                         success through precision and efficiency in building.
                         Explore now to find the perfect safety wears and equipments for your expertise.</p>
                     <ul className='selcat'>
                         <li id="selcat">Construction Professionals</li>
                         <li id="selcat">HeavyDuty Workers</li>
                         <li id="selcat">Real Estate Developers</li>
                         <li id="selcat">Local Builders</li>
                         <li id="selcat">DIY(Homeowners/Startups)</li>
                     </ul>
                </div>
                <div className="sectionW">
                    {datawear.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                            <Link id="box" to={
                                item.id === 0 ? "/SafetyWears" :
                                item.id === 1 ? "/SafetyHelmets" :
                                item.id === 2 ? "/EarProtect" :
                                item.id === 3 ? "/SafetyBoots" :
                                item.id === 4 ? "/EyeProtect" :
                                item.id === 5 ? "/Mask" :
                                item.id === 6 ? "/Gloves" :""
                            }>
                                <div className="im1">
                                    <img id="im1" src={item.img}/>
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
                {/* A section for the display of the equipments such as ladders
                and some Door lockers */}
                <h2 className="Newsec">Equipments</h2>
                 <div className="sectionE">
                      {dataE.map((item) => (
                          // eslint-disable-next-line react/jsx-key
                            <Link id="box" to={
                                item.id === 0 ? "/FiberLadder" :
                                item.id === 1 ? "/AlLadder" :
                                item.id === 2 ? "/PortableLadder" :
                                item.id === 3 ? "/HeavyLadder" :
                                item.id === 4 ? "/AlFlatLadder" :
                                item.id === 5 ? "/TeleLadder" :""
                            } >
                                <div className="im1">
                                    <img id="im1" src={item.img}/>
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

                <h2 className="Newsec1">Quality Door Locks</h2>
                 <div className="sectionL">
                      {dataL.map((item) => (
                          // eslint-disable-next-line react/jsx-key
                            <Link id="box" to={
                                item.id === 0 ? "/VintageLocks" :
                                item.id === 1 ? "/RimLocks" :
                                item.id === 2 ? "/BallLocks" :
                                item.id === 3 ? "/SecurityPadlock" :
                                item.id === 4 ? "/ReversibleLock" :
                                item.id === 5 ? "/CylinderLocks" :""
                            }>
                                <div className="im1">
                                    <img id="im1" src={item.img}/>
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

export default SandE;