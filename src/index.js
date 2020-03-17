import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Item } from '../src/stores/Item'
import { Inventory } from '../src/stores/Inventory'


let potatoes = new Item("Potatoes")
let inventory = new Inventory()
inventory.list.push(potatoes)

// Use the prop store for your store
ReactDOM.render(<App store={inventory} />, document.getElementById('root'));
registerServiceWorker();