import React,{useState}   from 'react';
import fs  from 'fs'
import cl from './Customer.module.css'
import RecyclingBin from './components/RecyclingBin'
import SourceBox from './components/SourceBox'
import ConsumerField from './components/ConsumerField'
import  Navbar from '../../util/Navbar/Navbar.jsx'
import FindSelect from './components/FindSelect'
import {MdGroupAdd,MdSave} from 'react-icons/md'
import {AiOutlineSortAscending,AiOutlineSearch} from 'react-icons/ai'
import { consumerdir } from './../../core'



const savetodb =(customer)=>{
  fs.writeFile(`${consumerdir}/Consumer.json`,
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
 const [cuns,setCuns] = useState(props.customer)
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
          customer ={props.customer}
          submittostatedis={props.submittostatedis}
          />
      </div>
     </div>

  {cuns !== props.customer ?
    <div className = {cl.menuwr}>
      <div className={cl.consedit}>
        <MdSave className={cl.icons}/>
        Сохранить изменения
      </div>
      <div className={cl.conseditlist}>
        <button 
          onClick={ () => {
            savetodb(props.customer);
            setCuns(props.customer)
          }}
        >Сохранить
        </button>
      </div>
    </div>
    : null
  }

   </div>
   <div className = {cl.seccol}>

    <div className = {cl.listwrapper}>
     <div className={cl.sorti}>
      <div className={cl.sortname}>
       <button 
        onClick = { 
         ()=>sorte(props.customer, props.sortiConstodis) 
        }>
        <span>
          <p style={{margin: 0,padding: 0}}>
            Сортировать <br/> от А до Я
          </p>
          <AiOutlineSortAscending className={cl.icons}/>
        </span>
       </button>
       </div>

       <div className={cl.find}>
        <AiOutlineSearch className={cl.icons}/> 
        <span style={{width:'100%'}}>
        <FindSelect
          customer = {props.customer}
          changeFunction = {props.addSortConsumer}/>
        </span>
       </div>
     </div>

     <SourceBox customer={props.customer} 
       sortposConstodis= {props.sortposConstodis}/>
    </div>

   </div>
   <div className = {cl.thirdcol}>

    <div className={cl.recyclingbinwrapper}>
     <RecyclingBin 
      customer = { props.customer }
      consdeldis= { props.consdeldis }
     />

    </div>

   </div>
  </div>
  </div>
</>
  )
}
export default Consumer
