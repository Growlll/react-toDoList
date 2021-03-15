import React from 'react';
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import './ToDoList.css'

const ToDoList = ({ todos, onDeleted}) => {

  const items = todos.map(item => {
    const {id, ...rest} = item

    return (
      <li key={id} className='list-group-item'>
        <ToDoListItem {...rest} onDeleted={() => onDeleted(id)}/>
      </li>
    )
  })

  return (
    <div className='todo-list'>
      <ul className='list-group'>
        { items }
      </ul>
    </div>
  )
}

export default ToDoList;