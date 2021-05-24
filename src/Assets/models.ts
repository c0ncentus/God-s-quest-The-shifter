const Arr_EffectOn = ["Hero", "Armies", "Building", "other"]
const Arr_RaritySkill = ["banal", "uncommon", "rare", "superRare", "god"]
const Arr_StatSkill = ["Armor", "Charm", "Damage", "Speed", "Intellect", "other"]
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


export const formSkillScheme = {
    "title": "A Skill Heroes Form",
    "description": "All response goes will be send by email",
    "type": "object",
    "definitions": {
        "effectOn": {
            "type": "string",
            "enum": Arr_EffectOn
        },
        "raritySkill": {
            "type": "string",
            "enum": Arr_RaritySkill
        },
        "statSkill": {
            "type": "string",
            "enum": Arr_StatSkill
        }
    },
    "properties": {
        "name": {
            "type": "string"
        },
        "belongTo": {
            "type": "array",
            "title": "heroes name have this skill",
            "items": {
                "type": "string"
            }
        },
        "rarity": {
            "title": "Rarity => white, green, blue, purple, gold",
            "$ref": "#/definitions/raritySkill"
        },
        "stat": {
            "$ref": "#/definitions/statSkill"
        },
        "effect": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "nbr": {
                        "type": "number",
                        "title": "Number on effective skill"
                    },
                    "isPrct": {
                        "type": "boolean",
                        "title": "Yes=> +3% No => +3"
                    },
                    "stat": {
                        "$ref": "#/definitions/statSkill"
                    },
                    "detail": {
                        "title": "Detail is description of the skill if is more particular",
                        "type": "string"
                    },
                    "on": {
                        "$ref": "#/definitions/effectOn"
                    }
                }
            }
        }
    }
}




