// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";
import PowertoolsImage from '/public/powertools. (1).png';
import AccessoriesImage from '/public/Accessories.png';
import MTImage from '/public/MT.png';
import ServiceImage from '/public/Service.png';

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

export default Category;
