import React from 'react'
import { connect } from 'react-redux';
import { newFileAC, takeFileNameAC } from './../../Redux/FileReducer';
// import { fromFileConsumerAc } from './../../Redux/ConsumerReducer';
import { newPSFileAC } from './../../Redux/PostStorageReducer'
import FileList from './FileList';


function FileListContainer({droppedFiles, files, takeFile, addFile,addPSFile }){

const addModificatorsInPSFile = (storeFile) =>{
  let index =  Object.keys(storeFile)
  let droppedSupplying = storeFile[index[0]]
  droppedSupplying.map( i => { return (
    i.article = i.article.replace(/\s/g, '').toLowerCase(),
    i.id =  Math.floor(Math.random() * 999)+i.article
    )
  })
   droppedSupplying.map(i =>{ 
    if(i.hasOwnProperty('request') === true
    || i.hasOwnProperty('storageplace') === false){
      return i.needFulfilled = true
    }else  return i.needFulfilled = false
  })
  addPSFile(droppedSupplying)
}
  return(
    <FileList 
      droppedFiles={droppedFiles}
      files={files} 
      takeFile={takeFile} 
      addFile={addFile}
      addModificatorsInPSFile={addModificatorsInPSFile}
    />
  )
}
const mapStateToProps = (state) =>{
  return{
        files: state.fileReducer.files,
        //customer:state.customerReducer.customer
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addFile: (dropped) => {
      dispatch(newFileAC(dropped));
    },
    addPSFile: (droppedSupplying) => {
      dispatch(newPSFileAC(droppedSupplying));
    },
    takeFile: (filename) =>{
      dispatch(takeFileNameAC(filename))
    },
    // addNewConsumertoStatedis: (file)=>{
    //   dispatch(fromFileConsumerAc(file))
    // }
  }}

export default  connect (mapStateToProps, mapDispatchToProps)(FileListContainer)