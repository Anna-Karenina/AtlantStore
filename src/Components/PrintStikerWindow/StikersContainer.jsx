import { connect } from 'react-redux';
import Stikers from './Stikers.jsx';
import { addConsAC, delonestikerAC,dublecardAC } from './../../Redux/FileReducer';
import { reduxForm } from 'redux-form';

const mapStateToProps = (state) =>{
  return{
    StikerSize: state.settingsReducer.settings.stikerSize,
    files: state.fileReducer.files,
    initialValues:{
      checked: false
    }
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addConstumerdis: (formData)=>{
        dispatch(addConsAC(formData))
      },
    delonestiker: (id)=>{
      dispatch(delonestikerAC(id))
    },
    dublecard: (id)=>{
      dispatch(dublecardAC(id))
    }
  }
}
const StikersContainer = connect (
  mapStateToProps, mapDispatchToProps
)(reduxForm({
  form: 'stikerValues'
})(Stikers));

export default StikersContainer;
