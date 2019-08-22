import React from 'react';
import cl from './Buttonwcc.module.css'

const Buttonwcc = (props) => {
 return(
<>
  <button className = {cl.btn+ ' ' + cl.first}>{props.props}</button>
</>
  )
}

export default Buttonwcc
