import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, FlaskConical, AlertTriangle, Ban, FileText, Pill } from "lucide-react";
import type { MedicalDetails } from "../data/types";

interface MedicalDetailsPanelProps {
    details: MedicalDetails;
}

export function MedicalDetailsPanel({ details }: MedicalDetailsPanelProps) {
    const [isOpen, setIsOpen] = useState(false);

    const rows = [
        {
            icon: FlaskConical,
            label: "Mechanism of Action",
            content: details.mechanismOfAction,
            type: "text" as const,
        },
        {
            icon: Pill,
            label: "Active Ingredient Class",
            content: details.activeIngredientClass,
            type: "text" as const,
        },
        {
            icon: AlertTriangle,
            label: "Side Effects",
            content: details.sideEffects,
            type: "list" as const,
        },
        {
            icon: Ban,
            label: "Contraindications",
            content: details.contraindications,
            type: "list" as const,
        },
        {
            icon: FileText,
            label: "Clinical Notes",
            content: details.clinicalNotes,
            type: "text" as const,
        },
        {
            icon: FileText,
            label: "Pregnancy Safety",
            content: details.pregnancySafety,
            type: "text" as const,
        },
    ].filter((row) => row.content && (Array.isArray(row.content) ? row.content.length > 0 : true));

    return (
        <div className="medical-panel mt-6">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-[#f2ede7] group"
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-espresso/10 flex items-center justify-center flex-shrink-0">
                        <FlaskConical className="w-4 h-4 text-espresso" />
                    </div>
                    <span className="font-body text-sm font-medium tracking-[0.08em] uppercase text-espresso">
                        View Medical Details
                    </span>
                    <span className="text-xs text-taupe bg-linen border border-warm-beige px-2 py-0.5 rounded-full">
                        Medical / Clinical Use
                    </span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-4 h-4 text-taupe" />
                </motion.div>
            </button>

            {/* Content Panel */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="medical-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-6 pt-2 border-t border-[#D4C5B5]">
                            <div className="space-y-5">
                                {rows.map((row, idx) => {
                                    const Icon = row.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.06, duration: 0.4 }}
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                                                <span className="text-xs uppercase tracking-[0.12em] text-taupe font-medium font-body">
                                                    {row.label}
                                                </span>
                                            </div>
                                            {row.type === "list" && Array.isArray(row.content) ? (
                                                <ul className="space-y-1 pl-5">
                                                    {(row.content as string[]).map((item, i) => (
                                                        <li
                                                            key={i}
                                                            className="text-sm text-mink leading-relaxed list-disc marker:text-gold"
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-sm text-mink leading-relaxed pl-5">
                                                    {row.content as string}
                                                </p>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
