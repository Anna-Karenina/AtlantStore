import React, { useEffect } from 'react';
import {  Modal, Table  } from 'react-bootstrap';
import styled from './PostStorageWindow.module.scss'

export const ScannedModal  = ({outFilesSupplying}) => {
  const [variant, setVariant] = React.useState('success')
  const [show, setShow] = React.useState(false)
  const [lastAddPart, setLastAddPart] = React.useState({})


  useEffect(()=>{
    setLastAddPart(outFilesSupplying[outFilesSupplying.length-1])
    setShow(true)
  },[outFilesSupplying])
  
  useEffect(()=>{
    if(!lastAddPart ||  lastAddPart.hasOwnProperty('request') === true){
      setVariant({backgroundColor: '#d4edda'})
    } else if( lastAddPart.hasOwnProperty('needNewPlace') === true){
      setVariant({backgroundColor: '#f8d7da'})
    } else return setVariant({backgroundColor: '#cce5ff'})
  },[lastAddPart])
  
  return (
    <>
     {
      lastAddPart === undefined ? 
      <></>
       :         
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName={styled.modalMain}
      aria-labelledby="example-custom-modal-styling-title"
    >{console.log(lastAddPart)}
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {lastAddPart.article}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      style ={variant}
      >
      <Table striped bordered hover>
      <thead>
       <tr>
        <th>Артикул</th>
        <th>Кол-во</th>
        <th>Место</th>
        <th>Описание</th>
        <th>Запрос</th>
       </tr>
       </thead>
       <tbody>
        <tr>
          <td>{lastAddPart.article}</td>
          <td>{lastAddPart.quantity }</td>
          <td>{lastAddPart.storageplace }</td>
          <td>{lastAddPart.discription}</td>
          <td>@{lastAddPart.request === undefined ? 'без запроса' : lastAddPart.request}</td>
        </tr>
        </tbody>
      </Table>
      </Modal.Body>
    </Modal>
  }
  </>
  )
}
