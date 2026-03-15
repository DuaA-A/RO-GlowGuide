import type { HairType, ScalpCondition, Product, Routine } from "./types";

// ── Hair Types ────────────────────────────────────────────────────────────────
// PLACEHOLDER: Replace descriptions, characteristics, tips, and images with real content

export const hairTypes: HairType[] = [
    {
        id: "straight",
        name: "Straight Hair",
        pattern: "Type 1 — Straight",
        description:
            "Straight hair grows from a round follicle and lies completely flat from root to tip, with natural oils distributing easily along the shaft. Characterized by a shiny appearance and tendency towards scalp oiliness.",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevmRcoVIbA5MVQQFrxHK34g-gY3em5z-BSA&s",
        color: "sand",
    },
    {
        id: "wavy",
        name: "Wavy Hair",
        pattern: "Type 2 — Wavy",
        description:
            "Wavy hair has a subtle S-shaped pattern with a slight curl that can vary from loose beach waves to more defined, springy bends. It sits between straight and curly in terms of care needs.",
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
        image: "https://images.stockcake.com/public/0/6/d/06dea7eb-b132-4646-90d9-39db8bd94f33_large/stylish-wavy-hair-stockcake.jpg",
        color: "blush",
    },
    {
        id: "curly",
        name: "Curly Hair",
        pattern: "Type 3 — Curly",
        description:
            "Curly hair follows a clearly defined, spring-like spiral pattern and is naturally drier than straighter hair types due to the difficulty of sebum travelling down the coiled shaft.",
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
        image: "https://therighthairstyles.com/wp-content/uploads/2025/04/10-types-of-haircuts-for-natural-curly-hair.jpg",
        color: "taupe",
    },
    {
        id: "coily",
        name: "Coily / Kinky Hair",
        pattern: "Type 4 — Coily",
        description:
            "Coily hair has a very tight Z or S pattern and is the most fragile hair type due to its angular curl structure and high porosity. Requires significant moisture retention strategies.",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtiZ-SEPNDi8sPC61teVRsfR4Sf91y4WJlLA&s",
        color: "mink",
    },
    {
        id: "fine-thin",
        name: "Fine / Thin Hair",
        pattern: "Fine — Any Pattern",
        description:
            "Fine hair refers to the diameter of each individual strand, while thin hair refers to overall density. Fine hair is delicate and easily weighed down by heavy products.",
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
        image: "https://www.beautyclublondon.co.uk/wp-content/uploads/thin-hair-before-and-after-extensions.jpg",
        color: "warm-beige",
    },
];
// ── Scalp Conditions ──────────────────────────────────────────────────────────

export const scalpConditions: ScalpCondition[] = [
    {
        id: "dandruff",
        name: "Dandruff (Seborrheic Dermatitis)",
        severity: "Moderate",
        description:
            "A common scalp condition characterized by white flakes, persistent itching, and sometimes localized redness. It is often linked to the overgrowth of the Malassezia fungus.",
        causes: [
            "Overgrowth of Malassezia fungus",
            "Excess scalp oil (sebum) production",
            "Dry scalp or infrequent washing",
            "Stress and hormonal fluctuations",
        ],
        tips: [
            "Use medicated shampoos with Ketoconazole or Zinc Pyrithione",
            "Selenium Sulfide and Salicylic Acid help remove persistent flakes",
            "Leave treatment on the scalp for 3–5 minutes before rinsing",
            "Maintain frequency of 2–3 times weekly for at least 4 weeks",
        ],
        image: "https://www.hshairclinic.co.uk/wp-content/uploads/2024/07/Man-with-Dandruff-in-His-Dark-Hair-Macro-View.webp",
        color: "sand",
    },
    {
        id: "scalp-psoriasis",
        name: "Scalp Psoriasis",
        severity: "Moderate",
        description:
            "An autoimmune condition causing rapid keratinocyte turnover, resulting in thick, silver-scaled plaques on the scalp. It can extend beyond the hairline and is often associated with systemic inflammation.",
        causes: [
            "Autoimmune T-cell mediated inflammation",
            "Genetic predisposition (HLA-C*06:02)",
            "Triggers: stress, infection, medications",
            "Environmental and lifestyle factors",
        ],
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/16410/gettyimages-1127052059.jpg",
        color: "taupe",
    },
    {
        id: "scalp-eczema",
        name: "Scalp Eczema (Atopic Dermatitis)",
        severity: "Moderate",
        description:
            "Inflammatory scalp condition with intensely itchy, weeping, or crusted patches. Associated with atopic triad (asthma, rhinitis, eczema) and characterized by a compromised skin barrier.",
        causes: [
            "Filaggrin gene mutations impairing barrier",
            "IgE-mediated sensitivities",
            "Environmental irritants and allergens",
            "Dysbiosis of the scalp microbiome",
        ],
        image: "https://www.health.com/thmb/ejWJjRDdimLSr2Tn6d-TwKEW4pc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sebderm6__WatermarkedWyJXYXRlcm1hcmtlZCJd-c850b045967540bba179893273253681.jpeg",
        color: "blush",
    },
    {
        id: "split-ends",
        name: "Split Ends (Trichoptilosis)",
        severity: "Moderate",
        description:
            "Split ends occur when the protective outer layer of the hair shaft (the cuticle) is damaged, causing the fiber to split into two or more fragments. This is a sign of structural hair damage.",
        causes: [
            "Frequent heat styling (dryers, straighteners)",
            "Chemical treatments and hair dyes",
            "Lack of moisture and environmental exposure (sun)",
            "Physical stress from frequent or rough brushing",
        ],
        tips: [
            "Regular trimming every 6–8 weeks is the only permanent cure",
            "Apply hair serums or leave-in conditioners to seal the cuticle",
            "Always use heat protectant before styling",
            "Use deep conditioning hair masks 1–2 times weekly",
        ],
        image: "https://www.splitenderpro.net/cdn/shop/articles/unnamed_28_5c516959-88a0-4ca5-904e-4c3e6bb9b7c5.png?v=1749742410",
        color: "mink",
    },
    {
        id: "alopecia",
        name: "Alopecia (Hair Loss)",
        severity: "Moderate",
        description: "Thinning hair or localized loss affecting the scalp. Common types include Androgenic Alopecia (pattern baldness), Telogen Effluvium (temporary shedding), and Traction Alopecia.",
        causes: [
            "Genetic predisposition (DHT sensitivity)",
            "Hormonal shifts (Post-partum/Menopause)",
            "Extreme stress or trauma",
            "Nutrient deficiencies (Iron, Zinc, Biotin)",
            "Physical traction from tight styles",
        ],
        tips: [
            "Use Minoxidil 5% to prolong the hair growth phase",
            "Incorporate Caffeine and Biotin serums to fortify the shaft",
            "Scalp massage with fortifying lotions to boost blood flow",
            "Switch to loose protective styles to prevent traction",
        ],
        image: "https://kohermedical.com/wp-content/uploads/2023/12/Male-pattern-baldness.png",
        color: "sand",
    },
];

// ── Haircare Routines ─────────────────────────────────────────────────────────

export const haircareRoutines: Routine[] = [
    {
        id: "hair-loss-routine",
        name: "Alopecia Recovery Protocol",
        description: "A clinical protocol designed to stimulate blood flow, block DHT, and revitalize dormant hair follicles.",
        targetType: "alopecia",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmwjUYmPmbyvS8vtxyweiCn7il14Qfa_hTA&s",
        steps: [
            { step: 1, name: "Scalp Detox", description: "Use a clarifying or detox shampoo to remove sebum blocking the follicles.", timing: "Weekly" },
            { step: 2, name: "Minoxidil Treatment", description: "Apply Minoxidil 5% directly to thinning areas twice daily.", timing: "AM & PM" },
            { step: 3, name: "Fortifying Serum", description: "Apply a Caffeine or Biotin-rich serum to strengthen the hair shaft.", timing: "PM" },
            { step: 4, name: "Scalp Massage", description: "Vigorously massage the scalp for 5 minutes with a fortifying lotion to boost circulation.", timing: "Daily" },
        ],
    },
    {
        id: "scalp-eczema-routine",
        name: "Scalp Eczema Soothing Routine",
        description: "A gentle, anti-inflammatory routine to calm redness and stop the itch on the scalp.",
        targetType: "scalp-eczema",
        image: "https://flexitol.com/wp-content/uploads/2022/01/our-scalp-range.jpeg",
        steps: [
            { step: 1, name: "Steroid / Anti-fungal Lotion", description: "Apply as prescribed to calm active flares.", timing: "PM" },
            { step: 2, name: "Gentle pH-Balanced Shampoo", description: "Cleanse without stripping natural oils.", timing: "AM" },
            { step: 3, name: "Scalp Oil", description: "Moisturize the scalp skin with light jojoba or squalane.", timing: "Weekly" },
        ],
    },
    {
        id: "split-ends-routine",
        name: "Split End Repair & Prevention",
        description: "A maintenance routine focusing on sealing the cuticle and preventing further fiber separation.",
        targetType: "split-ends",
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/4/1/41BO_0m7CEL.jpg",
        steps: [
            { step: 1, name: "Bond Repair Treatment", description: "Apply to damp hair to strengthen internal bonds.", timing: "Weekly" },
            { step: 2, name: "Leave-in Sealant", description: "Concentrate on the bottom 2 inches of hair.", timing: "Daily" },
            { step: 3, name: "Heat Protectant", description: "Essential before any styling tool use.", timing: "As needed" },
        ],
    },
    {
        id: "straight-routine",
        name: "Straight Hair Balancing Routine",
        description: "A cleansing-focused routine that prevents oiliness while maintaining shine and volume.",
        targetType: "straight",
        image: "https://deyga.in/cdn/shop/articles/15.jpg?v=1767960278",
        steps: [
            { step: 1, name: "Clarifying Shampoo", description: "Use weekly to remove sebum buildup and keep hair light.", timing: "Weekly" },
            { step: 2, name: "Volumising Shampoo", description: "Lightweight, sulfate-free shampoo for regular washes.", timing: "Every 2–3 days" },
            { step: 3, name: "Lightweight Conditioner", description: "Apply mid-lengths to ends only to avoid root oiliness.", timing: "Every wash" },
            { step: 4, name: "Leave-in Spray", description: "Detangling and heat protection spray before styling.", timing: "Before styling" },
        ],
    },
    {
        id: "curly-routine",
        name: "Curly Hair Moisture Routine",
        description: "An intensive moisture-locking routine following curly hair method principles for defined, frizz-free curls.",
        targetType: "curly",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_c-rNLNnkjY3kPB_f8qkTi2Mkw1agw3Jow&s",
        steps: [
            { step: 1, name: "Co-wash or Shampoo", description: "Sulfate-free, moisturising shampoo to preserve natural oils.", timing: "Every 3–4 days" },
            { step: 2, name: "Deep Conditioner", description: "Leave on under heat for 20 minutes for deep penetration.", timing: "Weekly" },
            { step: 3, name: "Leave-in Conditioner", description: "Apply generously to soaking wet hair to lock in moisture.", timing: "Every wash" },
            { step: 4, name: "Curl Defining Cream", description: "Apply over leave-in to clump and define curls.", timing: "Every wash" },
            { step: 5, name: "Gel Layer", description: "Seals the curl cast for frizz-free definition.", timing: "Every wash" },
        ],
    },
    {
        id: "coily-routine",
        name: "Coily Hair Retention Routine",
        description: "An ultra-moisturising routine focused on breakage prevention and length retention for tight coils.",
        targetType: "coily",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12uy_Ji6nHUhdkVK_K6s3BpkEqSm9tmfkSQ&s",
        steps: [
            { step: 1, name: "Pre-poo Treatment", description: "Coconut or olive oil applied before washing to reduce protein loss.", timing: "Before every wash" },
            { step: 2, name: "Moisturising Shampoo", description: "Sulfate-free, with slip for gentle detangling while cleansing.", timing: "Weekly" },
            { step: 3, name: "Protein Treatment", description: "To strengthen the hair shaft and prevent breakage. Use monthly.", timing: "Monthly" },
            { step: 4, name: "Deep Conditioner", description: "Heavy cream conditioner with heat cap for intense moisture.", timing: "Weekly" },
            { step: 5, name: "LOC Method", description: "Liquid > Oil > Cream application sequence for moisture retention.", timing: "Every wash + top-up daily" },
        ],
    },
    {
        id: "general-routine",
        name: "Complete Hair Health Routine",
        description: "A foundation-level routine to maintain scalp health, moisture balance, and improve hair strength and shine.",
        targetType: "all",
        image: "https://ogariolondon.com/wp-content/uploads/2023/11/2.jpg",
        steps: [
            { step: 1, name: "Shampoo", description: "Wash 2–3 times weekly to clear excess oil and buildup. Choose by scalp type.", timing: "Every 2–3 days" },
            { step: 2, name: "Conditioner", description: "Apply after every wash to restore moisture and reduce frizz. Apply mid-length to ends only.", timing: "Every wash" },
            { step: 3, name: "Hair Mask", description: "Deep nourishment with proteins or argan oil for structural repair.", timing: "1–2×/week" },
            { step: 4, name: "Serum / Leave-in", description: "Protects from heat and controls frizz on damp hair.", timing: "Daily / After wash" },
            { step: 5, name: "Heat Protection", description: "Crucial step before using any dryers or straighteners.", timing: "Before styling" },
        ],
    },
    {
        id: "scalp-treatment-routine",
        name: "Anti-Dandruff Treatment Routine",
        description: "A targeted therapeutic routine for managing dandruff and seborrheic dermatitis through medical-grade scalp care.",
        targetType: "dandruff",
        image: "https://hastehair.com/wp-content/uploads/2025/08/hyaluronic-acid-for-hair.jpg",
        steps: [
            { step: 1, name: "Medicated Shampoo", description: "Use Nizoral or Selsun Blue. Massage into scalp and leave for 3–5 minutes.", timing: "2–3×/week" },
            { step: 2, name: "Gentle Conditioner", description: "Apply to ends only to prevent lengths from drying out during treatment.", timing: "Every wash" },
            { step: 3, name: "Maintenance Wash", description: "Once improvement is seen, reduce to once weekly to prevent relapse.", timing: "Weekly" },
        ],
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
        image: "https://www.kingdombeauty.com/v/vspfiles/photos/MAM100202-2.jpg?v-cache=1652088243",
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
        image: "https://i5.walmartimages.com/asr/9615bd18-d0f0-45bf-849a-904cf8caef77_1.150025e8a4f12053ef70913c30ffea3a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        targetTypes: ["dandruff", "all", "oily-scalp", "seborrheic-dermatitis"],
        concerns: ["dandruff", "seborrheic-dermatitis"],
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
        image: "https://bestpharmacy.gr/pub/media/catalog/product/cache/386eb87acf83bc20648b2ef1991a0076/v/i/vichy-antidandruff-shampoo-dry-390ml.jpg",
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
        image: "https://m.media-amazon.com/images/I/61q33UsIgHL._AC_UF894,1000_QL80_.jpg",
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
        image: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//g/a/garnier-fructis-hair-food-banana-mask-400ml-new_2.jpg",
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
        image: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/6407331/1.jpg?2282",
        targetTypes: ["all"],
        concerns: ["hair-loss", "alopecia", "thinning"],
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7eiy9pLgOpuv3PIDqKiD1-ttC5PCqq7SAdg&s",
        targetTypes: ["all"],
        concerns: ["hair-loss", "male-pattern-baldness", "thinning"],
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZYewo3Sef0ijSdqdTl9MWvdstxN9zXI6OQ&s",
        targetTypes: ["all", "fine"],
        concerns: ["oily-scalp", "buildup"],
        medicalDetails: {
            mechanismOfAction: "Activated charcoal absorbs excess oil and impurities; Salicylic acid exfoliates the scalp and unclogs pores.",
            sideEffects: ["Possible dryness if overused; follow with conditioner."],
            clinicalNotes: "pH-balanced (3.8-4.2) to maintain hair health and color stability.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "hc-009",
        name: "Head & Shoulders Clinical Strength",
        brand: "Head & Shoulders",
        category: "Shampoo",
        description: "Maximum strength formula to treat stubborn dandruff and seborrheic dermatitis.",
        usage: "Apply to wet hair, massage into scalp, leave for several minutes, then rinse.",
        mainIngredients: ["Selenium Sulfide (1%)"],
        benefits: ["Prescription strength flaking relief", "Removes excess oil", "Soothes itching"],
        image: "https://target.scene7.com/is/image/Target/GUEST_01fa7537-c6e9-4bb2-9a3d-9947634d5a66?wid=300&hei=300&fmt=pjpeg",
        targetTypes: ["dandruff", "seborrheic-dermatitis"],
        concerns: ["dandruff", "seborrheic-dermatitis"],
        medicalDetails: {
            mechanismOfAction: "Selenium sulfide is a cytostatic agent that reduces the rate of skin cell turnover on the scalp.",
            pregnancySafety: "Consult physician."
        }
    },
    {
        id: "hc-010",
        name: "Selsun Blue Medicated Shampoo",
        brand: "Selsun Blue",
        category: "Shampoo",
        description: "Specifically formulated to control the scaling, flaking and itching of the scalp associated with dandruff.",
        usage: "Shake well. Wet hair, massage onto scalp, rinse. Repeat if desired.",
        mainIngredients: ["Selenium Sulfide (1%)"],
        benefits: ["Tough on dandruff", "Menthol for cooling sensation", "Relieves scalp itch"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRdgt6-wiaQKcFs3M_t8M-asE6xNGImYxaQ&s",
        targetTypes: ["dandruff"],
        concerns: ["dandruff"],
        medicalDetails: {
            mechanismOfAction: "Antifungal activity against Malassezia yeast and reduces scalp cell proliferation.",
            pregnancySafety: "Consult physician."
        }
    },
    {
        id: "hc-011",
        name: "Vichy Dercos Nourishing Conditioner",
        brand: "Vichy",
        category: "Conditioner",
        description: "Intensive nourishing conditioner for dry, damaged hair that repairs and strengthens the hair fiber.",
        usage: "Apply after shampooing on towel-dried hair. Leave for 1 minute then rinse.",
        mainIngredients: ["Ceramides", "Omega 3-6-9"],
        benefits: ["Repairs hair fiber", "Smooths ends", "Adds shine and soft feel"],
        image: "https://m.media-amazon.com/images/I/31U3d6NLGYL._AC_UF1000,1000_QL80_.jpg",
        targetTypes: ["dry", "damaged"],
        medicalDetails: {
            mechanismOfAction: "Ceramides fill in the gaps in the hair cuticle to restore smoothness and strength.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "hc-012",
        name: "Pantene Repair & Protect Serum",
        brand: "Pantene",
        category: "Oil Treatment",
        description: "A lightweight serum that visibly repairs damage and seals split ends for a healthy look.",
        usage: "Apply a small amount to damp or dry hair, focusing on the ends. Do not rinse.",
        mainIngredients: ["Pro-V Nutrients", "Vitamin E"],
        benefits: ["Instantly repairs damage", "Prevents split ends", "Adds brilliant shine"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn3uUHijPOAeGtU1rlc_3wYMS5GmeC_ds1BA&s",
        targetTypes: ["damaged", "split-ends"],
        concerns: ["split-ends"],
        medicalDetails: {
            mechanismOfAction: "Concentrated conditioning agents coat the hair shaft to protect from breakage and heat.",
            pregnancySafety: "Safe."
        }
    },
    {
        id: "hc-013",
        name: "The Ordinary Multi-Peptide Serum",
        brand: "The Ordinary",
        category: "Treatment",
        description: "A concentrated formula designed to support hair health so that it looks thicker, denser, fuller, and healthier.",
        usage: "Apply a few drops or as needed once daily, ideally at bedtime, to clean, dry scalp.",
        mainIngredients: ["REDENSYL™", "Procapil™", "Caffeine"],
        benefits: ["Increases hair density", "Supports scalp health", "Lightweight finish"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2EV1QVIbraAWmJM0eSlQi-ReJ-gyeFBsDw&s",
        targetTypes: ["all", "hair-loss", "alopecia"],
        concerns: ["alopecia"],
        medicalDetails: {
            mechanismOfAction: "Peptide complexes work in tandem with caffeine to improve the biological environment of the hair follicle.",
            pregnancySafety: "Safe."
        }
    }
];
