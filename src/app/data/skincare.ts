import type { SkinType, SkinCondition, Product, Routine } from "./types";

// ── Skin Types ────────────────────────────────────────────────────────────────
// LOCAL IMAGES: Place images in `/public/assets/images/skincare/`
// and update 'image' property with the path: `/assets/images/skincare/your-image.jpg`

export const skinTypes: SkinType[] = [
    {
        id: "normal",
        name: "Normal Skin",
        description:
            "Balanced and well-regulated, normal skin maintains an ideal equilibrium of moisture and sebum production. It feels comfortable, looks clear, and has fine, barely visible pores.",
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
        image: "",
        color: "warm-beige",
    },
    {
        id: "dry",
        name: "Dry Skin",
        description:
            "Dry skin produces insufficient sebum, leading to a tight feeling and rough texture. It often exhibits visible flaking and may even itch due to a compromised moisture barrier.",
        characteristics: [
            "Tight feeling especially after washing",
            "Rough, uneven texture",
            "Visible flaking or dull, matte surface",
            "Prone to itching and irritation",
        ],
        tips: [
            "Use humectants like Hyaluronic Acid and Glycerin",
            "Incorporate Ceramides and Shea Butter to restore barrier",
            "Apply moisturizer while skin is still damp, 2–3 times daily",
            "Panthenol helps soothe and hydrate deeply",
        ],
        image: "https://share.google/scNs02sVnhFAPpoWQ",
        color: "blush",
    },
    {
        id: "oily",
        name: "Oily Skin",
        description:
            "Characterized by overactive sebaceous glands, oily skin is persistently shiny and prone to enlarged pores and acne. It requires oil-regulation rather than just stripping.",
        characteristics: [
            "Persistent shine or greasy appearance",
            "Enlarged, clearly visible pores",
            "Prone to blackheads and inflammatory acne",
            "Makeup tends to wear off or slide quickly",
        ],
        tips: [
            "Niacinamide helps control oil and redness",
            "Use lightweight Hyaluronic Acid for hydration without grease",
            "Opt for oil-free, non-comedogenic formulas",
            "Wash face twice daily with targeted gel cleansers",
        ],
        image: "https://www.raoderm.com/how-to-fix-an-oily-face/",
        color: "sand",
    },
    {
        id: "combination",
        name: "Combination Skin",
        description:
            "Exhibits differing characteristics across zones—typically an oily T-zone (forehead, nose, chin) and normal to dry cheeks. It requires zoning techniques in product application.",
        characteristics: [
            "Oily forehead, nose, and chin (T-zone)",
            "Dry or normal cheeks and temples",
            "Varying pore sizes across different facial zones",
            "Periodic breakouts mostly on the T-zone",
        ],
        tips: [
            "Use lightweight gel moisturizers across the whole face",
            "Spot-treat dry areas with richer creams if needed",
            "Niacinamide and Hyaluronic Acid are ideal core ingredients",
            "Balance the T-zone with gentle exfoliating toners",
        ],
        image: "https://www.goaesthetic.at/wp-content/uploads/2024/06/Mischhaut-2.jpg",
        color: "taupe",
    },
    {
        id: "sensitive",
        name: "Sensitive Skin",
        description:
            "Sensitive skin has a weakened barrier that reacts readily to triggers with redness and burning. It requires minimal, soothing formulations without fragrance or alcohol.",
        characteristics: [
            "Frequent redness and reactive flushing",
            "Burning, stinging, or itching sensations",
            "Reacts easily to products, fragrance, or weather",
            "Thin or transparent-looking skin with visible capillaries",
        ],
        tips: [
            "Use Panthenol and Ceramides to strengthen the barrier",
            "Thermal spring water is ideal for instant calming",
            "Avoid fragrance, alcohol, and harsh exfoliating acids",
            "Madecassoside helps repair and soothe reactive zones",
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
            "Characterized by whiteheads and blackheads without significant redness. This occurs when pores are clogged by sebum and dead skin cells but haven't become infected by bacteria.",
        causes: [
            "Excess sebum production",
            "Accumulation of dead skin cells (clogged pores)",
            "Hormonal changes",
            "Oily or occlusive cosmetics",
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
            "Involves red, swollen pimples (papules) and pus-filled lesions (pustules). This stage involves bacterial growth (Cutibacterium acnes) and a visible immune inflammatory response.",
        causes: [
            "Bacterial growth (C. acnes)",
            "Immune-mediated inflammation",
            "Poor skincare routine / lack of cleansing",
            "High glycemic diet and stress",
        ],
        image: "https://share.google/u1V4SOCJpZN9gJBID",
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
        image: "https://share.google/IeRh0181XqOb3qqqA",
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
        image: "https://share.google/GqRzH8zZmAxJdUU3F",
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
        name: "Oily & Acne-Prone Recovery Routine",
        description:
            "A clinical routine designed to clear acne, control excess oil, and maintain a healthy skin barrier without adding shine.",
        targetType: "oily",
        steps: [
            { step: 1, name: "Cleanser", description: "Wash twice daily with a targeted gel like Effaclar Gel or Shaan Gel. Avoid harsh soaps.", timing: "AM & PM" },
            { step: 2, name: "Active Treatment", description: "Apply a treatment with Salicylic Acid or Adapalene to regulate turnover and kill bacteria.", timing: "PM (Start slowly)" },
            { step: 3, name: "Moisturiser", description: "Use oil-free hydration like Effaclar H or CeraVe Lotion to prevent dehydration markings.", timing: "AM & PM" },
            { step: 4, name: "Sunscreen", description: "Essential protection to prevent post-inflammatory hyperpigmentation (acne marks).", timing: "AM" },
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
    {
        id: "acne-routine",
        name: "Acne Management Routine",
        description: "A clinical routine focusing on clearing inflammation, killing acne bacteria, and restoring the barrier.",
        targetType: "acne",
        steps: [
            { step: 1, name: "Salicylic Cleanser", description: "Use a gel cleanser with BHA to penetrate pores.", timing: "AM & PM" },
            { step: 2, name: "Azelaic Acid", description: "Apply to inflamed areas to reduce redness and bacteria.", timing: "AM" },
            { step: 3, name: "Retinoid / Adapalene", description: "Primary treatment to regulate cell turnover.", timing: "PM" },
            { step: 4, name: "Oil-Free Moisturiser", description: "Non-comedogenic hydration to support the barrier.", timing: "AM & PM" },
        ],
        image: "",
    },
    {
        id: "rosacea-routine",
        name: "Rosacea Calming Routine",
        description: "A specialized routine to reduce redness, strengthen capillaries, and soothe hypersensitive skin.",
        targetType: "rosacea",
        steps: [
            { step: 1, name: "Gentle Milky Cleanser", description: "Avoid foaming agents that can trigger flushing.", timing: "AM & PM" },
            { step: 2, name: "Soothing Toner", description: "Thermal water or rose water to cool the skin.", timing: "As needed" },
            { step: 3, name: "Azelaic Acid (10-15%)", description: "Dermatologist gold-standard for rosacea redness.", timing: "PM" },
            { step: 4, name: "Barrier Cream", description: "Rich in ceramides and panthenol to shield skin.", timing: "AM & PM" },
        ],
        image: "",
    },
    {
        id: "eczema-routine",
        name: "Eczema Flare-Up Routine",
        description: "A high-lipid routine to restore the skin's moisture barrier and stop the itch-scratch cycle.",
        targetType: "eczema",
        steps: [
            { step: 1, name: "Soap-Free Wash", description: "Use ultra-gentle, lipid-replenishing washes.", timing: "Daily" },
            { step: 2, name: "Healing Balm", description: "Apply thick, oily balms (AP+M) to damp skin.", timing: "As needed" },
            { step: 3, name: "Anti-Itch Serum", description: "Calming agents like Niacinamide or Oats.", timing: "PM" },
        ],
        image: "",
    },
    {
        id: "hyperpigmentation-routine",
        name: "Pigment Correction Routine",
        description: "A brightening routine targeting dark spots, melasma, and post-acne marks (PIH).",
        targetType: "hyperpigmentation",
        steps: [
            { step: 1, name: "Exfoliating Cleanser", description: "Alpha-hydroxy acids to boost cell turnover.", timing: "PM (3x weekly)" },
            { step: 2, name: "Vitamin C Serum", description: "Antioxidant to brighten and prevent UV damage.", timing: "AM" },
            { step: 3, name: "Tranexamic / Kojic Acid", description: "Inhibits melanin production at the source.", timing: "PM" },
            { step: 4, name: "Broad Spectrum SPF", description: "Crucial! Pigment will return without protection.", timing: "AM (Every 2h)" },
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
        image: "https://elegantstoreeg.com/cdn/shop/files/la-roche-posay-effaclar-purifying-foaming-gel-400ml-1.jpg?v=1701198592",
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
        image: "https://elegantstoreeg.com/cdn/shop/files/shaan-facial-cleanser-gel-200ml-1.jpg?v=1701198592",
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
        image: "https://elegantstoreeg.com/cdn/shop/files/cerave-foaming-facial-cleanser-473ml-1.jpg?v=1701198592",
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
        image: "https://elegantstoreeg.com/cdn/shop/files/la-roche-posay-effaclar-duo-40ml-1.jpg?v=1701198592",
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
        benefits: ["Moisturses for 24 hours", "MVE Technology for controlled release", "Non-comedogenic"],
        image: "https://elegantstoreeg.com/cdn/shop/files/cerave-daily-moisturizing-lotion-236ml-1.jpg?v=1701198592",
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
        image: "",
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
        image: "",
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
        image: "",
        targetTypes: ["normal", "sensitive", "eczema-prone"],
        medicalDetails: {
            mechanismOfAction: "Utilizes Micellar Technology to gently remove dirt while preserving the natural skin barrier.",
            sideEffects: ["Virtually none"],
            clinicalNotes: "Dermatologist tested and clinically proven to be gentle on sensitive skin.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-009",
        name: "Dermactive Acti-Clean Cleanser",
        brand: "Dermactive",
        category: "Cleanser",
        description: "Purifying cleanser specifically designed for oily and acne-prone skin to remove impurities and balance sebum.",
        usage: "Apply to wet skin, massage gently, and rinse thoroughly. Use morning and night.",
        mainIngredients: ["Salicylic Acid", "Zinc"],
        benefits: ["Deeply cleanses", "Removes excess oil", "Reduces breakouts"],
        image: "",
        targetTypes: ["oily", "acne-prone"],
        medicalDetails: {
            mechanismOfAction: "Salicylic acid exfoliates within the pores while zinc regulates oil production.",
            pregnancySafety: "Consult physician."
        }
    },
    {
        id: "sk-010",
        name: "Skinoren Cream",
        brand: "Leo Pharma",
        category: "Treatment",
        description: "Topical treatment for acne and rosacea, also effective in reducing post-inflammatory hyperpigmentation.",
        usage: "Apply a thin layer to affected areas twice daily after cleansing.",
        mainIngredients: ["Azelaic Acid (20%)"],
        benefits: ["Antibacterial", "Anti-inflammatory", "Brightens marks"],
        image: "https://elegantstoreeg.com/cdn/shop/files/skinoren-cream-30gm-1.jpg?v=1701198592",
        targetTypes: ["acne-prone", "hyperpigmentation", "sensitive"],
        medicalDetails: {
            mechanismOfAction: "Inhibits the growth of acne bacteria and reduces the production of keratin which blocks pores.",
            sideEffects: ["Skin irritation", "burning", "itching"],
            clinicalNotes: "Very effective for papulopustular rosacea as well.",
            pregnancySafety: "Safe (Category B)."
        }
    },
    {
        id: "sk-011",
        name: "Benzac AC Gel",
        brand: "Galderma",
        category: "Treatment",
        description: "Powerful antibacterial gel designed to treat inflammatory acne by killing surface bacteria.",
        usage: "Apply once or twice daily to affected areas. Start with a test patch.",
        mainIngredients: ["Benzoyl Peroxide"],
        benefits: ["Kills 94% of acne bacteria", "Unclogs pores", "Reduces inflammation"],
        image: "https://elegantstoreeg.com/cdn/shop/files/benzac-ac-5-gel-60gm-1.jpg?v=1701198547",
        targetTypes: ["acne-prone"],
        medicalDetails: {
            mechanismOfAction: "Provides oxygen to the pores which kills the anaerobic acne bacteria.",
            sideEffects: ["Dryness", "peeling", "may bleach fabrics"],
            pregnancySafety: "Safe if used sparingly; consult physician."
        }
    },
    {
        id: "sk-012",
        name: "Effaclar H Iso-Biome",
        brand: "La Roche-Posay",
        category: "Moisturiser",
        description: "Ultra-soothing and hydrating moisturizer for oily skin that has been dried out by acne treatments.",
        usage: "Apply morning and evening after cleansing.",
        mainIngredients: ["MP-Lipids", "Niacinamide", "Orellana Extract"],
        benefits: ["Soothes skin discomfort", "Restores moisture barrier", "Reduces redness"],
        image: "https://elegantstoreeg.com/cdn/shop/files/la-roche-posay-effaclar-h-iso-biome-40ml-1.jpg?v=1701198592",
        targetTypes: ["oily", "acne-prone", "sensitive"],
        medicalDetails: {
            mechanismOfAction: "MP-Lipids help rebuild the skin's protective barrier while Niacinamide calms inflammation.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-013",
        name: "Lipikar Baume AP+M",
        brand: "La Roche-Posay",
        category: "Moisturiser",
        description: "Triple-action lipid-replenishing balm that immediately soothes eczema-prone skin.",
        usage: "Apply once daily to very dry and irritated skin on the face and/or body.",
        mainIngredients: ["Aqua Posae Filiformis", "Shea Butter", "Niacinamide"],
        benefits: ["Anti-scratching", "Anti-flare up", "Restores microbiome"],
        image: "https://elegantstoreeg.com/cdn/shop/files/la-roche-posay-lipikar-baume-ap-m-400ml-1.jpg?v=1701198592",
        targetTypes: ["dry", "sensitive", "eczema"],
        medicalDetails: {
            mechanismOfAction: "Rebalances the skin microbiome and restores the barrier to prevent allergen penetration.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-014",
        name: "Atoderm Cream",
        brand: "Bioderma",
        category: "Moisturiser",
        description: "Ultra-nourishing daily cream for sensitive dry skin that provides long-lasting hydration.",
        usage: "Apply once or twice daily to skin after cleansing.",
        mainIngredients: ["Skin Protect Complex", "Glycerin"],
        benefits: ["Immediately hydrates", "Strengthens skin barrier", "Softens skin"],
        image: "https://www.bioderma.com/-/media/project/naos/bioderma/na/products/atoderm/cream/atoderm-cream-500ml-white-bg.png",
        targetTypes: ["dry", "sensitive"],
        medicalDetails: {
            mechanismOfAction: "Stimulates the production of hyaluronic acid and ceramides to naturally moisturize the skin.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-015",
        name: "Effaclar Mat",
        brand: "La Roche-Posay",
        category: "Moisturiser",
        description: "Oil-free mattifying moisturizer that targets excess sebum to mattify skin and refine pores.",
        usage: "Apply morning and/or evening to the whole face.",
        mainIngredients: ["Sebulyse", "Zinc Pidolate"],
        benefits: ["Anti-shine", "Anti-enlarged pores", "Excellent makeup base"],
        image: "https://www.laroche-posay.me/getmedia/c1f8e3a2-2c3b-4c2d-9b5e-0b9f0b9f0b9f/effaclar-mat-40ml.aspx",
        targetTypes: ["oily", "combination"],
        medicalDetails: {
            mechanismOfAction: "Sebulyse targets excess sebum to mattify at the source and tighten pores.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-016",
        name: "CeraVe Resurfacing Retinol Serum",
        brand: "CeraVe",
        category: "Treatment",
        description: "Post-acne marks and skin texture treatment. Developed with dermatologists, this formula helps reduce the appearance of post-acne marks.",
        usage: "Apply evenly to face daily. Avoid contact with eyes and lips. Use sunscreen during the day.",
        mainIngredients: ["Encapsulated Retinol", "Licorice Root Extract", "Ceramides"],
        benefits: ["Reduces post-acne marks", "Refines skin texture", "Restores skin barrier"],
        image: "https://elegantstoreeg.com/cdn/shop/files/cerave-resurfacing-retinol-serum-30ml-1.jpg?v=1701198592",
        targetTypes: ["acne-prone", "oily"],
        medicalDetails: {
            mechanismOfAction: "Encapsulated retinol helps resurface skin while Licorice root extract brightens.",
            pregnancySafety: "Avoid."
        }
    },
    {
        id: "sk-017",
        name: "Infinity Clear Skin Cream",
        brand: "Infinity",
        category: "Moisturiser",
        description: "Targeted moisturizer for oily and acne-prone skin, providing deep hydration without clogging pores.",
        usage: "Apply twice daily to clean skin.",
        mainIngredients: ["Salicylic Acid", "Tea Tree Oil", "Niacinamide"],
        benefits: ["Non-comedogenic", "Oil-control", "Soothes inflammation"],
        image: "https://elegantstoreeg.com/cdn/shop/files/infinity-clear-skin-cream-60ml-1.jpg?v=1701198592",
        targetTypes: ["oily", "acne-prone"],
        medicalDetails: {
            mechanismOfAction: "Combination of anti-inflammatory and oil-regulating ingredients to balance problematic skin.",
            pregnancySafety: "Consult physician."
        }
    },
    {
        id: "sk-018",
        name: "CeraVe Moisturizing Cream",
        brand: "CeraVe",
        category: "Moisturiser",
        description: "A rich, non-greasy, fast-absorbing moisturizer for normal to dry skin on the face and body.",
        usage: "Apply liberally as often as needed, or as directed by a physician.",
        mainIngredients: ["Ceramides (1, 3, 6-II)", "Hyaluronic Acid"],
        benefits: ["24-hour hydration", "Non-comedogenic", "Fragrance-free"],
        image: "https://elegantstoreeg.com/cdn/shop/files/cerave-moisturizing-cream-454gm-1.jpg?v=1701198592",
        targetTypes: ["dry", "sensitive", "normal"],
        medicalDetails: {
            mechanismOfAction: "MVE Delivery Technology provides a steady stream of nourishment throughout the day and night.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-019",
        name: "Eva Skin Clinic Moisturizing Cream",
        brand: "Eva Cosmetics",
        category: "Moisturiser",
        description: "Hydrating cream designed to nourish dry skin and improve texture.",
        usage: "Apply morning and evening.",
        mainIngredients: ["Hyaluronic Acid", "Ceramides"],
        benefits: ["Rich hydration", "Softens skin", "Budget-friendly"],
        image: "",
        targetTypes: ["dry"],
        medicalDetails: {
            mechanismOfAction: "Deep hydration through multi-weight hyaluronic acid.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-020",
        name: "CeraVe PM Facial Moisturizing Lotion",
        brand: "CeraVe",
        category: "Moisturiser",
        description: "Ultra-lightweight night cream that hydrates throughout the night and helps restore the protective skin barrier.",
        usage: "Apply liberally to the face and neck at night, or as directed by a physician.",
        mainIngredients: ["Ceramides", "Hyaluronic Acid", "Niacinamide"],
        benefits: ["Overnight hydration", "Soothes skin", "Oil-free"],
        image: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/products-v3/pm-facial-moisturizing-lotion/cerave_pm-facial-moisturizing-lotion_3oz_front-v2.png",
        targetTypes: ["oily", "normal", "combination"],
        medicalDetails: {
            mechanismOfAction: "Niacinamide helps calm skin while ceramides restore the barrier overnight.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-021",
        name: "Hydraphase Light",
        brand: "La Roche-Posay",
        category: "Moisturiser",
        description: "Intense 24-hour rehydrating skincare for dehydrated combination skin.",
        usage: "Apply every morning and/or evening to the face and neck.",
        mainIngredients: ["Fragmented Hyaluronic Acid", "Thermal Spring Water"],
        benefits: ["Long-lasting hydration", "Lightweight texture", "Refreshing"],
        image: "https://www.laroche-posay.me/getmedia/e1f8e3a2-2c3b-4c2d-9b5e-0b9f0b9f0b9f/hydraphase-ha-light-50ml.aspx",
        targetTypes: ["combination", "normal"],
        medicalDetails: {
            mechanismOfAction: "Reinforces cell cohesion to lock water into the skin for long-lasting hydration.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-022",
        name: "Infinity Hydrating Gel",
        brand: "Infinity",
        category: "Moisturiser",
        description: "Refreshing gel moisturizer for combination and oily skin types.",
        usage: "Apply to clean skin twice daily.",
        mainIngredients: ["Hyaluronic Acid", "Aloe Vera"],
        benefits: ["Instant absorption", "Non-greasy", "Soothes skin"],
        image: "",
        targetTypes: ["combination", "oily"],
        medicalDetails: {
            mechanismOfAction: "Provides immediate cooling hydration without adding oil.",
            pregnancySafety: "Safe."
        }
    }
];
