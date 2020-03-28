import * as ActionTypes from './ActionsConsts'


export const settingsReducer = (state = {
    settings: {},
  }, action) =>{

  switch(action.type){
    case ActionTypes.FROM_SETJSON_TO_STATE:{
      const stikerSize = action.payload
      return{
        ...state,
        settings:{stikerSize}
      }
    }
    default :
       return state;
    }
}


