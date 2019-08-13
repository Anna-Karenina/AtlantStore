import { connect } from 'react-redux';
import { newFileAC, takeFileNameAC } from './../../Redux/FileReducer';
import FileList from './FileList';

const mapStateToProps = (state) =>{
  return{
        files: state.fileReducer.files
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addFile: (dropped) => {
      dispatch(newFileAC(dropped));
    },
    takeFile: (filename) =>{
      dispatch(takeFileNameAC(filename))
    }
  }}

const FileListContainer = connect (mapStateToProps, mapDispatchToProps)(FileList);
export default FileListContainer;
