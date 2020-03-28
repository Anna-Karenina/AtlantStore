import './coreStyle.scss';
import fs  from 'fs'
import React from 'react';
import {fromFileConsumerAc} from './Redux/ConsumerReducer'
import {fromFileSettingsAc} from './Redux/ActionCreators'
import { connect } from 'react-redux';
import  InterfaceWindow from './Components/InterfaceWindow/InterfaceWindow.jsx';
import { consumerdir } from './core'

const App = ({ customer, addConsumerFileToState, fromFileSettingsAc })=> {
  const Consumer = JSON.parse(
   fs.readFileSync(`${consumerdir}/Consumer.json` , (err, data)=>{
    if(err){ alert(err) }
     else {
      console.log(data);
     }
   })
  )
  const SettigsFile = JSON.parse(
   fs.readFileSync(`${consumerdir}/Settings.json` , (err, data)=>{
    if(err) alert(err) 
    else {
      console.log(data);
     }
   })
  )

  if(customer.length === 0 ){
   addConsumerFileToState(Consumer);
   fromFileSettingsAc(SettigsFile);
   console.log('shINIT Happines')
  }
  return (
   <div className="App">
    <div className="wrapper">
     <InterfaceWindow />
    </div>
   </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    customer: state.customerReducer.customer
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addConsumerFileToState: (file)=>{
      dispatch(fromFileConsumerAc(file))
    },
    fromFileSettingsAc: (file) =>{
      dispatch(fromFileSettingsAc(file))
    }
  }
}
export default  connect(mapStateToProps, mapDispatchToProps )(App)
