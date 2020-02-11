import  React from 'react'
import Consumer from './Consumer'
import { connect } from 'react-redux';
import fs  from 'fs'
import {
  addSortConsumerAc,
  addSortByNameConsumerAc,
  addSortByPositionConsumerAc,
  fromConsFieldToStateAc,
  consumerDelAc
        } from './../../Redux/ConsumerReducer'
import { consumerdir } from './../../core'

const ConsumerС = (props) =>{
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
  return(
    <Consumer 
    aprops ={ props }
    sorte={sorte}
    savetodb = {savetodb}
    />
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
    },
    submittostatedis: (values)=>{
      dispatch(fromConsFieldToStateAc(values))
    },
    consdeldis: (items)=>{
      dispatch(consumerDelAc(items))
    }
  }
}

const ContainerConsumerWindow = connect( state => ({
  customer: state.customerReducer.customer
}), mapDispatchToProps)(ConsumerС)
export default  ContainerConsumerWindow 