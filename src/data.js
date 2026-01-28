import vastraOrigin from './images/vastra_origin.png';
import vastraProcess from './images/vastra_process.png';
import longsleeve from './images/apparel_longsleeve.png';
import basicTee from './images/basic_tee.PNG';
import basicTeePosed from './images/basic_tee_posed.PNG';

export const products = [
    {
        id: 'heavyweight-t-shirt',
        title: "Heavyweight T-Shirt",
        price: "$65",
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
        id: 'structure-pant',
        title: "Structure Pant",
        price: "$140",
        imageSrc: vastraProcess,
        description: "An exploration of silhouette. The Structure Pant features a wide leg and tapered ankle, creating a distinct basics form. Durable heavy canvas construction.",
        details: [
            "Heavy Canvas",
            "Wide Tapered fit",
            "Internal drawstring",
            "Raw reinforced seams"
        ],
        technicalSpecs: [
            { label: "Material", value: "15oz Heavy Canvas" },
            { label: "Fit", value: "Structural Tapered" },
            { label: "Closure", value: "Internal Braided Drawstring" },
            { label: "Finish", value: "Raw Industrial Seams" },
            { label: "Origin", value: "Constructed in Hyderabad" }
        ],
        careInstructions: "Spot clean recommended. For deep clean, hand wash cold. Avoid high heat to maintain the canvas rigidity. Colors may fade beautifully over time.",
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
