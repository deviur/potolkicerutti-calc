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
  
  handleClick(event) {
    console.log(event.target.id);
    this.props.onUserClick(event.target.id);
  }

  render() {
    
    var itog =  "ИТОГО: "+this.props.itog;
    var skidka_p;
    var skidka_r;
    var pribil;
    
    if (this.props.skidka_p>0) skidka_p = 'Предоставлена скидка: ' + this.props.skidka_p + '%';
    if (this.props.skidka_r>0) skidka_r = this.props.skidka_r;
    if (this.props.pribil>0) pribil = '(' + this.props.pribil + ')';
      
    var alert = (<thead>
      <tr>
        <th colSpan="4" width="60%" >{this.props.alert}</th>
      </tr>
    </thead>);
    
    return (
      <Alert bsStyle={this.props.alert?'danger':'info'}>
        <Table condensed bordered>
           {this.props.alert? alert:null}
          <tbody>
            <tr style={{fontWeight: 'bolder'}}>
              
              <td id='itog'     width='25%' onClick={this.handleClick.bind(this)}>{itog}</td>
              <td id='skidka_p' width='25%' onClick={this.handleClick.bind(this)}>{skidka_p} </td>
              <td id='skidka_r' width='25%' onClick={this.handleClick.bind(this)}>{skidka_r}</td>
              <td id='pribil'   width='25%' onClick={this.handleClick.bind(this)}>{pribil}</td>
              
            </tr>
          </tbody>
        </Table>
      </Alert>
    );
  }
}

export default Tablo;
