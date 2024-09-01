//Drill bits
import TileBitImg from '/public/till bit.png';
import WoodBitImg from '/public/wood bit.png';
import MasonryBitImg from '/public/masonry bit.png';
import MetalBitImg from '/public/metal bit.png';
import MultiBitImg from '/public/multi bit.png';
import RatingImg from '/public/rating.png';
import Ceramic1Img from '/public/ceremic1.png';
import Ceramic2Img from '/public/ceremic2.png';
import Ceramic3Img from '/public/ceremic3.png';
import GlassTileImg from '/public/glass tile mat.png';
import SoftWoodImg from '/public/soft wood.png';
import HardWoodImg from '/public/Hard Wood.png';
import HardStoneImg from '/public/Hard stone.png';
import ConcreteImg from '/public/concrete.png';
import BuildingBlockImg from '/public/Building block.png';
import StonesImg from '/public/stones.png';
import Metal1Img from '/public/metal 1.png';
import Metal2Img from '/public/metal 2.png';
import PlasticImg from '/public/plastic.png';

export const drillbits = [
    {
        id: 0,
        name: "TILE DRILL BITS",
        name1: "FOR ROTARY DRILLS/DRIVERS, FOR IMPACT DRILL/DRIVERS",
        description: "Tile Drill Bit is the standard choice when drilling in tiles. " +
            "Dry drilling without lubrication for convenient use. Diameter ⌀3-16mm",
        price: "Please ensure to confirm the prices and specifications of" +
            " the drill bits for your projects by contacting the dealer through chat.",
        img1: TileBitImg,
        min: 200,
        quality: RatingImg,
        func: Ceramic1Img,
        func1: Ceramic2Img,
        func2: Ceramic3Img,
        func3: GlassTileImg
    },
    {
        id: 1,
        name: "WOOD DRILL BITS",
        name1: "FOR ROTARY DRILLS/DRIVERS",
        description: "Drill Bits offer precise drilling in soft and hard wood." +
            "High-quality shoulder cutters with precise edges that " +
            "produce tear-free holes. Diameter ⌀3-16mm  ",
        price: "Please ensure to confirm the prices and specifications of" +
            " the drill bits for your projects by contacting the dealer through chat.",
        img1: WoodBitImg,
        min: 100,
        quality: RatingImg,
        func: SoftWoodImg,
        func1: HardWoodImg,
        func2: SoftWoodImg,
        func3: HardWoodImg
    },
    {
        id: 2,
        name: "MASONRY & CONCRETE DRILL BITS",
        name1: "FOR ROTARY HAMMER DRILLS",
        description: "Drill Bit is ideal for use at the highest drilling speeds. " +
            "Vibration-optimized flute design offers the best power transfer and increase in speed." +
            "Diameter ⌀15-45mm ",
        price: "Please ensure to confirm the prices and specifications of" +
            " the drill bits for your projects by contacting the dealer through chat.",
        img1: MasonryBitImg,
        min: 100,
        quality: RatingImg,
        func: HardStoneImg,
        func1: ConcreteImg,
        func2: BuildingBlockImg,
        func3: StonesImg
    },
    {
        id: 3,
        name: "METAL DRILL BITS",
        name1: "FOR ROTARY DRILLS/DRIVERS",
        description: "The Drill bit self-centering tip prevents wandering, making quick and easy drilling starts possible and " +
            "Increased drilling rate generates less heat and wear" +
            "Diameter ⌀4-45mm",
        price: "Please ensure to confirm the prices and specifications of" +
            " the drill bits for your projects by contacting the dealer through chat.",
        img1: MetalBitImg,
        min: 100,
        quality: RatingImg,
        func: Metal1Img,
        func1: Metal2Img,
        func2: Metal1Img,
        func3: Metal2Img
    },
    {
        id: 4,
        name: "MULTI MATERIALS DRILL BITS",
        name1: "FOR IMPACT DRILL/DRIVERS",
        description: "Drill bits have high precision drilling multiple materials " +
            "and it also start holes accurately with a specially-designed centring tip. Diameter ⌀4-12mm",
        price: "Please ensure to confirm the prices and specifications of" +
            " the drill bits for your projects by contacting the dealer through chat.",
        img1: MultiBitImg,
        min: 100,
        quality: RatingImg,
        func: PlasticImg,
        func1: ConcreteImg,
        func2: Metal1Img,
        func3: Ceramic1Img
    }
];


//Accessories Sets
import s1 from '/public/s1.png';
import s2 from '/public/s2.png';
import s3 from '/public/s3.png';
import s4 from '/public/s4.png';
import softWood from '/public/soft wood.png';
import HardWood from '/public/Hard Wood.png';
import j4 from '/public/j4.png';
import drillSet from '/public/drill set.png';
import rating from '/public/rating.png';
import scrbset from '/public/scrbset.png';
import j1 from '/public/j1.png';
import j2 from '/public/j2.png';
import j3 from '/public/j3.png';
import metal1 from '/public/metal 1.png';
import metal2 from '/public/metal 2.png';
import hardwood from '/public/hard wood.png';

export const accsets = [
    {
        id: 0,
        name: "HOLESAW SET",
        name1: "FOR ROTARY DRILLS/DRIVERS, FOR IMPACT DRILL/DRIVERS",
        description: "Tooth configuration (Vario tooth strip) is ideal for gliding through material to provide smooth cuts.",
        price: "Please ensure to confirm the prices and specifications of the holesaw sets for your projects by contacting the dealer through chat.",
        img1: s1,
        min: 100,
        quality: rating,
        func: s2,
        func1: s3,
        func2: s4,
        func3: softWood
    },
    {
        id: 1,
        name: "SCREWDRIVER BIT SET",
        name1: "FOR ROTARY DRILLS/DRIVERS, FOR SCREWDRIVERS",
        description: "Screwdriver bits composed of S2 Modified Steel for extra-hard quality and a strong performance in all tasks",
        price: "Please ensure to confirm the prices and specifications of the bit sets for your projects by contacting the dealer through chat.",
        img1: scrbset,
        min: 100,
        quality: rating,
        func: softWood,
        func1: HardWood,
        func2: s4,
        func3: j4
    },
    {
        id: 2,
        name: "DRILL BIT SET",
        name1: "FOR ROTARY DRILLS/DRIVERS",
        description: " Drill bits self-centring split-point tip combines active cutting and perfect centring without wandering",
        price: "Please ensure to confirm the prices and specifications of the bit sets for your projects by contacting the dealer through chat.",
        img1: drillSet,
        min: 100,
        quality: rating,
        func: metal1,
        func1: metal2 ,
        func2: j4,
        func3: hardwood
    },
    {
        id: 3,
        name: "JIGSAW BLADE SET ",
        name1: "FOR JIGSAWS",
        description: "Contains blades for rough, fast and fine cuts as well as for straight and curve cuts in softwood.",
        price: "Please ensure to confirm the prices and specifications of the blade sets for your projects by contacting the dealer through chat.",
        img1: j1,
        min: 100,
        quality: rating,
        func: j2,
        func1: j3,
        func2: j4,
        func3: softWood
    },
];


//Diamond disc
import DiscStandard from '/public/Disc Standard.png';
import DiscEco from '/public/Disc Eco.png';
import DiscStone from '/public/Disc Stone.png';
import DiscConcrete from '/public/Disc Concrete.png';
import DiscCeramics from '/public/Disc Ceramics.png';
import RatingIcon from '/public/rating.png';
import HardStoneIcon from '/public/Hard stone.png';
import ConcreteIcon from '/public/concrete.png';
import BuildingBlockIcon from '/public/Building block.png';
import BricksIcon from '/public/bricks.png';
import RoofStoneIcon from '/public/roof stone.png';
import StonesIcon from '/public/stones.png';
import Ceremic1Icon from '/public/ceremic1.png';
import Ceremic2Icon from '/public/ceremic2.png';
import Ceremic3Icon from '/public/ceremic3.png';

export const disc = [
    {
        id: 0,
        name: "STANDARD FOR UNIVERSAL DIAMOND CUTTING DISC",
        name1: "FOR SMALL & LARGE ANGLE GRINDERS WITH LOCKING NUT",
        description: "Standard for Universal Diamond Cutting Disc provides reliable cuts in universal building materials. ⌀125 - 230mm",
        price: "Please ensure to confirm the prices and specifications of the diamond disc for your projects by contacting the dealer through chat.",
        img1: DiscStandard,
        min: 100,
        quality: RatingIcon,
        func: HardStoneIcon,
        func1: ConcreteIcon,
        func2: BuildingBlockIcon,
        func3: BricksIcon
    },
    {
        id: 1,
        name: "ECO FOR UNIVERSAL SEGMENTED DIAMOND CUTTING DISC",
        name1: "FOR SMALL & LARGE ANGLE GRINDERS WITH LOCKING NUT",
        description: "Eco for Universal Segmented Diamond Disc is the preferred choice for reliable cuts in general construction materials. ⌀125 - 230mm",
        price: "Please ensure to confirm the prices and specifications of the diamond disc for your projects by contacting the dealer through chat.",
        img1: DiscEco,
        min: 100,
        quality: RatingIcon,
        func: BuildingBlockIcon,
        func1: BricksIcon,
        func2: ConcreteIcon,
        func3: HardStoneIcon
    },
    {
        id: 2,
        name: "STANDARD FOR STONE DIAMOND CUTTING DISC",
        name1: "FOR SMALL & LARGE ANGLE GRINDERS",
        description: "Standard for Stone Diamond Cutting Disc provides reliable cuts in all types of stone for your projects. ⌀125 - 230mm",
        price: "Please ensure to confirm the prices and specifications of the diamond disc for your projects by contacting the dealer through chat.",
        img1: DiscStone,
        min: 100,
        quality: RatingIcon,
        func: HardStoneIcon,
        func1: BricksIcon,
        func2: RoofStoneIcon,
        func3: StonesIcon
    },
    {
        id: 3,
        name: "STANDARD FOR CONCRETE DIAMOND CUTTING DISC",
        name1: "FOR SMALL & LARGE ANGLE GRINDERS",
        description: "Standard for Concrete Diamond Cutting Disc provides reliable cuts in concrete. ⌀125 - 230mm",
        price: "Please ensure to confirm the prices and specifications of the diamond disc for your projects by contacting the dealer through chat.",
        img1: DiscConcrete,
        min: 100,
        quality: RatingIcon,
        func: BuildingBlockIcon,
        func1: ConcreteIcon,
        func2: HardStoneIcon,
        func3: StonesIcon
    },
    {
        id: 4,
        name: "STANDARD FOR CERAMIC DIAMOND CUTTING DISC",
        name1: "FOR SMALL & LARGE ANGLE GRINDERS WITH LOCKING NUT",
        description: "Standard for Ceramic Diamond Cutting Disc provides reliable cuts in tiles. ⌀125 - 230mm",
        price: "Please ensure to confirm the prices and specifications of the diamond disc for your projects by contacting the dealer through chat.",
        img1: DiscCeramics,
        min: 100,
        quality: RatingIcon,
        func: Ceremic1Icon,
        func1: Ceremic2Icon,
        func2: Ceremic3Icon,
        func3: StonesIcon
    }
];


//Chisel
import TileChiselImage from '/public/Tile chisel.png';
import FlatChiselImage from '/public/flat chisel.png';
import PointedChiselImage from '/public/pointed chisel.png';
import SpadeChiselImage from '/public/spade chisel.png';
import ConcreteIcon2 from '/public/concr.png';

export const chisel = [
    {
        id: 0,
        name: "SDS PLUS TILE CHISEL",
        name1: "FOR ROTARY HAMMER DRILLS, FOR DEMOLITION HAMMERS",
        description: "SDS max Tile Chisel is ideal for the clean removal of wall and floor tiles. Self-sharpening flat design and angled cutting edge are ideal for work in small joints and tile removal without breakage.",
        price: "Please ensure to confirm the prices and specifications of the chisels for your projects by contacting the dealer through chat.",
        img1: TileChiselImage,
        min: 100,
        quality: RatingIcon,
        func: BuildingBlockIcon,
        func1: ConcreteIcon,
        func2: BricksIcon,
        func3: ConcreteIcon2
    },
    {
        id: 1,
        name: "SDS PLUS FLAT CHISEL",
        name1: "FOR ROTARY HAMMER DRILLS, FOR DEMOLITION HAMMERS",
        description: "SDS plus Flat Chisel is ideal for various applications in concrete with less jamming and more progress. Viper teeth on the chiselling edge offer increased work progress.",
        price: "Please ensure to confirm the prices and specifications of the chisels for your projects by contacting the dealer through chat.",
        img1: FlatChiselImage,
        min: 200,
        quality: RatingIcon,
        func: BuildingBlockIcon,
        func1: ConcreteIcon,
        func2: BricksIcon,
        func3: ConcreteIcon2
    },
    {
        id: 2,
        name: "SDS PLUS POINTED CHISEL",
        name1: "FOR ROTARY HAMMER DRILLS, FOR DEMOLITION HAMMERS",
        description: "SDS plus Pointed Chisel is ideal for precision jobs in concrete without any work interruptions and with less jamming. Offers a 30%-longer lifetime and a 15%-higher material removal rate than standard chisels.",
        price: "Please ensure to confirm the prices and specifications of the chisels for your projects by contacting the dealer through chat.",
        img1: PointedChiselImage,
        min: 100,
        quality: RatingIcon,
        func: BuildingBlockIcon,
        func1: ConcreteIcon,
        func2: BricksIcon,
        func3: ConcreteIcon2
    },
    {
        id: 3,
        name: "SDS PLUS SPADE CHISEL",
        name1: "FOR ROTARY HAMMER DRILLS, FOR DEMOLITION HAMMERS",
        description: "The SDS plus Spade Chisel delivers a high material removal rate in masonry and mortar. Self-sharpening with a 30%-higher material removal rate than standard chisels.",
        price: "Please ensure to confirm the prices and specifications of the chisels for your projects by contacting the dealer through chat.",
        img1: SpadeChiselImage,
        min: 100,
        quality: RatingIcon,
        func: BuildingBlockIcon,
        func1: ConcreteIcon,
        func2: BricksIcon,
        func3: ConcreteIcon2
    }
];


//Sanding Disc
import Sd2 from '/public/sd2.png';
import Sd1 from '/public/sd1.png';
import Metal1 from '/public/metal 1.png';
import Metal2 from '/public/metal 2.png';
import S4 from '/public/s4.png';
import S2 from '/public/s2.png';
import SoftWood from '/public/soft wood.png';

export const sandisc = [
    {
        id: 0,
        name: "METAL SANDPAPER DISC",
        name1: "FOR SMALL ANGLE GRINDERS",
        description: "The vulcanised fibre backing enables stability for a steady, constant grinding process.",
        price: "Please ensure to confirm the prices and specifications of the disc for your projects by contacting the dealer through chat.",
        img1: Sd2,
        min: 100,
        quality: RatingIcon,
        func: Metal1,
        func1: Metal2,
        func2: S4,
        func3: S2
    },
    {
        id: 1,
        name: "WOOD SANDPAPER DISC",
        name1: "FOR SMALL ANGLE GRINDERS",
        description: "Wood Sandpaper has an exceptionally long lifetime when sanding wood, veneer and solid surfaces",
        price: "Please ensure to confirm the prices and specifications of the disc for your projects by contacting the dealer through chat.",
        img1: Sd1,
        min: 100,
        quality: RatingIcon,
        func: HardWood,
        func1: SoftWood,
        func2: HardWood,
        func3: SoftWood
    }
];


//Saw Blades
import softwood from '/public/soft wood.png';
import md1 from '/public/md1.png';
import plastic from '/public/plastic.png';
import ceramic2 from '/public/ceremic2.png';

export const sawblade = [
    {
        id: 0,
        name: "HOLESAWS ",
        name1: "FOR ROTARY DRILLS/DRIVERS, FOR IMPACT DRILL/DRIVERS",
        description: "Tooth configuration (Vario tooth strip) is ideal for gliding through material to provide smooth cuts.",
        price: "Please ensure to confirm the prices and specifications of the saw blades for your projects by contacting the dealer through chat.",
        img1: s1,
        min: 100,
        quality: rating,
        func: s2,
        func1: s3,
        func2: s4,
        func3: softwood
    },
    {
        id: 1,
        name: "JIGSAW BLADES ",
        name1: "FOR JIGSAWS",
        description: "Contains blades for rough, fast and fine cuts as well as for straight and curve cuts in softwood.",
        price: "Please ensure to confirm the prices and specifications of the saw blades for your projects by contacting the dealer through chat.",
        img1: j1,
        min: 100,
        quality: rating,
        func: j2,
        func1: j3,
        func2: j4,
        func3: softwood
    },
    {
        id: 2,
        name: "MULTI MATERIAL CIRCULAR SAW BLADE",
        name1: "FOR MITRE SAWS",
        description: "Multi Material Circular Saw Blade delivers powerful cuts in a wide range of materials.",
        price: "Please ensure to confirm the prices and specifications of the saw blades for your projects by contacting the dealer through chat.",
        img1: md1,
        min: 100,
        quality: rating,
        func: metal2,
        func1: plastic,
        func2: ceramic2,
        func3: hardwood
    }
];


//Screw Bits
import ScrBitImg from '/public/scrb.png';
import MetalImg from '/public/metal 2.png';
import S4Img from '/public/s4.png';

export const screwbit = [
    {
        id: 0,
        name: "SCREWDRIVER BITS",
        name1: "FOR ROTARY DRILLS/DRIVERS",
        description: "The tapered torsion zone of the bits cope easily with torque peaks, fulfilling all tasks.",
        price: "Please ensure to confirm the prices and specifications of the screw bits for your projects by contacting the dealer through chat.",
        img1: ScrBitImg,
        min: 100,
        quality: RatingImg,
        func: SoftWoodImg,
        func1: HardWoodImg,
        func2: MetalImg,
        func3: S4Img
    }
];
