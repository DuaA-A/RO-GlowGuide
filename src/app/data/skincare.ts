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
        name: "Gentle Hydrating Cleanser",
        category: "Cleanser",
        description:
            "A mild, creamy cleanser formulated to remove impurities without disrupting the skin's natural moisture barrier. Placeholder: replace with full product description.",
        usage:
            "Apply a small amount to damp skin, massage in circular motions for 60 seconds, and rinse thoroughly with lukewarm water. Use morning and evening.",
        mainIngredients: ["Ceramides NP, AP, EOP", "Hyaluronic Acid", "Glycerin", "Niacinamide"],
        benefits: ["Maintains moisture barrier", "Non-stripping formula", "Suitable for sensitive skin"],
        image: "", // PLACEHOLDER
        targetTypes: ["dry", "sensitive", "normal"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Ceramides integrate into the lipid bilayer of the stratum corneum, restoring barrier function and reducing transepidermal water loss (TEWL).",
            sideEffects: ["Placeholder: Rare hypersensitivity reactions in ceramide-sensitive individuals."],
            contraindications: ["Placeholder: Known allergy to any listed ingredient."],
            clinicalNotes:
                "Placeholder: Studies show ceramide-containing cleansers significantly reduce TEWL vs. standard surfactant cleansers in atopic dermatitis patients.",
            pregnancySafety: "Considered safe during pregnancy and lactation.",
        },
    },
    {
        id: "sk-002",
        name: "BHA Clarifying Toner",
        category: "Toner",
        description:
            "An oil-control toner formulated with Beta Hydroxy Acid to exfoliate within the pore and reduce breakouts. Placeholder: replace with full product description.",
        usage:
            "Apply to a cotton pad and sweep over clean skin, avoiding the eye area. Use 3–4 times per week in the evening.",
        mainIngredients: ["2% Salicylic Acid", "Witch Hazel", "Niacinamide", "Aloe Vera"],
        benefits: ["Unclogs pores", "Reduces blackheads", "Controls excess sebum"],
        image: "",
        targetTypes: ["oily", "combination"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Salicylic acid is lipophilic, allowing it to penetrate the sebaceous follicle and dissolve the cohesive lipids within comedones. It also has mild anti-inflammatory properties via inhibition of prostaglandin synthesis.",
            sideEffects: ["Dryness and peeling with overuse", "Photosensitivity — use SPF", "Possible irritation on sensitive skin"],
            contraindications: ["Aspirin (salicylate) allergy", "Not recommended in pregnancy", "Avoid on broken or inflamed skin"],
            clinicalNotes:
                "Placeholder: At 2%, salicylic acid is among the most evidence-backed topical actives for comedonal acne according to AAD guidelines.",
            pregnancySafety: "Avoid — salicylates may be absorbed systemically. Consult physician.",
            activeIngredientClass: "Beta Hydroxy Acid (BHA) / Keratolytic",
        },
    },
    {
        id: "sk-003",
        name: "Vitamin C Brightening Serum",
        category: "Serum",
        description:
            "A potent antioxidant serum that brightens the complexion, reduces dark spots, and defends against oxidative stress. Placeholder: replace with full product description.",
        usage:
            "After cleansing and toning, apply 3–4 drops to face and neck. Allow to absorb before applying moisturiser. Use in the morning only and always follow with SPF.",
        mainIngredients: ["15% L-Ascorbic Acid", "Ferulic Acid", "Vitamin E (Tocopherol)", "Hyaluronic Acid"],
        benefits: ["Brightens uneven tone", "Reduces hyperpigmentation", "Antioxidant defence"],
        image: "",
        targetTypes: ["normal", "dry", "combination", "oily"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: L-Ascorbic acid inhibits tyrosinase, the rate-limiting enzyme in melanin synthesis. As an antioxidant, it quenches reactive oxygen species generated by UV exposure. Ferulic acid doubles its photostability and efficacy.",
            sideEffects: ["Mild tingling on first use", "Possible oxidation discolouration of the formula over time", "Rarely: contact dermatitis"],
            contraindications: ["High sensitivity to vitamin C or ascorbic acid", "Avoid layering with retinoids without guidance"],
            clinicalNotes:
                "Placeholder: The combination of 15% ascorbic acid, 1% tocopherol, and 0.5% ferulic acid has been demonstrated to reduce UV-induced erythema and pigmentation in controlled trials.",
            pregnancySafety: "Considered safe; consult physician for high-concentration formulations.",
            activeIngredientClass: "Antioxidant / Skin Brightener",
        },
    },
    {
        id: "sk-004",
        name: "Niacinamide 10% + Zinc Serum",
        category: "Serum",
        description:
            "Regulates sebum production and visibly minimises the appearance of pores with a dual-active formula. Placeholder: replace with full product description.",
        usage:
            "Apply 2–3 drops to cleansed skin twice daily. Can be layered with other water-based serums; apply before heavier creams.",
        mainIngredients: ["10% Niacinamide (Vitamin B3)", "1% Zinc PCA", "Hyaluronic Acid"],
        benefits: ["Minimises pore appearance", "Regulates sebum", "Improves skin texture"],
        image: "",
        targetTypes: ["oily", "combination", "normal"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Niacinamide inhibits the transfer of melanosomes from melanocytes to keratinocytes, reducing pigmentation. It also strengthens the epidermal barrier via increased ceramide synthesis. Zinc PCA exerts antimicrobial and sebostatic effects.",
            sideEffects: ["Rare: flushing (more common at concentrations >20%)", "Mild purging in the first 2–3 weeks"],
            contraindications: ["Known niacin allergy"],
            clinicalNotes:
                "Placeholder: Meta-analyses support niacinamide's role in reducing sebum excretion rate, pore size visibility, and post-inflammatory hyperpigmentation.",
            pregnancySafety: "Considered safe during pregnancy and lactation.",
            activeIngredientClass: "Vitamin B3 Derivative / Sebostatic",
        },
    },
    {
        id: "sk-005",
        name: "Hyaluronic Acid Hydrating Serum",
        category: "Serum",
        description:
            "Multi-molecular weight hyaluronic acid delivers deep and surface-level hydration for visibly plumped skin. Placeholder: replace with full product description.",
        usage:
            "Apply 3–4 drops to damp skin morning and evening before moisturiser. For best results, apply to slightly damp skin to maximise humectant uptake.",
        mainIngredients: ["Multi-weight Hyaluronic Acid", "Provitamin B5 (Panthenol)", "Sodium PCA"],
        benefits: ["Intense lasting hydration", "Plumps fine lines", "Strengthens moisture barrier"],
        image: "",
        targetTypes: ["dry", "normal", "sensitive", "combination"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Hyaluronic acid is a glycosaminoglycan capable of binding up to 1000× its weight in water. Low molecular weight forms penetrate the epidermis; high MW forms create a protective film at the surface. Panthenol converts to pantothenic acid, promoting keratinocyte proliferation and barrier repair.",
            sideEffects: ["Paradoxical dryness in very low-humidity environments (draw moisture from dermis)"],
            contraindications: ["None established at cosmetic concentrations"],
            clinicalNotes: "Placeholder: Clinical trials demonstrate statistically significant improvement in skin hydration and elasticity vs. placebo after 4 weeks of use.",
            pregnancySafety: "Considered safe.",
            activeIngredientClass: "Humectant / Glycosaminoglycan",
        },
    },
    {
        id: "sk-006",
        name: "Retinol 0.5% Night Treatment",
        category: "Treatment",
        description:
            "A clinically validated retinol formula to accelerate cell turnover, reduce fine lines, and improve overall skin texture overnight. Placeholder: replace with full product description.",
        usage:
            "Apply a pea-sized amount to clean, dry skin 2–3 nights per week. Gradually increase to nightly use as tolerated. Always use SPF the following morning.",
        mainIngredients: ["0.5% Retinol", "Squalane", "Peptide Complex", "Ceramides"],
        benefits: ["Boosts cell turnover", "Reduces visible wrinkles", "Improves skin texture"],
        image: "",
        targetTypes: ["normal", "combination", "oily"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Retinol is converted to retinoic acid by skin enzymes. Retinoic acid binds nuclear retinoid receptors (RAR/RXR), upregulating genes for collagen synthesis and accelerating desquamation. It also inhibits matrix metalloproteinases (MMPs) that degrade collagen.",
            sideEffects: ["Retinoid dermatitis: dryness, peeling, redness", "Photosensitivity", "Paradoxical acne purging initial weeks"],
            contraindications: ["Pregnancy and breastfeeding (contraindicated)", "Active rosacea or eczema flare", "Concurrent use of abrasive exfoliants and acids without physician guidance"],
            clinicalNotes:
                "Placeholder: Retinol 0.5% is considered a mid-strength formulation with a well-established clinical record of efficacy for photoageing improvement over 12–24 weeks.",
            pregnancySafety: "CONTRAINDICATED. Do not use during pregnancy.",
            activeIngredientClass: "Retinoid",
        },
    },
    {
        id: "sk-007",
        name: "Rich Repair Moisturiser",
        category: "Moisturiser",
        description:
            "An ultra-nourishing barrier repair cream designed for dry, compromised, and sensitive skin. Placeholder: replace with full product description.",
        usage:
            "Apply generously to face and neck as the penultimate step in your routine (before occlusive/SPF). Use morning and evening.",
        mainIngredients: ["Ceramides NP, AP, EOP", "Shea Butter", "Colloidal Oatmeal", "Cholesterol"],
        benefits: ["Restores lipid barrier", "Deep, sustained hydration", "Soothes irritation"],
        image: "",
        targetTypes: ["dry", "sensitive"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Ceramides reconstitute the stratum corneum lipid matrix alongside cholesterol and fatty acids. Colloidal oatmeal (avenanthramides) suppresses pro-inflammatory cytokine release. Shea butter provides occlusion via triglycerides.",
            sideEffects: ["Possible milia with overuse in those prone to congestion"],
            contraindications: ["Oat sensitivity or allergy"],
            clinicalNotes: "Placeholder: Ceramide-dominant moisturisers are recommended by European dermatological guidelines as first-line maintenance therapy in atopic dermatitis.",
            pregnancySafety: "Considered safe.",
            activeIngredientClass: "Barrier Repair / Emollient",
        },
    },
    {
        id: "sk-008",
        name: "Oil-Free Gel Moisturiser",
        category: "Moisturiser",
        description:
            "A weightless, non-comedogenic gel that delivers lightweight hydration without adding shine or clogging pores. Placeholder: replace with full product description.",
        usage:
            "Apply a pea-sized amount to cleansed skin in the morning and evening. Pat gently until absorbed.",
        mainIngredients: ["Hyaluronic Acid", "Green Tea Extract (EGCG)", "Aloe Vera", "Niacinamide"],
        benefits: ["Lightweight hydration", "Non-comedogenic", "Mattifying effect"],
        image: "",
        targetTypes: ["oily", "combination", "normal"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: EGCG from green tea inhibits sebaceous gland lipogenesis via PPARγ suppression. Hyaluronic acid provides humectancy without occlusion. Formula is non-comedogenic tested.",
            sideEffects: ["None established at typical use concentrations"],
            contraindications: ["None established"],
            clinicalNotes: "Placeholder: Non-comedogenicity tested under dermatological supervision.",
            pregnancySafety: "Considered safe.",
        },
    },
    {
        id: "sk-009",
        name: "Mineral SPF 50+ Sunscreen",
        category: "Sunscreen",
        description:
            "A broad-spectrum physical sunscreen offering superior UVA/UVB protection with a transparent, skin-comfortable finish. Placeholder: replace with full product description.",
        usage:
            "Apply as the final step in your morning routine. Use a generous amount (1/4 teaspoon for face) and reapply every 2 hours when in direct sunlight.",
        mainIngredients: ["Zinc Oxide 15%", "Titanium Dioxide 5%", "Vitamin E", "Bisabolol"],
        benefits: ["Broad-spectrum UVA/UVB", "Mineral / reef-safe formula", "No white cast"],
        image: "",
        targetTypes: ["normal", "dry", "sensitive", "oily", "combination"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Zinc oxide and titanium dioxide scatter and absorb UV photons across the UV spectrum without generating reactive oxygen species (unlike organic filters). Provides both UVA1/UVA2 and UVB protection.",
            sideEffects: ["Possible slight white cast on very deep skin tones with older formulations"],
            contraindications: ["Allergy to zinc or titanium compounds (rare)"],
            clinicalNotes:
                "Placeholder: Mineral filters are the preferred option for sensitive and post-procedure skin. SPF 50+ is recommended by the AAD and ESF for daily photoprotection.",
            pregnancySafety: "Preferred sunscreen type during pregnancy and lactation.",
            activeIngredientClass: "Inorganic UV Filter / Photoprotectant",
        },
    },
    {
        id: "sk-010",
        name: "AHA/BHA Exfoliating Peel Pad",
        category: "Treatment",
        description:
            "A weekly chemical exfoliation treatment combining glycolic, lactic, and salicylic acids to resurface and renew skin texture. Placeholder: replace with full product description.",
        usage:
            "Use once weekly on cleansed, dry skin. Sweep the pad over the face and neck, avoiding the eye area. Do not rinse. Follow with moisturiser. Always use SPF the next day.",
        mainIngredients: ["10% Glycolic Acid", "2% Lactic Acid", "1% Salicylic Acid", "Aloe Vera"],
        benefits: ["Deep surface exfoliation", "Improves texture and radiance", "Reduces post-inflammatory marks"],
        image: "",
        targetTypes: ["normal", "oily", "combination"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: AHAs (glycolic, lactic) disrupt desmosomes between corneocytes, promoting desquamation of the stratum corneum. Glycolic acid has the smallest molecular weight, enabling deeper penetration. Combined with salicylic acid's lipophilic pore-clearing action, this provides a dual-layer exfoliation.",
            sideEffects: ["Stinging on application", "Erythema in first uses", "Significant photosensitivity — strict SPF required", "Purging possible"],
            contraindications: ["Active inflammatory acne (may worsen)", "Sensitive or rosacea-prone skin", "Avoid within 1 week of laser/chemical peel procedures", "Aspirin allergy (for salicylic acid)"],
            clinicalNotes:
                "Placeholder: Combined AHA/BHA formulations are used in dermatological practice to treat photoageing, post-inflammatory hyperpigmentation, and mild to moderate acne. Start weekly and progress based on tolerance.",
            pregnancySafety: "Avoid high-concentration AHA/BHA products during pregnancy. Consult physician.",
            activeIngredientClass: "Chemical Exfoliant / Alpha & Beta Hydroxy Acids",
        },
    },
];
