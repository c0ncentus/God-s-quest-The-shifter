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
        stat: "Armor",
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
    }
]


const AllHeroes = [
    ""
]

