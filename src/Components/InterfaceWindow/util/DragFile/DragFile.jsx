import React from 'react'
import cl from './DragFile.module.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

let DragFile = (props) =>{
  console.log(props)
if(props.filesNames.length !== 0){
      return(
        <Link to= "/Stikers">
          <div className={cl.dragcont}>
            <div className={cl.svgCont}>
              <img src ={require('./excel.png')} alt = 'excel'/>
              </div>
              <div>{props.filesNames}</div>
         </div>
        </Link>

     )}
     return <div></div>
  }

const mapStateToProps = (state) =>{
  return{
        filesNames: state.fileReducer.fileNames
  }
}
const DragFileContainer = connect (mapStateToProps)(DragFile);
export default DragFileContainer
