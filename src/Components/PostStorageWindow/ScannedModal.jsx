import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert'


export const ScannedModal  = ({outFilesSupplying}) => {
  const [variant, setVariant] = React.useState('success')
  const [show, setShow] = React.useState(false)
  const [lastAddPart, setLastAddPart] = React.useState({})

  useEffect(()=>{
    setLastAddPart(outFilesSupplying[outFilesSupplying.length-1])
    setShow(true)
  })
  
  useEffect(()=>{
    if(!lastAddPart ||  lastAddPart.hasOwnProperty('request') === true){
      setVariant('primary')
    }else return setVariant('success')
  })
  
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
      <span>
      Артикул:
      </span>
      <span>
        {lastAddPart.article}
      </span>
      <p>
        Принят на склад по месту:{lastAddPart.storageplace }
      </p>
      <p>
        Для запроса:{lastAddPart === undefined ? 'без запроса' : lastAddPart.request}
      </p>
      <p>
        Описание:{lastAddPart.discription}
      </p>
    </Alert>
    }
    </>
  )
}
