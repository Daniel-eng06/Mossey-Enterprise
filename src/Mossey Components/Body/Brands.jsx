// eslint-disable-next-line no-unused-vars
import React from 'react';
import BoschLogo from '/public/Bosch Logo.png';
import AEG from '/public/AEG.png';
import Stanley from '/public/Stanley.png';
import BandD from '/public/B&D.png';
import Makita from '/public/makita.png';
import Dewalt from '/public/dewalt.png';
import Hitachi from '/public/hitachi.png';
import Milwak from '/public/milwak.png';
import Molilock from '/public/Molilock.png';

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

export default Brands;
