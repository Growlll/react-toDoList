import React, { Component } from 'react';
import './AddItem.css'

export default class AddItem extends Component {
  render() {
    const { addItem } = this.props

    return (
      <form className='add-item' onSubmit={addItem}>
        <button type="submit"
                className='btn btn-outline-success'>
          <i className="fa fa-plus"></i>
        </button>
        <input type="text"/>
      </form>
    )
  }
}