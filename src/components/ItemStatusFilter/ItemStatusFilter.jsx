import React, {Component} from 'react';
import './ItemStatusFilter.css'
import Button from "./Button/Button";

class ItemStatusFilter extends Component {
  state = {
    activeTab: 'all'
  }

  onClick = (value) => {
    this.setState({
      activeTab: value
    })
    this.props.onChangeStatusFilter(value)
  }

  render() {
    return (
      <div className='btn-group item-filter-status'>
        <Button onClick={() => this.onClick('all')} value='All' activeTab={this.state.activeTab}/>
        <Button onClick={() => this.onClick('active')} value='Active' activeTab={this.state.activeTab}/>
        <Button onClick={() => this.onClick('done')} value='Done' activeTab={this.state.activeTab}/>
      </div>
    )
  }
}


export default ItemStatusFilter;