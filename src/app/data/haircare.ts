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
        category: "Shampoo",
        description:
            "A sulfate-free moisturising shampoo that cleanses gently while delivering essential hydration to dry and damaged hair. Placeholder: replace with full product description.",
        usage:
            "Wet hair thoroughly. Apply a generous amount and work into a lather from roots to ends. Rinse thoroughly. Repeat if necessary.",
        mainIngredients: ["Sodium Lauroyl Methyl Isethionate", "Argan Oil", "Panthenol (Vitamin B5)", "Glycerin"],
        benefits: ["Sulphate-free gentle cleanse", "Adds moisture and shine", "Reduces breakage"],
        image: "",
        targetTypes: ["dry", "curly", "coily"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Panthenol penetrates the hair cortex and hydrates by hygroscopic binding of water molecules. Argan oil provides high oleic and linoleic fatty acid content, smoothing the cuticle and reducing protein loss during washing.",
            sideEffects: ["Possible buildup with heavy conditioner use — clarify monthly"],
            contraindications: ["Known allergy to any listed ingredient"],
            clinicalNotes: "Placeholder: Sulphate-free formulations are associated with reduced colour fade and lower cuticle damage in bleached hair vs. SLS-containing shampoos.",
            pregnancySafety: "Considered safe.",
        },
    },
    {
        id: "hc-002",
        name: "Anti-Dandruff Scalp Shampoo",
        category: "Shampoo",
        description:
            "A therapeutic shampoo formulated with zinc pyrithione to control Malassezia yeast overgrowth and reduce flaking. Placeholder: replace with full product description.",
        usage:
            "Apply to wet scalp, massage for 2 minutes, allow to sit for 3 minutes before rinsing. Use 2–3 times per week for active dandruff, then maintain weekly.",
        mainIngredients: ["2% Zinc Pyrithione", "Salicylic Acid 0.5%", "Climbazole", "Tea Tree Oil"],
        benefits: ["Eliminates flaking", "Controls Malassezia", "Soothes scalp itching"],
        image: "",
        targetTypes: ["all"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Zinc pyrithione disrupts the fungal membrane transport system, reducing Malassezia population on the scalp. Salicylic acid softens and lifts existing scale. Climbazole is an imidazole antifungal that inhibits ergosterol synthesis in the fungal cell wall.",
            sideEffects: ["Dryness of hair with daily use", "Possible scalp irritation in sensitive individuals"],
            contraindications: ["Aspirin allergy (for salicylic acid)", "Open scalp wounds"],
            clinicalNotes: "Placeholder: 2% zinc pyrithione is the active concentration validated in clinical trials for seborrhoeic dermatitis, per AAD and EADV treatment guidelines.",
            pregnancySafety: "Consult physician for therapeutic use during pregnancy.",
            activeIngredientClass: "Antifungal / Keratolytic",
        },
    },
    {
        id: "hc-003",
        name: "Intense Repair Hair Mask",
        category: "Treatment",
        description:
            "A protein and moisture-rich deep conditioning mask that rebuilds and strengthens severely damaged, over-processed hair. Placeholder: replace with full product description.",
        usage:
            "After shampooing, apply generously to towel-dried hair from mid-lengths to ends. Cover with a shower cap. Leave for 20–30 minutes under gentle warmth. Rinse thoroughly. Use once weekly.",
        mainIngredients: ["Hydrolysed Keratin", "Olaplex Bond Technology (placeholder)", "Argan Oil", "Cetearyl Alcohol"],
        benefits: ["Rebuilds broken disulphide bonds", "Dramatically improves tensile strength", "Restores elasticity"],
        image: "",
        targetTypes: ["dry", "straight", "wavy", "curly", "coily", "fine-thin"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Hydrolysed keratin penetrates the hair cortex to partially restore the internal protein matrix of chemically damaged hair. Small protein fragments fill areas of cortex depletion, improving mechanical strength. Bond repair actives cross-link cysteine residues.",
            sideEffects: ["Protein overload with too-frequent use — limit to weekly", "May increase stiffness/brittleness in low-porosity hair"],
            contraindications: ["Use sparingly if hair has low porosity"],
            clinicalNotes: "Placeholder: Protein treatments are clinically indicated for hair with >30% tensile strength loss from chemical services or heat damage.",
            pregnancySafety: "Considered safe for topical use.",
            activeIngredientClass: "Protein / Bond Builder",
        },
    },
    {
        id: "hc-004",
        name: "Leave-in Curl Defining Cream",
        category: "Styling",
        description:
            "A nourishing, humidity-resistant leave-in cream that defines and elongates curls without crunch or stiffness. Placeholder: replace with full product description.",
        usage:
            "Apply to soaking wet hair in sections. Rake through each section, then scrunch upward. Air dry or diffuse. Do not touch until fully dry.",
        mainIngredients: ["Shea Butter", "Coconut Oil", "Marshmallow Root Extract", "Glycerin"],
        benefits: ["Defines curl pattern", "Reduces frizz", "Long-lasting hold without crunch"],
        image: "",
        targetTypes: ["wavy", "curly", "coily"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Marshmallow root polysaccharides coat the cuticle, providing slip and frizz reduction. Glycerin humectancy draws moisture into the cortex maintaining curl elasticity in varying humidity.",
            sideEffects: ["Can cause buildup — clarify monthly"],
            contraindications: ["Fine-hair types — may cause limpness"],
            clinicalNotes: "Placeholder: Leave-in conditioning agents containing polysaccharides are clinically associated with improved combing ease by up to 60%.",
            pregnancySafety: "Considered safe.",
        },
    },
    {
        id: "hc-005",
        name: "Scalp Serum — Hair Growth Support",
        category: "Scalp Treatment",
        description:
            "A targeted scalp serum formulated to promote a healthy environment for hair growth and reduce scalp inflammation. Placeholder: replace with full product description.",
        usage:
            "Part hair into sections and apply directly to the scalp using the dropper. Massage gently for 2 minutes. Do not rinse. Use daily for best results.",
        mainIngredients: ["Minoxidil-free complex (placeholder)", "Caffeine 4%", "Niacinamide", "Biotin", "Saw Palmetto Extract"],
        benefits: ["Promotes scalp circulation", "Reduces DHT activity", "Strengthens existing follicles"],
        image: "",
        targetTypes: ["all"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Caffeine has demonstrated in vitro activity extending the anagen (growth) phase of hair follicles by antagonising testosterone's inhibitory effect on follicle cell proliferation. Saw palmetto inhibits 5-alpha-reductase, reducing DHT conversion. Niacinamide improves scalp microcirculation.",
            sideEffects: ["Mild tingling on application", "Rare: scalp irritation"],
            contraindications: ["Not a medical treatment for androgenetic alopecia — consult a trichologist for clinical hair loss"],
            clinicalNotes: "Placeholder: Caffeine has demonstrated in clinical studies equivalent efficacy to 5% minoxidil solution for mild AGA in male subjects after 6 months. Evidence for female AGA is emerging.",
            pregnancySafety: "Consult physician before use during pregnancy.",
            activeIngredientClass: "Scalp Active / DHT Modulator",
        },
    },
    {
        id: "hc-006",
        name: "Argan Oil Hair Elixir",
        category: "Oil Treatment",
        description:
            "A lightweight, 100% pure argan oil that seals the cuticle, tames frizz, and adds brilliant shine without greasiness. Placeholder: replace with full product description.",
        usage:
            "Apply 2–4 drops to damp or dry hair, focusing on ends. Avoid the scalp. Can be used as a pre-wash treatment or final finishing step.",
        mainIngredients: ["100% Argania Spinosa Kernel Oil", "Vitamin E (Tocopherol)"],
        benefits: ["Intense cuticle smoothing", "Heat protection up to 230°C (placeholder)", "Lustrous shine"],
        image: "",
        targetTypes: ["dry", "wavy", "curly", "coily"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Argan oil has a high oleic acid content (~48%) and linoleic acid (~32%) that penetrates the hair cortex with low molecular weight affinity, reducing protein loss during washing by up to 21% (placeholder statistic).",
            sideEffects: ["Can cause greasiness on fine hair types if overused"],
            contraindications: ["Tree nut allergy — patch test recommended"],
            clinicalNotes: "Placeholder: Oil pre-treatment prior to shampooing significantly reduces hygral fatigue (swelling/contracting of the hair shaft during wetting) particularly in high-porosity hair.",
            pregnancySafety: "Considered safe for topical use.",
            activeIngredientClass: "Natural Oil / Emollient",
        },
    },
    {
        id: "hc-007",
        name: "Clarifying Scalp Scrub",
        category: "Scalp Treatment",
        description:
            "A physical and chemical exfoliating scalp scrub that removes product buildup, excess sebum, and dead skin cells to restore scalp balance. Placeholder: replace with full product description.",
        usage:
            "Apply to wet scalp before shampooing. Massage in gentle circular motions for 3 minutes. Rinse thoroughly and follow with shampoo and conditioner. Use once weekly.",
        mainIngredients: ["Salicylic Acid 1.5%", "Sea Salt Crystals", "Peppermint Oil", "Vitamin E"],
        benefits: ["Deep scalp detoxification", "Reduces buildup", "Invigorates scalp circulation"],
        image: "",
        targetTypes: ["oily", "straight", "all"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Physical exfoliation via sea salt crystals mechanically removes hyperkeratotic scale. Salicylic acid chemically dissolves corneocyte adhesion within the follicular ostia. Peppermint oil activates TRPM8 receptors, producing a cooling vasodilatory effect that increases scalp blood flow.",
            sideEffects: ["Tingling or mild irritation", "Do not use on active scalp lesions or broken skin"],
            contraindications: ["Aspirin allergy", "Active scalp inflammation or psoriasis flare"],
            clinicalNotes: "Placeholder: Regular scalp exfoliation improves product absorption for subsequent actives and is recommended before applying scalp serums for maximal penetration.",
            pregnancySafety: "Use with caution — consult physician for salicylic acid use during pregnancy.",
            activeIngredientClass: "Physical + Chemical Exfoliant",
        },
    },
    {
        id: "hc-008",
        name: "Protein Strengthening Spray",
        category: "Treatment",
        description:
            "A lightweight, rinse-free protein treatment spray for daily use to strengthen and protect hair against breakage and environmental damage. Placeholder: replace with full product description.",
        usage:
            "Spray evenly over damp or dry hair. Comb through and style as usual. For best results, use before heat styling.",
        mainIngredients: ["Hydrolysed Wheat Protein", "Hydrolysed Silk Protein", "Panthenol", "Heat Protectant Complex (placeholder)"],
        benefits: ["Strengthens hair shaft", "Heat protection", "Reduces split ends"],
        image: "",
        targetTypes: ["fine-thin", "wavy", "straight", "coily"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Small molecular weight hydrolysed proteins adsorb to the hair surface and under heat-styling conditions partially enter cortical voids via diffusion. Silk proteins contribute temporary tensile strength improvement. Panthenol swells the hair fibre, improving combing metrics.",
            sideEffects: ["Protein buildup with daily use on low-porosity coily hair — alternate with moisture-only products"],
            contraindications: ["Wheat allergy — potential reaction on scalp"],
            clinicalNotes: "Placeholder: Protein-based leave-in treatments have been shown to reduce hair breakage force by improving elasticity in chemically processed hair.",
            pregnancySafety: "Considered safe.",
            activeIngredientClass: "Protein / Structural Support",
        },
    },
    {
        id: "hc-009",
        name: "Volumising Dry Shampoo",
        category: "Styling",
        description:
            "A weightless dry shampoo that absorbs excess oil at the roots and delivers instant volume and freshness between washes. Placeholder: replace with full product description.",
        usage:
            "Hold 20–30cm from dry hair. Spray at roots. Wait 30 seconds, then massage in and brush through. Style as desired.",
        mainIngredients: ["Aluminium Starch Octenylsuccinate", "Rice Starch", "Silica", "Fragrance (placeholder)"],
        benefits: ["Extends wash cycle", "Root lifting volume", "Absorbs excess sebum"],
        image: "",
        targetTypes: ["straight", "wavy", "fine-thin"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Aluminium starch and rice starch physically adsorb sebum via their large surface area, reducing the weight and greasiness of hair near the scalp.",
            sideEffects: ["Long-term daily use may cause buildup and scalp inflammation — limit to 2–3× per week"],
            contraindications: ["Known fragrance sensitivity — opt for fragrance-free variant"],
            clinicalNotes: "Placeholder: Dry shampoos are not a substitute for regular cleansing — extended intervals between washes can exacerbate seborrhoeic dermatitis.",
            pregnancySafety: "Avoid aerosol versions due to inhalation risk. Use powder form if needed.",
        },
    },
    {
        id: "hc-010",
        name: "Biotin & Collagen Strengthening Conditioner",
        category: "Conditioner",
        description:
            "A rich, slip-providing conditioner infused with biotin and hydrolysed collagen to boost hair thickness, elasticity, and softness. Placeholder: replace with full product description.",
        usage:
            "After shampooing, apply from mid-lengths to ends. Leave for 2–3 minutes. Rinse thoroughly with cool water to seal the cuticle.",
        mainIngredients: ["Biotin (Vitamin B7)", "Hydrolysed Collagen", "Behentrimonium Methosulphate", "Cetearyl Alcohol"],
        benefits: ["Boosts strand thickness", "Improves elasticity", "Extreme slip for detangling"],
        image: "",
        targetTypes: ["fine-thin", "dry", "all"],
        medicalDetails: {
            mechanismOfAction:
                "Placeholder: Behentrimonium methosulphate is a conditioning surfactant that neutralises the negative charge of damaged hair cuticles, reducing static and friction. Hydrolysed collagen adsorbs to the cuticle surface, filling gaps and improving combing ease by up to 70% (placeholder). Biotin is a cofactor for keratinocyte proliferation enzymes.",
            sideEffects: ["Possible buildup with frequent deep application to scalp"],
            contraindications: ["None established at cosmetic concentrations"],
            clinicalNotes: "Placeholder: Topical biotin has limited evidence for direct follicular penetration; its primary mechanism in haircare formulations is surface film formation rather than follicular bioavailability.",
            pregnancySafety: "Considered safe.",
            activeIngredientClass: "Cationic Conditioning / Protein",
        },
    },
];
