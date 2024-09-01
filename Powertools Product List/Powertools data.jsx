//Cordless page
import GblDrill from '/public/GBL drill.png';
import DrillParts from '/public/drillparts.png';
import DemoDrill from '/public/demodrill.png';
import Gsb18v from '/public/GSB 18v.png';
import SetGsb from '/public/set GSB.png';
import DemoDrill1 from '/public/demodrill1.png';
import Drill570 from '/public/570 drill.png';
import Demo1 from '/public/demo1.png';
import Demo2 from '/public/demo2.png';
import Drill192 from '/public/19-2.png';
import Drill192Set from '/public/19-2set.png';
import Demo3 from '/public/demo3.png';
import Rating from '/public/rating.png';
import Key1 from '/public/key1.png';
import Key2 from '/public/key2.png';
import Key3 from '/public/key3.png';
import Key4 from '/public/key4.png';
import Key5 from '/public/key5.png';
import KeyI from '/public/Key i.png';
import KeyII from '/public/keyii.png';
import KeyIII from '/public/keyiii.png';
import Key5I from '/public/key5i.png';
import K6 from '/public/k6.png';
import K7 from '/public/k7.png';

export const cordless = [
    {
        id: 0,
        name: "GSB 185-LI PROFESSIONAL",
        name1: "CORDLESS IMPACT DRILL/DRIVERS",
        description: "Experience effortless drilling and driving with Bosch GSB 185-LI. Cordless design for flexibility. High torque for tough materials. Quick and efficient, saving you time on every project.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: GblDrill,
        img2: DrillParts,
        img3: DemoDrill,
        min: 50,
        quality: Rating,
        func: Key1,
        func1: Key2,
        func2: Key3
    },
    {
        id: 1,
        name: "GSB 18V-50 PROFESSIONAL",
        name1: "CORDLESS COMBI",
        description: "GSB 18V-50 PRO CORDLESS COMBI. Intelligent brushless motor for efficiency, endurance, and compactness. Robust metal chuck, compact design for heavy-duty jobs. 18V System compatible with Bosch batteries. Unleash power in a compact package.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: Gsb18v,
        img2: SetGsb,
        img3: DemoDrill1,
        min: 40,
        quality: Rating,
        func: Key4,
        func1: Key2,
        func2: Key5
    },
];

//Drills page

export const drills = [
    {
        id: 0,
        name: "GSB 570 PROFESSIONAL",
        name1: "IMPACT DRILL",
        description: "Upgrade to Bosch quality without breaking the bank! Powerful 570W motor drills Ø10mm in steel and Ø13mm in masonry. Durable metal chuck ensures long-lasting performance.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: Drill570,
        img2: Demo1,
        img3: Demo2,
        min: 30,
        quality: Rating,
        func: KeyI,
        func1: KeyII,
        func2: KeyIII
    },
    {
        id: 1,
        name: "GSB 19-2RE PROFESSIONAL",
        name1: "IMPACT DRILL",
        description: "Experience elevated quality within your budget! Crafted with a sturdy pot gear housing and clamp shell motor housing, our tool thrives in rugged jobsite conditions. Empowered by a robust 750W motor, it effortlessly meets diverse professional demands.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: Drill192,
        img2: Drill192Set,
        img3: Demo3,
        min: 40,
        quality: Rating,
        func: Key5I,
        func1: K6,
        func2: K7
    },
];

//Rotary Hammer page
import Rotary2_26DFR from '/public/2-26DFR.png';
import Demo2_26 from '/public/Demo 2-26.png';
import Demo2_26i from '/public/Demo 2-26i.png';
import Rotary2_24 from '/public/2-24.png';
import Demo2_24 from '/public/demo2-24.png';
import Demo24i from '/public/Demo 24 i.png';
import Rotary2_28 from '/public/2-28.png';
import Rotary2_28set from '/public/2-28 set.png';
import Demo28 from '/public/Demo 28.png';
import Rotary220 from '/public/220.png';
import Rotary220set from '/public/220 set.png';
import Demo220 from '/public/demo 220.png';
import GBH11Re from '/public/GBH 11Re.png';
import Demo11re from '/public/Demo 11re.png';
import Demo11rei from '/public/Demo11rei.png';
import Key28iii from '/public/key28iii.png';
import Keyii from '/public/keyii.png';
import Key220ii from '/public/key 220ii.png';
import Key2_28i from '/public/key 2-28i.png';
import Key28ii from '/public/key28ii.png';
import Key220i from '/public/key 220i.png';

export const rotary = [
    {
        id: 0,
        name: "GBH 2-26 DFR",
        name1: "PROFESSIONAL ROTARY HAMMER WITH SDS PLUS",
        description: "Zoom ahead with lightning speed – Introducing the mighty all-in-one solution, equipped with a lightning-fast quick-change chuck, perfect for your daily grind.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: Rotary2_26DFR,
        img2: Demo2_26,
        img3: Demo2_26i,
        min: 60,
        quality: Rating,
        func: Key28iii,
        func1: Keyii,
        func2: Key220ii
    },
    {
        id: 1,
        name: "GBH 2-24 DFR",
        name1: "PROFESSIONAL ROTARY HAMMER WITH SDS PLUS",
        description: "Outperforming the rest with top-class drilling speed, thanks to optimized gear housing. With a robust 790W motor, it's built to last. Plus, smart design allows for easy maintenance and spare parts interchangeability.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: Rotary2_24,
        img2: Demo2_24,
        img3: Demo24i,
        min: 60,
        quality: Rating,
        func: Key2_28i,
        func1: Key28iii,
        func2: Key220ii
    },
    {
        id: 2,
        name: "GBH 2-28 F PROFESSIONAL",
        name1: "ROTARY HAMMER WITH SDS PLUS",
        description: "Unmatched class-leading performance with enhanced power and KickBack Control (KBC) for user safety. Enjoy minimal vibration levels thanks to active counter oscillator damping.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: Rotary2_28,
        img2: Rotary2_28set,
        img3: Demo28,
        min: 60,
        quality: Rating,
        func: K7,
        func1: Key28ii,
        func2: Key28iii
    },
    {
        id: 3,
        name: "GBH 220 PROFESSIONAL",
        name1: "ROTARY HAMMER WITH SDS PLUS",
        description: "Powerful 720W motor with 2.0J impact energy for concrete drilling. Three-mode rotary hammer offers versatility. Professional Bosch performance in a compact design.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: Rotary220,
        img2: Rotary220set,
        img3: Demo220,
        min: 60,
        quality: Rating,
        func: Key220i,
        func1: Key220ii,
        func2: K6
    },
    {
        id: 4,
        name: "GBH 11 RE PROFESSIONAL",
        name1: "DEMOLITION HAMMER",
        description: "Meet the GBH 11 RE PROFESSIONAL Demolition Hammer – your ultimate demolition solution. Engineered for power and precision, it breaks barriers effortlessly. Dominate your projects with ease.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: GBH11Re,
        img2: Demo11re,
        img3: Demo11rei,
        min: 50,
        quality: Rating,
        func: Key2_28i,
        func1: Key28iii,
        func2: Key28ii
    },
];

//Angle Grinder
import Gws750 from '/public/Gws750.png';
import Demo750 from '/public/demo 750.png';
import Demo750i from '/public/demo 750i.png';
import Gws24 from '/public/Gws24.png';
import GwsSet from '/public/Gws set.png';
import Demo24_230 from '/public/demo 24-230.png';
import Gws2200 from '/public/GWS2200.png';
import Gws2200Set from '/public/Gws 2200set.png';
import Demo2200 from '/public/demo2200.png';
import BoschMab from '/public/Bosch Mab.png';
import MabSet from '/public/mab set.png';
import DemoMab from '/public/demo mab.png';
import RatingIcon from '/public/rating.png';
import Key750 from '/public/key750.png';
import Key750i from '/public/key750i.png';
import Key750ii from '/public/key750ii.png';
import Key230i from '/public/key230i.png';
import Key230ii from '/public/key230ii.png';
import KeyMabi from '/public/Key mabi.png';

export const grinders = [
    {
        id: 0,
        name: "GWS 750 PROFESSIONAL",
        name1: "ANGLE GRINDER",
        description: "Experience high removal rates and effortless control with improved motor cooling. " +
            "This tool offers exceptional handling and high overload capability, making long-term work a breeze.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: Gws750,
        img2: Demo750,
        img3: Demo750i,
        min: 50,
        quality: RatingIcon,
        func: Key750,
        func1: Key750i,
        func2: Key750ii
    },
    {
        id: 1,
        name: "GWS 24-230 PROFESSIONAL",
        name1: "ANGLE GRINDER",
        description: "New patented motor offers high overload capability and doubles material removal rate." +
            " Precision-engineered mechanical system reduces operator vibration by 13%. Soft rear handle grip improves control. " +
            "PROtection switch ensures user safety.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: Gws24,
        img2: GwsSet,
        img3: Demo24_230,
        min: 50,
        quality: RatingIcon,
        func: Key28ii,
        func1: Key230i,
        func2: Key230ii
    },
    {
        id: 2,
        name: "GWS 2200 PROFESSIONAL",
        name1: "ANGLE GRINDER",
        description: "Experience high material removal rates with minimal " +
            "breakdowns and extended carbon brush lifetime. Say goodbye to user fatigue and hello to uninterrupted productivity.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: Gws2200,
        img2: Gws2200Set,
        img3: Demo2200,
        min: 50,
        quality: RatingIcon,
        func: Key750,
        func1: Key230i,
        func2: Key230ii
    },
    {
        id: 3,
        name: "GDC 140 PROFESSIONAL",
        name1: "DIAMOND TILE CUTTER",
        description: "Powerful 1400W motor for fast cutting. Enjoy precise control with low tool vibration. " +
            "Enhanced safety and convenience with side-mounted power cord to prevent tangling.",
        price:"Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: BoschMab,
        img2: MabSet,
        img3: DemoMab,
        min: 50,
        quality: RatingIcon,
        func: KeyMabi,
        func1: Key230ii,
        func2: Key28ii
    },
];


import GbmCutter from '/public/Gbm cutter.png';
import Gcm240 from '/public/Gcm 240.png';
import DemoGbc from '/public/Demo gbc.png';
import KeyGbm1 from '/public/keygbm1.png';
import KeyGbm2 from '/public/keygbm2.png';
import KeyGbm3 from '/public/keygbm3.png';
import San1 from '/public/san1.png';
import San2 from '/public/san2.png';
import DemoSan from '/public/demosan.png';
import KeySan from '/public/keysan.png';
import KeySan1 from '/public/keysan1.png';
import BoschRouter from '/public/Bosch router.png';
import RouterSet from '/public/router set.png';
import DemoRout from '/public/demo rout.png';
import KeyRes from '/public/key res.png';
import KeyDia from '/public/key dia.png';
import Key28Iii from '/public/key28iii.png';
import BoschSaw from '/public/Bosch saw.png';
import SawSet from '/public/saw set.png';
import DemoSaw from '/public/demo saw.png';
import DustExtraction from '/public/Bosch blower.png';
import DemoBlow from '/public/demo blow.png';
import DemoBlow1 from '/public/demo blow1.png';
import Key750Ii from '/public/key750ii.png';
import BoschHeatgun from '/public/Bosch heatgun.png';
import HgSet from '/public/HG set.png';
import DemoHg from '/public/demo hg.png';
import KeyIii from '/public/keyiii.png';


//Benchtop
export const benchtool = [
    {
        id: 0,
        name: "GCM 254 PROFESSIONAL",
        name1: "MITRE SAW",
        description: "Make accurate cutting easier and more consistent with the tough professional miter saw.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: GbmCutter,
        img2: Gcm240,
        img3: DemoGbc,
        min: 30,
        quality: RatingIcon,
        func: KeyGbm1,
        func1: KeyGbm2,
        func2: KeyGbm3
    },
];

//sanders
export const sanders = [
    {
        id: 0,
        name: "GEX 125-1 AE ",
        name1: "PROFESSIONAL RANDOM ORBIT SANDER",
        description: "Compact and ergonomic with soft grip surfaces for comfort. Bosch Microfilter System ensures efficient dust extraction. Speed preselection for precise, material-specific work.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: San1,
        img2: San2,
        img3: DemoSan,
        min: 50,
        quality: RatingIcon,
        func: K7,
        func1: KeySan,
        func2: KeySan1
    },
];

//routers
export const routers = [
    {
        id: 0,
        name: "GOF 130 PROFESSIONAL",
        name1: "BOSCH ROUTER",
        description: "Enhance efficiency with the Bosch Router. Perfect for all woods. Constant Speed ensures top performance. Plunge design for dust-free precision. Easy bit changes with wrenches or spindle lock. Upgrade your routing experience with Bosch.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: BoschRouter,
        img2: RouterSet,
        img3: DemoRout,
        min: 20,
        quality: RatingIcon,
        func: KeyRes,
        func1: KeyDia,
        func2: Key28Iii
    },
];

//saws
export const saws = [
    {
        id: 0,
        name: "GST 650 PROFESSIONAL",
        name1: "BOSCH JIGSAW",
        description: "Get great results with the Bosch Jigsaw. Adjustable stroke rate for different materials. Easy handling with individual speed selection. Compact, minimal vibration, and lightweight for effortless use. Precision and durability from Bosch.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: BoschSaw,
        img2: SawSet,
        img3: DemoSaw,
        min: 50,
        quality: RatingIcon,
        func: Key750,
        func1: KeyMabi,
        func2: Key28Iii
    },
];


//dust extraction system
export const dust = [
    {
        id: 0,
        name: "GBL 800 E PROFESSIONAL",
        name1: "BLOWER WITH DUST EXTRACTION",
        description: "Strongest airflow for optimal work efficiency. Highest volume airflow. Powerful motor for superior performance.",
        price: "Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: DustExtraction,
        img2: DemoBlow,
        img3: DemoBlow1,
        min: 50,
        quality: RatingIcon,
        func: K7,
        func1: Key750,
        func2: Key750Ii
    },
];

//Heat guns
export const heatguns = [
    {
        id: 0,
        name: "GHG 180 PROFESSIONAL",
        name1: "BOSCH HEATGUN",
        description: "Powerful 1800W with 3-stage temperature selection (60/350/550C) for versatility. Tested to Bosch standards for 500 hrs of continuous operation. 100% safe with overheat protection for user safety.",
        price: "GHS500.00",
        img1: BoschHeatgun,
        img2: HgSet,
        img3: DemoHg,
        min: 50,
        quality: RatingIcon,
        func: K7,
        func1: KeyIii,
        func2: Key750
    },
];


//spare parts
import part2 from '/public/part2.png';
import parts3 from '/public/parts3.png';
import rating from '/public/rating.png';
import highQuality from '/public/high-quality.png';
import resilience from '/public/resilience.png';
import snap from '/public/snap.png';
import BoschKey from '/public/Bosch key.png';
import BoschKeySet from '/public/bch keyset.png';
import DemoKey from '/public/demo key.png';

export const spare = [
    {
        id: 0,
        name: "BOSCH 2-24/26/28",
        name1: "ARMATURE FOR ROTARY DRILLS/DRIVERS",
        description: "Unlock the power of your Bosch rotary drill with our genuine armature spare part. Engineered to perfection, it ensures seamless performance and lasting durability. Get back to work with confidence and precision.",
        price:"Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: part2,
        img2: part2,
        img3: parts3,
        min: 50,
        quality: rating,
        func: highQuality,
        func1: resilience,
        func2: snap
    },
    {
        id: 1,
        name: "KEYED CHUCK",
        name1: "FOR ROTARY DRILLS/DRIVERS, FOR IMPACT DRILL/DRIVERS",
        description: "Keyed Chuck is a Bosch System Chuck with a chuck capacity from 1.5 to 13mm diameters",
        price:"Please ensure to confirm the prices and specifications of the powertool for your projects by contacting the dealer through chat.",
        img1: BoschKey,
        img2: BoschKeySet,
        img3: DemoKey,
        min: 100,
        quality: rating,
        func: snap,
        func1: highQuality,
        func2: resilience
    },
];
