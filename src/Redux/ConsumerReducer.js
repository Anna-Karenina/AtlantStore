import * as ActionTypes from './ActionsConsts'

const customerReducer = (state = {
  customer: [],
}, action) =>{
  switch(action.type){
    case ActionTypes.FROM_JSON_TO_STATE:{
      let filesarr = Object.values(action.file)
      return{
        ...state,
        customer:[...state.customer, ...filesarr]
      }
    }
    case ActionTypes.FROM_HANDENTRY_CONS_TO_STATE:{
      let values = action.values
      let oldvalues ={...state.customer.find(item => item.id === values.id)}
      if(values.id === oldvalues.id){
        values.id = (parseInt(values.id)+1).toString()
      }
      return{
        ...state,
      customer:[...state.customer, values]
      }
    }

    case ActionTypes.CONSUMER_DELITE :{
      let item = action.items.id
      let delitem = state.customer.find(delitem => delitem.id === item);
        if(delitem === undefined){
            return {...state}
        }
      return{
        ...state,
        customer:  state.customer.filter(i => i.id !== delitem.id)
        }
      }
    case ActionTypes.SORT_CONSUMER_BY_NAME :{
      let value = action.customer
      return{
        ...state,
      customer: [...value]
      }
    }
    case ActionTypes.SORT_CONSUMER_BY_POSITION :{
      let value = action.cards
      return{
        ...state,
      customer: [...value]
      }
    }
    case ActionTypes.SORT_CONSUMER_FROM_FIND :{
      let value = action.newValue
      let oldcustomers = action.customers
      if(action.newValue === null){
        return {
        ...state,
        customer: oldcustomers
        }
      }
      return{
        ...state,
      customer: [ value]
      }
    }
    default :
       return state;
    }
}


export const fromFileConsumerAc = (file) => ({ 
  type:ActionTypes.FROM_JSON_TO_STATE, 
  file
})
export const fromConsFieldToStateAc = (values) => ({
  type:ActionTypes.FROM_HANDENTRY_CONS_TO_STATE, 
  values
})
export const consumerDelAc = (items) => ({ 
  type:ActionTypes.CONSUMER_DELITE, 
  items})
export const customCardAc = (value) => ({ 
  type:ActionTypes.CUSTOM_CARD_ADD, 
  value
})
export const addSortConsumerAc = (newValue, customers) => ({ 
  type:ActionTypes.SORT_CONSUMER_FROM_FIND, 
  newValue ,
  customers 
})
export const addSortByNameConsumerAc = (customer) => ({ 
  type:ActionTypes.SORT_CONSUMER_BY_NAME, 
  customer
})
export const addSortByPositionConsumerAc = (cards) => ({ 
  type:ActionTypes.SORT_CONSUMER_BY_POSITION, 
  cards
})

export default customerReducer;
