import React, { Component } from 'react';
import './AddItem.css'

export default class AddItem extends Component {
  state = {
    value: '',
    require: false
  }

  onLabelChange = (e) => {
    this.setState({ value: e.target.value })
    if(this.state.value) {
      this.setState({ require: false })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    if(this.state.value) {
      this.props.addItem(this.state.value)
    } else {
      this.setState({ require: true })
    }
    this.setState({ value: '' })
  }

  render() {
    return (
      <form className='add-item' onSubmit={this.onSubmit}>
        <button type="submit"
                className='btn btn-outline-success'>
          <i className="fa fa-plus"></i>
        </button>
        <input type="text" onChange={this.onLabelChange}
               value={this.state.value}
               className={`${this.state.require ? 'require' : ''}`} />
      </form>
    )
  }
}