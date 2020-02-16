import React from 'react'
import Navbar from './../../../util/Navbar/Navbar'
import {Field} from 'redux-form'
import {MdSave, MdAssignment, MdAssignmentTurnedIn} from 'react-icons/md';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styled from './StoragePlaceEditMenu.module.css'
import { ListGroup } from 'react-bootstrap';
import { EditOkMenu } from './EditOkMenu';


const StoragePlaceEditMenu = ({copiedtobuffer, aprops, unique, addClipboard, dosmt2, dosmt,toprintwindow}) => {
  const [oneRequest, setOneRequest] = React.useState([])
  const [hasNoPlace , sethasNoPlace] = React.useState([])
  const buttonplace = React.useRef(null);
  const buttonconsumer = React.useRef(null);
  
const {
  filesSupplying,handleSubmit,
  customer,requestValue,
  hasNoPlaceValue,outStikers,
  outStikersPath,yourcode} = aprops

  React.useEffect(()=>{
    let x =  filesSupplying.map(i =>{
      if(i.needFulfilled === true && i.request !== undefined){
        return i.request
      }
      if (i.needFulfilled === true && i.request === undefined && i.storageplace === undefined){
          return i.needNewPlace = true
      }else return undefined
    } )
      setOneRequest(unique(x))
  },[filesSupplying])
  
  React.useEffect(()=>{
    return sethasNoPlace(filesSupplying.filter(i =>
      i.needNewPlace === true))
  },[filesSupplying])


  return (
    <>
    <Navbar />
    <div style = {{ marginTop: '100px'}}>
      {
        oneRequest.filter(i=>i!==undefined).length === 0
         && 
        hasNoPlace.length === 0  ? 
        <EditOkMenu 
         toprintwindow={toprintwindow}
         outStikers={outStikers}
         outStikersPath={outStikersPath}
        />
      :
      <form 
       className={styled.form}
       onSubmit={handleSubmit}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title >
              Добавление запросов
            </Card.Title>
            <Card.Subtitle className="text-muted">
              В этом меню можно добавить в поле "место на складе"
              поставщика, для которого приехал товар
            </Card.Subtitle>
            <ListGroup variant="flush" className='mb-1'>
             <ListGroup.Item>
               <Field 
                name="request" 
                component="select">
                  <option key='1'>Запрос </option>
                 { 
                  oneRequest.filter(i=> i!==undefined && i!==true).map((i) => 

                     <option 
                    key ={ Math.random()*1000} 
                    value={i}>
                      {i} 
                   </option>
                  )
                 }
               </Field>
              </ListGroup.Item>
              {
                yourcode === true ? 
              <ListGroup.Item>
               <Field
                name="customer" 
                component="input"
                type="text"
                placeholder="Ваш Код">
              </ Field>
             </ListGroup.Item>                
                :
              <ListGroup.Item>
               <Field
                name="customer" 
                component="select">
                 <option key = '2'>Поставщик</option>
                 {
                  customer.map(i => 
                    <option 
                    key = {i.id}
                    value={i.name}>
                      {i.name}
                    </option>
                    )
                 }
              </ Field>
             </ListGroup.Item>
              }
            <ListGroup.Item>
              <Field
                name="yourcode"
                id="yourcode"
                component="input"
                type="checkbox"
              />
              <label 
              style = { {marginLeft: '3px'}  }
              htmlFor="yourcode"> Или добавить ВашКод?</label>
            </ListGroup.Item>
            </ListGroup>
            <span className= {styled.cardlinespan} > 
            <Button 
              ref = {buttonconsumer}
              style={{fontSize: '.7rem'}}
              variant="success"
              name="cunsumer"
              onClick={(e)=>
                addClipboard(e, requestValue,buttonconsumer.current.name )}
            >
              Копировать
              {
                copiedtobuffer.cunsumer ? 
                <MdAssignmentTurnedIn className={styled.form_icon}/>
                :
                <MdAssignment className={styled.form_icon}/>
              }
            </Button>
            <Button 
            style={{fontSize: '.7rem'}}
            onClick={handleSubmit(data => 
              {
              dosmt(data)
              }
            )}
             >Сохранить
              <MdSave className={styled.form_icon}/>
             </Button> 
             </span>
          </Card.Body>
        </Card>
      <div>


      </div>

     {
       hasNoPlace.length === 0 || hasNoPlace === undefined ? <></> :
       <div>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Место на складе</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              В этом меню можно добавить место на складе для новых запчастей, которые ни разу не прописывались
            </Card.Subtitle>
            <ListGroup variant="flush">
             <ListGroup.Item>
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
             </Field>
             </ListGroup.Item>
             <ListGroup.Item>
              <Field
                name="place" 
                component='input'
                type="text"
                placeholder='Добавить место'>
              </ Field>
             </ListGroup.Item>
            </ListGroup>
            <span className= {styled.cardlinespan} >
            <Button 
              ref={buttonplace}
              style={{fontSize: '.7rem'}}
              variant="success"
              name="place"
              onClick={(e)=>addClipboard(e, hasNoPlaceValue, buttonplace.current.name)}
            >
              Копировать
              {
                copiedtobuffer.place ? 
                <MdAssignmentTurnedIn className={styled.form_icon}/>
                :
                <MdAssignment className={styled.form_icon}/>
              }
            </Button>
            <Button 
              style={{fontSize: '.7rem'}} 
              onClick={handleSubmit(data => 
              {
              dosmt2(data)
              }
             )}
            >Сохранить
            <MdSave className={styled.form_icon}/>
            </Button> 
            </span>
          </Card.Body>
        </Card>

    </div>
     }
    </form>
        }
    </div>
    </>
  )
}
export default StoragePlaceEditMenu