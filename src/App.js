import React, { Component } from 'react';
import Alert from 'react-bootstrap/lib/Alert';

import Itog from './Itog';

class App extends Component {
  render() {
    return (
        <div>
            <Alert bsStyle="info">
                <strong> ИТОГО: <Itog itog='50000'/></strong>
            </Alert>
        </div>
    );
  }
}

export default App;
