import './styles.css';
import { addItemsEl, renderItems } from './modules/addremoveItems.js';
import completeAll from './modules/interraction.js';

const addButton = document.querySelector('.addbtnEl');
const itemsToBeAdd = document.querySelector('.itemsToBeAdd');
const clearAll = document.querySelector('.completeBtn');

window.addEventListener('load', () => {
  renderItems();
});

addButton.addEventListener('click', () => {
  addItemsEl(itemsToBeAdd.value, false, JSON.parse(localStorage.getItem('listStorage')).length + 1);
  renderItems();
});

clearAll.addEventListener('click', () => {
  completeAll();
  renderItems();
});
