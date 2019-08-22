import './App.css';
import React from 'react';
import {fromFileConsumerAc} from './Redux/FileReducer'
import { connect } from 'react-redux';
import  InterfaceWindow from './Components/InterfaceWindow/InterfaceWindow.jsx';
const fs = require('fs');
const path = require('path')


let consdir = path.join(require('electron').remote.app.getAppPath(), '../', '/Consumer')
console.log(consdir)

class App extends React.Component {
  render(){
    let file = JSON.parse(fs.readFileSync(`${consdir}/Consumer.json` ,function(err, data){
            if(err){console.error(err)}
            else {
            console.log(data);
            }
        }))
    if(!this.props.customer.length ){
     this.props.addNewConsumertoStatedis(file);
    }

    return (
        <div className="App">
            <div className="wrapper">
              <InterfaceWindow />
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
        customer: state.fileReducer.customer
        }
  }
const mapDispatchToProps = (dispatch) =>{
  return{
    addNewConsumertoStatedis: (file)=>{
      dispatch(fromFileConsumerAc(file))
    }
  }
}
export default App = connect (mapStateToProps ,mapDispatchToProps )(App)
