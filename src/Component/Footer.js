import React, { Component } from 'react';
import '../assests/css/custom.css'
import '../assests/css/custom.min.css'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  render() {
    return (
      <footer className="background-style">
        <div className="pull-right">© 2018 company.</div>
        <div className="clearfix"></div>
      </footer>
    );
  }
}

export default Footer