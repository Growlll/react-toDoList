import React, {Component} from 'react';
import './SearchPanel.css'

class SearchPanel extends Component {
  state = {
    value: ''
  }

  onChangeInput = (e) => {
    const value = e.target.value
    this.setState({ value })
    this.props.onSearchChange(value)
  }

  render() {
    return (
      <div className='search-panel'>
        <input type="text" placeholder="Search" onChange={this.onChangeInput} value={this.state.value}/>
      </div>
    )
  }
}

export default SearchPanel;