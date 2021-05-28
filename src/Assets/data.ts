import { CapacitySkillProps } from "./models";

export interface KeyValue { [key: string]: any; }

function assign(obj: { [x: string]: any; }, keyPath: string[], value: any) {
    const lastKeyIndex = keyPath.length - 1;
    for (var i = 0; i < lastKeyIndex; ++i) {
        const key = keyPath[i];
        if (!(key in obj)) {
            obj[key] = {}
        }
        obj = obj[key];
    }
    obj[keyPath[lastKeyIndex]] = value;
}
function importFolder(r: any, isImgArray: boolean = true, isDeep: boolean = false, replace: RegExp[] = []): any[] | KeyValue {
    let images: KeyValue = {};
    let img: any[] = [];
    let res: any;
    if (isImgArray) { return Object(r).keys().map((item: string) => { img.push(r(item)); return img }); }
    else {
        res = Object(r).keys().map((item: string) => {
            let str = item.replace(/\.(png|jpe?g|svg|webp|gif|txt)$/, "")
            replace.forEach((rgx) => { str = str.replace(rgx, ""); })
            str = str.replace('./', '');
            if (/.+\/.+/.test(str) && isDeep) { const splitStr = str.split("/"); assign(images, splitStr, r(item).default) }
            else { images[str] = r(item).default; }
            return images;
        });
        // have 56 object ????
        return res[0] as KeyValue
    }
}

export const heroes = importFolder(require.context("./heroes", true), false, true) as KeyValue
export const skill = importFolder(require.context("./skill", true), false, true) as KeyValue




export const capacitySkill: CapacitySkillProps[] = [
    {
        name: "", belongTo: ["Athena"],
        rarity: "superRare",
        stat: "Shield",
        effect: [
            {
                nbr: 120,
                isPrct: true,
                stat: "Armor",
                detail: "light armor",
                on: "Armies",
            },
            {
                nbr: 120,
                isPrct: true,
                stat: "Armor",
                detail: "light armor",
                on: "Armies",
            },

        ],
    },
    {
        name: "", belongTo: ["Athena"],
        rarity: "superRare",
        stat: "Speed",
        effect: [
            {
                nbr: 65,
                isPrct: true,
                stat: "Speed",
                detail: "",
                on: "Armies",
            }
        ]
    },
    {
        name: "", belongTo: ["Athena"],
        stat: "Intellect",
        rarity: "god",
        effect: [
            {
                nbr: 300,
                isPrct: true,
                stat: "Intellect",
                detail: "",
                on: "Hero",
            }
        ]
    },
    {
        name: "", belongTo: ["Athena"],
        rarity: "superRare",
        stat: "Damage",
        effect: [
            {
                nbr: 95,
                isPrct: true,
                stat: "Damage",
                detail: "",
                on: "Armies",
            }
        ]
    },
    {
        "belongTo": ["Heracles"],
        "effect": [
            { nbr: 30, isPrct: true, stat: "Strenght", detail: "Strenght", on: "Hero" },
            { nbr: -90, isPrct: true, stat: "Intellect", on: "Hero", detail: "" }
        ],
        name: "Curse of Hera", rarity: "uncommon", stat: "Charm"
    },
    {
        belongTo: ["Heracles"],
        effect: [
            { nbr: 70, isPrct: true, stat: "Damage", on: "Hero", detail: "" },
            { nbr: -90, isPrct: true, stat: "Control", detail: "", on: "Hero" }
        ],
        rarity: "rare", stat: "Damage", name: ""
    },

    {
        belongTo: ["Heracles"],
        effect: [
            { nbr: 200, isPrct: true, stat: "Damage", on: "Hero", detail: "" },
            { nbr: 100, "isPrct": true, stat: "HP", detail: "HP", on: "Hero" }
        ],
        rarity: "god", stat: "Damage", name: ""
    },
    {
        belongTo: ["Artemis"],
        effect: [
            { nbr: 60, isPrct: true, stat: "Damage", on: "Hero", detail: "" },
            { nbr: 10, isPrct: true, stat: "HP", detail: "", on: "Hero" }
        ],
        rarity: "rare", stat: "Damage", name: ""
    },

    {
        belongTo: ["Artemis"],
        effect: [
            { nbr: 300, isPrct: true, stat: "Damage", detail: "Bowman, Longbowman, Elf Archer, and Part-Time Angel", on: "Armies" }
        ],
        name: "", rarity: "god", stat: "Damage"
    },


    {
        belongTo: ["Artemis"],
        effect: [
            { nbr: 70, isPrct: true, stat: "Damage", detail: "Archery Attacks Randomly", on: "Armies" }
        ], rarity: "superRare", stat: "WarChest", name: ""
    },

    {
        belongTo: ["Hecate"], effect: [
            { isPrct: true, nbr: 30, stat: "Speed", on: "Hero", detail: "" }
        ],
        rarity: "uncommon", stat: "Speed", name: ""
    },

    {
        belongTo: ["Hecate"],
        effect: [
            { isPrct: true, nbr: 250, stat: "Speed", on: "Armies", detail: "of Wizardry" }
        ], rarity: "god", stat: "Damage", name: ""
    },

    {
        "belongTo": ["Apollon"], "effect": [
            { isPrct: true, nbr: -90, stat: "Charm", on: "Hero" }
        ], rarity: "uncommon", stat: "Charm"
    },

    {
        "belongTo": ["Apollon"],
        "effect": [
            { isPrct: true, nbr: 150, stat: "Luck", on: "Hero" },
            { nbr: 100, isPrct: true, stat: "Dextirity", on: "Hero" }
        ], rarity: "superRare", stat: "Charm"
    },

    {
        belongTo: ["Apollon"],
        effect: [
            { isPrct: true, nbr: 300, stat: "Intellect", on: "Hero" }],
        rarity: "god",
        stat: "Intellect"
    },

    {
        belongTo: ["Apollon"],
        effect: [
            { "isPrct": true, "nbr": 50, "stat": "Damage", "on": "Armies", "detail": "Of every Branch" }
        ], rarity: "uncommon", stat: "Damage"
    },
    { "belongTo": ["Hermes"], "effect": [{ "nbr": 120, "isPrct": true, "stat": "Speed", on: "Hero" }], stat: "Speed", "rarity": "god" },
    { "belongTo": ["Hermes"], "effect": [{ "nbr": 100, "isPrct": true, "stat": "Damage", "detail": "Cavlry Attacks the Rear of Cavalry and Damage", "on": "Armies" }], "rarity": "superRare", "stat": "WarChest" },
    { "belongTo": ["Uranus"], "effect": [{ "nbr": 150, "isPrct": true, "stat": "Wood", "detail": "When assigned to Sawmil", "on": "Building" }], "rarity": "god", "stat": "Wood" },
    { "belongTo": ["Uranus"], "effect": [{ "nbr": -50, "isPrct": true, "stat": "DemonicChest", "detail": "Food Cost of Every Branch", "on": "Armies" }], "rarity": "god", "stat": "DemonicChest" },
    { "belongTo": ["Uranus"], "effect": [{ "nbr": 4, "isPrct": false, "stat": "King", "detail": "Level of More Intel +4 when assigned to Castle", "on": "Building" }], "rarity": "god", "stat": "King" },
    { "belongTo": ["Uranus"], "effect": [{ "nbr": 750, "isPrct": true, "stat": "Armor", "detail": "Light Armor of Light Cavalry", "on": "Armies" }], "rarity": "god", "stat": "Shield" },
    { "belongTo": ["Cronus"], "effect": [{ "nbr": -20, "isPrct": true, "stat": "Trade", "detail": "Tade Cooldown when assigned to Trade Post", "on": "Building" }], "rarity": "god", "stat": "Trade" },
    { "belongTo": ["Cronus"], "effect": [{ "nbr": 150, "isPrct": true, "stat": "Food", "detail": "When assigned to Farm", "on": "Building" }, { "nbr": 100, "isPrct": true, "stat": "Wood", "detail": "When assigned to Farm", "on": "Building" }], "rarity": "god", "stat": "Food" },
    { "belongTo": ["Cronus"], "effect": [{ "nbr": 2000, "isPrct": false, "stat": "Damage", "detail": "When assigned to Farm", "on": "Hero" }], "rarity": "god", "stat": "DemonicChest" },
    {
        "belongTo": ["Cronus"],  effect: [
            { "nbr": 40000, "isPrct": false, "stat": "Food", "detail": "When assigned to Castle", "on": "Building" }, 
            { "nbr": 40000, "stat": "Wood", isPrct: false,  "detail": "When assigned to Castle", "on": "Building" }
        ],  "rarity": "god", "stat": "DemonicChest"
    },
    { "belongTo": ["Chaos"], "effect": [{ "nbr": 3000000, "isPrct": false, "stat": "Luck", "detail": "Load Capacity", "on": "Hero" }], "rarity": "superRare", "stat": "WarChest" },
    { "belongTo": ["Chaos"], "effect": [{ "nbr": -10, "isPrct": true, "stat": "Luck", "detail": "Travel Time when assigned to Castle", "on": "Building" }], "rarity": "superRare", "stat": "King" },
    { "belongTo": ["Chaos"], "effect": [{ "nbr": 5000000, "isPrct": false, "stat": "Luck", "detail": "Load capacity", "on": "Hero" }], "rarity": "god", "stat": "DemonicChest" },
    { "belongTo": ["Chaos"], "effect": [{ "nbr": 30, "isPrct": true, "stat": "Damage", "detail": "Damage Part-Time Angels Attack First", "on": "Armies" }], "rarity": "god", "stat": "WarChest" },
    
    { "belongTo": ["Hera"], "effect": [{ "nbr": 34, "isPrct": true, "stat": "Speed", "on": "Hero" }], "rarity": "uncommon", "stat": "Speed" },
    { "belongTo": ["Hera"], "effect": [{ "nbr": 150, "isPrct": true, "stat": "Iron", "detail": "When assigned to Iron Mine", "on": "Building" }, { "nbr": 100, "isPrct": true, "stat": "Wood", "detail": "When assigned to Iron Mine", "on": "Building" }], "rarity": "god", "stat": "Iron" },
    { "belongTo": ["Hera"], "effect": [{ "nbr": 200, "isPrct": true, "stat": "Iron", "on": "Hero" }, { "nbr": 200, "isPrct": true, "stat": "Strenght", "on": "Building" }], "rarity": "god", "stat": "Intellect" },
    
    
    { "belongTo": ["Prometheus"], "effect": [{ "nbr": 35, "isPrct": true, "stat": "MagicArmor", "detail": "Magic Armor of Every Branch", "on": "Armies" }], "rarity": "rare", "stat": "MagicArmor" },
    { "belongTo": ["Prometheus"], "effect": [{ "nbr": 110, "isPrct": true, "stat": "MagicArmor", "detail": "Magic Armor of Every Branch", "on": "Armies" }], "rarity": "god", "stat": "MagicArmor" },
    { "belongTo": ["Prometheus"], "effect": [{ "nbr": 270, "isPrct": true, "stat": "Speed", "detail": "of Wizardry", "on": "Armies" }], "rarity": "god", "stat": "Damage" },
    { "belongTo": ["Prometheus"], "effect": [{ "nbr": 80, "isPrct": true, "stat": "Damage", "detail": "of Wizards and attacks Stupid Titans first", "on": "Armies" }], "rarity": "superRare", "stat": "WarChest" },
    
    
    { "belongTo": ["Briareus"], "effect": [{ "nbr": 40, "isPrct": true, "stat": "Speed", "detail": "of Artillery", "on": "Armies" }], "rarity": "uncommon", "stat": "Damage" },
    { "belongTo": ["Briareus"], "effect": [{ "nbr": 150, "isPrct": true, "stat": "HP", "detail": "of Stupid Titan", "on": "Armies" }], "rarity": "uncommon", "stat": "HP" },
    // { "belongTo": ["Heracles"], "effect": [{ "nbr": 30, "isPrct": true, "stat": "Strenght", "on": "Hero" }, { "nbr": -90, "isPrct": true, "stat": "Intellect", "on": "Hero" }], "rarity": "uncommon", "stat": "Charm" },
    // { "belongTo": ["Heracles"], "effect": [{ "nbr": 70, "isPrct": true, "stat": "Damage", "on": "Hero" }, { "nbr": -90, "isPrct": true, "stat": "Control", "on": "Hero" }], "rarity": "rare", "stat": "Damage" },
    // { "belongTo": ["Heracles"], "effect": [{ "nbr": 200, "isPrct": true, "stat": "Damage", "on": "Hero" }, { "nbr": 100, "isPrct": true, "stat": "HP", "on": "Hero" }], "rarity": "god", "stat": "Damage" },
    
    { "belongTo": ["Dionysus"], "effect": [{ "nbr": 75, "isPrct": true, "stat": "Damage", "on": "Hero" }], "rarity": "rare", "stat": "Damage" },
    { "belongTo": ["Dionysus"], "effect": [{ "nbr": 75, "isPrct": true, "stat": "Armor", "detail": "Heavy Armor", "on": "Hero" }], "rarity": "rare", "stat": "Armor" },
    { "belongTo": ["Dionysus"], "effect": [{ "nbr": 30, "isPrct": true, "stat": "Control", "on": "Hero" }, { "nbr": -99, "isPrct": true, "stat": "Luck", "detail": "Politics", "on": "Hero" }], "rarity": "uncommon", "stat": "Charm" },
    { "belongTo": ["Dionysus"], "effect": [{ "nbr": 300, "isPrct": true, "stat": "Damage", "detail": "of Wizards attack Wizard first", "on": "Armies" }], "rarity": "god", "stat": "Damage" },
    
    
    { "belongTo": ["Hades"], "effect": [{ "nbr": -12, "isPrct": true, "stat": "Drill", "detail": "when assigned to Arsenal", "on": "Building" }], "rarity": "god", "stat": "Drill" },
    { "belongTo": ["Hades"], "effect": [{ "nbr": -10, "isPrct": true, "stat": "Research", "detail": "when assigned to Laboratory", "on": "Building" }], "rarity": "god", "stat": "Research" },
    { "belongTo": ["Hades"], "effect": [{ "nbr": 150, "isPrct": true, "stat": "Armor", "detail": "of Stupid Titans", "on": "Armies" }, { "isPrct": true, "nbr": 80, "stat": "Damage", "detail": "of Stupid Titans", "on": "Armies" }], "rarity": "god", "stat": "Armor" },
    { "belongTo": ["Hades"], "effect": [{ "nbr": 75000, "isPrct": true, "stat": "Iron", "detail": "When assigned to Castle", "on": "Building" }], "rarity": "god", "stat": "DemonicChest" },
    { "belongTo": ["Gaia"], "effect": [{ "nbr": 3000000, "isPrct": false, "stat": "HP", "detail": "Rempart HP to the Castle when assigned to Castle", "on": "Building" }], "rarity": "god", "stat": "King" },
    { "belongTo": ["Gaia"], "effect": [{ "nbr": 200, "isPrct": true, "stat": "Luck", "detail": "All Ressource when assigned to Castle", "on": "Building" }], "rarity": "god", "stat": "King" },
    { "belongTo": ["Gaia"], "effect": [{ "nbr": 220, "isPrct": true, "stat": "Damage", "detail": "of Stupid Titan", "on": "Armies" }], "rarity": "god", "stat": "Damage" },
    { "belongTo": ["Zeus"], "effect": [{ "nbr": 50, "isPrct": true, "stat": "Speed", "on": "Hero" }, { "nbr": 80, "isPrct": true, "stat": "Armor", "detail": "Light Armor", "on": "Hero" }], "rarity": "rare", "stat": "Speed" },
    { "belongTo": ["Zeus"], "effect": [{ "nbr": 300, "isPrct": true, "stat": "Vitality", "on": "Hero" }], "rarity": "rare", "stat": "Vitality" },
    { "belongTo": ["Zeus"], "effect": [{ "nbr": 300, "isPrct": true, "stat": "Damage", "detail": "of every branch", "on": "Armies" }], "rarity": "superRare", "stat": "Damage" },
]


const AllHeroes = [
    ""
]

