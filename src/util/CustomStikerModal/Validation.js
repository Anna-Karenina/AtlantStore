import React from 'react'
import cl from './../Navbar/button/Buttonwcc.module.css'
const  validate = values => {
  const errors = {}
  if (!values.article) {
    errors.article = 'Обязательно!'
  } else if (values.article.length > 11) {
    errors.article = 'Максумум 11-и значный код!'
  } else if (values.article.length < 3) {
    errors.article = 'Минимум 3 символа!'
  }

  if (!values.name) {
    errors.name = 'Обязательно!'
  } else if (values.name.length > 24) {
    errors.name = 'Максумум 24 символа!'
  }

  if (!values.storageplace) {
    errors.storageplace = 'Обязательно!'
  } else if (values.storageplace.length > 5) {
    errors.storageplace  = 'Максумум 5 символов!'
  } 

  if (!values.quantity) {
    errors.quantity = 'Обязательно!'
  } else if (isNaN(Number(values.quantity))) {
    errors.quantity = 'Укажите число!'
  } 
  return errors
}

const RenderField = ({ input, label, type, meta: { touched, error,  } }) => (
  <div >
    <input {...input} 
      placeholder={touched &&  error ? error : label }
      type={type} 
      className={cl.fields}/>
      <i style ={{ color: 'red'}}>{touched &&  error ? error : null } </i>
  </div>
)

// const RenderField = ({ input, label, type, meta: { touched, error,  } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type}/>
//       {touched && ((error && <span>{error}</span>) )}
//     </div>
//   </div>
// )

// const SyncValidationForm = (props) => {
//   const { handleSubmit, pristine, reset, submitting } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <Field name="username" type="text" component={renderField} label="Username"/>
//       <Field name="email" type="email" component={renderField} label="Email"/>
//       <Field name="age" type="number" component={renderField} label="Age"/>
//       <div>
//         <button type="submit" disabled={submitting}>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//       </div>
//     </form>
//   )
// }

export {
  validate,
  RenderField,
}  