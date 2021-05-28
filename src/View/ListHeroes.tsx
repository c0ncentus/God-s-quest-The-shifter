import React, { Component } from 'react';
import { capacitySkill, heroes } from '../Assets/data';
import OneHeroes from './OneHeroes';
import { Glass } from './Util/All';
import { ListWowify } from './Util/ManyHeroes';
import SkillSelection from './Util/SkillSelection';

class ListHeroes extends Component<any, { nameHero: string | null }> {
  constructor(props: any) {
    super(props)
    this.state = { nameHero: null }
  }
  render() {
    return (<div style={{ width: "100vw" }}>
      {this.state.nameHero === null
        ? <ListWowify {...{
          col: 3, colorLine: "green", items: Object.keys(heroes["Eight"]).map((elHeroName) => {
            const skillHeroes = capacitySkill.filter(x => x.belongTo.includes(elHeroName))
            return {
              colorBox: "crimson",
              title: elHeroName,
              line: [<SkillSelection items={skillHeroes} />, <Glass {...{
                text: "More", onClick: (() => {
                  this.setState({ nameHero: elHeroName })
                })
              }} />],
              img: heroes["Eight"][elHeroName],
              letter: elHeroName[0]
            }
          }),
        }} />
        : <OneHeroes name={this.state.nameHero} />
      }
    </div>
    );
  }
}

export default ListHeroes;
