import React, { useState, useCallback } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'

// const TargetBox = ({ onDrop, lastDroppedItem, customer }) => {
//   let con =customer.map(function(elem){
//     return elem.name;
// }).join(", ");
//
//   console.log(con)
//
//   const [{ isOver, draggingColor, canDrop }, drop] = useDrop({
//     accept: [Colors.naame, Colors.name, con],
//     drop(item) {
//       onDrop(item.type)
//       return undefined
//     },
//     collect: monitor => ({
//       isOver: monitor.isOver(),
//       canDrop: monitor.canDrop(),
//       draggingColor: monitor.getItemType(),
//     }),
//   })
//
//   return (
//     <div ref={drop} style={{ border: '1px solid gray' }}>
//     <img src = {require('./recyclingbin2.png')} alt = '1' />
//       <p>Drop here.</p>
//       {!canDrop && lastDroppedItem && <p>Last dropped: {lastDroppedItem}</p>}
//     </div>
//   )
// }
// const RecyclingBin = props => {
//   const [lastDroppedItem, setlastDroppedItem] = useState(null)
//   const handleDrop = useCallback(color => setlastDroppedItem(color), [])
//   return (
//     <TargetBox
//       {...props}
//       customer={props.customer}
//       lastDroppedItem={lastDroppedItem}
//       onDrop={handleDrop}
//     />
//   )
// }




const TargetBox = ({ onDrop, items }) => {
  const [{ canDrop }, drop] = useDrop({
    accept: [ItemTypes.CARD],
    drop(items) {
      onDrop(items)
      return undefined
    },
    collect: monitor => ({
      canDrop: monitor.canDrop()
    }),
  })
  return (
     <div ref={drop} >
       <img src = {require('./recyclingbin2.png')} alt = '1' />
      {!canDrop && items
         && <p>Last dropped: {items.name}</p>}
    </div>
  )
}
const RecyclingBin = props => {
  const [items, setLastDroppedItem] = useState(null)
  const handleDrop = useCallback(
    items => setLastDroppedItem(items), [])
  return (
    <TargetBox
      {...props}
      items={items}
      onDrop={handleDrop}
    />
  )
}


export default RecyclingBin
