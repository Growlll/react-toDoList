import React, { Component } from 'react';
import './AddItem.css'

export default class AddItem extends Component {
  state = {
    value: ''
  }

  onLabelChange = (e) => {
    this.setState({ value: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <form className='add-item' onSubmit={this.onSubmit}>
        <button type="submit"
                className='btn btn-outline-success'>
          <i className="fa fa-plus"></i>
        </button>
        <input type="text" onChange={this.onLabelChange} value={this.state.value} />
      </form>
    )
  }
}