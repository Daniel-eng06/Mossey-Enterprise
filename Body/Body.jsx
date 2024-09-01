// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Body.css";
import {Link} from "react-router-dom";
import Ourshop from "./Ourshop.jsx";
import BoschLogo from '/public/Bosch Logo.png';
import AEG from '/public/AEG.png';
import Stanley from '/public/Stanley.png';
import BandD from '/public/B&D.png';
import Makita from '/public/makita.png';
import Dewalt from '/public/dewalt.png';
import Hitachi from '/public/hitachi.png';
import Milwak from '/public/milwak.png';
import Molilock from '/public/Molilock.png';
import PowertoolsImage from '/public/powertools. (1).png';
import AccessoriesImage from '/public/Accessories.png';
import MTImage from '/public/MT.png';
import ServiceImage from '/public/Service.png';
import DiyImage from '/public/Diy.jpg';
import BuildAnyImage from '/public/build any.jpg';
import MosseyEnterpriseMap from '/public/MOSSEY ENTERPRISE map.png';
import LocationImage from '/public/location.png';
import DesktopIntroPicture from '/public/Desktop Intro Picture.png';



function Brands(){
    const brands ={
         Bsrc2: BoschLogo,
          Bsrc3: AEG,
          Bsrc4: Stanley,
          Bsrc5: BandD,
          Bsrc6: Makita,
          Bsrc7: Dewalt,
          Bsrc8: Hitachi,
          Bsrc9: Milwak,
          Bsrc10: Molilock
    }
    return(
        <div className="brandlogo">
            <div>
                <ul className="brands">
                    <li><img className="brad" src={brands.Bsrc2} title="Bosch"/></li>
                    <li><img className="brad" src={brands.Bsrc3} title="AEG"/></li>
                    <li><img className="brad" src={brands.Bsrc4} title="Stanley"/></li>
                    <li><img className="brad" src={brands.Bsrc10} title="Molilock"/></li>
                    <li><img className="brad" src={brands.Bsrc5} title="Black & Decker"/></li>
                    <li><img className="brad" src={brands.Bsrc6} title="Makita"/></li>
                    <li><img className="brad" src={brands.Bsrc7} title="Dewalt"/></li>
                    <li><img className="brad" src={brands.Bsrc8} title="Hitachi"/></li>
                    <li><img className="brad" src={brands.Bsrc9} title="milwaukee"/></li>
                </ul>
            </div>
          </div>
    )
}

function Category(){
        const cat = {
              PT: PowertoolsImage,
              AC: AccessoriesImage,
              MT: MTImage,
              SE: ServiceImage
            }

    return (
        <div className="Buy">
            <h2 className="range">BUY FROM OUR PROFESSIONAL RANGE</h2>
            <div className="Category">
                <div className="Powertools">
                    <img src={cat.PT}/>
                        <p><Link to="/Powertools">POWER TOOLS</Link></p>
                </div>
                <div className="accessories">
                    <img src={cat.AC}/>
                        <p><Link to="/Accessories">ACCESSORIES</Link></p>
                </div>
                <div className="measuringtools">
                    <img src={cat.MT}/>
                        <p><Link to="/Measuring Tools">MEASURING TOOLS</Link></p>
                </div>
                <div className="Service">
                    <img src={cat.SE}/>
                        <p><Link to="/Services">SERVICES</Link></p>
                </div>
            </div>
        </div>
    )
}


function News(){
    const news = {
          new1: DiyImage,
          new2: BuildAnyImage,
        }
    return(
        <div className="news">
            <h2 id="guide">PROFESSIONAL KNOWLEDGE & GUIDE FOR BUILDERS</h2>
            <div className="diy">
                <img src={news.new1} rel="diy"/>
                <div className="curious1">
                    <h2>Explore 5 Deep Dive Powertools Every Local Builder or Startup Must Leverage for a
                        Mastermind Business in Ghana.</h2><br/><br/>
                    <Link to="/Blog1" > Discover more </Link>
                </div>
            </div>
            <div className="opp">
                <img src={news.new2} rel="build"/>
                <div className="curious2">
                   <h2>Discover 3 Fast-Track Power Tool Selections
                        and Budget-Friendly Choices for Intensive Builders in Ghana.</h2><br/><br/>
                    <Link to="/Blog2" > Discover more </Link>
                </div>
            </div>
        </div>
    )
}

function Maps(){
    const locations ={
        loc1: MosseyEnterpriseMap,
        loc2: LocationImage,
        Mos1: "https://maps.app.goo.gl/m461g6veVuKHT5Du7",
        Mos2: "https://maps.app.goo.gl/7qSSSVNAD91nuwKM8",
        Mos3: "https://maps.app.goo.gl/PfmEy5NjLHmBzMf6A"
    }
    return(
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
    )
}


function Body(){
    const bodyimage ={
        Bsrc1: DesktopIntroPicture,
    }
    return(
         <div className="slidedek">
          <div className="desktop">
            <div className="who">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 id='who1'> <span>HERE'S</span> <br/> WHAT <span id="cus">CUSTOMERS</span> SAY</h1>
                <br/>
                <div>
                    <p id="newp">Where Professional Tools meet the desperate needs of Builders.</p>
                    <p id="newp">Known for Original and Premium Tools in Ghana.</p>
                    <p id="newp">You are one step to an Everlasting Experience.</p>
                    <p id="newp">Buy from Mossey Enterprise.</p>
                </div>
                <br/><br/>
                <Link to="/About" id="discover">Discover more</Link>
                <br/><br/><br/><br/><br/><br/><br/>
                <div>
                    <p className = "author">Authorized Dealer for 30 years</p>
                </div>
            </div>
                <img src={bodyimage.Bsrc1}/>
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