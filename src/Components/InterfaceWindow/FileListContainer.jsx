import { connect } from 'react-redux';
import { newFileAC, takeFileNameAC } from './../../Redux/FileReducer';
import { fromFileConsumerAc } from './../../Redux/ConsumerReducer';
import { newPSFileAC } from './../../Redux/PostStorageReducer'
import FileList from './FileList';

const mapStateToProps = (state) =>{
  return{
        files: state.fileReducer.files,
        customer:state.customerReducer.customer
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addFile: (dropped) => {
      dispatch(newFileAC(dropped));
    },
    addPSFile: (droppedSupplying) => {
      dispatch(newPSFileAC(droppedSupplying));
    },
    takeFile: (filename) =>{
      dispatch(takeFileNameAC(filename))
    },
    addNewConsumertoStatedis: (file)=>{
      dispatch(fromFileConsumerAc(file))
    }
  }}

const FileListContainer = connect (mapStateToProps, mapDispatchToProps)(FileList);
export default FileListContainer;
