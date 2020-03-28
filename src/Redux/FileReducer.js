import * as ActionTypes from './ActionsConsts'

const fileReducer = (state = {
  files : [],
  fileNames:[],
}, action) =>{
  switch(action.type){
    case ActionTypes.ADD_FILE : {
        let index =  Object.keys(action.newFile)
        let newFile = action.newFile[index[0]]
    return {
      ...state,
      files: [...state.files, ...newFile]
      }
    }
    case ActionTypes.DELETE_ALL_FILES : {
    return {
      ...state,
      files : [],
      fileNames: []
      }
    }
    case ActionTypes.CUSTOM_CARD_ADD :{
      let value = action.value
      return{
        ...state,
      files: [...state.files, value]
      }
    }
    case ActionTypes.FROM_STORAGE_PLACE_TO_STIKER:{
      let value = action.value
      return{
        ...state,
      files: [...state.files, ...value]
      }
    }
    case ActionTypes.TAKE_FILE_NAME :{
      return{
        ...state,
        fileNames : [action.fileName]
      }
    }
    case ActionTypes.ADD_CONSUMER_IN_CARD :{
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
    case ActionTypes.DELETE_ONE_STIKER :{
      let stikerid = action.stikerid
      let delcard = state.files.find(delcard => delcard.id === stikerid);
    return{
        ...state,
        files:  state.files.filter(i => i.id !== delcard.id)
        }
    }

//не совсем правильная копирка!!!!!
    case ActionTypes.DUBLE_ONE_STIKER :{
      let k = {...state.files.find(item => item.id === action.stikerid)}
          k.id = state.files.length+1
    return{
        ...state,
        files:[...state.files, k]
      }
    }

    default :
       return state;
    }
}
export const newFileAC = (dropped) => ({ 
  type:ActionTypes.ADD_FILE, 
  newFile: dropped 
})
export const deleteAllFilesAC = (all) => ({
   type:ActionTypes.DELETE_ALL_FILES, 
   all 
})
export const takeFileNameAC = (fileName) => ({ 
  type:ActionTypes.TAKE_FILE_NAME, 
  fileName
})
export const addConsAC = (customer) => ({ 
  type:ActionTypes.ADD_CONSUMER_IN_CARD, 
  customer
})
export const delonestikerAC = (id) => ({ 
  type:ActionTypes.DELETE_ONE_STIKER, 
  stikerid : id
})
export const dublecardAC = (id) => ({ 
  type:ActionTypes.DUBLE_ONE_STIKER, 
  stikerid : id
})

export const customCardAc = (value) => ({ 
  type:ActionTypes.CUSTOM_CARD_ADD, 
  value
})
export const fromStoragePlace = (value) => ({ 
  type:ActionTypes.FROM_STORAGE_PLACE_TO_STIKER, 
  value
})

export default fileReducer;
