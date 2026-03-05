import { Product, MedicalDetails } from "../data/types";

const OBF_API_BASE = "https://world.openbeautyfacts.org/api/v2/search";

// Medical mapping for common ingredients
const INGREDIENT_MEDICAL_MAP: Record<string, MedicalDetails> = {
    "niacinamide": {
        mechanismOfAction: "Niacinamide (Vitamin B3) helps to build keratin, maintain the skin barrier, and regulate oil production.",
        sideEffects: ["Mild flushing", "Redness if used in high concentrations"],
        clinicalNotes: "Excellent for acne-prone and sensitive skin. Promotes ceramide production.",
        pregnancySafety: "Considered safe."
    },
    "retinol": {
        mechanismOfAction: "Accelerates cell turnover and increases collagen production to reduce fine lines and wrinkles.",
        sideEffects: ["Dryness", "Peeling", "Sun sensitivity"],
        clinicalNotes: "Start with low frequency. Use only at night.",
        pregnancySafety: "CONTRAINDICATED during pregnancy."
    },
    "minoxidil": {
        mechanismOfAction: "Widens blood vessels and opens potassium channels, allowing more oxygen/blood to reach the hair follicles.",
        sideEffects: ["Scalp irritation", "Unwanted facial hair growth"],
        clinicalNotes: "Requires consistent daily use. Stopping treatment leads to hair loss reversal.",
        pregnancySafety: "Consult physician."
    },
    "salicylic acid": {
        mechanismOfAction: "A Beta Hydroxy Acid (BHA) that penetrates deep into pores to dissolve excess sebum and dead skin cells.",
        sideEffects: ["Dryness", "Mild stinging"],
        clinicalNotes: "Highly effective for blackheads and inflammatory acne.",
        pregnancySafety: "Consult physician for high concentrations."
    }
};

export async function discoverProducts(query: string, category: "skincare" | "haircare"): Promise<Product[]> {
    try {
        const response = await fetch(`${OBF_API_BASE}?categories_tags_en=${category}&search_terms=${encodeURIComponent(query)}&fields=code,product_name_en,brands,image_url,ingredients_text_en,categories&page_size=12`);
        const data = await response.json();

        if (!data.products) return [];

        return data.products.map((p: any) => {
            const ingredients = p.ingredients_text_en
                ? p.ingredients_text_en.split(",").map((i: string) => i.trim())
                : [];

            // Try to find a medical profile based on ingredients
            let medicalDetails: MedicalDetails | undefined = undefined;
            for (const [ing, details] of Object.entries(INGREDIENT_MEDICAL_MAP)) {
                if (ingredients.some((i: string) => i.toLowerCase().includes(ing))) {
                    medicalDetails = details;
                    break;
                }
            }

            return {
                id: p.code,
                name: p.product_name_en || "Unknown Product",
                brand: p.brands || "Unknown Brand",
                category: category === "skincare" ? "Treatment" : "Shampoo", // Default categorization
                description: `Discovered via Open Beauty Facts. Categories: ${p.categories || 'N/A'}`,
                usage: "Refer to product packaging for specific usage instructions.",
                mainIngredients: ingredients.slice(0, 5),
                benefits: ["Discovered via global database", "Ingredient analyzed"],
                image: p.image_url || "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400",
                targetTypes: [query.toLowerCase()],
                medicalDetails,
                isExternal: true
            } as Product;
        });
    } catch (error) {
        console.error("Error fetching OBF data:", error);
        return [];
    }
}

export async function getProductById(id: string, category: "skincare" | "haircare"): Promise<Product | null> {
    try {
        const response = await fetch(`https://world.openbeautyfacts.org/api/v2/product/${id}?fields=code,product_name_en,brands,image_url,ingredients_text_en,categories`);
        const data = await response.json();

        if (!data.product) return null;

        const p = data.product;
        const ingredients = p.ingredients_text_en
            ? p.ingredients_text_en.split(",").map((i: string) => i.trim())
            : [];

        let medicalDetails: MedicalDetails | undefined = undefined;
        for (const [ing, details] of Object.entries(INGREDIENT_MEDICAL_MAP)) {
            if (ingredients.some((i: string) => i.toLowerCase().includes(ing))) {
                medicalDetails = details;
                break;
            }
        }

        return {
            id: p.code,
            name: p.product_name_en || "Unknown Product",
            brand: p.brands || "Unknown Brand",
            category: category === "skincare" ? "Treatment" : "Shampoo",
            description: `Discovered via Open Beauty Facts. Categories: ${p.categories || 'N/A'}`,
            usage: "Refer to product packaging for specific usage instructions.",
            mainIngredients: ingredients.slice(0, 5),
            benefits: ["Analyzed from global database", "Clinical overlap found"],
            image: p.image_url || "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400",
            targetTypes: [],
            medicalDetails,
            isExternal: true
        };
    } catch (error) {
        console.error("Error fetching single product:", error);
        return null;
    }
}
