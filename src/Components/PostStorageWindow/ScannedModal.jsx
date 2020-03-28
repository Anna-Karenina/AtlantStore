import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert'
import { Table } from 'react-bootstrap';

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
      setVariant('primary')
    }else return setVariant('success')
  },[lastAddPart])
  
  return (
    <>
    {
      lastAddPart === undefined ? 
     <></>
      :  
      <Alert 
      variant= {variant}
      show={show}
      style ={{marginTop: '43px', width:'100%'}}> 
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
    </Alert>
    }
    </>
  )
}
