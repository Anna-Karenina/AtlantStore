import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const  EditRequestAlert = ({showStatus}) => {
  const [show, setShow] = React.useState(showStatus);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>В приходе есть запросы</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         В Данном приходе присутствуют позиции без заполненого места или вашКода. <br/> Нажимая Перейти вы попадете в меню заполнения. <br/><br/> 
         Или нажмите закрыть для пропуска данной операции
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Link to='/SPEM'>
          <Button variant="primary" onClick={handleClose}>
            Перейти
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      </>
    );
}
export default EditRequestAlert