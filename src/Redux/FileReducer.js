const ADD_FILE = 'ADD_FILE';
const ADD_CONSUMER_IN_CARD = 'ADD_CONSUMER_IN_CARD';
const TAKE_FILE_NAME = 'TAKE_FILE_NAME';

let initState = {
  files : [],
  customer: [
              {id: 1, name: "Создать нового поставщика"},
              {id: 2, name: "emex"},
              {id: 3, name: "Автодок"},
              {id: 4, name: "АвтоПитер"},
              {id: 5, name: "Принт"},
              {id: 5, name: "Мясников"},
  ],
  fileNames:[]
}
const fileReducer = (state = initState, action) =>{
  switch(action.type){
    case ADD_FILE : {
      let newFile = action.newFile
    return {
      ...state,
      files: [...state.files, ...newFile.sheet, ]
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
    default :
       return state;
    }
}
export const newFileAC = (dropped) => ({ type:ADD_FILE , newFile: dropped })
export const addConsAC = (customer) => ({ type:ADD_CONSUMER_IN_CARD, customer})
export const takeFileNameAC = (fileName) => ({ type:TAKE_FILE_NAME, fileName})

export default fileReducer;
