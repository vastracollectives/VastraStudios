import editorial1 from './images/editorial_1.png';
import editorial2 from './images/editorial_2.png';
import longsleeve from './images/apparel_longsleeve.png';

export const products = [
    {
        id: 'heavyweight-hoodie',
        title: "Heavyweight Hoodie",
        price: "$95",
        imageSrc: editorial1,
        description: "A study in structure and silence. Our signature hoodie is constructed from 500GSM Japanese loopback cotton. Designed with a structured hood and architectural volume.",
        details: [
            "100% Cotton",
            "Heavyweight Loopback",
            "Dropped shoulder",
            "Hidden side-seam pockets"
        ],
        technicalSpecs: [
            { label: "Weight", value: "500 GSM" },
            { label: "Weave", value: "Japanese Loopback" },
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
        imageSrc: editorial2,
        description: "An exploration of silhouette. The Structure Pant features a wide leg and tapered ankle, creating a distinct monolithic form. Durable heavy canvas construction.",
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
        description: "The foundation of the wardrobe. Minimalist long-sleeved tee with a reinforced neckline and refined drape. Built for layering or solo wear.",
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
