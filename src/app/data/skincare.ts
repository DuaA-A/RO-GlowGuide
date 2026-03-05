import type { SkinType, SkinCondition, Product, Routine } from "./types";

// ── Skin Types ────────────────────────────────────────────────────────────────
// PLACEHOLDER: Replace descriptions, characteristics, tips, and images with real content

export const skinTypes: SkinType[] = [
    {
        id: "normal",
        name: "Normal Skin",
        description:
            "Balanced and well-regulated, normal skin maintains an ideal equilibrium of moisture and sebum production. Placeholder: replace with detailed clinical description.",
        characteristics: [
            "Balanced sebum and moisture levels",
            "Fine, barely visible pores",
            "Even, clear complexion",
            "Rarely experiences breakouts or sensitivity",
        ],
        tips: [
            "Maintain with a gentle twice-daily cleansing routine",
            "Use a broad-spectrum SPF 30+ daily",
            "Incorporate a lightweight antioxidant serum",
        ],
        image: "", // PLACEHOLDER: add path or URL to a skincare model image
        color: "warm-beige",
    },
    {
        id: "dry",
        name: "Dry Skin",
        description:
            "Dry skin produces insufficient sebum leading to a compromised moisture barrier. Placeholder: replace with detailed clinical description.",
        characteristics: [
            "Persistent feeling of tightness or roughness",
            "Visible flaking or dull, matte surface",
            "Fine lines appear more pronounced",
            "Prone to irritation and sensitivity",
        ],
        tips: [
            "Cleanse with cream or oil-based formulas",
            "Apply moisturizer while skin is still damp",
            "Use occlusives such as squalane or shea butter as last step",
        ],
        image: "",
        color: "blush",
    },
    {
        id: "oily",
        name: "Oily Skin",
        description:
            "Characterized by overactive sebaceous glands, oily skin maintains a persistent shine and enlarged pores. Placeholder: replace with detailed clinical description.",
        characteristics: [
            "Persistently shiny or greasy appearance",
            "Enlarged, clearly visible pores",
            "Prone to blackheads and breakouts",
            "Makeup tends to wear off quickly",
        ],
        tips: [
            "Use salicylic acid or gel cleansers twice daily",
            "Avoid heavy, occlusive moisturizers",
            "Niacinamide helps regulate sebum production",
        ],
        image: "",
        color: "sand",
    },
    {
        id: "combination",
        name: "Combination Skin",
        description:
            "Combination skin exhibits differing characteristics across zones — typically an oily T-zone with normal to dry cheeks. Placeholder: replace with detailed clinical description.",
        characteristics: [
            "Oily forehead, nose, and chin (T-zone)",
            "Normal to dry cheeks and temples",
            "Varying pore sizes by zone",
            "Requires zone-specific product application",
        ],
        tips: [
            "Use a balanced, pH-correct cleanser",
            "Apply lighter moisturizer on T-zone, richer on dry areas",
            "Clay masks can be applied selectively to oily zones",
        ],
        image: "",
        color: "taupe",
    },
    {
        id: "sensitive",
        name: "Sensitive Skin",
        description:
            "Sensitive skin has a weakened barrier function that reacts readily to environmental triggers and cosmetic ingredients. Placeholder: replace with detailed clinical description.",
        characteristics: [
            "Visible redness and reactive flushing",
            "Burning, stinging, or itching sensations",
            "Easily triggered by products or environmental factors",
            "May be associated with rosacea, eczema, or contact dermatitis",
        ],
        tips: [
            "Patch test all new products before full application",
            "Opt for fragrance-free, minimal-ingredient formulations",
            "Centella asiatica and panthenol help calm reactivity",
        ],
        image: "",
        color: "blush",
    },
];

// ── Skin Conditions ──────────────────────────────────────────────────────────
// PLACEHOLDER: Replace with clinical details, images, and expand as needed

export const skinConditions: SkinCondition[] = [
    {
        id: "comedonal",
        name: "Comedonal Acne",
        type: "Non-inflammatory",
        severity: "Mild",
        description:
            "Characterised by open comedones (blackheads) and closed comedones (whiteheads) caused by follicular blockage. Placeholder: replace with clinical description.",
        causes: [
            "Excess sebum production",
            "Accumulation of dead skin cells",
            "Use of occlusive cosmetics",
            "Hormonal fluctuations",
        ],
        image: "",
        color: "sand",
    },
    {
        id: "inflammatory",
        name: "Inflammatory Acne",
        type: "Papules & Pustules",
        severity: "Moderate",
        description:
            "Red, raised papules and pus-filled pustules resulting from bacterial proliferation and immune response. Placeholder: replace with clinical description.",
        causes: [
            "Cutibacterium acnes overgrowth",
            "Immune-mediated inflammatory response",
            "Hormonal fluctuations",
            "Stress and dietary factors",
        ],
        image: "",
        color: "taupe",
    },
    {
        id: "cystic",
        name: "Cystic Acne",
        type: "Nodular / Cystic",
        severity: "Severe",
        description:
            "Deep, painful, fluid-filled lesions with a high risk of scarring, often requiring prescription treatment. Placeholder: replace with clinical description.",
        causes: [
            "Deep follicular rupture",
            "Severe inflammatory cascade",
            "Genetic predisposition to scarring",
            "Significant hormonal imbalances",
        ],
        image: "",
        color: "mink",
    },
    {
        id: "hormonal",
        name: "Hormonal Acne",
        type: "Cyclic / Hormonal",
        severity: "Moderate",
        description:
            "Breakouts concentrated around the jawline and chin, cyclically linked to hormonal shifts. Placeholder: replace with clinical description.",
        causes: [
            "Fluctuations in androgen levels",
            "Menstrual cycle and PCOS",
            "Cortisol elevation from stress",
            "Certain medications affecting hormones",
        ],
        image: "",
        color: "blush",
    },
];

// ── Skincare Routines ─────────────────────────────────────────────────────────
// PLACEHOLDER: Replace step descriptions and images with real content

export const skincareRoutines: Routine[] = [
    {
        id: "normal-routine",
        name: "Normal Skin Daily Routine",
        description:
            "A balanced, maintenance-focused routine for normal skin. Placeholder: replace with full routine rationale.",
        targetType: "normal",
        steps: [
            { step: 1, name: "Cleanser", description: "Placeholder: gentle foaming or gel cleanser.", timing: "AM & PM" },
            { step: 2, name: "Toner", description: "Placeholder: hydrating or balancing toner.", timing: "AM & PM" },
            { step: 3, name: "Serum", description: "Placeholder: antioxidant vitamin C serum.", timing: "AM" },
            { step: 4, name: "Moisturiser", description: "Placeholder: lightweight lotion.", timing: "AM & PM" },
            { step: 5, name: "Sunscreen", description: "Placeholder: broad-spectrum SPF 50.", timing: "AM" },
        ],
        image: "",
    },
    {
        id: "dry-routine",
        name: "Dry Skin Hydration Routine",
        description:
            "An intense moisture-restoring routine for dry and dehydrated skin. Placeholder: replace with full routine rationale.",
        targetType: "dry",
        steps: [
            { step: 1, name: "Oil Cleanser", description: "Placeholder: balm or oil cleanser.", timing: "PM" },
            { step: 2, name: "Cream Cleanser", description: "Placeholder: creamy, non-stripping cleanser.", timing: "AM & PM" },
            { step: 3, name: "Hydrating Toner", description: "Placeholder: humectant-rich toner.", timing: "AM & PM" },
            { step: 4, name: "Hyaluronic Acid Serum", description: "Placeholder: multi-weight HA serum.", timing: "AM & PM" },
            { step: 5, name: "Rich Moisturiser", description: "Placeholder: ceramide-rich cream.", timing: "AM & PM" },
            { step: 6, name: "Face Oil / Occlusive", description: "Placeholder: squalane or shea butter.", timing: "PM" },
            { step: 7, name: "Sunscreen", description: "Placeholder: hydrating SPF 50.", timing: "AM" },
        ],
        image: "",
    },
    {
        id: "oily-routine",
        name: "Oily Skin Balancing Routine",
        description:
            "A sebum-control focused routine that hydrates without adding shine. Placeholder: replace with full routine rationale.",
        targetType: "oily",
        steps: [
            { step: 1, name: "Gel Cleanser", description: "Placeholder: BHA or salicylic acid cleanser.", timing: "AM & PM" },
            { step: 2, name: "Exfoliating Toner", description: "Placeholder: BHA toner.", timing: "PM (3–4×/week)" },
            { step: 3, name: "Niacinamide Serum", description: "Placeholder: 10% niacinamide serum.", timing: "AM & PM" },
            { step: 4, name: "Oil-Free Moisturiser", description: "Placeholder: lightweight gel moisturiser.", timing: "AM & PM" },
            { step: 5, name: "Sunscreen", description: "Placeholder: matte-finish sunscreen.", timing: "AM" },
        ],
        image: "",
    },
    {
        id: "sensitive-routine",
        name: "Sensitive Skin Calming Routine",
        description:
            "A minimal, barrier-supporting routine for reactive and sensitive skin. Placeholder: replace with full routine rationale.",
        targetType: "sensitive",
        steps: [
            { step: 1, name: "Micellar / Gentle Cleanser", description: "Placeholder: fragrance-free, pH-balanced cleanser.", timing: "AM & PM" },
            { step: 2, name: "Centella Serum", description: "Placeholder: calming centella or azelaic acid serum.", timing: "AM & PM" },
            { step: 3, name: "Barrier Moisturiser", description: "Placeholder: ceramide and panthenol moisturiser.", timing: "AM & PM" },
            { step: 4, name: "Mineral Sunscreen", description: "Placeholder: zinc oxide-based SPF 50.", timing: "AM" },
        ],
        image: "",
    },
];

// ── Skincare Products ─────────────────────────────────────────────────────────
// PLACEHOLDER: Replace all product details, images, and medical details with real data

export const skincareProducts: Product[] = [
    {
        id: "sk-001",
        name: "Effaclar Purifying Foaming Gel",
        brand: "La Roche-Posay",
        category: "Cleanser",
        description:
            "A gentle yet effective foaming cleanser specifically formulated for oily and sensitive skin. It eliminates impurities and excess sebum while leaving the skin clean and fresh.",
        usage:
            "Apply a small amount to damp skin, massage in circular motions for 60 seconds, and rinse thoroughly with lukewarm water. Use morning and evening.",
        mainIngredients: ["Zinc PCA", "La Roche-Posay Thermal Spring Water", "Citric Acid"],
        benefits: ["Purifies skin", "Reduces excess sebum", "Maintains skin pH"],
        image: "https://www.laroche-posay.us/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lrp-master-catalog/default/dw1062b146/product-images/effaclar-purifying-foaming-gel-cleanser-3337872411991-1.jpg",
        targetTypes: ["oily", "sensitive", "acne-prone", "combination"],
        medicalDetails: {
            mechanismOfAction:
                "Zinc PCA helps to regulate sebum production and provides antimicrobial properties. Thermal spring water soothes and reduces irritation.",
            sideEffects: ["Very rare skin irritation or dryness in extremely sensitive individuals."],
            contraindications: ["Known allergy to Zinc PCA or any listed ingredient."],
            clinicalNotes: "Physiological pH 5.5. Soap-free, alcohol-free, and non-comedogenic. Ideal for patients on drying acne treatments.",
            pregnancySafety: "Considered safe.",
        },
    },
    {
        id: "sk-002",
        name: "SHAAN Facial Cleanser Gel",
        category: "Cleanser",
        description: "A gentle, hydrating gel cleanser enriched with Vitamin C and E to brighten and refresh the skin.",
        usage: "Apply to damp face, massage gently, and rinse. Use twice daily.",
        mainIngredients: ["Vitamin C", "Vitamin E", "Glycerin"],
        benefits: ["Gentle cleansing", "Antioxidant protection", "Brightens complexion"],
        image: "http://46.101.78.230:8069/web/image/product.template/22276/image_1920?unique=c78bfd6",
        targetTypes: ["dry", "normal", "sensitive"],
        medicalDetails: {
            mechanismOfAction: "Antioxidants C and E protect against free radical damage while glycerin maintains hydration.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-003",
        name: "CeraVe Foaming Facial Cleanser",
        category: "Cleanser",
        description: "Developed with dermatologists, this formula cleanses and removes oil without disrupting the protective skin barrier.",
        usage: "Wet skin with lukewarm water. Massage cleanser into skin in a gentle, circular motion. Rinse.",
        mainIngredients: ["Ceramides (1, 3, 6-II)", "Hyaluronic Acid", "Niacinamide"],
        benefits: ["Non-drying", "Fragrance-free", "Restores skin barrier"],
        image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=2023&auto=format&fit=crop",
        targetTypes: ["oily", "normal"],
        medicalDetails: {
            mechanismOfAction: "Ceramides help restore the skin barrier. Niacinamide calms the skin. Hyaluronic acid retains moisture.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-004",
        name: "Effaclar Duo (+)",
        category: "Treatment",
        description: "A dual-action acne treatment that reduces pimples and prevents their recurrence, while also targeting dark spots.",
        usage: "Apply to the entire face morning and/or evening after cleansing.",
        mainIngredients: ["Salicylic Acid", "LHA", "Niacinamide", "Procerad"],
        benefits: ["Clears breakouts", "Reduces red and brown marks", "24h hydration"],
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1974&auto=format&fit=crop",
        targetTypes: ["oily", "combination"],
        medicalDetails: {
            mechanismOfAction: "Salicylic acid and LHA exfoliate the surface. Niacinamide reduces inflammation. Procerad helps protect against the appearance of marks.",
            pregnancySafety: "Avoid high concentrations of salicylates; consult doctor."
        }
    },
    {
        id: "sk-005",
        name: "CeraVe Moisturizing Lotion",
        category: "Moisturiser",
        description: "A lightweight, oil-free moisturizer that helps hydrate the skin and restore its natural barrier.",
        usage: "Apply liberally as often as needed, or as directed by a physician.",
        mainIngredients: ["Ceramides", "Hyaluronic Acid"],
        benefits: ["Moisturises for 24 hours", "MVE Technology for controlled release", "Non-comedogenic"],
        image: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/products-v3/daily-moisturizing-lotion/cerave_daily_moisturizing_lotion_12oz_front-v2.jpg",
        targetTypes: ["dry", "normal", "combination"],
        medicalDetails: {
            mechanismOfAction: "Ceramides replenish skin's essential lipids. MVE technology ensures efficient delivery within the skin's barrier.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-006",
        name: "Zoryve (Roflumilast) 0.15%",
        brand: "Arcutis Biotherapeutics",
        category: "Treatment",
        description: "A non-steroidal topical cream approved for the treatment of mild to moderate atopic dermatitis (eczema) in adults and children.",
        usage: "Apply once daily to affected areas. For external use only.",
        mainIngredients: ["Roflumilast"],
        benefits: ["Steroid-free", "Once-daily application", "Rapid itch relief"],
        image: "https://www.zoryve.com/images/zoryve-tube.png",
        targetTypes: ["eczema", "sensitive", "atopic-dermatitis", "dry"],
        medicalDetails: {
            mechanismOfAction: "A potent and selective PDE4 inhibitor that reduces the production of pro-inflammatory mediators.",
            sideEffects: ["Application site reactions", "diarrhea", "headache"],
            contraindications: ["Moderate to severe liver impairment."],
            clinicalNotes: "Provides effective clearance of eczema lesions without the side effects of chronic topical steroids.",
            pregnancySafety: "Consult physician; benefit must outweigh risk."
        }
    },
    {
        id: "sk-007",
        name: "Skin Renewing Retinol Serum",
        brand: "CeraVe",
        category: "Treatment",
        description: "An anti-aging treatment formulated with encapsulated retinol to reduce the appearance of fine lines and wrinkles.",
        usage: "Apply at night to clean face and neck. Always follow with SPF during the day.",
        mainIngredients: ["Encapsulated Retinol", "Ceramides", "Hyaluronic Acid"],
        benefits: ["Reduces fine lines", "Encapsulated delivery", "Barrier supporting"],
        image: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/products-v3/skin-renewing-retinol-serum/cerave_skin_renewing_retinol_serum_30ml_front-v2.jpg",
        targetTypes: ["anti-aging", "normal", "fine-lines", "wrinkles"],
        medicalDetails: {
            mechanismOfAction: "Retinol accelerates cell turnover, while encapsulated delivery minimizes irritation.",
            sideEffects: ["Redness", "flaking", "increased sun sensitivity"],
            contraindications: ["Pregnancy (typical precaution for retinoids)"],
            clinicalNotes: "Non-comedogenic and fragrance-free. Suitable for sensitive skin.",
            pregnancySafety: "Contraindicated (Retinoids)."
        }
    },
    {
        id: "sk-008",
        name: "Gentle Skin Cleanser",
        brand: "Cetaphil",
        category: "Cleanser",
        description: "A clinical-grade, soap-free formula perfect for daily cleansing of sensitive and normal skin types.",
        usage: "Apply and massage, then rinse or remove with a soft cloth.",
        mainIngredients: ["Glycerin", "Panthenol", "Niacinamide"],
        benefits: ["Hypoallergenic", "Fragrance-free", "Soap-free"],
        image: "https://www.cetaphil.com/dw/image/v2/BDFS_PRD/on/demandware.static/-/Sites-cetaphil-master-catalog/default/dw693a4055/products/Gentle_Skin_Cleanser_20oz.jpg",
        targetTypes: ["normal", "sensitive", "eczema-prone"],
        medicalDetails: {
            mechanismOfAction: "Utilizes Micellar Technology to gently remove dirt while preserving the natural skin barrier.",
            sideEffects: ["Virtually none"],
            clinicalNotes: "Dermatologist tested and clinically proven to be gentle on sensitive skin.",
            pregnancySafety: "Safe."
        }
    }
];
