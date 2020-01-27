import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import Select from 'react-select'
import { addConsAC } from '../../Redux/FileReducer'


const formatCustomerForSelect = customer =>({
  label: customer.name,
  value: customer.id
})

const mapStateToProps = (state) =>{
  let  initialValues = {}
  initialValues.currentCustomer = (state.customerReducer.customer)
  .map(formatCustomerForSelect);
 return{
   customer: initialValues.currentCustomer
 }
}

const mapDispatchToProps = (dispatch) =>{
  return{
   addConstumerdis: (formData)=>{
     dispatch(addConsAC(formData))
   }
  }
}

let ReduxFormSelect = props => {
  let {input, options} = props;
  return (
    <Select
      {...input}
      onChange={value => input.onChange(value)}
      onBlur={() => input.onBlur(input.value)}
      options={options}
      placeholder={'Выбрать поставщика:'}
    />
  )
}

const CustomerList = props => {
  const { handleSubmit , customer } = props;
  return (
    <form onChange={handleSubmit}>
      <Field 
        name="constumer" 
        component={ReduxFormSelect} 
        options={customer} />
    </form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'customerlist',  enableReinitialize:true,})(CustomerList));
