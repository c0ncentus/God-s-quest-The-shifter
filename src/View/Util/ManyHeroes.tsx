import React, { Component, CSSProperties } from "react";
import { StarsHeroestoFolder } from "../../Assets/convertion";
import { capacitySkill, heroes } from "../../Assets/data";
import { StarsHeroes } from "../../Assets/models";
import { Glass } from "./All";
import SkillSelection from "./SkillSelection";

export interface ItemListWowifyProps {
    title: string,
    line: JSX.Element[],
    colorBox: string,
    img?: string,
    letter?: string
}

interface ListWowifyProps {
    items: ItemListWowifyProps[],
    col: number,
    colorLine: string,

}
interface ListWowifyState { }
export class ListWowify extends Component<ListWowifyProps, ListWowifyState>{
    constructor(props: any) {
        super(props)
    }
    render() {
        const cssTwoCol: { resultInner: CSSProperties } = {
            resultInner: { minHeight: 120 }
        }

        return <div className="ListWowify_Cpnt" style={{ gridTemplateColumns: "auto ".repeat(this.props.col) }}>

            {this.props.items.map((el, i) => {
                const result: CSSProperties = {
                    borderBottom: 0,
                    borderRightWidth: i % this.props.col !== this.props.col - 1 ? 2 : 0,
                    borderRightColor: this.props.colorLine,
                    borderRightStyle: "solid",
                }
                const { title, line, colorBox, img, letter } = el;
                const cssTwoColIner: CSSProperties = i % 2 === 0 ? { ...cssTwoCol.resultInner, borderRightWidth: 0 } : { ...cssTwoCol.resultInner, borderRightWidth: 2 };
                const isMore1 = this.props.col > 1;
                return <div className="store-map__result" style={isMore1 ? result : { borderBottomColor: this.props.colorLine }}>
                    <div className="store-map__result-inner" style={isMore1
                        ? cssTwoColIner
                        : {}}>
                        <div className="store-map__result-number" style={{ backgroundColor: colorBox }}>
                            {letter === undefined ? i + 1 : letter}
                        </div>
                        <h1 className="store-map__result-heading">{title}</h1>

                        {img !== undefined ?
                            <div className="store-map__result-image" style={{
                                border: "2px black solid", width: 100, height: 100,
                                position: "absolute", bottom: 0, right: -10
                            }}>
                                <img style={{ backgroundSize: "cover", height: "100%", width: "100%" }} src={img}></img>
                            </div>
                            : <></>}

                        <div className="store-map__result-body">
                            {line.map((word) => {
                                return <p>{word}</p>
                            })}
                        </div>
                    </div>
                </div>
            })}
        </div >
    }
}


export class ListStarHeroes extends Component<{ onClick: any, stars: StarsHeroes }, { isHide: boolean }>{
    constructor(props: any) {
        super(props);
        this.state = { isHide: true }
    }
    render() {
        const { onClick, stars } = this.props;
        const nameStar = StarsHeroestoFolder[this.props.stars];
        return <div>

            <div style={{ display: "flex" }}>
                <h1 style={{ fontSize: 120 }}>{stars} stars</h1>
                <Glass text={this.state.isHide ? "Show" : "Hide"} onClick={() => { this.setState({ isHide: !this.state.isHide }) }} />
            </div>
            <div  style={{ transition: "all 3s", width: this.state.isHide ? 0 : "max-content", overflow: "hidden", height: this.state.isHide ? 0 : "max-content" }}>
                <ListWowify {...{
                    col: 3, colorLine: "green", items: Object.keys(heroes[nameStar]).map((elHeroName) => {
                        const skillHeroes = capacitySkill.filter(x => x.belongTo.includes(elHeroName))
                        return {
                            colorBox: "crimson",
                            title: elHeroName,
                            line: [<SkillSelection items={skillHeroes} />, <Glass {...{
                                text: "More", onClick: (() => {
                                    onClick(elHeroName)
                                })
                            }} />],
                            img: heroes[nameStar][elHeroName],
                            letter: elHeroName[0]
                        }
                    }),
                }} />
            </div>
        </div>
    }
}