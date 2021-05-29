import React, { Component } from 'react';
import { RaritySkilltoColorBorder } from '../Assets/convertion';
import { capacitySkill, heroes } from '../Assets/data';
import { Glass } from './Util/All';
import { CardBoxRound } from './Util/OneHeroe_Prez';
import { DiamondSentence } from './Util/OneHeroe_Skill';
import { ClassDoubleText } from './Util/OneHeroe_Title';
import { constructSkillMessage, effectMessage } from './Util/SkillSelection';

class OneHeroes extends Component<{ name: string, onClick: any }, any> {

    render() {
        const starOfHeroes = 8;
        const skillHeroes = capacitySkill.filter(x => x.belongTo.includes(this.props.name))
        const DiamondItem = skillHeroes.map((el) => { return { color: RaritySkilltoColorBorder[el.rarity], desc: constructSkillMessage(el, true), title: el.name === undefined ? "NO NAME" : el.name } })
        return (<div style={{ width: "100vw" }}>
            <ClassDoubleText
                {...{
                    mainText: "8 stars !",
                    secondText: { title: this.props.name, color: "crimson" }
                }}
            />
            <CardBoxRound  {...{
                img: heroes["Eight"][this.props.name],
                title: this.props.name,
                desc: "ll",
                bg: "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)"
            }} />
            <DiamondSentence items={DiamondItem} />
            <Glass text="<- Back" onClick={this.props.onClick} />

        </div>
        );
    }
}

export default OneHeroes;
