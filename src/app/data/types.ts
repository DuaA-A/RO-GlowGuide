// ── Data Types ────────────────────────────────────────────────────────────────

export interface Characteristic {
  label: string;
}

export interface SkinType {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  tips: string[];
  image: string; // placeholder
  color: string; // tailwind color key
}

export interface SkinCondition {
  id: string;
  name: string;
  type: string;   // e.g. "Non-inflammatory" | "Inflammatory"
  severity: "Mild" | "Moderate" | "Severe";
  description: string;
  causes: string[];
  image: string;
  color: string;
}

export interface HairType {
  id: string;
  name: string;
  pattern: string; // e.g. "1A – Straight"
  description: string;
  characteristics: string[];
  tips: string[];
  image: string;
  color: string;
}

export interface ScalpCondition {
  id: string;
  name: string;
  severity: "Mild" | "Moderate" | "Severe";
  description: string;
  causes: string[];
  image: string;
  color: string;
}

export interface MedicalDetails {
  mechanismOfAction?: string;
  sideEffects?: string[];
  contraindications?: string[];
  clinicalNotes?: string;
  activeIngredientClass?: string;
  pregnancySafety?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  usage: string;
  mainIngredients: string[];
  benefits: string[];
  image: string; // placeholder
  targetTypes: string[]; // skin or hair type IDs it targets
  medicalDetails?: MedicalDetails;
}

export interface RoutineStep {
  step: number;
  name: string;
  description: string;
  timing: string; // e.g. "AM & PM" | "PM only" | "Weekly"
}

export interface Routine {
  id: string;
  name: string;
  description: string;
  targetType: string;  // which skin/hair type this is for
  steps: RoutineStep[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string; // placeholder
  linkedin: string;
  isLeader?: boolean;
}

export type Category = "skincare" | "haircare";
