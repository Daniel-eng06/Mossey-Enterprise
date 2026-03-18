// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import "./Body.css";
import {Link} from "react-router-dom";
import Ourshop from "./Ourshop.jsx";
import Brands from "./Brands.jsx";
import Category from "./Category.jsx";
import News from "./News.jsx";
import Maps from "./Maps.jsx";
import DesktopIntroPicture from '/public/Desktop Intro Picture.png';
import DesktopIntroPicture1 from '/DesktopIntroPicture1.jpg';
import DesktopIntroPicture2 from '/DesktopIntroPicture2.png';


function Body(){
    const images = [
        DesktopIntroPicture,
        DesktopIntroPicture2,
        DesktopIntroPicture1
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [images.length]);

    return(
         <div className="slidedek">
          <div className="desktop">
            <div className="who">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 id='who1'><span>READY TO</span> <br/> BUILD LIKE A <span id="cus">GHANAIAN</span> PRO?</h1>
                <br/>
                <div>
                    <p id="newp">Get the professional power tools trusted by Ghana&apos;s top builders and contractors.</p>
                    <p id="newp">Authentic brands you know. Quality you can rely on. Service you deserve.</p>
                    <p id="newp">Whether you&apos;re starting out or scaling up, we have everything you need.</p>
                    <p id="newp">Join 10,000+ satisfied customers who chose Mossey Enterprise.</p>
                </div>
                <br/><br/>
                <Link to="/About" id="discover">Discover more</Link>
                <br/><br/><br/><br/><br/><br/><br/>
                <div className="auths">
                    <p className = "author">Authorized Dealer for 32 years</p>
                </div>
            </div>
            <div className="hero-slider">
                {images.map((img, index) => (
                    <img 
                        key={index}
                        src={img} 
                        className={`hero-image ${index === currentImage ? 'active' : ''}`}
                        alt={`Hero ${index + 1}`}
                    />
                ))}
            </div>
            <div className="slider-dots">
                {images.map((_, index) => (
                    <span 
                        key={index}
                        className={`dot ${index === currentImage ? 'active' : ''}`}
                        onClick={() => setCurrentImage(index)}
                    />
                ))}
            </div>
          </div>
              <Brands/>
              <Category/>
              <Ourshop/>
              <News/>
              <Maps/>
        </div>

    )
}


export default Body;