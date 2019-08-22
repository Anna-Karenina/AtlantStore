import React from 'react';
import { Link } from 'react-router-dom'
import Buttonwcc from './button/Buttonwcc'

const navstyle={
    backgroundColor: 'rgba(129,129,129, 0.7)',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '6%',
}

const Navbar = (props) => {
 return(
  <div style={navstyle}>
    <ul style = {{
    listStyle: 'none', display: 'flex', margin: "0", height: '100%', padding: '0'}}>
        <li><Link to="/"><Buttonwcc props={"Главная"}/></Link></li>
        <li><Link to='/Consumer'
                ><Buttonwcc props={"Поставщики"}/>
        </Link></li>
        <li onClick={ ()=>alert('функция в разработке') }>
            <Buttonwcc props={"Создать Стикер"}/>
        </li>

    </ul>
  </div>
  )
}

export default Navbar
