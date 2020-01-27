import { connect } from 'react-redux';
import StoragePlaceEditMenu from './StoragePlaceEditMenu'
import {reduxForm} from 'redux-form'
import {addStorePlaceToFulesSypAC} from './../../../Redux/PostStorageReducer'


const mapStateToProps = (state) =>{
  return{
    filesSupplying: state.PostStorageReducer.filesSupplying,
    customer:state.customerReducer.customer
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addStorePlaceToFulesSypAction: (values) =>{
      dispatch(addStorePlaceToFulesSypAC(values))
    }
  }
}

const StoragePlaceEditMenuContainer = connect (mapStateToProps, mapDispatchToProps)(StoragePlaceEditMenu);

const StoragePlaceEditMenuContainerReduxFrom = reduxForm({
  form: 'selectingRequestStoragePlace',
})(StoragePlaceEditMenuContainer);

export default StoragePlaceEditMenuContainerReduxFrom