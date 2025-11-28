// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Knowledge & Guide.css";
import Header from "../Mossey Components/Header&Nav/Header&Nav.jsx";
import Footer from "../Mossey Components/Footer/Footer.jsx";
import {knowledge} from "./K&G data.jsx";
import {Link} from "react-router-dom";
import Knowledge1 from "/public/Knowledge &guide.png";


function KandG(){
    const source6 = {
        sou1:Knowledge1
    }
    return(
        <div>
            <Header/>
            <div className="KGgoods">
                <div className="KGbody">
                    <p id="active" ><Link to="/"> Home {">"} </Link></p>
                    <p id="in">Knowledge & Guide</p>
                </div>
                <div className="subhead7">
                    <div className="img6">
                         <img src={source6.sou1}/>
                    </div>
                    <h2 id="head5">Knowledge & Guide</h2>
                    <p id="quality5">You Are Valuable Because You Want More Knowledge & Guide.</p>
                </div>
                <div className="Categories5">
                    {knowledge.map((item) => (
                        <Link id="Categories5" key={item.id}
                              to={item.id === 0 ? "/Blog1" :
                                  item.id === 1 ? "/Blog2" :
                                  item.id === 2 ? "/Blog3" :""
                             }>
                            <div className="kimg">
                                  <img id="kimg" src={item.img}/>
                            </div>
                            <div className="heading">
                                <h2>{item.h2}</h2>
                                <p>{item.pub}</p>
                            </div>
                        </Link>
                        ))}
                </div>
            </div>
            <Footer/>
            <div className="pattern" />
        </div>
    )
}

export default KandG;