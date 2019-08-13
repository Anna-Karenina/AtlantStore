import cl from './InterfaceWindow.module.css'
import React, { useState, useMemo } from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import TargetBox from './TargetBox'
import FileListContainer from './FileListContainer.jsx'
import DragFileContainer from './util/DragFile/DragFile.jsx'
const { FILE } = NativeTypes

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
      <div className={cl.mainScreen}>
        <div className={cl.discr}>
          <DragFileContainer />
          <p>Загрузите excel файл перетащив нужные изображения в выделенную область</p>
        </div>
          <TargetBox accepts={accepts} onDrop={handleFileDrop} />
          <FileListContainer  droppedFiles = {takeDrop} />
      </div>
  );
}

export default InterfaceWindow;
