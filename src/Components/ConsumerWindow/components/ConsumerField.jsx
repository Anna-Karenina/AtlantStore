import React from 'react';
import { Field, reduxForm } from 'redux-form'


const  validate = values => {
  const errors = {}
  if (!values.consumerName) {
    errors.consumerName = 'Обязательно'
  } else if (values.consumerName.length > 11) {
    errors.consumerName = 'Максумум 11-и значный код'
  } else if (values.consumerName.length < 3) {
    errors.consumerName = 'Минимум 3 символа'
  }
}

let ConsumerField = ({ 
  handleSubmit , 
  submittostatedis, 
  customer,
  valid, 
  reset })=> {
console.log(valid)
 const submittostate =  (values) =>{
    values = {
      id: (customer.length+1).toString(),
      name:values.consumerName
    }
       submittostatedis(values);
       reset();
  }
 return(
  <form onSubmit={handleSubmit(submittostate)}>
   <Field 
    name="consumerName" 
    component="input" 
    type="text"
    placeholder='Ввидите название поставщика'/>
   <button 
    type='submit'>
      Добавить
  </button>
  </form>
)}

ConsumerField = reduxForm({
  form: 'consumerForm',
  validate
})(ConsumerField)

export default ConsumerField
