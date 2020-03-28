import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap';


const  validate = values => {
  const errors = {}
  if (!values.consumerName) {
    errors.consumerName = 'Обязательно'
  } else if (values.consumerName.length > 11) {
    errors.consumerName = 'Максумум 11-и значный код'
  } else if (values.consumerName.length < 3) {
    errors.consumerName = 'Минимум 3 символа'
  }
  return errors
}

const ConsumerField = (props)=> {
const { 
  handleSubmit , 
  submittostatedis, 
  customer,
  valid, 
  errors,
  reset } = props
  console.log(props)
  
  const checkfreeId = () =>{
    let newid  = customer.length+1
    let checkarr = customer.findIndex(i => i.id === newid) 
    if(checkarr === -1){
      console.log('новый айди')
      return newid
    }
    else if(checkarr !== -1){
      console.log('такой Айди существует')
     return newid  = customer.length+1
    } 
    return Number(newid)
  }
  
 const submittostate =  (values) =>{
    values = {
      id: checkfreeId(),
      name:values.consumerName
    }
       submittostatedis(values);
       reset();
  }
 return(
   <form onSubmit={handleSubmit(submittostate)}>
     {console.log(errors)}
     {console.log(valid)}
   <Field 
    name="consumerName" 
    component="input" 
    type="text"
    placeholder='Ввидите название поставщика'/>
   <Button 
    variant={valid ? "secondary"  : "outline-secondary"}
    type='submit'
    disabled = {!valid} >
      Добавить
   </Button>
  </form>
)}


export default reduxForm({
  form: 'consumerForm',
  validate
})(ConsumerField)
