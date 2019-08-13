import React from 'react'
import cl from './Stikers.module.css';
const Barcode = require('react-barcode');
const os = require ('os');
const username = os.userInfo ().username;

 class OneStiker extends React.Component {
  render(){
       console.log(this)
    let time = new Date().toLocaleString();
    return(
      <div className = {cl.oneStiker}>
        <div className={cl.editStiker}>
          <div className = {cl.editModeSwitcher}>
            <label htmlFor='enterEditMode'> Редктирование</label>
            <input type="checkbox"></input>
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
                <Barcode height={45} width={1.6} background='#fff' displayValue = {false} value={this.props.article} /></div>
              </div>
              <div className={cl.mainstiker}>
                <div className={cl.author}>Автор : {username}</div>
                <div className={cl.articlerow}>
                  <div className={cl.article}>
                  <h6>Артикул:</h6>
                  <h2>{this.props.article}</h2></div>
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

// const selector = formValueSelector('stikerValues');
//       OneStiker = connect(
//         props => {
//           const hasEditModeValue = selector(props, ...props.fileReducer.files.map(e => `${e.id}id`));
//           console.log(hasEditModeValue)
//             return { hasEditModeValue }
//         }
//       )(OneStiker)

export default OneStiker
