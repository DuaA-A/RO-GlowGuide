import type { HairType, ScalpCondition, Product, Routine } from "./types";

// ── Hair Types ────────────────────────────────────────────────────────────────
// PLACEHOLDER: Replace descriptions, characteristics, tips, and images with real content

export const hairTypes: HairType[] = [
    {
        id: "straight",
        name: "Straight Hair",
        pattern: "Type 1 — Straight",
        description:
            "Straight hair grows from a round follicle and lies completely flat from root to tip, with natural oils distributing easily along the shaft. Placeholder: replace with detailed description.",
        characteristics: [
            "Naturally smooth and shiny shaft",
            "Tends toward oiliness at the scalp",
            "Lacks natural volume without styling",
            "Very resistant to curl and wave patterns",
        ],
        tips: [
            "Use volumising, lightweight shampoos to avoid limpness",
            "Apply conditioner mid-lengths to ends only",
            "Clarify regularly to remove buildup from sebum",
        ],
        image: "", // PLACEHOLDER
        color: "sand",
    },
    {
        id: "wavy",
        name: "Wavy Hair",
        pattern: "Type 2 — Wavy",
        description:
            "Wavy hair has a subtle S-shaped pattern with a slight curl that can vary from loose beach waves to more defined, springy bends. Placeholder: replace with detailed description.",
        characteristics: [
            "Natural S-wave pattern from roots to ends",
            "Can be prone to frizz in humidity",
            "Balance between oily roots and drier ends",
            "Responds well to light definition products",
        ],
        tips: [
            "Use a curl-enhancing mousse or light cream on damp hair",
            "Scrunch in products rather than raking through",
            "Diffuse or air dry to encourage wave definition",
        ],
        image: "",
        color: "blush",
    },
    {
        id: "curly",
        name: "Curly Hair",
        pattern: "Type 3 — Curly",
        description:
            "Curly hair follows a clearly defined, spring-like spiral pattern and is naturally drier than straighter hair types due to the difficulty of sebum travelling down the coiled shaft. Placeholder: replace with detailed description.",
        characteristics: [
            "Well-defined spiral or corkscrew curls",
            "High porosity and prone to frizz",
            "Requires regular deep conditioning",
            "Shrinks significantly when dry",
        ],
        tips: [
            "Follow the Curly Girl Method for best definition",
            "Use a rich leave-in conditioner while hair is soaking wet",
            "Protect curls at night with a silk or satin bonnet",
        ],
        image: "",
        color: "taupe",
    },
    {
        id: "coily",
        name: "Coily / Kinky Hair",
        pattern: "Type 4 — Coily",
        description:
            "Coily hair has a very tight Z or S pattern and is the most fragile hair type due to its angular curl structure and high porosity. Requires significant moisture retention strategies. Placeholder: replace with detailed description.",
        characteristics: [
            "Tightly coiled Z or S pattern",
            "Most susceptible to breakage and shrinkage",
            "Naturally low sebum distribution",
            "Benefits most from heavy, occluding moisturisers",
        ],
        tips: [
            "LOC or LCO method (Liquid, Oil, Cream) for moisture retention",
            "Detangle gently on wet, conditioned hair only",
            "Protective styles reduce manipulation and breakage",
        ],
        image: "",
        color: "mink",
    },
    {
        id: "fine-thin",
        name: "Fine / Thin Hair",
        pattern: "Fine — Any Pattern",
        description:
            "Fine hair refers to the diameter of each individual strand, while thin hair refers to overall density. Fine hair is delicate and easily weighed down by heavy products. Placeholder: replace with detailed description.",
        characteristics: [
            "Small individual strand diameter",
            "Prone to breakage with rough handling",
            "Becomes limp and oily quickly",
            "Responds well to volumising and lightweight formulas",
        ],
        tips: [
            "Avoid heavy silicones and oils that weigh hair down",
            "Use a volumising root spray for lift",
            "Trim regularly to prevent split ends from worsening",
        ],
        image: "",
        color: "warm-beige",
    },
];

// ── Scalp Conditions ──────────────────────────────────────────────────────────
// PLACEHOLDER: Replace with clinical details and images

export const scalpConditions: ScalpCondition[] = [
    {
        id: "dandruff",
        name: "Dandruff (Seborrhoeic Dermatitis)",
        severity: "Mild",
        description:
            "A chronic, relapsing scalp condition characterised by flaking and mild inflammation, associated with Malassezia yeast overgrowth. Placeholder: replace with clinical description.",
        causes: [
            "Malassezia globosa yeast activity",
            "Increased sebum production",
            "Disrupted scalp microbiome",
            "Stress and immune changes",
        ],
        image: "",
        color: "sand",
    },
    {
        id: "scalp-psoriasis",
        name: "Scalp Psoriasis",
        severity: "Moderate",
        description:
            "An autoimmune condition causing rapid keratinocyte turnover, resulting in thick, silver-scaled plaques on the scalp. Placeholder: replace with clinical description.",
        causes: [
            "Autoimmune T-cell mediated inflammation",
            "Genetic predisposition (HLA-C*06:02)",
            "Triggers: stress, infection, medications",
            "Environmental and lifestyle factors",
        ],
        image: "",
        color: "taupe",
    },
    {
        id: "scalp-eczema",
        name: "Scalp Eczema (Atopic Dermatitis)",
        severity: "Moderate",
        description:
            "Inflammatory scalp condition with intensely itchy, weeping, or crusted patches. Associated with atopic triad (asthma, rhinitis, eczema). Placeholder: replace with clinical description.",
        causes: [
            "Filaggrin gene mutations impairing barrier",
            "IgE-mediated sensitivities",
            "Environmental irritants and allergens",
            "Dysbiosis of the scalp microbiome",
        ],
        image: "",
        color: "blush",
    },
    {
        id: "alopecia",
        name: "Alopecia / Hair Loss",
        severity: "Severe",
        description:
            "A range of conditions causing partial or complete hair loss — from androgenetic alopecia (genetic pattern loss) to alopecia areata (autoimmune). Placeholder: replace with clinical description.",
        causes: [
            "DHT-mediated follicle miniaturisation (AGA)",
            "Autoimmune follicle attack (alopecia areata)",
            "Nutritional deficiencies (iron, biotin)",
            "Hormonal imbalances (thyroid, PCOS)",
        ],
        image: "",
        color: "mink",
    },
];

// ── Haircare Routines ─────────────────────────────────────────────────────────
// PLACEHOLDER: Replace step descriptions and images with real content

export const haircareRoutines: Routine[] = [
    {
        id: "straight-routine",
        name: "Straight Hair Balancing Routine",
        description:
            "A cleansing-focused routine that prevents oiliness while maintaining shine. Placeholder: replace with full routine rationale.",
        targetType: "straight",
        steps: [
            { step: 1, name: "Clarifying Shampoo", description: "Placeholder: Use weekly to remove buildup.", timing: "Weekly" },
            { step: 2, name: "Volumising Shampoo", description: "Placeholder: Lightweight, sulfate-free shampoo.", timing: "Every 2–3 days" },
            { step: 3, name: "Lightweight Conditioner", description: "Placeholder: Apply mid-lengths to ends.", timing: "Every wash" },
            { step: 4, name: "Leave-in Spray", description: "Placeholder: Detangling and heat protection spray.", timing: "Before styling" },
        ],
        image: "",
    },
    {
        id: "curly-routine",
        name: "Curly Hair Moisture Routine",
        description:
            "An intensive moisture-locking routine following curly hair method principles. Placeholder: replace with full routine rationale.",
        targetType: "curly",
        steps: [
            { step: 1, name: "Co-wash or Shampoo", description: "Placeholder: Sulfate-free, moisturising shampoo.", timing: "Every 3–4 days" },
            { step: 2, name: "Deep Conditioner", description: "Placeholder: Leave on under heat for 20 minutes.", timing: "Weekly" },
            { step: 3, name: "Leave-in Conditioner", description: "Placeholder: Apply generously to soaking wet hair.", timing: "Every wash" },
            { step: 4, name: "Curl Defining Cream", description: "Placeholder: Apply over leave-in to clump curls.", timing: "Every wash" },
            { step: 5, name: "Gel Layer", description: "Placeholder: Seals the curl cast for definition.", timing: "Every wash" },
        ],
        image: "",
    },
    {
        id: "coily-routine",
        name: "Coily Hair Retention Routine",
        description:
            "An ultra-moisturising routine focused on breakage prevention and length retention. Placeholder: replace with full routine rationale.",
        targetType: "coily",
        steps: [
            { step: 1, name: "Pre-poo Treatment", description: "Placeholder: Coconut or olive oil applied before washing.", timing: "Before every wash" },
            { step: 2, name: "Moisturising Shampoo", description: "Placeholder: Sulfate-free, with slip for detangling.", timing: "Weekly" },
            { step: 3, name: "Protein Treatment", description: "Placeholder: To strengthen the hair shaft. Use monthly.", timing: "Monthly" },
            { step: 4, name: "Deep Conditioner", description: "Placeholder: Heavy cream conditioner with heat.", timing: "Weekly" },
            { step: 5, name: "LOC Method", description: "Placeholder: Liquid > Oil > Cream application sequence.", timing: "Every wash + top-up daily" },
        ],
        image: "",
    },
    {
        id: "scalp-treatment-routine",
        name: "Scalp Treatment Routine",
        description:
            "A targeted routine for managing scalp conditions like dandruff or seborrhoeic dermatitis. Placeholder: replace with full routine rationale.",
        targetType: "all",
        steps: [
            { step: 1, name: "Scalp Exfoliator", description: "Placeholder: Salicylic acid scalp scrub.", timing: "Weekly" },
            { step: 2, name: "Medicated Shampoo", description: "Placeholder: Zinc pyrithione or ketoconazole formula.", timing: "2–3×/week" },
            { step: 3, name: "Scalp Serum", description: "Placeholder: Targeted active serum for your condition.", timing: "Daily" },
            { step: 4, name: "Lightweight Conditioner", description: "Placeholder: Ends only, avoid scalp.", timing: "Every wash" },
        ],
        image: "",
    },
];

// ── Haircare Products ─────────────────────────────────────────────────────────
// PLACEHOLDER: Replace all product details, images, and medical details with real data

export const haircareProducts: Product[] = [
    {
        id: "hc-001",
        name: "Nourishing Moisture Shampoo",
        brand: "Macadamia Professional",
        category: "Shampoo",
        description:
            "A sulfate-free moisturising shampoo that cleanses gently while delivering essential hydration to dry and damaged hair. Rich in Argan oil and Panthenol.",
        usage:
            "Wet hair thoroughly. Apply a generous amount and work into a lather from roots to ends. Rinse thoroughly. Repeat if necessary.",
        mainIngredients: ["Sodium Lauroyl Methyl Isethionate", "Argan Oil", "Panthenol (Vitamin B5)", "Glycerin"],
        benefits: ["Sulphate-free gentle cleanse", "Adds moisture and shine", "Reduces breakage"],
        image: "https://m.media-amazon.com/images/I/71Y97B-6yPL._AC_SL1500_.jpg",
        targetTypes: ["dry", "curly", "coily", "damaged"],
        medicalDetails: {
            mechanismOfAction:
                "Panthenol penetrates the hair cortex and hydrates by hygroscopic binding of water molecules. Argan oil provides high oleic and linoleic fatty acid content, smoothing the cuticle.",
            sideEffects: ["Possible buildup with heavy conditioner use — clarify monthly"],
            contraindications: ["Known allergy to any listed ingredient"],
            clinicalNotes: "Sulphate-free formulations are associated with reduced colour fade and lower cuticle damage.",
            pregnancySafety: "Considered safe.",
        },
    },
    {
        id: "hc-002",
        name: "Nizoral Anti-Dandruff Shampoo",
        brand: "Nizoral",
        category: "Shampoo",
        description:
            "A therapeutic shampoo containing Ketoconazole for the treatment of dandruff and seborrheic dermatitis. Helps eliminate flaking and itching.",
        usage:
            "Use medicated shampoo 2–3 times weekly. Leave on scalp for 3–5 minutes before rinsing. Continue for 4 weeks minimum.",
        mainIngredients: ["Ketoconazole (2%)", "Zinc Pyrithione", "Salicylic Acid"],
        benefits: ["Eliminates flaking", "Controls fungus growth", "Soothes scalp itching"],
        image: "https://nizoral.com/wp-content/uploads/2021/01/nizoral-bottle.png",
        targetTypes: ["dandruff", "all", "oily-scalp", "seborrheic-dermatitis"],
        medicalDetails: {
            mechanismOfAction:
                "Ketoconazole inhibits the synthesis of ergosterol, disrupting fungal cell membranes (Malassezia). Zinc Pyrithione is antibacterial/antifungal.",
            sideEffects: ["Dryness of hair with daily use", "Possible scalp irritation"],
            contraindications: ["Aspirin allergy (for salicylic acid content variations)", "Open scalp wounds"],
            clinicalNotes: "Clinically proven to be more effective than standard OTC anti-dandruff shampoos.",
            pregnancySafety: "Consult physician for therapeutic use during pregnancy.",
            activeIngredientClass: "Antifungal / Keratolytic",
        },
    },
    {
        id: "hc-003",
        name: "Vichy Dercos Anti-Dandruff",
        category: "Shampoo",
        description: "Dermatologically tested anti-dandruff shampoo that targets the root cause of dandruff and provides long-lasting relief.",
        usage: "Use 2-3 times weekly on wet hair. Leave for 2 minutes then rinse.",
        mainIngredients: ["Selenium Sulfide", "Salicylic Acid", "Ceramides"],
        benefits: ["Removes 100% visible flakes", "6-week anti-relapse action", "Soothes scalp discomfort"],
        image: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?q=80&w=1974&auto=format&fit=crop",
        targetTypes: ["all"],
        medicalDetails: {
            mechanismOfAction: "Selenium Sulfide slows skin cell turnover and treats the Malassezia fungus.",
            pregnancySafety: "Consult physician.",
        }
    },
    {
        id: "hc-004",
        name: "L’Oreal Elseve Extraordinary Oil",
        category: "Oil Treatment",
        description: "A versatile oil treatment that provides deep nourishment, shine, and protection against split ends.",
        usage: "Apply serum on damp hair focusing on ends. Do not rinse.",
        mainIngredients: ["6 Precious Flower Oils", "Argan Oil", "Vitamin E"],
        benefits: ["Nourishes without weighing down", "Adds remarkable shine", "Prevents split ends"],
        image: "https://images.unsplash.com/photo-1626015093744-84d50980a377?q=80&w=2072&auto=format&fit=crop",
        targetTypes: ["dry", "straight", "wavy", "curly", "coily"],
        medicalDetails: {
            mechanismOfAction: "Forms a protective layer over the hair shaft, sealing the cuticle to prevent moisture loss and physical split damage.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "hc-005",
        name: "Garnier Fructis Hair Food Mask",
        brand: "Garnier",
        category: "Treatment",
        description: "Multi-use hair mask that can be used as a conditioner, mask, or leave-in to provide moisture and strength.",
        usage: "Use as a mask 1-2 times weekly. Apply on damp hair focusing on ends.",
        mainIngredients: ["Banana Extract", "Shea Butter", "Coconut Oil"],
        benefits: ["Intense nourishment", "98% natural origin ingredients", "No silicones"],
        image: "https://m.media-amazon.com/images/I/71X8k7+7F6L._AC_SL1500_.jpg",
        targetTypes: ["dry", "curly", "coily", "damaged"],
        medicalDetails: {
            mechanismOfAction: "Deeply penetrates the hair fibre with nourishing triglycerides from shea and coconut.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "hc-006",
        name: "Rogaine 5% Minoxidil Foam",
        brand: "Rogaine",
        category: "Treatment",
        description: "The #1 dermatologist-recommended brand for hair regrowth. Clinically proven to help regrow hair in men and women.",
        usage: "Apply half a capful once daily to the scalp in the hair loss area. Massage into scalp with fingers.",
        mainIngredients: ["Minoxidil 5%"],
        benefits: ["Clinically proven regrowth", "Easy-to-use foam", "Revitalizes follicles"],
        image: "https://www.rogaine.com/on/demandware.static/-/Sites-rogaine-master-catalog/default/dw86a7d6e4/product-images/men-foam-3mo.jpg",
        targetTypes: ["hair-loss", "alopecia", "thinning"],
        medicalDetails: {
            mechanismOfAction: "Increases blood flow to hair follicles, widening blood vessels and shortening the telogen phase to push hair into the anagen phase.",
            sideEffects: ["Scalp irritation", "unwanted facial hair growth", "temporary shedding"],
            contraindications: ["Heart disease", "unexplained hair loss", "sudden hair loss"],
            clinicalNotes: "Results typically seen after 3-6 months. Continuous use required to maintain regrowth.",
            pregnancySafety: "Consult physician (Category C)."
        }
    },
    {
        id: "hc-007",
        name: "Propecia (Finasteride) 1mg",
        brand: "Organon",
        category: "Oral Treatment",
        description: "A prescription-level oral treatment for male pattern hair loss (androgenetic alopecia).",
        usage: "Take one tablet (1mg) daily as directed by a healthcare professional.",
        mainIngredients: ["Finasteride 1mg"],
        benefits: ["Blocks DHT", "Prevents further loss", "Effective for pattern baldness"],
        image: "https://www.propecia.com/images/propecia-pack.png",
        targetTypes: ["hair-loss", "male-pattern-baldness", "thinning"],
        medicalDetails: {
            mechanismOfAction: "A 5-alpha reductase inhibitor that blocks the conversion of testosterone to DHT, the hormone responsible for follicle miniaturization.",
            sideEffects: ["Sexual dysfunction", "breast tenderness", "depression"],
            contraindications: ["Women who are or may become pregnant", "Liver disease"],
            clinicalNotes: "Reduces scalp DHT levels by ~70%. Continuous daily use required.",
            pregnancySafety: "CONTRADICTED (Category X)."
        }
    },
    {
        id: "hc-008",
        name: "K18 Peptide Prep Detox Shampoo",
        brand: "K18",
        category: "Shampoo",
        description: "A color-safe, non-stripping detox shampoo that removes 99% of product buildup, 95% of sebum, and 76% of copper.",
        usage: "Swap your regular shampoo for this power wash once a week or as needed.",
        mainIngredients: ["Salicylic Acid", "Activated Charcoal", "K18Peptide"],
        benefits: ["Deeply detoxifies", "Removes metals", "Perfect prep for treatments"],
        image: "https://www.k18hair.com/cdn/shop/files/Detox_Shampoo_250ml_Front_Transparent.png",
        targetTypes: ["oily-scalp", "buildup", "all", "fine"],
        medicalDetails: {
            mechanismOfAction: "Activated charcoal absorbs excess oil and impurities; Salicylic acid exfoliates the scalp and unclogs pores.",
            sideEffects: ["Possible dryness if overused; follow with conditioner."],
            clinicalNotes: "pH-balanced (3.8-4.2) to maintain hair health and color stability.",
            pregnancySafety: "Safe."
        }
    }
];
