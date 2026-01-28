import basicTee from './images/basic_tee.PNG';
import basicTeePosed from './images/basic_tee_posed.jpg';
import basicSweats from './images/basic_sweats.jpg';
import basicSweatsPosed from './images/basic_sweats_posed.jpg';
import basicHoodie from './images/basic_hoodie.jpg';
import basicHoodiePosed from './images/basic_hoodie_posed.jpg';
import basicSocks from './images/basic_socks.jpg';
import basicSocksPosed from './images/basic_socks_posed.jpg';

export const products = [
    {
        id: 't-shirt',
        title: "T-Shirt",
        price: "$15",
        imageSrc: basicTee,
        imageSecondary: basicTeePosed,
        description: "A study in structure and silence. Our signature heavyweight t-shirt is constructed from 400GSM premium jersey cotton. Designed with a structured fit and architectural volume.",
        details: [
            "100% Cotton",
            "Heavyweight Jersey",
            "Dropped shoulder",
            "Reinforced collar"
        ],
        technicalSpecs: [
            { label: "Weight", value: "400 GSM" },
            { label: "Fabric", value: "Premium Interlock" },
            { label: "Composition", value: "100% Organic Cotton" },
            { label: "Origin", value: "Constructed in Hyderabad" },
            { label: "Stitching", value: "Reinforced Twin-Needle" }
        ],
        careInstructions: "Machine wash cold with like colors. Do not bleach. Tumble dry low or hang dry to preserve structure. Iron inside out if needed.",
        status: "Active"
    },
    {
        id: 'sweatpant',
        title: "Sweatpant",
        price: "$25",
        imageSrc: basicSweats,
        imageSecondary: basicSweatsPosed,
        description: "The definitive lounge piece. The Heavyweight Sweatpant features a structured wide leg and architectural volume, constructed from 500GSM Japanese loopback cotton for the ultimate basics foundation.",
        details: [
            "500GSM Heavyweight Loopback",
            "Wide leg architectural fit",
            "Internal braided drawstring",
            "Hidden reinforced pockets"
        ],
        technicalSpecs: [
            { label: "Material", value: "500GSM Japanese Cotton" },
            { label: "Fit", value: "Structural Wide Leg" },
            { label: "Closure", value: "Internal Drawstring" },
            { label: "Finish", value: "Invisibile Reinforced Seams" },
            { label: "Origin", value: "Constructed in Hyderabad" }
        ],
        careInstructions: "Machine wash cold. Avoid high heat to maintain the structural integrity of the loopback weave. Colors will age naturally.",
        status: "Active"
    },
    {
        id: 'hoodie',
        title: "Hoodie",
        price: "$30",
        imageSrc: basicHoodie,
        imageSecondary: basicHoodiePosed,
        description: "Architectural volume in its purest form. The Vastra Hoodie is constructed from heavy 500GSM loopback cotton, featuring a structured double-layer hood and dropped shoulder silhouette.",
        details: [
            "Heavyweight 500GSM Loopback",
            "Structured double-layer hood",
            "Ribbed cuffs and hem",
            "Architectural silhouette"
        ],
        technicalSpecs: [
            { label: "Weight", value: "500 GSM" },
            { label: "Fabric", value: "Japanese Loopback Cotton" },
            { label: "Hardware", value: "None - Clean Aesthetic" },
            { label: "Origin", value: "Constructed in Hyderabad" }
        ],
        careInstructions: "Wash inside out cold. Air dry to maintain the structural integrity of the hood and body volume.",
        status: "Active"
    },
    {
        id: 'socks',
        title: "Socks",
        price: "$5",
        imageSrc: basicSocks,
        imageSecondary: basicSocksPosed,
        description: "Technical comfort for the multidisciplinary individual. Reinforced cushioning and high-density cotton blend for daily longevity.",
        details: [
            "High-density cotton blend",
            "Reinforced heel and toe",
            "Arch compression",
            "VASTRA branding detail"
        ],
        technicalSpecs: [
            { label: "Composition", value: "80% Cotton, 15% Nylon, 5% Spandex" },
            { label: "Weight", value: "Medium weight" },
            { label: "Stretch", value: "High-recovery elastane" },
            { label: "Origin", value: "Constructed in Hyderabad" }
        ],
        careInstructions: "Regular machine wash cold. Tumble dry normal.",
        status: "Active"
    }
];
