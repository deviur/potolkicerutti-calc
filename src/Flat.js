import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';

class Flat extends Component {
    
  render() {
    console.log('Start Flat');
    return (
        <Table striped hover >
            <thead>
            </thead>
            <tbody>
                <tr><a>Добавить помещение</a></tr>
            </tbody>
        </Table>
    );
  }
}

export default Flat;