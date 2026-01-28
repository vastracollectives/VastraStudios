import vastraOrigin from './images/vastra_origin.png';
import vastraProcess from './images/vastra_process.png';
import longsleeve from './images/apparel_longsleeve.png';
import basicTee from './images/basic_tee.PNG';
import basicTeePosed from './images/basic_tee_posed.PNG';

import basicSweats from './images/basic_sweats.PNG';
import basicSweatsPosed from './images/basic_sweats_posed.PNG';

export const products = [
    {
        id: 'heavyweight-t-shirt',
        title: "Heavyweight T-Shirt",
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
            { label: "Weave", value: "Premium Interlock" },
            { label: "Composition", value: "100% Organic Cotton" },
            { label: "Origin", value: "Constructed in Hyderabad" },
            { label: "Stitching", value: "Reinforced Twin-Needle" }
        ],
        careInstructions: "Machine wash cold with like colors. Do not bleach. Tumble dry low or hang dry to preserve structure. Iron inside out if needed.",
        status: "Active"
    },
    {
        id: 'heavyweight-sweatpant',
        title: "Heavyweight Sweatpant",
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
        status: "Limited"
    },
    {
        id: 'core-longsleeve',
        title: "Core Longsleeve",
        price: "$65",
        imageSrc: longsleeve,
        description: "The foundation of the wardrobe. Minimalist long-sleeved tee from the Basics series, featuring a reinforced neckline and refined drape. Built for layering or solo wear.",
        details: [
            "Mid-weight jersey",
            "Reinforced collar",
            "Split hem detail",
            "Pre-shrunk for longevity"
        ],
        technicalSpecs: [
            { label: "Weight", value: "240 GSM" },
            { label: "Fabric", value: "Premium Interlock Jersey" },
            { label: "Neckline", value: "Reinforced Ribbed Collar" },
            { label: "Hem", value: "Asymmetrical Split Side" },
            { label: "Origin", value: "Constructed in Hyderabad" }
        ],
        careInstructions: "Cold wash only. Air dry recommended to prevent shrinkage. Do not wring or twist. Iron on low heat.",
        status: "Active"
    }
];
