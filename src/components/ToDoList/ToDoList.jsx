import React from 'react';
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import './ToDoList.css'

const ToDoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {
  const items = todos.map(item => {
    const {id, ...rest} = item

    return (
      <li key={id} className='list-group-item'>
        <ToDoListItem {...rest}
                      onDeleted={() => onDeleted(id)}
                      onToggleDone={() => onToggleDone(id)}
                      onToggleImportant={() => onToggleImportant(id)}
                      done={item.done}
                      important={item.important}/>
      </li>
    )
  })

  return (
    <div className='todo-list'>
      <ul className='list-group'>
        {items}
      </ul>
    </div>
  )
}

export default ToDoList;