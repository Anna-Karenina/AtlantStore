import React from 'react'
import cl from './DragFile.module.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const excelicon = require('./../../../assets/excel.png')

const DragFile = (props) =>{
 if(props.filesNames.length !== 0){
  return(
<>
   <Link to= "/Stikers">
    <div className={cl.dragcont}>
     <div className={cl.svgCont}>
       <img src ={excelicon} alt = 'excel'/>
     </div>
     <div className={cl.filename}>{props.filesNames}</div>
    </div>
    </Link>
    <div>

    </div>
</>
     )}
     return <> </>
  }

const mapStateToProps = (state) =>{
  return{
        filesNames: state.fileReducer.fileNames
  }
}
const DragFileContainer = connect (mapStateToProps, null)(DragFile);
export default DragFileContainer
