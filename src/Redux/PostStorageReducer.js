const PS_ADD_FILE = 'PS_ADD_FILE';
const PS_DELETE_ALL_FILES = 'PS_DELETE_ALL_FILES'
const PS_ADD_IN_OUTFILE ='PS_ADD_IN_OUTFILE';
const PS_ADD_STOREPLACE_TO_FILES_SUPPLYING= 'PS_ADD_STOREPLACE_TO_FILES_SUPPLYING';
const PS_NEW_PART_ADD_STOREPLACE_TO_FILES_SUPPLYING=
'PS_NEW_PART_ADD_STOREPLACE_TO_FILES_SUPPLYING'
const PS_ADD_TO_STIKER_WINDOW = 'PS_ADD_TO_STIKER_WINDOW'

let initState = {
  filesSupplying : [],
  outFilesSupplying : [],
  outStikers:[]
}

const PostStorageReducer = (state = initState, action) =>{
  switch(action.type){
    case PS_ADD_FILE : {
        let index =  Object.keys(action.droppedSupplying)
        let droppedSupplying = action.droppedSupplying[index[0]]
        droppedSupplying.map( i => { return (
          i.article = i.article.replace(/\s/g, '').toLowerCase(),
          i.id =  Math.floor(Math.random() * 999)+i.article
          )
        })
         droppedSupplying.map(i =>{ 
          if(i.hasOwnProperty('request') === true
          || i.hasOwnProperty('storageplace') === false){
            return i.needFulfilled = true
          }else  return i.needFulfilled = false
        })
    return {
      ...state,
      filesSupplying: [...state.filesSupplying, ...droppedSupplying],
      }
    }
    case PS_DELETE_ALL_FILES : {
      return {
        ...state,
        filesSupplying : [],
        outFilesSupplying : [],
        outStikers:[]
        }
      }
    case PS_ADD_IN_OUTFILE:{
      console.log('что я тту делаю?')
      const oneLinePart = action.payload
      return{
        ...state,
        outFilesSupplying:[...state.outFilesSupplying, ...oneLinePart]
      }
    }
    case PS_ADD_STOREPLACE_TO_FILES_SUPPLYING:{
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
    case PS_NEW_PART_ADD_STOREPLACE_TO_FILES_SUPPLYING:{
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
    case PS_ADD_TO_STIKER_WINDOW:{
      console.log(action.payload)
      let newstiker;
      if(action.payload.customer !== undefined){
         newstiker = state.filesSupplying.filter(
          i=>(+i.request) === (+action.payload.request))
      }
      if (action.payload.place !== undefined){
         newstiker = state.filesSupplying.filter(
          i=>i.article === action.payload.hasNoPlace
        )
      }
        console.log(newstiker )
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
              storageplace : 'box',
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

export const newPSFileAC = (droppedSupplying) => ({ type: PS_ADD_FILE , droppedSupplying })
export const psdeleteAllFilesAC = (all) => ({ type:PS_DELETE_ALL_FILES, all })
export const newOutPSFileAC = (payload) => ({ type: PS_ADD_IN_OUTFILE , payload })
export const addStorePlaceToFulesSypAC = (payload) =>({type :PS_ADD_STOREPLACE_TO_FILES_SUPPLYING, payload})
export const addNewPartStorePlaceToFulesSypAC = (payload) =>({type :PS_NEW_PART_ADD_STOREPLACE_TO_FILES_SUPPLYING, payload})
export const addToStikerWindowAC= (payload) =>({
  type: PS_ADD_TO_STIKER_WINDOW,
  payload
})

export default PostStorageReducer;
