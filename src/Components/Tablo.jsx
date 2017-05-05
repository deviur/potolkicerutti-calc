import React, { Component } from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Table from 'react-bootstrap/lib/Table';

var itog;

class Tablo extends Component {
  
  toggleState() {
    console.log('this');
  }


  render() {
    
    var itog =  (<strong>ИТОГО:{" "}{this.props.itog}</strong>);
    var skidka_p = this.props.skidka_p;
    var skidka_r = this.props.skidka_r;
    var pribil = this.props.pribil;
    
    var alert = (<thead>
      <tr>
        <th width="60%" >{this.props.alert}</th>
      </tr>
    </thead>);
    
    return (
      <Alert bsStyle={this.props.alert?'danger':'info'}>
        <Table condensed >
           {this.props.alert? alert:""}
          <tbody>
            <tr>
              <td id='itog' width='25%' onClick={this.toggleState.bind(this)}>{itog}</td>
              <td id='skidka_p' width='25%' onClick={this.toggleState.bind(this)}>{(this.props.skidka_p)?'Скидка: ':''}{skidka_p} </td>
              <td id='skidka_r' width='25%' onClick={this.toggleState.bind(this)}>{skidka_r}</td>
              <td id='pribil' width='25%' onClick={this.toggleState.bind(this)}>{"("}{pribil}{")"}</td>
            </tr>
          </tbody>
        </Table>
      </Alert>
    );
  }
}

export default Tablo;