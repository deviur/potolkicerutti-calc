import React, { Component } from 'react';


class Itog extends Component {

  constructor(props) {
      super(props);
      this.state = { isOpened: false };
  }

  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }
    
  render() {
    console.log('isOpened', this.state.isOpened);/**/
    return (
        <span onClick={this.toggleState.bind(this)}>{this.props.itog}</span>
    );
  }
}

export default Itog;