import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from '../ItemTypes'

const style = {
  margin: '.1rem',
  backgroundColor: 'white',
  cursor: 'pointer',
  padding: '10px',
  border: '2px solid black',
  width: '60%',
  textAlign: 'center'
}
const Card = ({ id, name, moveCard, findCard }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, name },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id)
        moveCard(draggedId, overIndex)
      }
    },
  })

  const opacity = isDragging ? 0.4 : 1
  const border = isDragging ? '1px solid #BBBBBB ' : '1px solid #BBBBBB'
  const boxShadow =  isDragging ? '0 3px 4px rgba(116, 116, 116, 0.3)' : 'none'
  return (
    <div ref={node => drag(drop(node))} style={{ ...style, opacity, boxShadow, border }}>
      {name}
    </div>
  )
}
export default Card
