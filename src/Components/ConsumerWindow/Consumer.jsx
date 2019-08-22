import React from 'react';
import cl from './Customer.module.css'
import { connect } from 'react-redux';
import RecyclingBin from './RecyclingBin'
import SourceBox from './SourceBox'
import ConsumerField from './ConsumerField'
import  Navbar from './../util/Navbar/Navbar.jsx'
import lens from './lens.png'
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

const sorte = (customer) =>{
alert("Функция в разработке")
}



let Consumer = (props) => {
console.log(props)
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
       <div>
          <i onClick = { ()=>sorte(props.customer) }>
            Сортировать по названию
          </i>
       </div>
       <div className={cl.findcons} onClick = { ()=>sorte(props.customer) }>
          <img src={lens} alt="" /> <p> Поиск</p>
       </div>
     </div>

     <SourceBox customer={props.customer} />
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
const ConsumerC = connect( state => ({
  customer: state.fileReducer.customer
}), null)(Consumer)

export default ConsumerC
