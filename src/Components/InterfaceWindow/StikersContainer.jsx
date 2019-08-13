import { connect } from 'react-redux';
import Stikers from './Stikers.jsx';
import { addConsAC } from './../../Redux/FileReducer';
import { reduxForm } from  'redux-form';

const mapStateToProps = (state) =>{
  return{
        files: state.fileReducer.files,
        customer: state.fileReducer.customer
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
  addConstumerdis: (formData)=>{
      dispatch(addConsAC(formData))
    }
  }
}
const StikersContainer = connect (mapStateToProps, mapDispatchToProps)(reduxForm({form: 'stikerValues'})(Stikers));
export default StikersContainer;
