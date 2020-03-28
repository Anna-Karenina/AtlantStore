import React from 'react'
import { connect } from 'react-redux';
import StoragePlaceEditMenu from './StoragePlaceEditMenu'
import {reduxForm} from 'redux-form'
import {addStorePlaceToFulesSypAC,addNewPartStorePlaceToFulesSypAC,addToStikerWindowAC} from './../../../Redux/PostStorageReducer'
import {fromStoragePlace} from './../../../Redux/FileReducer'
import { formValueSelector } from 'redux-form'
import { compose } from 'redux';


const selector = formValueSelector('selectingRequestStoragePlace')

const StoragePlaceEditMenuC = (props)=>{
  const [copiedtobuffer, setCopiedtobuffer]=React.useState({place: false, cunsumer:false})

  function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    let res = result.filter(i => (i !== undefined) && (i !== true ) )
    return res;
  }

  function addClipboard(e,text, id) {
    e.preventDefault()
    console.log(id)
    navigator.clipboard.writeText(text)
    .then((a) => {
      if(id === 'cunsumer'){
      setCopiedtobuffer({cunsumer: true, place: false})
    }else if(id === 'place'){
      setCopiedtobuffer({cunsumer: false, place: true})
    }
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
  }

  const dosmt = async (data) =>{
    if(window.confirm(`Для запроса ${data.request} выбран поставщик <${data.customer}>   применить?` )){
       await props.addStorePlaceToFulesSypAction(data)
       await props.addToStikerWindow(data)
       await props.reset()
       setCopiedtobuffer({cunsumer: false})
    } else console.log('не приминилось')
  }
const dosmt2 = async (data) =>{
  if(window.confirm(`Для номера ${data.hasNoPlace} выбрано место  <${data.place}>   применить?` )){
    await props.addNewPartStorePlaceToFulesSyp(data)
    await props.addToStikerWindow(data)
    await props.reset()
    setCopiedtobuffer({ place: false})
 } else console.log('не приминилось')
}

const toprintwindow = async(data) =>{
  await props.addToStikerWindowPath(data)
  console.log('добавленно')
}

  return(
    <StoragePlaceEditMenu
      unique={unique}
      addClipboard={addClipboard}
      aprops={props} 
      dosmt2={dosmt2}
      dosmt={dosmt}
      copiedtobuffer={copiedtobuffer}
      toprintwindow={toprintwindow}
    />
  )
}


const mapStateToProps = (state) =>{
  const requestValue = selector(state, 'request')
  const hasNoPlaceValue = selector(state, 'hasNoPlace')
  const yourcode = selector(state, 'yourcode')
  return{
    filesSupplying: state.PostStorageReducer.filesSupplying,
    customer:state.customerReducer.customer,
    requestValue,hasNoPlaceValue,yourcode,
    outStikers:state.PostStorageReducer.outStikers,
    outStikersPath: state.fileReducer.files
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addStorePlaceToFulesSypAction: (values) =>{
      dispatch(addStorePlaceToFulesSypAC(values))
    },
    addNewPartStorePlaceToFulesSyp: (values) =>{
      dispatch(addNewPartStorePlaceToFulesSypAC(values))
    },
    addToStikerWindow: (values) =>{
      dispatch(addToStikerWindowAC(values))
    },
    addToStikerWindowPath:(values) =>{
      dispatch(fromStoragePlace(values))
    },
  }
}



export default compose(
  connect (mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'selectingRequestStoragePlace',
  })
)(StoragePlaceEditMenuC)