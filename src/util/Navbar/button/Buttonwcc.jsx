import React from 'react';
import cl from './Buttonwcc.module.css'

const Buttonwcc = (props) => {
 return(
  <button className = {cl.btn+ ' ' + cl.first}>
    {props.child}
    {props.title}
  </button>
  )
}

export default Buttonwcc
  