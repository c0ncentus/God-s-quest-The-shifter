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
        belongTo: ["Heracles"],
        effect: [
            { nbr: 70, isPrct: true, stat: "Damage", on: "Hero", detail: "" },
            { nbr: -90, isPrct: true, stat: "Control", detail: "", on: "Hero" }
        ],
        rarity: "rare", stat: "Damage", name: ""
    },
    {
        "belongTo": ["Heracles"],
        "effect": [
            { nbr: 30, isPrct: true, stat: "other", detail: "Strenght", on: "Hero" },
            { nbr: -90, isPrct: true, stat: "Intellect", on: "Hero", detail: "" }
        ],
        name: "Curse of Hera", rarity: "uncommon", stat: "Charm"
    },
    {
        belongTo: ["Heracles"],
        effect: [
            { nbr: 200, isPrct: true, stat: "Damage", on: "Hero", detail: "" },
            { nbr: 100, "isPrct": true, stat: "other", detail: "HP", on: "Hero" }
        ],
        rarity: "god", stat: "Damage", name:""
    },
    {
        belongTo:["Artemis"],
        effect:[
            {nbr:60,isPrct:true,stat:"Damage",on:"Hero", detail:""},
            {nbr:10,isPrct:true,stat:"other",detail:"HP",on:"Hero"}
        ],
        rarity:"rare",stat:"Damage", name:""
    },

    {"belongTo":["Artemis"],"effect":[{"nbr":300,"isPrct":true,"stat":"Damage","detail":"Bowman, Longbowman, Elf Archer, and Part-Time Angel","on":"Armies"}],"rarity":"god","stat":"Damage"},

    {"belongTo":["Artemis"],"effect":[{"nbr":70,"isPrct":true,"stat":"Damage","detail":"Archery Attacks Randomly","on":"Armies"}],"rarity":"superRare","stat":"other"},

    {"belongTo":["Hecate"],"effect":[{"isPrct":true,"nbr":30,"stat":"Speed","on":"Hero"}],"rarity":"uncommon","stat":"Speed"},

    {"belongTo":["Hecate"],"effect":[{"isPrct":true,"nbr":250,"stat":"Speed","on":"Armies","detail":"of Wizardry"}],"rarity":"god","stat":"Damage"},

    {"belongTo":["Appollon"],"effect":[{"isPrct":true,"nbr":-90,"stat":"Charm","on":"Hero"}],"rarity":"uncommon","stat":"Charm"},

    {"belongTo":["Appollon"],"effect":[{"isPrct":true,"nbr":150,"stat":"other","on":"Hero","detail":"Luck"},{"nbr":100,"isPrct":true,"stat":"other","detail":"Dextirity","on":"Hero"}],"rarity":"uncommon","stat":"Charm"}

    {"belongTo":["Appollon"],"effect":[{"isPrct":true,"nbr":300,"stat":"Intellect","on":"Hero"}],"rarity":"god","stat":"Intellect"}

    {"belongTo":["Appollon"],"effect":[{"isPrct":true,"nbr":50,"stat":"Damage","on":"Armies","detail":"Of every Branch"}],"rarity":"uncommon","stat":"Damage"}
]


const AllHeroes = [
    ""
]

