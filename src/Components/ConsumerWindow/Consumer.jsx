import React from 'react';
import cl from './Customer.module.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import RecyclingBin from './RecyclingBin'
import SourceBox from './SourceBox'
import ConsumerField from './ConsumerField'

let Consumer = (props) => {
 return(
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
        <button>save</button>
      </div>
    </div>

   </div>
   <div className = {cl.seccol}>

    <div className = {cl.listwrapper}>
     <div className={cl.sort}>Сортировать по имени
     </div>
     <SourceBox customer={props.customer} />
    </div>

   </div>
   <div className = {cl.thirdcol}>

    <div className={cl.recyclingbinwrapper}>
     <RecyclingBin />
          <br/>
          <br/>
          <br/>
          <br/>
     <Link to="/"><button>назад</button></Link>
    </div>

   </div>
  </div>
  )
}
const ConsumerC = connect( state => ({
  customer: state.fileReducer.customer
}), null)(Consumer)

export default ConsumerC
