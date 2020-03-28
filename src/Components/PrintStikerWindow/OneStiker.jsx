import React from 'react'
import { Field } from 'redux-form'
import cl from './Stikers.module.css';
import classNames from 'classnames/bind'
const Barcode = require('react-barcode');
const os = require ('os');
const username = os.userInfo ().username;

let cx = classNames.bind(cl)




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
    let oneStiker = cx({
      oneStiker_69x60: this.props.StikerSize === '69x60',
      oneStiker_59x60: this.props.StikerSize === '59x60',
    })
    let stikercontainer = cx({
      stikercontainer_69x50: this.props.StikerSize === '69x60',
      stikercontainer_59x60: this.props.StikerSize === '59x60',
    })
    let barcode = cx({
      barcode_69x60: this.props.StikerSize === '69x60',
      barcode_59x60: this.props.StikerSize === '59x60',
    })
    let author = cx({
      author_69x60: this.props.StikerSize === '69x60',
      author_59x60: this.props.StikerSize === '59x60',
    })
    let customer = cx({
      customer_69x60: this.props.StikerSize === '69x60',
      customer_59x60: this.props.StikerSize === '59x60',
    })
    return(
      <div className = {oneStiker}>
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
        <div className = {stikercontainer} >
          <div className={barcode}>
           <div className={cl.bar}>
            <Barcode 
              height={45} 
              width={3} 
              background='#fff' 
              displayValue = {false} 
              value={this.props.article.replace(/[\s{2,}]+/g, '')} />
           </div>
           {console.log(this.props.article.replace(/[\s{2,}]+/g, ''))}
          </div>
           <div className={cl.mainstiker}><br/>
            <div className={author}>
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
                <div className={customer}>
                  <h6>Поставщик: {this.props.customer}</h6>
                </div>
                <div className={cl.time}>
                  <h6>Время: {time} </h6>
                </div>
              </div>
            </div>
          </div>
        )}
      }
// значение после  handleInputChangeQuantity остаются только в локальном стейте
export default OneStiker
