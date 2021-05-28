import React, { Component } from 'react';
import { RaritySkilltoColorBorder } from '../../Assets/convertion';
import { skill } from '../../Assets/data';
import { CapacitySkillProps, EffectSkill } from '../../Assets/models';




export function effectMessage(obj: EffectSkill): string {
    const signPlus = obj.nbr > 0 ? "+" : "";
    const signPrct = obj.isPrct ? "%" : "";

    return `${signPlus}${obj.nbr}${signPrct} ${obj.stat} ${obj.detail} ${obj.on}`
}

export function constructSkillMessage(skill: CapacitySkillProps, isSkipName: boolean = false): string {
    const hedear = `${skill.name === undefined ? "" : isSkipName ? "" : `${skill.name}: `}`

    return `${hedear}${skill.effect.map(el => {
        return effectMessage(el)
    }).join("### ###")
        }`
}

class SkillSelection extends Component<{ items: CapacitySkillProps[] }, { iClick: null | number }> {
    constructor(props: any) {
        super(props)
        this.state = { iClick: null }
    }
    render() {
        return (<div style={{ display: "flex" }}>
            {this.props.items.map((elSkill, i) => {
                return <div>
                    <img
                        className={this.state.iClick === i ? "active" : ""}
                        onClick={() => { this.state.iClick === i ? this.setState({ iClick: null }) : this.setState({ iClick: i }) }}
                        style={{ width: "20%", borderWidth: 4, borderStyle: "ridge", borderColor: RaritySkilltoColorBorder[elSkill.rarity] }}
                        src={skill[elSkill.stat]}
                    />
                    {this.state.iClick !== null && this.state.iClick === i
                        ? <p>{constructSkillMessage(elSkill)}</p>
                        : <></>
                    }
                </div>
            })}
        </div>
        );
    }
}

export default SkillSelection;
