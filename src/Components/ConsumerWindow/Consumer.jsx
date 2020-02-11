import React,{useState}   from 'react';
import cl from './Customer.module.css'
import RecyclingBin from './components/RecyclingBin'
import SourceBox from './components/SourceBox'
import ConsumerField from './components/ConsumerField'
import  Navbar from '../../util/Navbar/Navbar.jsx'
import FindSelect from './components/FindSelect'
import {MdGroupAdd,MdSave} from 'react-icons/md'
import {AiOutlineSortAscending,AiOutlineSearch} from 'react-icons/ai'
import { Button } from 'react-bootstrap';






const Consumer = ({savetodb , sorte, aprops}) => {
 const [cuns,setCuns] = useState(aprops.customer)
 const {customer,submittostatedis,sortiConstodis,addSortConsumer,sortposConstodis,consdeldis  } = aprops
 return(
  <>
 <Navbar />
  <div className = {cl.bgcwrapper}>
  <div className = {cl.mainWrapper}>
   <div className = {cl.firscol}>

    <div className = {cl.menuwr}>
      <div className={cl.consedit}>
        <MdGroupAdd className={cl.icons}/>
       <h4>Добавить поставщика</h4>
      </div>
      <div className={cl.conseditlist}>
        <ConsumerField  
          customer ={customer}
          submittostatedis={submittostatedis}
          />
      </div>
     </div>

  {cuns !== customer ?
    <div className = {cl.menuwr}>
      <div className={cl.consedit}>
        <MdSave className={cl.icons}/>
        Сохранить изменения
      </div>
      <div className={cl.conseditlist}>
        <Button
        variant="outline-secondary"
          onClick={ () => {
            savetodb(customer);
            setCuns(customer)
          }}
        >Сохранить
        </Button>
      </div>
    </div>
    : null
  }

   </div>
   <div className = {cl.seccol}>

    <div className = {cl.listwrapper}>
     <div className={cl.sorti}>
      <div className={cl.sortname}>
       <Button 
        variant="outline-secondary" 
        onClick = { 
         ()=>sorte(customer, sortiConstodis) 
        }>
        <span>
          <span className={cl.sortbuttun}>
            Сортировать  от А до Я
          </span>
          <AiOutlineSortAscending className={cl.icons}/>
        </span>
       </Button>
       </div>

       <div className={cl.find}>
        <AiOutlineSearch className={cl.icons}/> 
        <span style={{width:'100%'}}>
        <FindSelect
          customer = {customer}
          changeFunction = {addSortConsumer}/>
        </span>
       </div>
     </div>

     <SourceBox customer={customer} 
       sortposConstodis= {sortposConstodis}/>
    </div>

   </div>
   <div className = {cl.thirdcol}>

    <div className={cl.recyclingbinwrapper}>
     <RecyclingBin 
      customer = { customer }
      consdeldis= { consdeldis }
     />

    </div>

   </div>
  </div>
  </div>
</>
  )
}
export default Consumer
