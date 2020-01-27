import React from 'react'
import cl from './DragFile.module.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const excelicon = require('./../../assets/excel.png')
const warehuse = require('./../../assets/warehouse.png')

const DragFile = ({filesNames}) =>{
  const regStore = new RegExp(/store/i)
 if(filesNames.length !== 0){
  return(
    <>
    {
      regStore.test(filesNames) === true ? 
      <Link to= "/postingonstorage">
        <div className={cl.dragcont}>
          <div className={cl.svgCont}>
            <img src ={warehuse} alt = 'warehuse'/>
          </div>
        <div className={cl.filename}>{filesNames}</div>
        </div>
      </Link>
      :
      <Link to= "/Stikers">
        <div className={cl.dragcont}>
          <div className={cl.svgCont}>
            <img src ={excelicon} alt = 'excel'/>
          </div>
         <div className={cl.filename}>{filesNames}</div>
        </div>
      </Link>
    }
</>
  )} else return <></>
}

const mapStateToProps = (state) =>{
  return{
    filesNames: state.fileReducer.fileNames
  }
}
const DragFileContainer = connect (mapStateToProps, null)(DragFile);
export default DragFileContainer
