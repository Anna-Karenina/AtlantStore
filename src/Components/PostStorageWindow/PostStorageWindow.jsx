import React,{ useState, useRef, useEffect} from 'react';
import  Navbar from './../../util/Navbar/Navbar.jsx'
import BarcodeReader from 'react-barcode-reader'
import styled from './PostStorageWindow.module.css'
import EditRequestAlert from './EditRequestAlert'
import {ScannedModal} from './ScannedModal'

export const PostStorageWindow  = ({filesSupplying,getArticle, updateStateArticle,addOPSFile,outFilesSupplying}) => {
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
    <div className={styled.container}>
    <ScannedModal outFilesSupplying={outFilesSupplying}/>
      {
        filesSupplying.find(i=> i.needFulfilled === true)  ?
        <EditRequestAlert showStatus = {true}/>
        : null
      }
    <div>
    

    <BarcodeReader
          onError={handleError}
          onScan={handleScan}//
          />
        <h3>Отсканируйте код</h3>
        <p>{result}</p>

      <input 
      ref = { inputRef } 
      type= 'text'  
      value = {inputValue}//переделать для сканнера
      onChange={setInput}///убрать для сканнера
      onKeyDown ={findinArticeInstore}/>


      </div>
      <div className={styled.articleList}>
        <ul>
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
