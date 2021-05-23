import React, { Component } from 'react';
import { RaritySkilltoColorBorder } from '../Assets/convertion';
import { capacitySkill, heroes, KeyValue, skill } from '../Assets/data';
import ListHeroes from './ListHeroes';
import { ListWowify } from './Package/Package';

class App extends Component<any, { login: string, password: string }> {
  constructor(props: any) {
    super(props)
    this.state = { login: "", password: "" }
  }
  render() {
    return <div className="App">
      {localStorage.getItem("logIn") !== "God" && localStorage.getItem("logIn") !== "Quest"
        ? <>
          <input type="text" onChange={(el) => {
            this.setState({ login: el.currentTarget.value })
          }} value={this.state.login} />
          <input type="text" onChange={(el) => {
            this.setState({ password: el.currentTarget.value })
          }} value={this.state.password} />
           <button type="button"
           onClick={(el) => {
            localStorage.setItem("logIn", this.state.login)
            localStorage.setItem("logIn", this.state.password)
            window.location.reload()
          }} 
           >Submit</button> 
        </>
        : <ListHeroes />
      }
    </div>
  }
}

export default App;
