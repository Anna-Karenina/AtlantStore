import * as ActionTypes from './ActionsConsts'

const PostStorageReducer = (state = {
  filesSupplying : [],
  outFilesSupplying : [],
  outStikers:[]
}, action) =>{
  switch(action.type){
    case ActionTypes.PS_ADD_FILE : {
      const droppedSupplying = action.droppedSupplying
    return {
      ...state,
      filesSupplying: [...state.filesSupplying,...droppedSupplying],
      }
    }
    case ActionTypes.PS_DELETE_ALL_FILES : {
      return {
        ...state,
        filesSupplying : [],
        outFilesSupplying : [],
        outStikers:[]
        }
      }
    case ActionTypes.PS_ADD_IN_OUTFILE:{
      const oneLinePart = action.payload
      return{
        ...state,
        outFilesSupplying:[...state.outFilesSupplying, ...oneLinePart]
      }
    }
    case ActionTypes.PS_ADD_STOREPLACE_TO_FILES_SUPPLYING:{
      let sorti  = state.filesSupplying.filter(i =>
        i.request === (+action.payload.request)
      )
      sorti.map(i => {
        return (
        i.storageplace = action.payload.customer, 
        i.needFulfilled = false)
      } )
      return{
        ...state,
        filesSupplying: [...state.filesSupplying]
      }
    }
    case ActionTypes.PS_NEW_PART_ADD_STOREPLACE_TO_FILES_SUPPLYING:{
      let sorti = state.filesSupplying.filter(i=>
        i.article === action.payload.hasNoPlace)
        sorti.map(i => {
          return(
            i.storageplace = action.payload.place,
            i.needFulfilled = false,
            i.needNewPlace = false
          )
        })
      return{
        ...state,
        filesSupplying: [...state.filesSupplying]
      }
    }
    case ActionTypes.PS_ADD_TO_STIKER_WINDOW:{
      let newstiker;
      if(action.payload.customer !== undefined){
         newstiker = state.filesSupplying.filter(
          i=>(+i.request) === (+action.payload.request))
      }
      if (action.payload.place !== undefined){
         newstiker = state.filesSupplying.filter(
          i=> (i.article === action.payload.hasNoPlace)
        )
      }
      return{
        ...state,
        outStikers: [...state.outStikers, 
          newstiker.map(i=>{
            return{
              article: i.article,
              id : i.id,
              name:i.discription,
              quantity:i.quantity ,
              customer:i.storageplace ,
              storageplace : !i.request ? i.storageplace: 'box' , 
              notes: i.request
            }
          })
        ].flat()
      }
    }

    default :
       return state;
    }
}

export const newPSFileAC = (droppedSupplying) => ({ 
  type: ActionTypes.PS_ADD_FILE , 
  droppedSupplying 
})
export const psdeleteAllFilesAC = (all) => ({ 
  type:ActionTypes.PS_DELETE_ALL_FILES, all 
})
export const newOutPSFileAC = (payload) => ({ 
  type:ActionTypes.PS_ADD_IN_OUTFILE, 
  payload 
})
export const addStorePlaceToFulesSypAC = (payload) =>({
  type:ActionTypes.PS_ADD_STOREPLACE_TO_FILES_SUPPLYING, 
  payload
})
export const addNewPartStorePlaceToFulesSypAC = (payload) =>({
  type:ActionTypes.PS_NEW_PART_ADD_STOREPLACE_TO_FILES_SUPPLYING, 
  payload
})
export const addToStikerWindowAC= (payload) =>({
  type:ActionTypes.PS_ADD_TO_STIKER_WINDOW,
  payload
})

export default PostStorageReducer;
