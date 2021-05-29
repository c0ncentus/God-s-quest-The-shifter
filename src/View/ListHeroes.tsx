import React, { Component } from 'react';
import { FormSkill } from './Forms';
import OneHeroes from './OneHeroes';
import { ListStarHeroes } from './Util/ManyHeroes';

class ListHeroes extends Component<any, { nameHero: string | null }> {
  constructor(props: any) {
    super(props);
    this.setNull = this.setNull.bind(this);
    this.setHero = this.setHero.bind(this);
    this.state = { nameHero: null }
  }

  setNull() {
    this.setState({ nameHero: null })
  }
  setHero(nameHero: string) {
    this.setState({ nameHero })
  }
  render() {
    return (<div style={{ width: "100vw" }}>
      {this.state.nameHero === null
        ? <>

          {/* <FormSkill /> */}
          <ListStarHeroes stars={8} onClick={this.setHero } />
          <ListStarHeroes stars={7} onClick={this.setHero } />
          <ListStarHeroes stars={6} onClick={this.setHero } />
        </>
        : <OneHeroes name={this.state.nameHero} onClick={() => { this.setNull() }} />
      }
    </div>
    );
  }
}

export default ListHeroes;
