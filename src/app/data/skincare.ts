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
        image: "https://sentelabs.com/cdn/shop/articles/how-to-restore-a-healthy-skin-barrier-817769.jpg?",
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
        image: "https://www.skinspireca.com/wp-content/uploads/2024/02/Skinspire-Skin-Laser-Clinic-1-1.jpg",
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
        image: "https://cdn.prod.website-files.com/61c44817190504d47e91cbc4/6756b87be852cd4c82c14421_Hydration%20tips%20for%20oily%20skin_Cover.webp",
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
        image: "https://cdn.shopify.com/s/files/1/0473/8904/8992/files/Combination_skin_0f9bb743-5e6f-4501-b706-34339e781098_480x480.jpg",
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
        image: "https://yourbasicprinciple.com/cdn/shop/articles/Guide_to_Rosacea.png",
        color: "blush",
    },

];

// ── Skin Conditions ──────────────────────────────────────────────────────────
// PLACEHOLDER: Replace with clinical details, images, and expand as needed

export const skinConditions: SkinCondition[] = [
    {
        id: "acne-prone",
        name: "Acne-Prone Skin",
        type: "Condition-Specific",
        severity: "Varies",
        description:
            "Skin that is highly susceptible to breakouts, often due to a combination of overactive oil glands, clogged pores, and a sensitive barrier. It requires specialized, non-comedogenic care.",
        causes: [
            "Excessive sebum production",
            "Clogged pores from dead skin cells",
            "Bacterial activity",
            "Genetic predisposition",
        ],
        image: "https://porcelainskin.com/cdn/shop/articles/Close-up_of_the_skin_of_a_young_girl_with_acne_problem.jpg?v=1731921280",
        color: "sand",
    },
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
        image: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/comedonal-acne",
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
        image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/04/GettyImages-552992761_header-1024x575.jpg",
        color: "taupe",
    },
    {
        id: "cystic",
        name: "Cystic Acne",
        type: "Nodular / Cystic",
        severity: "Severe",
        description:
            "Deep, painful, fluid-filled nodules or cysts that form when blocked hair follicles rupture deep within the skin, triggering a severe inflammatory response. Cystic acne carries the highest risk of permanent scarring and almost always requires prescription treatment such as oral antibiotics or isotretinoin.",
        causes: [
            "Deep follicular rupture",
            "Severe inflammatory cascade",
            "Genetic predisposition to scarring",
            "Significant hormonal imbalances",
        ],
        image: "https://www.drdennisgross.com/on/demandware.static/-/Sites-ddg_us-Library/default/dwb2aec126/blogs/skincare-blogs/What_is_Cystic_Acne_How_to_Treat_It.png",
        color: "mink",
    },
    {
        id: "hormonal",
        name: "Hormonal Acne",
        type: "Cyclic / Hormonal",
        severity: "Moderate",
        description:
            "Breakouts concentrated around the jawline and chin that follow a predictable monthly cycle tied to hormonal fluctuations. Rising androgen levels stimulate sebaceous glands to overproduce oil, increasing the likelihood of clogged pores and inflammatory lesions around menstruation or times of high stress.",
        causes: [
            "Fluctuations in androgen levels",
            "Menstrual cycle and PCOS",
            "Cortisol elevation from stress",
            "Certain medications affecting hormones",
        ],
        image: "https://doralhw.org/wp-content/uploads/2023/04/shutterstock_2423537765.jpg",
        color: "blush",
    },
    {
        id: "eczema",
        name: "Atopic Dermatitis (Eczema)",
        type: "Inflammatory",
        severity: "Moderate",
        description: "A chronic inflammatory skin condition causing dry, intense itching, redness, and occasionally cracks or small blisters. Common in both children and adults.",
        causes: [
            "Genetic predisposition (family history of allergies/asthma)",
            "Weakened or compromised skin barrier",
            "Immune system overreaction",
            "Triggers: harsh soaps, stress, cold weather, wool"
        ],
        tips: [
            "Use only mild, soap-free cleansers",
            "Apply moisturizers 2–3 times daily",
            "Moisturize immediately after showering to lock in hydration",
            "Use lukewarm water instead of hot water",
            "Wear cotton clothing and manage stress"
        ],
        image: "https://www.hopedermatology.com.au/wp-content/uploads/2022/01/3eee.jpg",
        color: "blush"
    },
];

// ── Skincare Routines ─────────────────────────────────────────────────────────
// PLACEHOLDER: Replace step descriptions and images with real content

export const skincareRoutines: Routine[] = [
    {
        id: "normal-routine",
        name: "Normal Skin Daily Routine",
        description:
            "A balanced, maintenance-focused daily routine for normal skin. The goal is to preserve the skin's natural equilibrium — keeping hydration stable, shielding against UV and environmental damage, and maintaining a strong barrier through consistent, lightweight care.",
        targetType: "normal",
        image: "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg",
        steps: [
            { step: 1, name: "Cleanser", description: "Use a gentle, pH-balanced foaming or gel cleanser to remove overnight sebum and impurities without disrupting the skin barrier. Avoid harsh sulfates.", timing: "AM & PM" },
            { step: 2, name: "Toner", description: "Apply a hydrating or balancing toner — look for niacinamide or panthenol — to refresh skin and prime it for better absorption of subsequent actives.", timing: "AM & PM" },
            { step: 3, name: "Serum", description: "Layer a vitamin C (ascorbic acid 10–15%) antioxidant serum in the morning to neutralise free radicals, brighten tone, and protect against photoageing.", timing: "AM" },
            { step: 4, name: "Moisturiser", description: "Apply a lightweight lotion or fluid moisturiser formulated with hyaluronic acid and glycerin to lock in hydration without feeling heavy or greasy.", timing: "AM & PM" },
            { step: 5, name: "Sunscreen", description: "Finish with a broad-spectrum SPF 50 sunscreen (UVA + UVB). This is the single most important anti-ageing and barrier-preservation step in any daytime routine.", timing: "AM" },
        ],
    },
    {
        id: "dry-routine",
        name: "Dry Skin Hydration Routine",
        description:
            "An intense moisture-restoring routine for dry and dehydrated skin. Layering humectants, emollients, and occlusives rebuilds the compromised lipid barrier, soothes tightness, and restores a supple, comfortable complexion.",
        targetType: "dry",
        image: "https://kotilskinscience.com/wp-content/uploads/2023/12/dehydrated.webp",
        steps: [
            { step: 1, name: "Oil Cleanser", description: "Begin the PM routine with a balm or oil cleanser to dissolve SPF, makeup, and excess sebum. The lipid base prevents any stripping of natural moisture.", timing: "PM" },
            { step: 2, name: "Cream Cleanser", description: "Follow with a creamy, non-foaming cleanser in the morning (and as a second cleanse at night) to gently remove impurities while preserving the skin's moisture film.", timing: "AM & PM" },
            { step: 3, name: "Hydrating Toner", description: "Saturate the skin with a humectant-rich essence containing glycerin and hyaluronic acid. Apply to damp skin to maximise water uptake before it evaporates.", timing: "AM & PM" },
            { step: 4, name: "Hyaluronic Acid Serum", description: "Apply a multi-weight hyaluronic acid serum while skin is still slightly damp. Multiple molecular weights attract moisture from the environment and deeper skin layers simultaneously.", timing: "AM & PM" },
            { step: 5, name: "Rich Moisturiser", description: "Seal all hydration in with a ceramide-rich cream. Ceramides replenish the intercellular lipids that are deficient in dry skin, reducing trans-epidermal water loss (TEWL).", timing: "AM & PM" },
            { step: 6, name: "Face Oil / Occlusive", description: "At night, press a few drops of squalane or apply a thin layer of shea butter as an occlusive final step. This creates a breathable seal that dramatically reduces overnight TEWL.", timing: "PM" },
            { step: 7, name: "Sunscreen", description: "Use a hydrating SPF 50 mineral or hybrid sunscreen in the morning. Opt for formulas with added humectants (hyaluronic acid, aloe) to suit dry skin textures.", timing: "AM" },
        ],
    },
    {
        id: "oily-routine",
        name: "Oily Skin Control Routine",
        description:
            "A clinical routine designed to control excess oil and maintain a healthy skin barrier without adding shine.",
        targetType: "oily",
        image: "https://cdn.shopify.com/s/files/1/0247/1939/2873/files/OilySkin-BeforeAfter_600x600.png",
        steps: [
            { step: 1, name: "Cleansing", description: "Use a gentle gel cleanser twice daily to remove excess oil without stripping the skin.", timing: "AM & PM" },
            { step: 2, name: "Mist", description: "A refreshing thermal water mist to soothe and hydrate.", timing: "As needed" },
            { step: 3, name: "Moisturiser", description: "Use oil-free hydration like Effaclar Mat or Shaan Gel.", timing: "AM & PM" },
            { step: 4, name: "Sunscreen", description: "Non-comedogenic SPF is essential.", timing: "AM" },
        ],
    },
    {
        id: "acne-prone-routine",
        name: "Oily & Acne-Prone Recovery Routine",
        description:
            "A specialized recovery routine for skin that is both oily and prone to breakouts, focusing on clearing pores and healing the barrier.",
        targetType: "acne-prone",
        image: "https://www.neogenesispro.com.au/wp-content/uploads/2024/05/Acne-AP-BA-Left.jpg",
        steps: [
            { step: 1, name: "Double Cleansing", description: "Use Micellar water followed by a targeted gel like Effaclar Gel to deeply purify.", timing: "PM" },
            { step: 2, name: "Morning Cleansing", description: "Wash with Effaclar Gel to remove overnight sebum.", timing: "AM" },
            { step: 3, name: "Active Treatment", description: "Apply Effaclar Duo(+) to reduce pimples and marks.", timing: "AM & PM" },
            { step: 4, name: "Hydrating Moisturiser", description: "Use Effaclar H Iso-Biome to prevent dehydration from treatments.", timing: "AM & PM" },
            { step: 5, name: "Sunscreen", description: "Essential protection to prevent post-inflammatory marks.", timing: "AM" },
        ],
    },
    {
        id: "sensitive-routine",
        name: "Sensitive Skin Calming Routine",
        description:
            "A minimal, barrier-supporting routine for reactive and sensitive skin, focusing on calming redness and strengthening the skin's natural defenses.",
        targetType: "sensitive",
        image: "https://depology.com/cdn/shop/articles/unnamed_5fb3bf34-e555-4d20-9407-ea0216c3935d.jpg?v=1764753351&width=2048",

        steps: [
            { step: 1, name: "Micellar / Gentle Cleanser", description: "Use a fragrance-free, pH-balanced cleanser like Cetaphil Gentle Skin Cleanser.", timing: "AM & PM" },
            { step: 2, name: "Centella Serum", description: "Apply a calming serum to reduce redness and irritation.", timing: "AM & PM" },
            { step: 3, name: "Barrier Moisturiser", description: "Use a ceramide and panthenol-rich moisturiser like Toleriane Sensitive.", timing: "AM & PM" },
            { step: 4, name: "Mineral Sunscreen", description: "Protect with a zinc oxide or titanium dioxide SPF to avoid Chemical irritation.", timing: "AM" },
        ],
    },
    {
        id: "acne-routine",
        name: "Acne Management Routine",
        description: "A clinical routine focusing on clearing inflammation, killing acne bacteria, and restoring the barrier.",
        targetType: "inflammatory",
        image: "https://cdn.prod.website-files.com/675ac5b5763bca154f1db7b9/675ac5b5763bca154f1dbc9c_conditionacne.jpg",
        steps: [
            { step: 1, name: "Salicylic Cleanser", description: "Use a gel cleanser with BHA to penetrate pores.", timing: "AM & PM" },
            { step: 2, name: "Azelaic Acid", description: "Apply to inflamed areas to reduce redness and bacteria.", timing: "AM" },
            { step: 3, name: "Retinoid / Adapalene", description: "Primary treatment to regulate cell turnover.", timing: "PM" },
            { step: 4, name: "Oil-Free Moisturiser", description: "Non-comedogenic hydration to support the barrier.", timing: "AM & PM" },
        ],
    },
    // {
    //     id: "rosacea-routine",
    //     name: "Rosacea Calming Routine",
    //     description: "A specialized routine to reduce redness, strengthen capillaries, and soothe hypersensitive skin.",
    //     targetType: "rosacea",
    //     steps: [
    //         { step: 1, name: "Gentle Milky Cleanser", description: "Avoid foaming agents that can trigger flushing.", timing: "AM & PM" },
    //         { step: 2, name: "Soothing Toner", description: "Thermal water or rose water to cool the skin.", timing: "As needed" },
    //         { step: 3, name: "Azelaic Acid (10-15%)", description: "Dermatologist gold-standard for rosacea redness.", timing: "PM" },
    //         { step: 4, name: "Barrier Cream", description: "Rich in ceramides and panthenol to shield skin.", timing: "AM & PM" },
    //     ],
    // },
    {
        id: "eczema-routine",
        name: "Eczema Flare-Up Routine",
        description: "A high-lipid, barrier-restoring routine to calm inflammation and stop the itch-scratch cycle.",
        targetType: "eczema",
        image: "https://www.hopedermatology.com.au/wp-content/uploads/2022/01/3eee.jpg",
        steps: [
            { step: 1, name: "Gentle Soap-Free Cleaning", description: "Use ultra-gentle, lipid-replenishing soap-free washes like Atoderm Gel Moussant.", timing: "Daily" },
            { step: 2, name: "Intense Moisturizing", description: "Apply rich emollient creams (e.g., Lipikar Baume AP+M or Atoderm Cream) 2-3 times daily.", timing: "AM & PM" },
            { step: 3, name: "Post-Shower Lock", description: "Critical application of moisturizer immediately after lukewarm showering.", timing: "After Shower" },
            { step: 4, name: "Flare-Up Management", description: "During active flares, use mild topical corticosteroids (e.g., Hydrocortisone) if needed.", timing: "Short-term/As needed" },
        ],
    },
    {
        id: "hyperpigmentation-routine",
        name: "Pigment Correction Routine",
        description: "A brightening routine targeting dark spots, melasma, and post-acne marks (PIH).",
        targetType: "hyperpigmentation",
        image: "https://columbiaskinclinic.com/wp-content/uploads/2020/11/the-truth-about-hyperpigmentation-.jpg",
        steps: [
            { step: 1, name: "Exfoliating Cleanser", description: "Alpha-hydroxy acids to boost cell turnover.", timing: "PM (3x weekly)" },
            { step: 2, name: "Vitamin C Serum", description: "Antioxidant to brighten and prevent UV damage.", timing: "AM" },
            { step: 3, name: "Tranexamic / Kojic Acid", description: "Inhibits melanin production at the source.", timing: "PM" },
            { step: 4, name: "Broad Spectrum SPF", description: "Crucial! Pigment will return without protection.", timing: "AM (Every 2h)" },
        ],
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
        image: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//l/a/la-roche-posay-effaclar-m-purifying-foaming-gel-400ml_1.png",
        targetTypes: ["oily", "sensitive", "combination"],
        concerns: ["comedonal", "inflammatory", "cystic", "acne-prone"],
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
        image: "https://eparkville.com/cdn/shop/files/Untitled_design_671a351c-e97f-401d-a46a-f1d8525e1dd7_grande.png?v=1731922564",
        targetTypes: ["dry", "normal", "sensitive"],
        concerns: ["eczema"],
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
        image: "https://i0.wp.com/ashrybeauty.com/wp-content/uploads/2025/03/Product-Size-41.png?fit=2000%2C2000&ssl=1",
        targetTypes: ["oily", "normal"],
        concerns: ["comedonal", "inflammatory", "acne-prone"],
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThNj8dydbKB0K9Lt8GJHNlX6MMfLc3TBeaMQ&s",
        targetTypes: ["oily", "combination"],
        concerns: ["acne-prone", "inflammatory"],
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
        image: "https://static.beautytocare.com/media/catalog/product/c/e/cerave-moisturizing-lotion-dry-to-very-dry-skin-1l_2.jpg",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47x7pvHunUKR6smPI2AfIY3EmuAXNH7KRaw&s",
        targetTypes: ["eczema", "sensitive", "atopic-dermatitis", "dry"],
        concerns: ["eczema"],
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
        image: "https://m.media-amazon.com/images/I/71R7zJGeXwL.jpg",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdA76_4vN61jBRW2xkl5vqwuWJsoRn97-0EA&s",
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
        image: "https://derm-active.com/wp-content/uploads/2023/06/ACTI-Clear-Gentle-Cleansing-Gel.jpg",
        targetTypes: ["oily"],
        concerns: ["acne-prone"],
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
        image: "https://anwar.store/cdn/shop/files/121212.webp?v=1726419813",
        targetTypes: ["hyperpigmentation", "sensitive"],
        concerns: ["inflammatory", "hyperpigmentation", "acne-prone"],
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
        image: "https://image-cdn.ubuy.com/benzac-ac-2-5-gel-acne-care-30-gm/400_400_100/65a160db49c42c764f3f4aaa.jpg",
        targetTypes: ["oily"],
        concerns: ["inflammatory", "acne-prone"],
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8OvYlDpTnL7xlvg2pkOHn5p13e-KatqPAg&s",
        targetTypes: ["oily", "sensitive"],
        concerns: ["inflammatory", "cystic", "acne-prone"],
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
        image: "https://www.laroche-posay.me/-/media/project/loreal/brand-sites/lrp/apac/mena/products/lipikar/lipikar-baume-ap-plus-m/larocheposaybodycarelipikarbaumeapl400mllipidreplenishingbalmantiirritation3337872418570front.png",
        targetTypes: ["dry", "sensitive", "eczema"],
        concerns: ["eczema"],
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
        image: "https://m.media-amazon.com/images/I/517GU3Ye4BL.jpg",
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
        image: "https://images-na.ssl-images-amazon.com/images/I/31J0yD3a9tL._SL500_._AC_SL500_.jpg",
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
        image: "https://m.media-amazon.com/images/I/51XJWA9Cy6L._AC_UF894,1000_QL80_.jpg",
        targetTypes: ["oily"],
        concerns: ["inflammatory", "hyperpigmentation", "acne-prone"],
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
        image: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/8909131/1.jpg?7047",
        targetTypes: ["oily"],
        concerns: ["acne-prone"],
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BSsHMJ8BGgQY-30lzzUsm1MNve1DaaiZJA&s",
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
        image: "https://m.media-amazon.com/images/I/718I8-qAwVL._AC_UF350,350_QL80_.jpg",
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
        image: "https://www.cerave.co.uk/-/media/project/loreal/brand-sites/cerave/emea/uk/products/fml-spf-pm/fml-pm-front-lg-1.jpg?rev=-1",
        targetTypes: ["oily", "normal", "combination"],
        concerns: ["inflammatory", "hormonal", "acne-prone"],
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
        image: "https://a.cdnsbn.com/images/products/xl/26754508101-1.jpg",
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
        image: "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/61/7532031/1.jpg?7965",
        targetTypes: ["combination", "oily"],
        medicalDetails: {
            mechanismOfAction: "Provides immediate cooling hydration without adding oil.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-023",
        name: "Atoderm Gel Moussant",
        brand: "Bioderma",
        category: "Cleanser",
        description: "A soap-free, paraben-free, and hypoallergenic foaming gel for dry to very dry sensitive skin.",
        usage: "Apply on wet skin. Work into a foam. Rinse well and gently dry.",
        mainIngredients: ["Zinc Sulfate", "Copper Sulfate", "Vitamin PP"],
        benefits: ["Restores lipids", "Soothes tightness", "Protects barrier"],
        image: "https://m.media-amazon.com/images/I/51J8wSS3-9L.jpg",
        targetTypes: ["dry", "sensitive", "eczema"],
        concerns: ["eczema"],
        medicalDetails: {
            mechanismOfAction: "Limits the proliferation of micro-organisms while boosting the skin's hydration.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-024",
        name: "Eva Skin Clinic Atopi Cream",
        brand: "Eva Cosmetics",
        category: "Moisturiser",
        description: "Specially formulated for atopic and very dry skin to reduce itching and irritation.",
        usage: "Apply twice daily to affected areas.",
        mainIngredients: ["Ceramides", "Vaseline", "Paraffin"],
        benefits: ["Relieves itching", "Deep nourishment", "Barrier repair"],
        image: "https://m.media-amazon.com/images/I/41Bx1y6r5JL._AC_UF894,1000_QL80_.jpg",
        targetTypes: ["dry", "eczema"],
        concerns: ["eczema"],
        medicalDetails: {
            mechanismOfAction: "Creates an occlusive layer to prevent trans-epidermal water loss and provides essential lipids.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-025",
        name: "Bepanthen Moisturizing Cream",
        brand: "Bayer",
        category: "Moisturiser",
        description: "Contains Pro-Vitamin B5 to support the skin's natural healing process and maintain softness.",
        usage: "Apply once or several times daily as needed.",
        mainIngredients: ["Dexpanthenol (Pro-Vitamin B5)"],
        benefits: ["Promotes healing", "Long-lasting hydration", "Very gentle"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsXstb5N2i45y2iKqBQMROyO7BkEsB-QAWg&s",
        targetTypes: ["sensitive", "dry", "normal", "eczema"],
        concerns: ["eczema"],
        medicalDetails: {
            mechanismOfAction: "Pro-Vitamin B5 is converted into pantothenic acid in the skin, which supports cell growth and regeneration.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "sk-026",
        name: "Sebamed Liquid Face & Body Wash",
        brand: "Sebamed",
        category: "Cleanser",
        description: "Soap-free wash with pH 5.5 to support the natural barrier of the skin.",
        usage: "Apply to wet skin and rinse.",
        mainIngredients: ["Active Skin Care Complex", "Pentavitin", "Vitamins"],
        benefits: ["pH 5.5 balanced", "Soap-free", "For sensitive skin"],
        image: "https://m.media-amazon.com/images/I/71LSy-pH+BL.jpg",
        targetTypes: ["sensitive", "eczema", "all"],
        concerns: ["eczema"],
        medicalDetails: {
            mechanismOfAction: "Maintains the skin's natural acidic mantle with pH 5.5.",
            pregnancySafety: "Safe."
        }
    }
];
