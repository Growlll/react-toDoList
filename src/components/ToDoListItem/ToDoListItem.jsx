import React, {Component} from 'react';
import './ToDoListItem.css'

export default class ToDoListItem extends Component {
  render() {
    const {label, onDeleted, onToggleDone,
          onToggleImportant, done, important} = this.props

    return (
      <span className={`todo-list-item ${done ? ' done' : ''} ${important ? ' important' : ''}`}>
        <button type='button'
                className='btn btn-outline-danger btn-sm'
                onClick={onDeleted}>
          <i className='fa fa-trash-o'></i>
        </button>

        <button type='button'
                className='btn btn-outline-success btn-sm succsess'
                onClick={onToggleImportant}>
          <i className='fa fa-exclamation'></i>
        </button>

        <span className='todo-list-item-label'
              onClick={onToggleDone}>
        {label}
        </span>
      </span>
    )
  }
}