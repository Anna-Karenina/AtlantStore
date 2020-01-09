import React from 'react'
import { DropTarget } from 'react-dnd'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const stylebox = {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  border: "2.5px dashed #ccc",
  borderRadius: '20px',
  width: '480px',
  height: '380px',
  fontSize: '1.2rem',
  fontWeight: '500',
  padding: '20px',
  backgroundColor: 'rgba(129,129,129, 0.7)',
  transition: '0.3s',
  color: 'cyan '
}
const styleActive = {
  backgroundColor: 'rgba(129,129,129, 0.4)',
  border: "2.5px dashed purple",
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  borderRadius: '20px',
  width: '480px',
  height: '380px',
  fontSize: '2rem',
  padding: '20px',
  transition: '0.3s',
  color: 'purple'
}
const article ={
  display:'flex',
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center",
}

const TargetBox = ({ canDrop, isOver, connectDropTarget }) => {
  const isActive = canDrop && isOver
  return connectDropTarget(
    <div style={isActive ? (stylebox, styleActive) : stylebox }>
        {isActive ? 'Отпускай' : 
        <div style = {article} >
        <AiOutlineCloudUpload style={{width: '80px', height: 'auto'}}/>
        <p>Перетащите файл в эту область</p>
        </div>}
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
