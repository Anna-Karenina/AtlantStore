const ADD_FILE = 'ADD_FILE';
const DELETE_ALL_FILES = 'DELETE_ALL_FILES';
const TAKE_FILE_NAME = 'TAKE_FILE_NAME';
const DELETE_ONE_STIKER = 'DELETE_ONE_STIKER';
const DUBLE_ONE_STIKER = 'DUBLE_ONE_STIKER';
const CUSTOM_CARD_ADD = 'CUSTOM_CARD_ADD'
const ADD_CONSUMER_IN_CARD = 'ADD_CONSUMER_IN_CARD';
const FROM_STORAGE_PLACE_TO_STIKER ='FROM_STORAGE_PLACE_TO_STIKER'

let initState = {
  files : [],
  fileNames:[],
}
const fileReducer = (state = initState, action) =>{
  switch(action.type){
    case ADD_FILE : {
      //let newFile = action.newFile.sheet
        let index =  Object.keys(action.newFile)
        let newFile = action.newFile[index[0]]
    return {
      ...state,
      files: [...state.files, ...newFile]
      }
    }
    case DELETE_ALL_FILES : {
    return {
      ...state,
      files : [],
      fileNames: []
      }
    }
    case CUSTOM_CARD_ADD :{
      let value = action.value
      return{
        ...state,
      files: [...state.files, value]
      }
    }
    case FROM_STORAGE_PLACE_TO_STIKER:{
      let value = action.value
      return{
        ...state,
      files: [...state.files, ...value]
      }
    }
    case TAKE_FILE_NAME :{
      return{
        ...state,
        fileNames : [action.fileName]
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

    default :
       return state;
    }
}
export const newFileAC = (dropped) => ({ type:ADD_FILE , newFile: dropped })
export const deleteAllFilesAC = (all) => ({ type:DELETE_ALL_FILES, all })
export const takeFileNameAC = (fileName) => ({ type:TAKE_FILE_NAME, fileName})
export const addConsAC = (customer) => ({ type:ADD_CONSUMER_IN_CARD, customer})
export const delonestikerAC = (id) => ({ type:DELETE_ONE_STIKER, stikerid : id})
export const dublecardAC = (id) => ({ type:DUBLE_ONE_STIKER, stikerid : id})

export const customCardAc = (value) => ({ type:CUSTOM_CARD_ADD, value})
export const fromStoragePlace = (value) => ({ type:FROM_STORAGE_PLACE_TO_STIKER, value})

export default fileReducer;
