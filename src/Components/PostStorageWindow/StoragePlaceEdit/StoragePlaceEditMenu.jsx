import React from 'react'
import Navbar from './../../../util/Navbar/Navbar'
import {Field} from 'redux-form'
import {MdSave} from 'react-icons/md';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

const StoragePlaceEditMenu = (props) => {
  const [oneRequest, setOneRequest] = React.useState([])
  const [hasNoPlace , sethasNoPlace] = React.useState([])
console.log(props)

  React.useEffect(()=>{
    let x =  props.filesSupplying.map(i =>{
      if(i.needFulfilled === true && i.request !== undefined){
        return i.request
      }
      if (i.needFulfilled === true && i.request === undefined && i.storageplace === undefined){
          return i.needNewPlace = true
      }else return undefined
    } )
    console.log(x)
      setOneRequest(unique(x))
  },[props.filesSupplying])
  
  React.useEffect(()=>{
    let x = props.filesSupplying.filter(i =>
      i.needNewPlace === true
    )
    return sethasNoPlace(x)
  },[props.filesSupplying])

  const dosmt = async (data) =>{
    if(window.confirm(`Для запроса ${data.request} выбран поставщик <${data.customer}>   применить?` )){
       await props.addStorePlaceToFulesSypAction(data)
       await props.reset()
    } else console.log('не приминилось')
  }
const dosmt2 = (data) =>{
  console.log(data)
}
console.log(oneRequest)
  return (
    <>
    <Navbar />
    <div style = {{ marginTop: '100px'}}>
      {
        oneRequest.length === 0 || oneRequest === undefined || (
        oneRequest.length === 1 && oneRequest[0] === undefined
        ) ? 
          <div>
          <div>все запросы прописанны и деталей без мест нет</div>
      <Link to='/postingonstorage'>
      <Button>
          назад к приемке
      </Button>
      </Link>
      </div>
      :

      <form 
        style ={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}
        onSubmit={props.handleSubmit}>
      <div>
        выберите запрос:
        <Field 
          name="request" 
          component="select"
        >
            <option key = '1'>Запрос</option>
           { 
              oneRequest.map((i) => 
                i === undefined && i === true ?  undefined :
                <option 
                  key ={ Math.random()*1000} 
                  value={i}>{i} 
                </option>)
            }
          </Field>
          <Field
            name="customer" 
            component="select">
              <option key = '2'>Поставщик</option>
            {
              props.customer.map(i => 
                <option 
                key = {i.id}
                value={i.name}>{i.name}
                </option>
                )
            }
          </ Field>
          <Button onClick={props.handleSubmit(data => 
            {
             dosmt(data)
            }
          )}
          >
            <MdSave style ={{width: '25px', height: 'auto' }}/>
          </Button> 
      </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
     {
       hasNoPlace.length === 0 || hasNoPlace === undefined ? <></> :
       <div>
       в поставке есть позиции без мест:
       <Field
       name="hasNoPlace" 
       component="select">
         <option key = '3'>Артикул</option>
       {
         hasNoPlace.map(i => 
           <option 
           key = {i.id}
           value={i.article}>
             {i.article}
           </option>
           )
       }
     </ Field>
       <Field
       name="place" 
       component='input'
       type="text"
       placeholder='Добавить место'>
     </ Field>
     <Button onClick={props.handleSubmit(data => 
            {
             dosmt2(data)
            }
          )}
          >
            <MdSave style ={{width: '25px', height: 'auto' }}/>
          </Button> 
    </div>
     }
      </form>
        }
    </div>
    </>
  )
}
export default StoragePlaceEditMenu