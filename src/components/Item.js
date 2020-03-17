import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  changePrice = (e) => {
    let price = prompt("Enter new price")
    this.props.store.changePrice(e.target.value, price)
  }
  buyItem = (e) => {
    this.props.store.buyItem(e.target.value)
  }

  render() {
    let item = this.props.item
    return (

      <div>
        {item.quantity} {item.name} available at ${item.price} per item
        <button onClick={this.changePrice} value={item.name}>Edit Price</button>
        <button onClick={this.buyItem} value={item.name}>Buy</button>
      </div>
    )
  }
}


export default Item