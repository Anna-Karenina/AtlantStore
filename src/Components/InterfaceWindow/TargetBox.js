import React from 'react'
import { DropTarget } from 'react-dnd'
const stylebox = {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  border: "2px dashed #ccc",
  borderRadius: '20px',
  width: '480px',
  height: '380px',
  fontFamily: 'sans-serif',
  padding: '20px',
  backgroundColor: 'rgba(129,129,129, 0.5)',
  transition: '0.3s'
}
const styleActive = {
  backgroundColor: 'rgba(129,129,129, 0.7)',
  border: "2px dashed purple",
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  borderRadius: '20px',
  width: '480px',
  height: '380px',
  fontFamily: 'sans-serif',
  padding: '20px',
    transition: '0.3s'
}

const TargetBox = ({ canDrop, isOver, connectDropTarget }) => {
  const isActive = canDrop && isOver
  return connectDropTarget(
    <div style={isActive ? (stylebox, styleActive) : stylebox }>
        {isActive ? 'Отпускай' : 'Перетащите файл сюда'}
    </div>
  )
}
export default DropTarget(
  props => props.accepts,
  {
    drop(props, monitor) {
      if (props.onDrop) {
        props.onDrop(props, monitor)
      }
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(TargetBox)
