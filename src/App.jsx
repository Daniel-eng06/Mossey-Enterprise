// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Powertools from "./Pages/Powertools.jsx";
import Home from "./Pages/Home.jsx";
import Accessories from "./Pages/Accessories.jsx";
import Measuring from "./Pages/Measuring Tools.jsx";
import SandE from "./Pages/Safety Wears & Equipments.jsx";
import Services from"./Pages/Services.jsx";
import KandG from "./Pages/Knowledge & Guide.jsx";
import Cordless from "./Mossey Components/Powertools Product List/Cordless tools.jsx";
import Drills from "./Mossey Components/Powertools Product List/Drills.jsx";
import Rotary from "./Mossey Components/Powertools Product List/Rotary Hammer.jsx";
import Grinder from "./Mossey Components/Powertools Product List/Angle Grinder.jsx";
import BenchTop from "./Mossey Components/Powertools Product List/Benchtop.jsx";
import Sanders from "./Mossey Components/Powertools Product List/Sanders.jsx";
import Routers from "./Mossey Components/Powertools Product List/Routers.jsx";
import Saws from "./Mossey Components/Powertools Product List/Saws.jsx";
import Extractor from "./Mossey Components/Powertools Product List/Dust Extraction.jsx";
import HeatGun from "./Mossey Components/Powertools Product List/Heat gun.jsx";
import SparePart from "./Mossey Components/Powertools Product List/Spare parts.jsx";
import RotationLaser from "./Mossey Components/Measuring Tools List/Rotation Laser.jsx";
import LineLaser from "./Mossey Components/Measuring Tools List/Line Laser.jsx";
import LaserMea from "./Mossey Components/Measuring Tools List/Laser Measures.jsx";
import MeaWheel from "./Mossey Components/Measuring Tools List/Mea Wheel.jsx";
import AngleMea from "./Mossey Components/Measuring Tools List/Angle Mea.jsx";
import DrillBits from "./Mossey Components/Accessories List/Drill Bits.jsx";
import Account from "./Mossey Components/Body/Account.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Cart from "./Pages/Cart.jsx";
import Blog1 from "./Pages/Blog1.jsx";
import Blog2 from "./Pages/Blog2.jsx";
import Blog3 from "./Pages/Blog3.jsx";
import DiamondDisc from "./Mossey Components/Accessories List/Disc.jsx";
import Chisels from "./Mossey Components/Accessories List/Chisel.jsx";
import SawBlades from "./Mossey Components/Accessories List/Saw Blades.jsx";
import SandingDisc from "./Mossey Components/Accessories List/Sanding Disc.jsx";
import ScrewBit from "./Mossey Components/Accessories List/Screw Bits.jsx";
import Sets from "./Mossey Components/Accessories List/Acc set.jsx";
import SafetyWears from "./Mossey Components/S&E/Safety Wears.jsx";
import SafetyHelmets from "./Mossey Components/S&E/Safetyhelmet.jsx";
import EarProtect from "./Mossey Components/S&E/EarProtect.jsx";
import SafetyBoots from "./Mossey Components/S&E/Safetyboots.jsx";
import EyeProtect from "./Mossey Components/S&E/Eyeprotect.jsx";
import Mask from "./Mossey Components/S&E/Mask.jsx";
import Gloves from "./Mossey Components/S&E/Gloves.jsx";
import FiberLadder from "./Mossey Components/S&E/Fiberladder.jsx";
import AlLadder from "./Mossey Components/S&E/AlLadder.jsx";
import PortableLadder from "./Mossey Components/S&E/Portladder.jsx";
import HeavyLadder from "./Mossey Components/S&E/Heavyladder.jsx";
import AlFlatLadder from "./Mossey Components/S&E/AlFlatLadder.jsx";
import TeleLadder from "./Mossey Components/S&E/TeleLadder.jsx";
import VintageLocks from "./Mossey Components/S&E/VintageLocks.jsx";
import RimLocks from "./Mossey Components/S&E/Rimlocks.jsx";
import BallLocks from "./Mossey Components/S&E/BallLocks.jsx";
import SecurityPadlock from "./Mossey Components/S&E/Secpadlocks.jsx";
import ReversibleLock from "./Mossey Components/S&E/Reverselock.jsx";
import CylinderLocks from "./Mossey Components/S&E/Cylinderlocks.jsx";
import Header from './Mossey Components/Header&Nav/Header&Nav.jsx';



//Always use capital letters for react routers call to action names

function MosseyApp(){

    return (<div>
                <Router>
                    <Routes>
                        <Route index path="/" element={<Home/>}/>
                        <Route path="/:query" element={<Header/>} />
                        <Route index path="/Powertools" element={<Powertools/>}/>
                        <Route index path="/Measuring Tools" element={<Measuring/>}/>
                        <Route index path="/Accessories" element={<Accessories/>}/>
                        <Route index path="/Safety Wears & Equipments" element={<SandE/>}/>
                        <Route index path="/Services" element={<Services/>}/>
                        <Route index path="/Knowledge & Guide" element={<KandG/>}/>
                        <Route index path="/Cordless" element={<Cordless/>} />
                        <Route index path="/Drills" element={<Drills/>} />
                        <Route index path="/Rotary" element={<Rotary/>} />
                        <Route index path="/Grinder" element={<Grinder/>} />
                        <Route index path="/BenchTop" element={<BenchTop/>} />
                        <Route index path="/Sanders" element={<Sanders/>} />
                        <Route index path="/Routers" element={<Routers/>} />
                        <Route index path="/Saws" element={<Saws/>} />
                        <Route index path="/Extractor" element={<Extractor/>} />
                        <Route index path="/HeatGun" element={<HeatGun/>} />
                        <Route index path="/SparePart" element={<SparePart/>} />
                        <Route index path="/RotationLaser" element={<RotationLaser/>} />
                        <Route index path="/LineLaser" element={<LineLaser/>} />
                        <Route index path="/LaserMea" element={<LaserMea/>} />
                        <Route index path="/MeaWheel" element={<MeaWheel/>} />
                        <Route index path="/AngleMea" element={<AngleMea/>} />
                        <Route index path="/DrillBits" element={<DrillBits/>} />
                        <Route index path="/Account" element={<Account/>} />
                        <Route index path="/About" element={<About/>} />
                        <Route index path="/Contact" element={<Contact/>} />
                        <Route index path="/Cart" element={<Cart/>} />
                        <Route index path="/Blog1" element={<Blog1/>} />
                        <Route index path="/Blog2" element={<Blog2/>} />
                        <Route index path="/Blog3" element={<Blog3/>} />
                        <Route index path="/DiamondDisc" element={<DiamondDisc/>} />
                        <Route index path="/Chisels" element={<Chisels/>} />
                        <Route index path="/SawBlades" element={<SawBlades/>} />
                        <Route index path="/SandingDisc" element={<SandingDisc/>} />
                        <Route index path="/ScrewBit" element={<ScrewBit/>} />
                        <Route index path="/Sets" element={<Sets/>} />
                        <Route index path="/SafetyWears" element={<SafetyWears/>} />
                        <Route index path="/SafetyHelmets" element={<SafetyHelmets/>} />
                        <Route index path="/EarProtect" element={<EarProtect/>} />
                        <Route index path="/SafetyBoots" element={<SafetyBoots/>} />
                        <Route index path="/EyeProtect" element={<EyeProtect/>} />
                        <Route index path="/Mask" element={<Mask/>} />
                        <Route index path="/Gloves" element={<Gloves/>} />
                        <Route index path="/FiberLadder" element={<FiberLadder/>} />
                        <Route index path="/AlLadder" element={<AlLadder/>} />
                        <Route index path="/PortableLadder" element={<PortableLadder/>} />
                        <Route index path="/HeavyLadder" element={<HeavyLadder/>} />
                        <Route index path="/AlFlatLadder" element={<AlFlatLadder/>} />
                        <Route index path="/TeleLadder" element={<TeleLadder/>} />
                        <Route index path="/VintageLocks" element={<VintageLocks/>} />
                        <Route index path="/RimLocks" element={<RimLocks/>} />
                        <Route index path="/BallLocks" element={<BallLocks/>} />
                        <Route index path="/SecurityPadlock" element={<SecurityPadlock/>} />
                        <Route index path="/ReversibleLock" element={<ReversibleLock/>} />
                        <Route index path="/CylinderLocks" element={<CylinderLocks/>} />
                    </Routes>
                </Router>
           </div>)
}

export default MosseyApp;