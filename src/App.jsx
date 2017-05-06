import React, { Component } from 'react';

import Tablo from './Components/Tablo'
//import Smeta from './Components/Smeta';

class App extends Component {
  constructor() {
      super();
      this.state = {
        itogSmeti: 50000,
        itog: 50000,
        skidka_r: 0,
        skidka_p: 0
      }
  }
  //CallBack
  handleUserClick(id){
    console.log('App: '+ id);
    switch(id){
      case 'itog':
        console.debug('App: case Itog (' + id + ")");
        var itog = Number (prompt("Итог:", this.state.itogSmeti));
        if (itog<=this.state.itogSmeti){
          this.setState({
            itog: itog,
            skidka_r: (this.state.itogSmeti-itog),
            skidka_p: (((this.state.itogSmeti-itog)/this.state.itogSmeti)*100)
          })
        }
        console.debug(this.state)
        break;

      case 'skidka_p': console.debug('App: case Skidka_p (' + id + ")")
        var skidka_p = Number (prompt("Скидка в %:", this.state.skidka_p));
        if (skidka_p>0){
          this.setState({
            itog: (this.state.itogSmeti-this.state.itogSmeti*skidka_p/100),
            skidka_r: (this.state.itogSmeti*skidka_p/100),
            skidka_p: skidka_p
          })
        }
        console.debug(this.state)
        break;

      case 'skidka_r': console.debug('App: case Skidka_r (' + id + ")")
        var skidka_r = Number (prompt("Скидка в рублях:", this.state.skidka_r));
        if (skidka_r>0){
          this.setState({
            itog: (this.state.itogSmeti-skidka_r),
            skidka_r: skidka_r,
            skidka_p: ((skidka_r/this.state.itogSmeti)*100)
          })
        }
        console.debug(this.state)
        break;

      case 'pribil': console.debug('App: case Pribil (' + id + ")")
        break;

        default: console.debug('App: case Default (' + id + ")")
    }
  }

  render() {
    console.debug(this.state)

    return (
      <Tablo onUserClick={this.handleUserClick.bind(this)} alert='' itog={this.state.itog} skidka_p={this.state.skidka_p} skidka_r={this.state.skidka_r}/>
    );
  }
}

export default App;
