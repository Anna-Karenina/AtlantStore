import React from 'react'
import { withFormik } from 'formik';
import cl from './../Navbar/button/Buttonwcc.module.css'
import { Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import { ipcRenderer } from 'electron';


const CustomStikerModal =(props)=> {
  const [dis, setDis] = React.useState(true)
  const {
    values,
    handleChange,
    handleBlur,
    resetForm,
    handleSubmit,
    isValid,
  } = props;
  
  ipcRenderer.on('done', (event, arg) => {
    setDis(false)
  });
  const print = () =>{
    ipcRenderer.send('open-print')
    resetForm()
  }
 return (
 <Card border='none'>
  <form onSubmit={handleSubmit} >
  <Card.Body>
    <Card.Title>Создание стикера</Card.Title>
    <Card.Text style={{fontSize: '12px', lineHeight: '11px'}}>
      В этом окне можно создать не зависимые наклейки и распечать их
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
    <input
      className={cl.fields}
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.article}
      name='article'
      placeholder="Артикул"
          />
    </ListGroupItem>
    <ListGroupItem>
    <input
      className={cl.fields}
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
      name='name'
      placeholder="Описание"
          />
    </ListGroupItem>
    <ListGroupItem style ={{display: 'flex'}}>          
      <input
        className={cl.minifields}
        name="storageplace"
        value={values.storageplace}
        type="text"
        placeholder="Место"
        onChange={handleChange}
        onBlur={handleBlur}
          />
      <input
        className={cl.minifields}
        name="quantity"
        type="number"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.quantity}
        placeholder="Кол-во"
          />
          </ListGroupItem>
  </ListGroup>
  <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
    <Button 
      disabled = {isValid === true ?  false : true}
      variant="outline-secondary"
      onClick = {handleSubmit}
    >
      Сохранить
    </Button>
    <Button 
      variant="secondary"
      disabled = {dis}
      onClick = {print}
      >
      Печать
    </Button>
  </Card.Body>
  </form>
</Card>
 )
}

const CustomModalСontainer =  withFormik({
  mapPropsToValues: () => ({ 
      article: '' ,
      name: '' ,
      storageplace: '' ,
      quantity: 0,
    }),
    validate: values => {
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
  // else if (values.quantity > 0){
  //   errors.quantity = 'число должно быть больше 0'
  // }
  return errors
},
//validateOnMount:true,
    handleSubmit: (values, { setSubmitting }) => {
        ipcRenderer.send('take-data', values);
        setSubmitting(false);
    },
  
    displayName: 'BasicForm',
  })(CustomStikerModal)

export default CustomModalСontainer
