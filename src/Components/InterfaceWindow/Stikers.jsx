import React from 'react'
import { Link } from 'react-router-dom'
import CustomerListRedux from './util/customerlist/CustomerList';
import cl from './Stikers.module.css';
import ReactToPrint from 'react-to-print';
import OneStiker from './OneStiker';

class Stikers extends React.Component {
  constructor(props){
  super(props);
    this.componentRef = React.createRef()
}
submit = (values) => {
console.log(values)
}
  render(){
    console.log(this)
    let selm = this.props.files.map(p => <OneStiker
      delonestiker ={this.props.delonestiker}
      dublecard ={this.props.dublecard}
       key = {p.id}
       id={p.id}
       article={p.article}
       name={p.name}
       quantity={p.quantity}
       storageplace = {p.storageplace}
       customer = {p.customer}
        /> )

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
          <form   ref={this.componentRef} onSubmit={this.props.handleSubmit(this.submit)} >
            {selm}
          </form>
        </div>
    </div>
          )
        }
      }

  export default Stikers;
