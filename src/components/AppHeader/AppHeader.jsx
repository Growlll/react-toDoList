import React from 'react';
import './AppHeader.css'

const AppHeader = ({todo, done}) => {
  return (
    <div className='app-header'>
      <h1>To Do List</h1>
      <div>
        {todo} more to do, {done} done
      </div>
    </div>
  )
}

export default AppHeader;