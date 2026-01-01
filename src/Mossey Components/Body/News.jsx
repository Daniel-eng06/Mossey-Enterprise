// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";
import DiyImage from '/public/Diy.jpg';
import BuildAnyImage from '/public/build any.jpg';

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

export default News;
