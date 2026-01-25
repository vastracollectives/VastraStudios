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
        status: "Active"
    }
];
