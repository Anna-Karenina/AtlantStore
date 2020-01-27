const PS_ADD_FILE = 'PS_ADD_FILE';
const PS_ADD_IN_OUTFILE ='PS_ADD_IN_OUTFILE';
const PS_ADD_STOREPLACE_TO_FILES_SUPPLYING= 'PS_ADD_STOREPLACE_TO_FILES_SUPPLYING';

let initState = {
  filesSupplying : [],
  outFilesSupplying : [],
}

const PostStorageReducer = (state = initState, action) =>{
  switch(action.type){
    case PS_ADD_FILE : {
        let index =  Object.keys(action.droppedSupplying)
        let droppedSupplying = action.droppedSupplying[index[0]]
        droppedSupplying.map( i => { return (
          i.article = i.article.replace(/\s/g, '').toLowerCase()
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
    case PS_ADD_IN_OUTFILE:{
      console.log('что я тту делаю?')
      const oneLinePart = action.payload
      console.log(oneLinePart)
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
    default :
       return state;
    }
}

export const newPSFileAC = (droppedSupplying) => ({ type: PS_ADD_FILE , droppedSupplying })
export const newOutPSFileAC = (payload) => ({ type: PS_ADD_IN_OUTFILE , payload })
export const addStorePlaceToFulesSypAC = (payload) =>({type :PS_ADD_STOREPLACE_TO_FILES_SUPPLYING, payload})


export default PostStorageReducer;
