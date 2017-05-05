import React, { Component } from 'react';

import Tablo from './Components/Tablo'
//import Smeta from './Components/Smeta';

class App extends Component {

  render() {
    console.log(Tablo);
    return (
      <Tablo alert='' itog={45000} pribil={8000} skidka_p={10} skidka_r={5000}/>
    );
  }
}

export default App;
