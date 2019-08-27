import React from 'react'
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-modal';
import cl from './../Navbar/button/Buttonwcc.module.css'
import {customCardAc} from './../../../Redux/FileReducer'


Modal.setAppElement('#root')

class CustomStikerModal extends React.Component {
  constructor () {
   super();
   this.state = {
    showModal: false
   };
     this.handleOpenModal = this.handleOpenModal.bind(this);
     this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    render () {
console.log(this)
      const submit = (values) => {
        this.props.addConstumerdis(values)
      }
      return (
      <>
      <button className={cl.btn+ ' ' + cl.first} onClick={this.handleOpenModal}>Создать Стикер</button>
        <ReactModal isOpen={this.state.showModal}
         onRequestClose={this.handleCloseModal}
         style={{ overlay: {
            backgroundColor: 'rgba(2,2,2,0.6)',
            width: '100%',
            height: '100%'
          },
                content: {
                    boxShadow: '0 0 8px aliceblue',
                    top: '40%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '250px',
                    borderRadius: '2rem',
                    textAlign: 'center',
                }
              }}>
            <i>Создание стикера</i>
    <form onSubmit={this.props.handleSubmit(submit)} className={cl.form}>
      <div>
        <div className={cl.fieldswrap}>
          <Field
            className={cl.fields}
            name="article"
            component="input"
            type="text"
            placeholder="Артикул"
          />
        </div>
      </div>
      <div>
        <div className={cl.fieldswrap}>
          <Field
            className={cl.fields}
            name="name"
            component="input"
            type="text"
            placeholder="Наименование"
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            className={cl.minifields}
            name="storageplace"
            component="input"
            type="text"
            placeholder="Место"
          />
          <Field
            className={cl.minifields}
            name="quantity"
            component="input"
            type="number"
            placeholder=" Кол-во"
          />
        </div>
        </div>
<div className={cl.buttonstack}>
  <button type="submit">Сохранить</button>
  <Link to='Stikers' ><button>Печать</button></Link>
</div>

    </form>
          </ReactModal>
        </>
      );
    }
  }
const mapDispatchToProps = (dispatch) =>{
  return{
    addConstumerdis: (values)=>{
        values.id = "1"
        dispatch(customCardAc(values))
      }
  }
}
  const CustomModalСontainer = connect (
    null, mapDispatchToProps
  )(reduxForm({
    form: 'stikerValuese'
  })(CustomStikerModal));

export default CustomModalСontainer
