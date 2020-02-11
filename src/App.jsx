import './coreStyle.css';
import fs  from 'fs'
import React from 'react';
import {fromFileConsumerAc} from './Redux/ConsumerReducer'
import { connect } from 'react-redux';
import  InterfaceWindow from './Components/InterfaceWindow/InterfaceWindow.jsx';
import { consumerdir } from './core'
import "bootstrap/scss/bootstrap.scss";



const App = ({ customer, addConsumerFileToState })=> {
  let file = JSON.parse(
   fs.readFileSync(`${consumerdir}/Consumer.json` , (err, data)=>{
    if(err){ alert(err) }
     else {
      console.log(data);
     }
   })
  )
  if(customer.length === 0 ){
   addConsumerFileToState(file);
   console.log('shit Happines')
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
    }
  }
}
export default  connect(mapStateToProps, mapDispatchToProps )(App)
