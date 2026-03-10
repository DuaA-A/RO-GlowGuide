import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Lang = "en" | "ar";

interface LanguageContextType {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: string) => string;
    isAr: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

// ── UI string translations ────────────────────────────────────────────────────
const translations: Record<string, Record<Lang, string>> = {
    // Nav
    "nav.skincare": { en: "Skincare", ar: "العناية بالبشرة" },
    "nav.haircare": { en: "Haircare", ar: "العناية بالشعر" },
    "nav.about": { en: "About Us", ar: "من نحن" },
    "nav.skinTypes": { en: "Skin Types & Conditions", ar: "أنواع البشرة والحالات" },
    "nav.skincareRoutines": { en: "Skincare Routines", ar: "روتين العناية بالبشرة" },
    "nav.skincareProducts": { en: "Skincare Products", ar: "منتجات العناية بالبشرة" },
    "nav.hairTypes": { en: "Hair Types & Conditions", ar: "أنواع الشعر والحالات" },
    "nav.hairRoutines": { en: "Hair Routines", ar: "روتين العناية بالشعر" },
    "nav.haircareProducts": { en: "Haircare Products", ar: "منتجات العناية بالشعر" },
    "nav.skinDesc": { en: "Understand your skin", ar: "افهمي بشرتك" },
    "nav.skincareRoutinesDesc": { en: "Step-by-step guidance", ar: "إرشادات خطوة بخطوة" },
    "nav.skinProductsDesc": { en: "Explore our catalogue", ar: "استكشفي الكتالوج" },
    "nav.hairDesc": { en: "Know your hair", ar: "تعرفي على شعرك" },
    "nav.hairRoutinesDesc": { en: "Care plans by type", ar: "خطط العناية حسب النوع" },
    "nav.hairProductsDesc": { en: "Hair-specific formulas", ar: "تركيبات خاصة بالشعر" },

    // Footer
    "footer.tagline": { en: "Your expert companion for skincare and haircare — evidence-based, beautifully curated.", ar: "رفيقتك المتخصصة في العناية بالبشرة والشعر — مدعومة بالعلم، منتقاة بعناية." },
    "footer.company": { en: "Company", ar: "الشركة" },
    "footer.copyright": { en: "© 2026 RO Beauty Guide. MTI College Graduation Project — Faculty of Pharmacy.", ar: "© 2026 RO Beauty Guide. مشروع تخرج كلية MTI — كلية الصيدلة." },
    "footer.skincareRefs": { en: "Skincare References", ar: "مراجع العناية بالبشرة" },
    "footer.haircareRefs": { en: "Haircare References", ar: "مراجع العناية بالشعر" },

    // Shared section labels
    "label.characteristics": { en: "Characteristics", ar: "الخصائص" },
    "label.tips": { en: "Tips", ar: "النصائح" },
    "label.causes": { en: "Common Causes", ar: "الأسباب الشائعة" },
    "label.severity": { en: "Severity", ar: "الشدة" },
    "label.usage": { en: "How to Use", ar: "طريقة الاستخدام" },
    "label.benefits": { en: "Key Benefits", ar: "الفوائد الرئيسية" },
    "label.ingredients": { en: "Main Ingredients", ar: "المكونات الرئيسية" },
    "label.medicalDetails": { en: "Medical Details", ar: "التفاصيل الطبية" },
    "label.mechanismOfAction": { en: "Mechanism of Action", ar: "آلية العمل" },
    "label.sideEffects": { en: "Potential Side Effects", ar: "الآثار الجانبية المحتملة" },
    "label.contraindications": { en: "Contraindications", ar: "موانع الاستخدام" },
    "label.pregnancySafety": { en: "Pregnancy Safety", ar: "السلامة أثناء الحمل" },
    "label.steps": { en: "Steps", ar: "الخطوات" },
    "label.step": { en: "Step", ar: "خطوة" },
    "label.timing": { en: "Timing", ar: "التوقيت" },
    "label.targetedFor": { en: "Targeted for", ar: "مخصص لـ" },
    "label.allSkinTypes": { en: "All Skin Types", ar: "جميع أنواع البشرة" },
    "label.backToProducts": { en: "Back to Products", ar: "العودة للمنتجات" },
    "label.backToRoutines": { en: "Back to Routines", ar: "العودة للروتين" },
    "label.viewRoutine": { en: "View Routine", ar: "عرض الروتين" },
    "label.viewProducts": { en: "View Products", ar: "عرض المنتجات" },
    "label.learnMore": { en: "Learn More", ar: "اعرف المزيد" },
    "label.pattern": { en: "Hair Pattern", ar: "نمط الشعر" },
    "label.condition": { en: "Condition", ar: "الحالة" },
    "label.skinType": { en: "Skin Type", ar: "نوع البشرة" },
    "label.hairType": { en: "Hair Type", ar: "نوع الشعر" },
    "label.searchPlaceholder": { en: "Search products...", ar: "ابحثي عن منتج..." },
    "label.filterAll": { en: "All", ar: "الكل" },
    "label.noResults": { en: "No products found.", ar: "لم يتم العثور على منتجات." },

    // Page headings – Skincare
    "skincare.types.label": { en: "Know Your Skin", ar: "تعرفي على بشرتك" },
    "skincare.types.title": { en: "Skin", ar: "البشرة" },
    "skincare.types.titleHighlight": { en: "Types.", ar: "الأنواع." },
    "skincare.types.subtitle": { en: "Understanding your skin type is the fundamental first step to building an effective, personalised routine.", ar: "فهم نوع بشرتك هو الخطوة الأساسية الأولى لبناء روتين فعّال ومخصص لك." },
    "skincare.conditions.label": { en: "Skin Conditions", ar: "حالات البشرة" },
    "skincare.conditions.title": { en: "Conditions &", ar: "الحالات &" },
    "skincare.conditions.titleHighlight": { en: "Concerns.", ar: "المخاوف." },
    "skincare.conditions.subtitle": { en: "Clinical guidance for common skin conditions, helping you understand your concerns and find the right solutions.", ar: "إرشادات سريرية للحالات الجلدية الشائعة لمساعدتك في فهم مخاوفك وإيجاد الحلول المناسبة." },
    "skincare.solutions.label": { en: "Evidence-Based Care", ar: "رعاية مبنية على الدليل" },
    "skincare.solutions.title": { en: "Skincare", ar: "روتين" },
    "skincare.solutions.titleHighlight": { en: "Routines.", ar: "العناية." },
    "skincare.solutions.subtitle": { en: "Clinically informed, step-by-step routines built for your specific skin type and conditions.", ar: "روتينات مدروسة سريرياً، خطوة بخطوة، مبنية لنوع بشرتك وحالتها المحددة." },
    "skincare.products.label": { en: "Product Catalogue", ar: "كتالوج المنتجات" },
    "skincare.products.title": { en: "Skincare", ar: "منتجات" },
    "skincare.products.titleHighlight": { en: "Products.", ar: "البشرة." },
    "skincare.products.subtitle": { en: "A curated library of clinically-vetted skincare formulations, explained with full medical transparency.", ar: "مكتبة منتقاة من تركيبات العناية بالبشرة المُراجَعة سريرياً، مشروحة بشفافية طبية كاملة." },

    // Page headings – Haircare
    "haircare.types.label": { en: "Know Your Hair", ar: "تعرفي على شعرك" },
    "haircare.types.title": { en: "Hair", ar: "أنواع" },
    "haircare.types.titleHighlight": { en: "Types.", ar: "الشعر." },
    "haircare.types.subtitle": { en: "Identify your hair type and scalp condition to build a routine that truly works for you.", ar: "حددي نوع شعرك وحالة فروة رأسك لبناء روتين مناسب لك حقاً." },
    "haircare.conditions.label": { en: "Scalp Conditions", ar: "حالات فروة الرأس" },
    "haircare.conditions.title": { en: "Scalp", ar: "حالات" },
    "haircare.conditions.titleHighlight": { en: "Conditions.", ar: "الفروة." },
    "haircare.conditions.subtitle": { en: "Clinical guidance for scalp and hair conditions to help you understand your concerns.", ar: "إرشادات سريرية لحالات الشعر وفروة الرأس لمساعدتك في فهم مخاوفك." },
    "haircare.solutions.label": { en: "Evidence-Based Care", ar: "رعاية مبنية على الدليل" },
    "haircare.solutions.title": { en: "Hair", ar: "روتين" },
    "haircare.solutions.titleHighlight": { en: "Routines.", ar: "الشعر." },
    "haircare.solutions.subtitle": { en: "Step-by-step care routines built for your hair type and scalp condition.", ar: "روتينات عناية خطوة بخطوة مبنية لنوع شعرك وحالة فروة رأسك." },
    "haircare.products.label": { en: "Hair Product Catalogue", ar: "كتالوج منتجات الشعر" },
    "haircare.products.title": { en: "Haircare", ar: "منتجات" },
    "haircare.products.titleHighlight": { en: "Products.", ar: "الشعر." },
    "haircare.products.subtitle": { en: "A curated selection of clinically-vetted haircare formulations with full ingredient transparency.", ar: "مجموعة منتقاة من تركيبات العناية بالشعر المُراجَعة سريرياً مع شفافية كاملة في المكونات." },

    // About page
    "about.label": { en: "About the Project", ar: "عن المشروع" },
    "about.title": { en: "Faculty of", ar: "كلية" },
    "about.titleHighlight": { en: "Pharmacy.", ar: "الصيدلة." },
    "about.subtitle": { en: "A professional graduation project by the Pharmacist Team at MTI College, dedicated to clinical precision in beauty and health.", ar: "مشروع تخرج احترافي من فريق الصيادلة في كلية MTI، مكرس للدقة السريرية في الجمال والصحة." },
    "about.university": { en: "MTI University", ar: "جامعة MTI" },
    "about.universitySubtitle": { en: "Modern University for Technology & Information", ar: "الجامعة الحديثة للتكنولوجيا والمعلومات" },
    "about.missionLabel": { en: "Research Project", ar: "مشروع بحثي" },
    "about.missionTitle": { en: "Clinical Intelligence in Cosmetics", ar: "الذكاء السريري في مستحضرات التجميل" },
    "about.missionP1": { en: "This platform represents the culmination of our research into dermatological and trichological sciences. We identified a critical gap between clinical knowledge and consumer understanding.", ar: "تمثّل هذه المنصة تتويجاً لبحثنا في علوم الجلد والشعر. لقد رصدنا فجوة حرجة بين المعرفة السريرية وفهم المستهلك." },
    "about.missionP2": { en: "As a team of pharmacists from MTI College, we built LumeGuide to provide a professional, evidence-based resource that empowers users to make informed decisions about their skin and hair health through pharmacological accuracy.", ar: "بوصفنا فريقاً من الصيادلة من كلية MTI، بنينا LumeGuide لتوفير مرجع مهني مبني على الأدلة يُمكّن المستخدمين من اتخاذ قرارات واعية بشأن صحة بشرتهم وشعرهم بدقة صيدلانية." },
    "about.valuesLabel": { en: "Our Principles", ar: "مبادئنا" },
    "about.valuesTitle": { en: "Pharmacist", ar: "معايير" },
    "about.valuesTitleHighlight": { en: "Standards.", ar: "الصيادلة." },
    "about.surveyLabel": { en: "Community Impact", ar: "الأثر المجتمعي" },
    "about.surveyTitle": { en: "Share Your Feedback", ar: "شاركي رأيك" },
    "about.surveyText": { en: "As part of our graduation project, your feedback is vital. Please help us evaluate the impact of this resource by participating in our research survey.", ar: "كجزء من مشروع تخرجنا، رأيك غاية في الأهمية. ساعدينا في تقييم أثر هذه المنصة بالمشاركة في استبيان البحث." },
    "about.surveyBtn": { en: "Take Survey", ar: "شاركي في الاستبيان" },
    "about.value1Title": { en: "Evidence-Based", ar: "مبني على الدليل" },
    "about.value1Desc": { en: "Every recommendation is grounded in peer-reviewed research. We never prioritise trends over science.", ar: "كل توصية مبنية على أبحاث محكّمة. لا نُقدّم الاتجاهات على حساب العلم." },
    "about.value2Title": { en: "Transparent", ar: "الشفافية" },
    "about.value2Desc": { en: "Full ingredient transparency, clear medical data, and no sponsored product placements.", ar: "شفافية كاملة في المكونات، بيانات طبية واضحة، ولا إعلانات ممولة." },
    "about.value3Title": { en: "Inclusive", ar: "الشمولية" },
    "about.value3Desc": { en: "We design for all skin types, hair textures, tones, and backgrounds — beauty has no single definition.", ar: "نصمّم لجميع أنواع البشرة وقوام الشعر والألوان والثقافات — فالجمال لا تعريف وحيد له." },
    "about.value4Title": { en: "Accessible", ar: "إمكانية الوصول" },
    "about.value4Desc": { en: "Expert knowledge presented clearly for everyone — from curious beginners to trained professionals.", ar: "معرفة متخصصة مقدّمة بوضوح للجميع — من المبتدئين الفضوليين إلى المحترفين المدرّبين." },

    // Home hero
    "home.heroLabel": { en: "Clinical Beauty Intelligence", ar: "الذكاء السريري في الجمال" },
    "home.heroTitle1": { en: "Science-Led", ar: "عناية" },
    "home.heroTitle2": { en: "Beauty Care", ar: "مبنية على العلم" },
    "home.heroSubtitle": { en: "Evidence-based skincare and haircare guidance — crafted by pharmacists, designed for you.", ar: "إرشادات عناية بالبشرة والشعر مبنية على الأدلة — من صنع صيادلة، مصمّمة لك." },
    "home.exploreSkincare": { en: "Explore Skincare", ar: "استكشفي العناية بالبشرة" },
    "home.exploreHaircare": { en: "Explore Haircare", ar: "استكشفي العناية بالشعر" },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>(() => {
        return (localStorage.getItem("lang") as Lang) || "en";
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
        if (lang === "ar") {
            document.documentElement.style.fontFamily = "'Cairo', 'Tajawal', sans-serif";
        } else {
            document.documentElement.style.fontFamily = "";
        }
    }, [lang]);

    const setLang = (l: Lang) => setLangState(l);

    const t = (key: string): string => {
        return translations[key]?.[lang] ?? translations[key]?.["en"] ?? key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t, isAr: lang === "ar" }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
    return ctx;
}
