import React from 'react'
import styled from './SettingsWindow.module.scss'
import Navbar from '../../util/Navbar/Navbar'
import { Card,Dropdown, DropdownButton } from 'react-bootstrap'
import { connect } from 'react-redux'
import { settingsResizeStiker } from '../../Redux/ActionCreators'


const  Settings=({StikerSize, settingsResizeStiker})=>{
  const toggleSize=(size)=>{
    settingsResizeStiker(size)
  }
 return (
  <>
     <Navbar />
   <div className={styled.bgcontainer}>
     <div className={styled.container}>
       <div className={styled.optionWrapper}>
        <div className = {styled.stiker_size_row}>
          <Card style = {{ width: '100%', display: 'flex',justifyContent: 'center', alignItems:'center'}}>
            <Card.Header as="h5" style={{width: '100%'}}>Размер наклейки</Card.Header>
            <Card.Body>
              <Card.Title>Текущий: {StikerSize} мм</Card.Title>
              <DropdownButton id="dropdown-item-button" title="Выбрать  размер">
                <Dropdown.Item as="button" onClick={()=>toggleSize('69x60')}>69 х 60 мм</Dropdown.Item>
                <Dropdown.Item as="button"onClick={()=>toggleSize('59x60')}>59 х 60 мм</Dropdown.Item>
              </DropdownButton>
            </Card.Body>
          </Card>
        </div>
       </div>
     </div>
   </div>
  </>
 )
}
const mapState2props = state =>{
  return { 
    StikerSize: state.settingsReducer.settings.stikerSize
  }
}
const mapDispatchToProps = dispatch => ({
  settingsResizeStiker: (size) => dispatch(settingsResizeStiker(size))
})
export default connect(mapState2props,mapDispatchToProps)(Settings)
// Zebra_technologies_ZTC_GK420t