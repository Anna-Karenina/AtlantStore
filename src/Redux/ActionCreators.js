import * as ActionTypes from './ActionsConsts'
import fs from 'fs'
import {consumerdir} from './../core'
//______________ACTION_CREATORS_________

export const fromFileSettingsAc = (file) => ({ 
  type: ActionTypes.FROM_SETJSON_TO_STATE, 
  payload:file 
})
//______________________________________

//______________ACTION_THUNK____________

export const settingsResizeStiker = (settings) => dispatch => {
  fs.writeFile(`${consumerdir}/Settings.json`, 
    JSON.stringify(settings, null, 2), (err) => {
      if (err) throw err;
      dispatch(fromFileSettingsAc(settings))
    }
  )  
}
//______________________________________