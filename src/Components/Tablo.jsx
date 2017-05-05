import React, { Component, PropTypes } from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Table from 'react-bootstrap/lib/Table';

class Tablo extends Component {
  
  static propTypes = {
    alert: PropTypes.string,
    itog: PropTypes.number.isRequired,    
    skidka_p: PropTypes.number,
    skidka_r: PropTypes.number,
    pribil: PropTypes.number,
  };
  
  toggleState() {
    console.log(this.props.itog);
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
           {this.props.alert? alert:null}
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