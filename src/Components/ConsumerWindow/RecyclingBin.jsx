import React, { useState, useCallback } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { connect } from 'react-redux';
import {consumerDelAc} from './../../Redux/FileReducer'

const TargetBox = ({ onDrop, items }) => {
  const [{ isOver,canDrop }, drop] = useDrop({
    accept: [ItemTypes.CARD],
    drop(items) {
      onDrop(items)
      return undefined
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
  })
  const opacity = isOver ? 1 : 0.7
  const border = isOver ?  "1.5px dashed purple" : 'none'
  return (
    <div ref={drop} style={{opacity, border}} >
     <img src = {require('./recyclingbin2.png')} alt = '1' />
      {!canDrop && items
         && <p>Удалено: {items.name}</p>}
    </div>
  )
}


const RecyclingBin = props => {
let customer = props.customer
let consdeldis = props.consdeldis
  const [items, setLastDroppedItem] = useState(customer)
  const handleDrop = useCallback(
    items => (setLastDroppedItem(items)), [])
    if(items !== null && items.id !==undefined ) {
consdeldis(items);
}
  return (
    <TargetBox
      {...props}
      items={items}
      onDrop={handleDrop}
    />
  )
}
const mapDispatchToProps = (dispatch) =>{
  return{
 consdeldis: (items)=>{
      dispatch(consumerDelAc(items))
    }
  }
}
const RecyclingBinC = connect( state =>
({customer: state.fileReducer.customer }),
  mapDispatchToProps
)(RecyclingBin)

export default RecyclingBinC
