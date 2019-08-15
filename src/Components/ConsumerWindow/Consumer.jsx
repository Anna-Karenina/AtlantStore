import React from 'react'
import cl from './Customer.module.css'

class Consumer extends React.Component {
  render(){
  return(

    <div className = {cl.mainWrapper}>
      <div className = {cl.firscol}>
        30
      </div>

      <div className = {cl.seccol}>
        40
      </div>

      <div className = {cl.thirdcol}>
        <div className={cl.recyclingbinwrapper}>
          <img src = {require('./recyclingbin2.png')} alt = '1' />
        </div>
      </div>


    </div>
  )
}}

export default Consumer
