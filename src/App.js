import './App.css';
import React from 'react';
import  InterfaceWindow from './Components/InterfaceWindow/InterfaceWindow.jsx';

class App extends React.Component {
  render(){
    return (
        <div className="App">
            <div className="wrapper">
              <InterfaceWindow />
            </div>
        </div>
    )
  }
}

export default App
