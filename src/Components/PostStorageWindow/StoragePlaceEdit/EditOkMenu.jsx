import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Card, Overlay } from 'react-bootstrap'
import {MdPrint} from 'react-icons/md'
import  styled from  './StoragePlaceEditMenu.module.css'

export const EditOkMenu =({outStikersPath, toprintwindow,outStikers })=>{
 const [show, setShow] = React.useState(false);
 const btn = React.useRef(null);
 const setOnclick =()=>{
  setShow(!show)
  toprintwindow(outStikers)
 }
 
  return(
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Меню наклеек</Card.Title>
      <Card.Text>
      все запросы прописанны и деталей без мест нет
      </Card.Text>
      <Link to='/postingonstorage'>
        <Button size="sm">
          назад к приемке
        </Button>
     </Link>
     <br />
     <br />
       <Button 
        size="sm" ref={btn} onClick={setOnclick}>
          <MdPrint />
        Напечатать стикиров 
      </Button>
      <Overlay
        className={styled.tooltip} 
        target={btn.current} 
        show={show} 
        placement="right">
        {({
          placement,
          scheduleUpdate,
          arrowProps,
          outOfBoundaries,
          show: _show,
          ...props
        }) => (  
        <>
        {
          outStikersPath.length !==0 ? 
          <div {...props} className={styled.tooltip}>
            <Link to="Stikers">
                перейти к печати стикиров
              </Link>
          </div>
          :
          <div  {...props} className={styled.tooltipred}>
           Нечего печатать
          </div>
        }
        </>
        )}
      </Overlay>
    </Card.Body>
  </Card>
    
  )
}
