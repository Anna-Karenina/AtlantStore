import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
  margin: '.5rem',
  backgroundColor: 'white',
  cursor: 'pointer',
  padding: '10px',
  border: '1px solid black'
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
  const border = isDragging ? '1px solid #BBBBBB ' : 'none'
  const boxShadow =  isDragging ? '0 3px 4px rgba(116, 116, 116, 0.3)' : 'none'
  return (
    <div ref={node => drag(drop(node))} style={{ ...style, opacity, boxShadow, border }}>
      {name}
    </div>
  )
}
export default Card
