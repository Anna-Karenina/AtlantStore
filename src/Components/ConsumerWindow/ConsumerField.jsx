import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import {fromConsFieldToStateAc} from './../../Redux/FileReducer'



let ConsumerField = ({ handleSubmit , submittostatedis, customer})=> {
 const submittostate =  (values) =>{
    values = {
      id: (customer.length+1).toString(),
      name:values.consumerName
    }
       submittostatedis(values)
  }
 return(
  <form onSubmit={handleSubmit(submittostate)}>
   <Field name="consumerName" component="input" type="text"
          placeholder='ввидите название поставщика'/>
   <button type='submit'>Добавить</button>
  </form>
)}

const mapDispatchToProps = (dispatch) =>{
  return{
  submittostatedis: (values)=>{
      dispatch(fromConsFieldToStateAc(values))
    }
  }
}

ConsumerField = reduxForm({
  form: 'consumerForm'
})(ConsumerField)

ConsumerField = connect( state =>({
  customer: state.fileReducer.customer
}),
  mapDispatchToProps
)(ConsumerField)



export default ConsumerField
