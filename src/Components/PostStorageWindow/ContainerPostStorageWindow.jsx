import React from 'react';
import { connect } from 'react-redux';
import { PostStorageWindow} from './PostStorageWindow'
import { newOutPSFileAC } from './../../Redux/PostStorageReducer'
import update from 'immutability-helper'; 
import {savetofile} from './../../core'

const ContainerPostStorageWindow = ({filesSupplying,outFilesSupplying,addOPSFile } ) =>{
  const getArticle =  (array, search ) => {
    return array.filter(function(item) {
      return Object.keys(item).some(function(key) {
        return item[key] === search
      })      
    })
  }

  const updateStateArticle = (arr , changemethdod,item) =>{
   const delIndex =  arr.findIndex(i=>i.article === item)
   const newData = update(arr, {$splice: [[delIndex , 1]] })
    changemethdod(newData)
  }
  return (
  <PostStorageWindow 
    getArticle={getArticle} 
    updateStateArticle={updateStateArticle}
    filesSupplying={filesSupplying} 
    outFilesSupplying={outFilesSupplying}
    addOPSFile={addOPSFile}
    savetofile={savetofile}
  />)
}
const mapStateToProps = (state) =>{
  return{
    filesSupplying: state.PostStorageReducer.filesSupplying,
    outFilesSupplying:state.PostStorageReducer.outFilesSupplying
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addOPSFile: (oneLinePart) => {
      dispatch(newOutPSFileAC(oneLinePart));
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerPostStorageWindow);

