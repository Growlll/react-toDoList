import React, {Component} from 'react';
import './ToDoListItem.css'

export default class ToDoListItem extends Component {
  constructor() {
    super();

    this.state = {
      done: false,
      important: false
    }
  }

  onLabelClick = () => {
    this.setState(({done}) => ({done: !done}))
  }

  onMarkImportant = () => {
    this.setState(({important}) => ({important: !important}))
  }

  render() {
    const {label, onDeleted} = this.props
    const {done, important} = this.state

    return (
      <span className={`todo-list-item ${done ? ' done' : ''} ${important ? ' important' : ''}`}>
        <button type='button'
                className='btn btn-outline-danger btn-sm'
                onClick={onDeleted}>
          <i className='fa fa-trash-o'></i>
        </button>

        <button type='button'
                className='btn btn-outline-success btn-sm succsess'
                onClick={this.onMarkImportant}>
          <i className='fa fa-exclamation'></i>
        </button>

        <span className='todo-list-item-label'
              onClick={this.onLabelClick}>
        {label}
        </span>
      </span>
    )
  }
}