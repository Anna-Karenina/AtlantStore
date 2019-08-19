import { connect } from 'react-redux';
import { newFileAC, takeFileNameAC, fromFileConsumerAc} from './../../Redux/FileReducer';
import FileList from './FileList';

const mapStateToProps = (state) =>{
  return{
        files: state.fileReducer.files,
        customer:state.fileReducer.customer
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addFile: (dropped) => {
      dispatch(newFileAC(dropped));
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
