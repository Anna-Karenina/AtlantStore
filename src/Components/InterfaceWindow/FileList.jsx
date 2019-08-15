import React from 'react'
import { Link } from 'react-router-dom'
const excelToJson = require('convert-excel-to-json');


const FileList = (props) => {
  let dropped = {}
    if (props.droppedFiles.taked === true ){
      let path = props.droppedFiles.droppedFiles[0].path
      let filename = props.droppedFiles.droppedFiles[0].name
      let fileExtension = props.droppedFiles.droppedFiles[0].type
      if(fileExtension !== "application/vnd.ms-excel" && fileExtension !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ){
        return(alert("Не верный тип файла, используйте xlsx"),
                      <div>Нет подкинутых файлов</div>)
      }
        dropped  = excelToJson({
          sourceFile: path,
          header: {rows: 1},
          columnToKey: {
            A: 'id',
            B: 'article',
            C: 'name',
            D: 'quantity',
            G: 'storageplace',
            L: 'customer'}
            })
    dropped.fileName = filename;
    props.takeFile(filename);
    props.droppedFiles.taked = false;
    props.addFile(dropped);
  }
    return props.files.length === 0 ? (
      <div>Нет подкинутых файлов
        <Link to='Consumer' >Открыть</Link>
      </div>

    ) : (
        <div>
            <Link to='Stikers' >Открыть</Link>
       </div>
   )
}

export default FileList
