import fs from 'fs'
import { storedir } from './'
import XLSX from 'xlsx'

const today = new Date().toLocaleDateString()

const exportFile= (data, curdir) =>{
  const header = ['№', 'Материал', 'Наименование', 'Кол-во', 'Место', "№ запроса", "Палет"]
  data.unshift(header)
  console.log(data)
  /* convert state to workbook */
    const ws = XLSX.utils.aoa_to_sheet(data);
    console.log(ws)
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
  //  generate XLSX file and send to client */
  XLSX.writeFile(wb, `${curdir}/${today}-OUT.xlsx`)
};
const createArrofArr = (data) =>{
  let arrofarr =[]
  let sortdata = data.map((i, index)=>{
    return{
      id : +index+1,
      article: i.article,
      discription : i.discription,
      quantity : i.quantity,
      stoggerplace : i.storageplace,
      request : i.request,
      notes : i.notes
    }
  })
  console.log(sortdata)
  for(let i = 0; i<sortdata.length; i++){
     arrofarr.push(Object.values(sortdata[i]))
  }
// for (let k =0; k<arrofarr.length; k++){

// }
  return  arrofarr
}

const savetofile = (data) =>{
  let curdir =`${storedir}/${today}`
  let newdata = createArrofArr(data)
  console.log(newdata)
  if (!fs.existsSync(`${storedir}/${today}`)){
    fs.mkdirSync(curdir)
    exportFile(newdata,curdir)
  }else{
      console.log("Directory already exist");
      exportFile(newdata, curdir)
      //process.exit(1)
  }
}
export default savetofile
