import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './Item';

@observer
class Market extends Component {
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem = () => {
    this.props.store.addItem(this.state.newItem)
    
  }
  render() {
    return (

      <div className="market">
        <input onChange={this.handleChange} />
        <button onClick={this.addItem}>Add</button>
        {this.props.store.list.map((i, ind) => <Item item={i}
          key={ind}
          store={this.props.store}
        />
        )}
      </div>
    )
  }
}


export default Market