import React from 'react';
import { Link } from 'react-router-dom'
import Buttonwcc from './button/Buttonwcc'
import Modal from './../CustomStikerModal/CustomStikerModal'
import {MdDeleteForever, MdSupervisorAccount} from 'react-icons/md'
import {TiHome} from 'react-icons/ti'
import { connect } from 'react-redux';
import {deleteAllFilesAC} from './../../../Redux/FileReducer'

const navstyle={
    backgroundColor: 'rgba(129,129,129, 0.7)',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '6%',
}
const ulstyle={
    listStyle: 'none', 
    display: 'flex', 
    margin: "0", 
    height: '100%', 
    padding: '0',
}
const listyle ={
  textDecoration: 'none'
}
const iconstyle={
  width: '25px', 
  height: 'auto',
  color: '#fafafa',
}
// const active = {
//   boxShadow: '2px, 2px, 7px, black'
// }

const Navbar = (props) => {
 return(
  <div style={navstyle}>
    <ul style = {ulstyle}>
        <li>
          <Link to="/" style = {listyle}>
           <Buttonwcc 
            title={"Главная"}
              child= { 
                <TiHome 
                 style={iconstyle}/>
              }
            />
          </Link>
        </li>
        <li>
          <Link to='/Consumer' style = {listyle}>
            <Buttonwcc 
              title={"Поставщики"}
              child= {
                <MdSupervisorAccount
                  style={iconstyle}/>
              }
              />
          </Link>
        </li>
        <li>
            <Modal />
        </li>
        <li
          onClick={()=>props.deleteAllFiles()} >
        <Buttonwcc 
          title={"Очистить"} 
            child = {
              <MdDeleteForever 
                style={iconstyle} 
              />
              }
            /> 
        </li>
    </ul>
  </div>
  )
}
const mapDispatchToProps = (dispatch) =>{
  return{
    deleteAllFiles:()=>{
      dispatch(deleteAllFilesAC())
    },
  }
}
export default connect (null,mapDispatchToProps )(Navbar)
