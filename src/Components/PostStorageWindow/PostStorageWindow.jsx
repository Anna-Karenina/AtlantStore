import React,{ useState, useRef, useEffect} from 'react';
import  Navbar from './../../util/Navbar/Navbar.jsx'
import BarcodeReader from 'react-barcode-reader'
import styled from './PostStorageWindow.module.scss'
import EditRequestAlert from './EditRequestAlert'
import {ScannedModal} from './ScannedModal'
import { Button } from 'react-bootstrap';

export const PostStorageWindow  = ({filesSupplying,getArticle, updateStateArticle,addOPSFile,outFilesSupplying, savetofile}) => {
  const [result , setresult] = useState('')
  const [localFilesSupplying , setLocalfilesSupplying] = useState(filesSupplying)

  const [inputValue , setinputValue] = useState('')
  const inputRef = useRef(null);


  useEffect(() => {
    inputRef.current.focus();
  });//убрать для сканнера

  const setInput =(event) =>{
    setinputValue(event.target.value)
  }//переделать для сканнера

  const findinArticeInstore = async (event) =>{
    if (event.keyCode === 13) {//убрать для сканнера
     let dataArticle = getArticle(localFilesSupplying, inputValue)
     if(dataArticle.length === 0){
      return alert('kurwa')
     } else {
        setinputValue('')
        addOPSFile(dataArticle)
        updateStateArticle(localFilesSupplying, setLocalfilesSupplying, dataArticle[0].article)
     }
    }     
  }

  const handleScan = (data) => {
    console.error(data)
    setresult(data)
  }
  const handleError=(err)=>{
    console.error(err)
  }

  return (
    <>
    <Navbar />
    <ScannedModal 
      className={styled} 
      outFilesSupplying={outFilesSupplying}/>
    <div className={styled.container}>
      {
        filesSupplying.find(i=> i.needFulfilled === true)  ?
        <EditRequestAlert showStatus = {true}/>
        : null
      }
 
      <Button className={styled.button}
        onClick={()=>savetofile(outFilesSupplying)}>
           сохранить в файл
        </Button>
      <div className={styled.articleListcontainer}>

      <div className = {styled.header}>
    

    <BarcodeReader
          onError={handleError}
          onScan={handleScan}//
          />
        <span>Отсканируйте баркод</span>
        <p>{result}</p>

      <input 
      ref = { inputRef } 
      type= 'text'  
      value = {inputValue}//переделать для сканнера
      onChange={setInput}///убрать для сканнера
      onKeyDown ={findinArticeInstore}/>

      </div>
        <ul className={styled.articleList}>
          {
            localFilesSupplying.map(item => 
            <ol 
              style={{border: '0.1px solid black', padding:'1%', margin: '1%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
              key = {item.id + new Date()}>
             <span style ={{ width:'80vh'}}>
             {item.article}
             </span> 
             <span style = {{ width:'15%'}}>
               {item.quantity}
             </span>
            </ol>
            
            )
          }
        </ul>
      </div>
    </div>
    </>
  )
}
