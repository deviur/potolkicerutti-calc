import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';

import Flat from './Flat';

class Smeta extends Component {

    
  render() {
    console.log('Start Smeta');
    return (
        <Table responsive >
            <thead>
                <tr><h3>Смета</h3></tr>
                <tr><h4>Смета на потолки Черутти</h4></tr>
            </thead>
            <tbody>
                <Flat />
            </tbody>
        </Table>
    );
  }
}

export default Smeta;