import Consumer from './Consumer'
import { connect } from 'react-redux';
import {
  addSortConsumerAc,
  addSortByNameConsumerAc,
  addSortByPositionConsumerAc,
  fromConsFieldToStateAc,
  consumerDelAc
        } from './../../Redux/FileReducer'

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
  customer: state.fileReducer.customer
}), mapDispatchToProps)(Consumer)
export default  ContainerConsumerWindow 