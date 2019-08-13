import React from 'react'
import { Link } from 'react-router-dom'
import CustomerListRedux from './util/customerlist/CustomerList';
import cl from './Stikers.module.css';
import { Field } from 'redux-form';

import ReactToPrint from 'react-to-print';
const Barcode = require('react-barcode');
const os = require ('os');
const username = os.userInfo ().username;


export class OneStiker extends React.Component {
  render(){
  let time = new Date().toLocaleString();
  return(
  <div className = {cl.oneStiker}>
    <div className={cl.editStiker}>
      <div className = {cl.editModeSwitcher}>
        <label htmlFor='enterEditMode'> Редктирование</label>
        <Field name={this.props.id + "id"}
              component="input"
              type="checkbox"/>
      </div>
          {this.props.hasEditModeValue &&
          <div>
              <button>Дублировать </button>
              <button>Удалить </button>
          </div>}
    </div>
    <div className = {cl.stikercontainer} >
      <div className={cl.barcode}>
        <div className={cl.bar}>
        <Barcode height={19} width={1.5} background = '#e3e3e3' value={this.props.article} /></div>
        </div>
      <div className={cl.mainstiker}>
        <div className={cl.author}>Автор : {username}</div>
        <div className={cl.articlerow}>
            <div className={cl.article}><h2>{this.props.article}</h2></div>
            <div className={cl.quantity}>
              <h6>Количество:</h6>
              <h3>{this.props.quantity}</h3>
            </div>
        </div>
        <div className = {cl.name}>{this.props.name}</div>
        <div className={cl.storageplace}>
          <h6>Место на складе:</h6>
            <div className={cl.quantity}><h3>{this.props.storageplace}</h3></div>
        </div>
        <div className={cl.whereload}>
          <h6>Поставщик: {this.props.customer}</h6>
        </div>
        <div className={cl.time}>
          <h6>Время отгрузки: {time} </h6>
        </div>
      </div>
    </div>
    </div>
)}
}

class Stikers extends React.Component {
  constructor(props){
  super(props);
    this.componentRef = React.createRef()
  }
  render(){
    let selm = this.props.files.map(p => <OneStiker key = {p.id} id={p.id} article={p.article} name={p.name} quantity={p.quantity} storageplace = {p.storageplace} customer = {p.customer} /> )

    let addConstumer = (formData)=>{
      this.props.addConstumerdis(formData)
    }
        return (
          <div className={cl.windowContainer}>
            <div className={cl.optionMenu}>
            <div className={cl.stickyWrap}>
              <div className={cl.btncont}>
                <Link to='/'><button>назад</button></Link>
              </div>
                <CustomerListRedux onChange={addConstumer}  />
              <div className={cl.btncont}>

                <ReactToPrint
                  trigger={() => <button>печать</button>}
                  content={() => this.componentRef.current}
                  bodyClass = {cl.editStikere}
                />



              </div>
              <div>
                <p className = {cl.comment}>
                  В режиме редактирования доступно изменение значения количества товара в соответствующем поле
                </p>
              </div>
            </div>
            </div>
          <div className = {cl.container} >
            <form onChange={() => this.props.handleSubmit}  ref={this.componentRef} >
            {selm}
            </form>
          </div>
          </div>
       )
  }
}


export default Stikers;
