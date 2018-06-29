import React, { Component } from 'react';

import { Provider } from "react-redux";
import './App.css';
import configureStore from './store/configure-store';
import './assests/css/custom.css'
import './assests/css/custom.min.css'
import './assests/css/style.css'

const store = configureStore();
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            variable :0
        }
        this.mainMethodCall = this.mainMethodCall.bind(this)
    }

    mainMethodCall(){
        this.setState({variable:1})
    }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
