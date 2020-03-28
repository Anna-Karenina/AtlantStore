import React from 'react'
import { Link } from 'react-router-dom'
const excelToJson = require('convert-excel-to-json');


const styleddiv={
  color:'cyan',
  textShadow: '1px 1px  black'
}
const FileList = ({droppedFiles ,takeFile, addFile,addModificatorsInPSFile, files}) => {
  let dropped = {}
  let droppedSupplying = {}
  const regStore = new RegExp(/store/i)
    if (droppedFiles.taked === true ){
      let path = droppedFiles.droppedFiles[0].path
      let filename = droppedFiles.droppedFiles[0].name
      let fileExtension = droppedFiles.droppedFiles[0].type
      if(fileExtension !== "application/vnd.ms-excel" && fileExtension !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ){
        return(
          alert("Не верный тип файла, используйте xlsx или xls"),
          <div style={styleddiv}>Нет подкинутых файлов</div>)
      }   
      if(regStore.test(filename) === true){
        droppedSupplying  = excelToJson({
          sourceFile: path,
          header: {rows: 1},
            name: 'store',
            columnToKey: {
              A: 'article',
              B: 'discription',
              C: 'quantity',
              D: 'request',
              E: 'storageplace',
              F: 'secstorageplace',
              G: 'build',
              H: 'notes',
            }
        })
        dropped.fileName = filename;
        takeFile(filename);
        droppedFiles.taked = false;
        addModificatorsInPSFile(droppedSupplying);
      } else if(regStore.test(filename) === false) {
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
      takeFile(filename);
      droppedFiles.taked = false;
      addFile(dropped);
      }
  }
    return files.length === 0 ? (
      <div style={styleddiv}>Нет подкинутых файлов</div>
    ) : (
        <div>
            <Link to='Stikers' style={styleddiv}>
              Загрузка завершена
            </Link>
       </div>
   )
}

export default FileList