import React, { useState, useCallback } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from '../ItemTypes'
const recyclingbin = require('./../../../assets/recyclingbin2.png')

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
  const pstyle = {color:'#fafafa'}
  const opacity = isOver ? 1 : 0.7
  const border = isOver ?  "1.5px dashed purple" : 'none'
  return (
    <div ref={drop} style={{opacity, border}} >
     <img src = {recyclingbin} alt = '1' />
      {!canDrop  && items
         && <p style={pstyle}>Удалено: {items.name}</p>
      }
      {canDrop
         && <p style={pstyle}>Сортируйте!</p>
      }
    </div>
  )
}


const RecyclingBin = ({customer, consdeldis}) => {
  const [items, setLastDroppedItem] = useState(customer)
  const handleDrop = useCallback(
    items => (setLastDroppedItem(items)), [])
    if(items !== null && items.id !==undefined ) {
consdeldis(items);
}
  return (
    <TargetBox
      items={items}
      onDrop={handleDrop}
    />
  )
}

export default RecyclingBin
