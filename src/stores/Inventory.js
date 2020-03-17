import { observable, action } from 'mobx'
import { Item } from './Item'

export class Inventory {
    @observable list = []
    @observable length
    @action addItem = (name) => {

        let item = this.list.find(i => i.name === name)
        if (item) {
            item.quantity++
        } else {
            item = new Item(name)
            this.list.push(item)
        }
    }

    @action changePrice = (itemName, newPrice) => {
        let item = this.list.find(i => i.name === itemName)
        item.price = newPrice
    }

    @action buyItem = (itemName) => {
        let item = this.list.find(i => i.name === itemName)
        if (item) {
            if (item.quantity >= 1) {
                item.quantity--
            }
            else {
                let index = this.list.indexOf(item)
                if (index > -1) {
                    this.list.splice(index, 1);
                }
            }
        }

    }
}