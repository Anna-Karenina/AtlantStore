const ADD_FILE = 'ADD_FILE';
const ADD_CONSUMER_IN_CARD = 'ADD_CONSUMER_IN_CARD';
const TAKE_FILE_NAME = 'TAKE_FILE_NAME';
const DELETE_ONE_STIKER = 'DELETE_ONE_STIKER';
const DUBLE_ONE_STIKER = 'DUBLE_ONE_STIKER';
const FROM_JSON_TO_STATE = 'FROM_JSON_TO_STATE';


let initState = {
  files : [],
  customer: [],
  fileNames:[]
}
const fileReducer = (state = initState, action) =>{
  switch(action.type){
    case ADD_FILE : {
      let newFile = action.newFile
    return {
      ...state,
      files: [...state.files, ...newFile.sheet]
      }
    }
    case ADD_CONSUMER_IN_CARD :{
      let newCustomer = action.customer.constumer.label
      let value = action.customer.constumer.value
      if(value === 1){
        alert ('Функция в разработке')
        return state;
      } else {
      return{
        ...state,
      files:  state.files.map(u=>{
        if (u.customer === undefined || u.customer !== newCustomer){
          return {...u, customer : newCustomer}
        }
        return u;
      })
    }}
    }

    case TAKE_FILE_NAME :{
      return{
        ...state,
        fileNames : [action.fileName]
      }
    }
    case DELETE_ONE_STIKER :{
      let stikerid = action.stikerid
      let delcard = state.files.find(delcard => delcard.id === stikerid);
    return{
        ...state,
        files:  state.files.filter(i => i.id !== delcard.id)
        }
    }

//не совсем правильная копирка!!!!!
    case DUBLE_ONE_STIKER :{
      let k = {...state.files.find(item => item.id === action.stikerid)}
          k.id = state.files.length+1
    return{
        ...state,
        files:[...state.files, k]
      }
    }

    case FROM_JSON_TO_STATE:{
      let filearr = Object.values(action.file)
      return{
        ...state,
        customer:[...state.customer, ...filearr]
      }
    }

    default :
       return state;
    }
}
export const newFileAC = (dropped) => ({ type:ADD_FILE , newFile: dropped })
export const addConsAC = (customer) => ({ type:ADD_CONSUMER_IN_CARD, customer})
export const takeFileNameAC = (fileName) => ({ type:TAKE_FILE_NAME, fileName})
export const delonestikerAC = (id) => ({ type:DELETE_ONE_STIKER, stikerid : id})
export const dublecardAC = (id) => ({ type:DUBLE_ONE_STIKER, stikerid : id})
export const fromFileConsumerAc = (file) => ({ type:FROM_JSON_TO_STATE, file})

export default fileReducer;
