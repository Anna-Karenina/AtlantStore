import React from 'react'
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-modal';
import cl from './../Navbar/button/Buttonwcc.module.css'
import {customCardAc} from '../../Redux/FileReducer'
import { MdChat} from 'react-icons/md'
import {validate, RenderField} from './Validation'
import { Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap';

Modal.setAppElement('#root')



class CustomStikerModal extends React.PureComponent {
  constructor(props) {
   super(props);
   this.state = {
    showModal: false,
    files: []
   };
     this.handleOpenModal = this.handleOpenModal.bind(this);
     this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  componentDidUpdate(prevState){
      if(this.props.files !== prevState.files){
        this.setState((props)=>{
          return { files: this.props.files  }
        })
      }
      return this.state.files
  }
    submit = (values) => {
      this.props.addConstumerdis(values)
             
    }
    handleOpenModal () {
      this.setState({showModal: true});
    }
    handleCloseModal () {
      this.setState({showModal: false});
    }
    render() {
      return (
      <>
      <button 
        className={cl.btn+ ' ' + cl.first} 
        onClick={this.handleOpenModal}>
          <MdChat style ={{ 
              width: '25px', 
              height: 'auto',
              color: '#fafafa',
          }}/>
          Создать Стикер
      </button>
        <ReactModal 
         isOpen={this.state.showModal}
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
                    width: '350px',
                    borderRadius: '2rem',
                    textAlign: 'center',
                }
              }}>
      <Card border='none '>
  <form onSubmit={this.props.handleSubmit(this.submit)} >
  <Card.Body>
    <Card.Title>Создание стикера</Card.Title>
    <Card.Text style={{fontSize: '12px', lineHeight: '11px'}}>
      В этом окне можно создать не зависимые наклейки и распечать их
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
    <Field
            name="article"
            component={RenderField}
            type="text"
            label="Артикул"
          />
    </ListGroupItem>
    <ListGroupItem>
    <Field
            className={cl.fields}
            name="name"
            component={RenderField}
            type="text"
            label={'Наименование'}
          />
    </ListGroupItem>
    <ListGroupItem style ={{display: 'flex'}}>          
      <Field
            className={cl.minifields}
            name="storageplace"
            component={RenderField}
            type="text"
            label="Место"
          />
          <Field
            className={cl.minifields}
            name="quantity"
            component={RenderField}
            type="number"
            label="Кол-во"
          /></ListGroupItem>
  </ListGroup>
  {!!this.props.valid ? 
  <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
            <Button 
            variant="outline-secondary"
              type="submit" 
              disabled={!this.props.valid || this.props.submitting} 
            >
                Сохранить
            </Button>
            <Link to='Stikers'>
                <Button 
                variant="secondary"
                  onClick = {()=>this.props.reset() }
                  disabled={!this.props.valid}>
                  Печать
                </Button>
              </Link>
  </Card.Body>
:
<span className={cl.buttonstack}>
{this.props.touched && ((this.props.error && <span>{this.props.error}</span>) )} 
</span>
  }
  </form>
</Card>

 
    <ul>
        {
        this.state.files === undefined ? null :
          this.state.files.map( i =>
            <li key ={i.id + new Date()}>
              {i.article}
            </li>
          )
        }
    </ul>
          </ReactModal>
        </>
      );
    }
  }

const mapDispatchToProps = (dispatch) =>{
  return{
    addConstumerdis: (values)=>{
        values.id = 'id' + (new Date()).getTime();
        dispatch(customCardAc(values))
      }
  }
}
  const CustomModalСontainer = connect (
    ({ fileReducer }) => fileReducer
    , mapDispatchToProps
  )(reduxForm({
    form: 'stikerValuese',
    validate
  })(CustomStikerModal));

export default CustomModalСontainer
