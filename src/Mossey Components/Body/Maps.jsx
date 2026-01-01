// eslint-disable-next-line no-unused-vars
import React from 'react';
import MosseyEnterpriseMap from '/public/MOSSEY ENTERPRISE map.png';
import LocationImage from '/public/location.png';

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

export default Maps;
