import React, { Component } from 'react';
import './App.css'
import { observer } from 'mobx-react'
import Market from './components/Market';

@observer
class App extends Component {
  render() {    
    return (
      <div className="App">
        Agora
        <Market 
          store={this.props.store}/>
      </div>
    );
  }
}

export default App;