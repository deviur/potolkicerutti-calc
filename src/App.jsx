import React, { Component } from 'react';

import Tablo from './Components/Tablo'
//import Smeta from './Components/Smeta';

class App extends Component {

  render() {
    var itog = 50000;
    var skidka_p = 0;
    var skidka_r = 4000;
    
    if (skidka_p>0) {skidka_r = itog*skidka_p/100; itog -= skidka_r;}
    if (skidka_r>0) {skidka_p = (skidka_r/itog)*100; itog -= skidka_r;}
    /* Предполагается, что можно будет в компоненте Tablo кликнуть на itog, 
    skidka_p или skidka_r, после чего можно будет ввести соответствущее
    значение через Тег input. с событием onchange.
      В этом случае в компонент Tablo можно будет передавать только itog, 
    а расчет прибыли реализовать позднее*/    
    
    console.log(Tablo);
    return (
      <Tablo alert='' itog={itog} skidka_p={skidka_p} skidka_r={skidka_r}/>
    );
  }
}

export default App;
