// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Ourshop.css"
import {ourshop} from "./OurshopData.jsx";
import {Link} from "react-router-dom";
import Leftarro from "/public/left-arrow.png";
import Rightarro from "/public/right-arrow.png";



function Ourshop(){
    const cart ={
        cart6: Leftarro,
        cart7: Rightarro,
    }

    const [visibleProducts, setVisibleProducts] = useState(4);

    const handleLeftClick = () => {
        setVisibleProducts((prevCount) => prevCount - 1);
      };

  const handleRightClick = () => {
        setVisibleProducts((prevCount) => prevCount + 1);
      };

    return(
        <div className="ourshop">
            <h2 id="best">OUR CUSTOMERS BEST PROFESSIONAL TOOLS RANGE</h2>
            <div className="left"  onClick={handleLeftClick} >
                    <img className="l1" src={cart.cart6}/>
            </div>
                <div className="gridshop" >
                    {ourshop.slice(0, visibleProducts).map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="sellers" >
                            <div className="imful">
                                <img src={item.img}/>
                            </div>
                            <div className="titlename">
                                    <p className="new1">{item.name1}</p>
                                    <p className="new2">{item.name2}</p>
                            </div>
                            <ul className="new3">
                                <li className="new4">{item.des1}</li>
                                <li className="new4">{item.des2}</li>
                                <li className="new4">{item.des3}</li>
                            </ul>
                            <ul className="new3a">
                                <li className="new5">In stock</li>
                            </ul>
                            <div className="addcha">
                                <Link to={item.id === 0 ? "/Rotary":
                                    item.id === 1 ? "/BenchTop":
                                    item.id === 2 ? "/Grinder":
                                    item.id === 3 ? "/Cordless":
                                    item.id === 4 ? "/Grinder":""
                                } classname='newa'>
                                    <p>Chat Dealer</p>
                                    <div className='sizeimg'>
                                        <img  id='sizeimg' src={item.img1}/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        ))}
                </div>
            <div className="right" onClick={handleRightClick}>
                 <img className='l1' src={cart.cart7} />
            </div>
        </div>
    )
}

export default Ourshop;