import React from 'react'
import { Field } from 'redux-form'
import cl from './Stikers.module.css';
const Barcode = require('react-barcode');
const os = require ('os');
const username = os.userInfo ().username;


class OneStiker extends React.Component {
  constructor(props) {
     super(props);
       this.state = {
         quantity : this.props.quantity,
         hasEditModeValue: false
       };
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleInputChangeQuantity = this.handleInputChangeQuantity.bind(this);
   }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      hasEditModeValue: value
    });
  }
  handleInputChangeQuantity(event) {
    const value =   event.target.value;
    this.setState({
      quantity: value
    });
  }
  render(){
    const dubleCard=()=>{
      this.props.dublecard(this.props.id)
    }
    let delOneStiker=()=>{
     this.props.delonestiker(this.props.id)
    }
    let time = new Date().toLocaleString();
    return(
      <div className = {cl.oneStiker}>
        <div className={cl.editStiker}>
          <div className = {cl.editModeSwitcher}>
            <label htmlFor='enterEditMode'>Редактирование </label>
            <Field name={`${this.props.id}idfield`}
              component="input"
              type="checkbox"
              checked = {this.state.hasEditModeValue}
              onChange={this.handleInputChange}/>
          </div>
            {
            this.state.hasEditModeValue &&
            <div className={cl.editbutton}>
              <button onClick = {dubleCard}>
                Дублировать 
              </button>
              <button onClick = {delOneStiker}>
                Удалить 
              </button>
            </div>
            }
        </div>
        <div className = {cl.stikercontainer} >
          <div className={cl.barcode}>
           <div className={cl.bar}>
            <Barcode 
              height={45} 
              width={1.6} 
              background='#fff' 
              displayValue = {false} 
              value={this.props.article} />
           </div>
          </div>
           <div className={cl.mainstiker}><br/>
            <div className={cl.author}>
              Автор : {username}
            </div>
            <div className={cl.articlerow}>
              <div className={cl.article}>
               <h6>Артикул:</h6>
                <h3>{this.props.article}</h3>
              </div>
              <div className={cl.quantity}>
                <span>Количество:</span>
                 {this.state.hasEditModeValue &&
                    <>

                    <Field name={`${this.props.id}quantity`}
                      component="input"
                      type="text"
                      className={cl.quantityedit}
                      onChange={this.handleInputChangeQuantity}/>


                  </>}
                    <h3>{this.state.quantity}</h3>
                  </div>
                </div>
                <div className = {cl.name}>{this.props.name}</div>
                <div className={cl.storageplace}>
                  <h6>Место на складе:</h6>
                  <div className={cl.place}>
                    <h3>{this.props.storageplace}</h3></div>
                </div>
                <div className={cl.customer}>
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
// значение после  handleInputChangeQuantity остаются только в локальном стейте
export default OneStiker
