import React, { useState }   from 'react';
import cl from './Customer.module.css'
import { connect } from 'react-redux';
import RecyclingBin from './RecyclingBin'
import SourceBox from './SourceBox'
import ConsumerField from './ConsumerField'
import  Navbar from './../util/Navbar/Navbar.jsx'
import lens from './lens.png'
import {addSortConsumerAc,
        addSortByNameConsumerAc,
        addSortByPositionConsumerAc
        } from './../../Redux/FileReducer'
import FindSelect from './FindSelect'
const fs = require('fs');
const path = require('path')

const consdir = path.join(require('electron').remote.app.getAppPath(), '../', '/Consumer')


const savetodb =(customer)=>{
  fs.writeFile(`${consdir}/Consumer.json`,
    JSON.stringify(customer, null, 2), (err) => {
    if (err) throw err;
      alert('Все ходы записаны')
  });
}


const sorte = (customer ,sortiConstodis) =>{
customer.sort((a, b)=>{
let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
if (nameA < nameB)
  return -1
if (nameA > nameB)
  return 1
return 0
})
sortiConstodis(customer)
}

const Consumer = (props) => {
 return(
  <>
 <Navbar />
  <div className = {cl.mainWrapper}>
   <div className = {cl.firscol}>

    <div className = {cl.menuwr}>
      <div className={cl.consedit}>
       <h4>Добавить поставщика</h4>
      </div>
      <div className={cl.conseditlist}>
        <ConsumerField />
      </div>
     </div>

    <div className = {cl.menuwr}>
      <div className={cl.consedit}>
        Сохранить изменения
      </div>
      <div className={cl.conseditlist}>
        <button onClick={ () => savetodb(props.customer)}>Сохранить</button>
      </div>
    </div>

   </div>
   <div className = {cl.seccol}>

    <div className = {cl.listwrapper}>
     <div className={cl.sorti}>
       <div className={cl.sortname}>
          <i onClick = { ()=>sorte(props.customer, props.sortiConstodis) }>
            Сортировать от А до Я
          </i>
       </div>

       <div className={cl.findcons}>
          <img src={lens} alt="" />
        <div style={{width: '100%', marginLeft: '5px'}}>
            <FindSelect
                    customer = {props.customer}
                    addSortConsumer = {props.addSortConsumer}/>
        </div>

       </div>
     </div>

     <SourceBox customer={props.customer} 
       sortposConstodis= {props.sortposConstodis}/>
    </div>

   </div>
   <div className = {cl.thirdcol}>

    <div className={cl.recyclingbinwrapper}>
     <RecyclingBin />

    </div>

   </div>
  </div>
</>
  )
}
const mapDispatchToProps = (dispatch) =>{
  return{
addSortConsumer: (newValue, customers)=>{
      dispatch(addSortConsumerAc(newValue, customers))
    },
sortiConstodis: (customer)=>{
      dispatch(addSortByNameConsumerAc(customer))
    },
sortposConstodis: (cards)=>{
      dispatch(addSortByPositionConsumerAc(cards))
    }
  }
}

const ConsumerC = connect( state => ({
  customer: state.fileReducer.customer
}), mapDispatchToProps)(Consumer)

export default ConsumerC
