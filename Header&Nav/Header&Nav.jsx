// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import "./Header&Nav.css";
import {Link , useNavigate} from "react-router-dom";
import Brandlogo from "/public/brand_logo.png";
import Loupe from "/public/loupe.png";
import User from "/public/user.png";
import Shoppingcart from "/public/shopping-cart.png";
import Drilltool from "/public/drill-tool.png";
import Meaicon from "/public/meaicon.png";
import Accessor from "/public/Accessor.png";
import Wear from "/public/wear.png";
import PublicSer from "/public/public-service.png";
import Userguide from "/public/user-guide.png";
import Callemail from "/public/phone-call.png"



function Header(){
    const pic ={
        src : Brandlogo,
        src1 : Loupe,
        src2 : User,
        src3 : Shoppingcart,
        src4 : Callemail,
        icosel : Drilltool,
        icosel1 : Meaicon,
        icosel2 : Accessor,
        icosel3 : Wear,
        icosel4 : PublicSer,
        icosel5 : Userguide
    }

         const [searchQuery, setSearchQuery] = useState('');
          const navigate = useNavigate();

          const handleSearchInput = (event) => {
            setSearchQuery(event.target.value);
          };

          const handleSearchSubmit = (event) => {
            event.preventDefault();
            const trimmedQuery = searchQuery.trim();
            navigate(`/${encodeURIComponent(searchQuery.trim())}`);
            // Check if the search query corresponds to a specific page
            const pageRoutes = ['Powertools',
                'Measuring Tools',
                'Accessories',
                'Safety Wears & Equipments',
                "/Services","/Cordless","/Drills","/Rotary","/Grinder",
                "/BenchTop","/Sanders","/Routers","/Saws","/Extractor",
                "/HeatGun","/SparePart","/RotationLaser","/LineLaser",
                "/DrillBits"
            ]; // Add your page routes here
            if (pageRoutes.includes(trimmedQuery)) {
              // Navigate to the corresponding page
              navigate(`/${encodeURIComponent(trimmedQuery)}`);
            } else {
              // Perform a search based on the entered word
              // For now, just log the search query to the console
              console.log('Performing search for:', trimmedQuery);
              // You can perform additional actions here, such as displaying search results
            }
          };


    return (
        <div className="border">
            <div className="pattern" />
            <div className="dealer">
                <ul>
                    <li><Link id="let" to="/Contact" rel="contact">Contact</Link></li>
                </ul>
            </div>
            <div className="top">
                <ul>
                    <li ><Link className= "a" to="/"><div className= "a" ><img id="brand" src={pic.src} rel="start"/></div></Link></li>
                    <li className="search" >
                        <form onSubmit={handleSearchSubmit}>
                            <input id="search" name="search" type="search"
                                   placeholder="Search for tools or accessories..."
                                   value={searchQuery}
                                    onChange={handleSearchInput}/>
                            <button className="box" type="submit"  >
                                <img id="eng" src={pic.src1}/>
                            </button>
                        </form>
                    </li>
                    <li className="setone">
                        <li className="one2"><Link to="/Account" rel="account"><h4><div id="size4"><img src={pic.src2}/></div> <span id="isolate">My Account</span></h4></Link></li>
                        <li className="one2"><Link to="/Cart" rel="cart"><h4><div id="size4"><img src={pic.src3}/></div> <span id="isolate">Shopping Cart</span></h4></Link></li>
                        <li className="one2" ><Link to="/Contact" rel="contact"><h4><div id="size4"><img src={pic.src4}/></div><span id="isolate">Contact</span></h4></Link></li>
                    </li>
                </ul>
            </div>

            <nav className="menu">
                <ul>
                    {/* put an icon beside the names and display hidden and make the name as headings*/}
                    <li><Link to="/Powertools" rel="Powertool"><span id="isolate1">Power Tools</span><div className="icsel"><img src={pic.icosel} title="Power Tools"/></div></Link></li>
                    <li><Link to="/Measuring Tools" rel="measuring tools"> <span id="isolate1">Measuring Tools</span><div className="icsel"><img src={pic.icosel1} title="Measuring Tools"/></div></Link></li>
                    <li><Link to="/Accessories"  rel="accessories"><span id="isolate1">Accessories</span><div className="icsel"><img src={pic.icosel2} title="Accessories"/></div></Link></li>
                    <li><Link to="/Safety Wears & Equipments" rel="safety wears & equipments"><span id="isolate1">Safety Wears & Equipments</span><div className="icsel"><img src={pic.icosel3} title="Safety Wears & Equipments"/></div></Link></li>
                    <li><Link to="/Services" rel="Service"> <span id="isolate1">Services</span><div className="icsel"><img src={pic.icosel4} title="Services"/></div></Link></li>
                    <li><Link to="/Knowledge & Guide" rel="Knowledge & Guide"> <span id="isolate1">Knowledge & Guide</span><div className="icsel"><img src={pic.icosel5} title="Knowledge & Guide"/></div></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;