import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import Buttonwcc from './button/Buttonwcc'
import CustomStiker from '../CustomStikerModal/CustomStikerModal'
import {MdDeleteForever, MdSupervisorAccount} from 'react-icons/md'
import { FaBoxOpen} from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { connect } from 'react-redux';
import { deleteAllFilesAC, customCardAc } from '../../Redux/FileReducer'
import { psdeleteAllFilesAC } from '../../Redux/PostStorageReducer'
import { ipcRenderer } from 'electron'
import {IoMdSettings} from 'react-icons/io'

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
const settings ={
  marginLeft: 'auto',
  borderLeft: '1px solid rgb(18,82,107)'
}
const lasticonstyle ={
  width:'25px',
  height:'auto'
}


const Navbar = ({deleteAllFiles, checkfromtrey}) => {
  let history = useHistory();

  ipcRenderer.on('action-update', (event, arg) => {
    checkfromtrey(arg)
    history.push("/Stikers");
    ipcRenderer.send('take-data-done');
  });

  const ClearAll = () =>{
    if(window.confirm('Вы точно хотите очистить добавленные файлы?')){
      deleteAllFiles()
    }else alert('Отменено!')
  }
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
            <CustomStiker />
        </li>
        <li
          onClick={()=>ClearAll()} >
        <Buttonwcc
          title={"Очистить"}
            child = {
              <MdDeleteForever
                style={iconstyle}
              />
              }
            />
        </li>
        <li
          onClick={()=>alert('в разработке')} >
          <Link to='/postingonstorage' style = {listyle}>
            <Buttonwcc
              title={" Приходование товара"}
                child = {
                  <FaBoxOpen
                    style={iconstyle}
                  />
                  }
                />
          </Link>
        </li>
        <li style = {settings}>
          <Link to='/setting' style = {listyle}>
            <Buttonwcc
                child = {
                  <IoMdSettings
                    style={lasticonstyle}
                  />
                  }
                />
          </Link>
        </li>
    </ul>
  </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return{
    deleteAllFiles:()=>{
      dispatch(deleteAllFilesAC())
      dispatch(psdeleteAllFilesAC())
    },
    checkfromtrey:(value)=>{
      value.id = 'id' + (new Date()).getTime();
      dispatch(customCardAc(value))
    }
  }
}
export default connect (null,mapDispatchToProps )(Navbar)
