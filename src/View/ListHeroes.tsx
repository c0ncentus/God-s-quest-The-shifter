import { Component } from 'react';
import { RaritySkilltoColorBorder } from '../Assets/convertion';
import { capacitySkill, heroes, skill } from '../Assets/data';
import { ListWowify } from './Package/Package';

class ListHeroes extends Component<any, any> {
  render() {
    return (<ListWowify {...{
          col: 3, colorLine: "green", items: Object.keys(heroes["Eight"]).map((elHeroName, i) => {
            const skillHeroes = capacitySkill.filter(x => x.belongTo.includes(elHeroName))

            return {
              colorBox: "crimson",
              title: elHeroName,
              line: [<div> {skillHeroes.map((elSkill) => {
                return <img
                  style={{ width: "20%", borderWidth: 4, borderStyle: "ridge", borderColor: RaritySkilltoColorBorder[elSkill.rarity] }}
                  src={skill[elSkill.stat]}
                />
              })}</div>],
              img: heroes["Eight"][elHeroName],
              letter: elHeroName[0]
            }
          }),
        }} />
    );
  }
}

export default ListHeroes;
