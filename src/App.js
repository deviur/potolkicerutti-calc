import React, { Component } from 'react';
import Alert from 'react-bootstrap/lib/Alert';

import Itog from './Itog';
import Smeta from './Smeta';

class App extends Component {
  render() {
    return (
        <div>
            <Alert bsStyle="info">
                <strong> ИТОГО: <Itog itog='50000'/></strong>
            </Alert>
            <Smeta />
        </div>
    );
  }
}

export default App;
