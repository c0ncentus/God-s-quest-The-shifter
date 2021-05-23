export type EffectOn = "Hero" | "Armies" | "Building"
export type RaritySkill = "banal" | "uncommon" | "rare" | "superRare" | "god";
export type StatSkill = "Armor" | "Charm" | "Damage" | "Speed" | "Intellect"
export type Star = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export interface CapacitySkillProps {
    name: string;
    belongTo: string[];
    rarity: RaritySkill;
    stat: StatSkill;
    effect: {
        nbr: number;
        isPrct: boolean;
        stat: StatSkill;
        detail: string;
        on: EffectOn;
    }[]
}