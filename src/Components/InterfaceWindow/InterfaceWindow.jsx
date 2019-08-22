import React, { useState, useMemo } from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import TargetBox from './TargetBox'
import FileListContainer from './FileListContainer.jsx'
import DragFileContainer from './../util/DragFile/DragFile.jsx'
import  Navbar from './../util/Navbar/Navbar.jsx'
const { FILE } = NativeTypes

const mainScreen = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#2e2e2e',
}
const discr = {
  height: '100%',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  width: '480px',
  padding: '10px',
  marginBottom: '40px',
  color: '#fff',
}
const InterfaceWindow = (props) =>{
  const [droppedFiles, setDroppedFiles] = useState([])
  const accepts = useMemo(() => [FILE], [])
  const handleFileDrop = (item, monitor) => {
    if (monitor) {
      setDroppedFiles(monitor.getItem().files)
    }
  }
  let takeDrop = {droppedFiles: droppedFiles, taked: false}
  if (takeDrop.droppedFiles.length > 0){
    takeDrop.taked = true
  }
  return (
      <div style={mainScreen}>
        <Navbar />

        <div style={discr}>
          <DragFileContainer />
          <p>Загрузите excel перетащив нужные файлы в выделенную область</p>
        </div>
          <TargetBox accepts={accepts} onDrop={handleFileDrop} />
          <FileListContainer  droppedFiles = {takeDrop} />
      </div>
  );
}

export default InterfaceWindow;
