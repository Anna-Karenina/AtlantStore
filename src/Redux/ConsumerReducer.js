const FROM_HANDENTRY_CONS_TO_STATE = "FROM_HANDENTRY_CONS_TO_STATE"
const CONSUMER_DELITE = 'CONSUMER_DELITE'
const CUSTOM_CARD_ADD = 'CUSTOM_CONSUMER_ADD'
const SORT_CONSUMER_FROM_FIND = 'SORT_CONSUMER_FROM_FIND'
const SORT_CONSUMER_BY_NAME = 'SORT_CONSUMER_BY_NAME'
const SORT_CONSUMER_BY_POSITION = 'SORT_CONSUMER_BY_POSITION'
const FROM_JSON_TO_STATE = 'FROM_JSON_TO_STATE';

let initState = {
  customer: [],
}

const customerReducer = (state = initState, action) =>{
  switch(action.type){
    case FROM_JSON_TO_STATE:{
      let filearr = Object.values(action.file)
      return{
        ...state,
        customer:[...state.customer, ...filearr]
      }
    }
    case FROM_HANDENTRY_CONS_TO_STATE:{
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

    case CONSUMER_DELITE :{
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
    case SORT_CONSUMER_BY_NAME :{
      let value = action.customer
      return{
        ...state,
      customer: [...value]
      }
    }
    case SORT_CONSUMER_BY_POSITION :{
      let value = action.cards
      return{
        ...state,
      customer: [...value]
      }
    }
    case SORT_CONSUMER_FROM_FIND :{
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


export const fromFileConsumerAc = (file) => ({ type:FROM_JSON_TO_STATE, file})
export const fromConsFieldToStateAc = (values) => ({ type:FROM_HANDENTRY_CONS_TO_STATE, values})
export const consumerDelAc = (items) => ({ type:CONSUMER_DELITE, items})
export const customCardAc = (value) => ({ type:CUSTOM_CARD_ADD, value})
export const addSortConsumerAc = (newValue, customers) => ({ type:SORT_CONSUMER_FROM_FIND, newValue ,customers })
export const addSortByNameConsumerAc = (customer, ) => ({ type:SORT_CONSUMER_BY_NAME, customer})
export const addSortByPositionConsumerAc = (cards) => ({ type:SORT_CONSUMER_BY_POSITION, cards})

export default customerReducer;
