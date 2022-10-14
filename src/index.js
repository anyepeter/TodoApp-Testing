import './styles.css';
import { addItems, renderItems } from './modules/addremoveItems.js';
import completeAll from './modules/interraction.js';

const addButton = document.querySelector('.addbuttonEl');
const todoListInput = document.querySelector('.todoListInput ');
const clearAll = document.querySelector('.completeAll');

window.addEventListener('load', () => {
  renderItems();
});

addButton.addEventListener('click', () => {
  addItems(todoListInput.value, false, JSON.parse(localStorage.getItem('listStorage')).length + 1);
  renderItems();
});

clearAll.addEventListener('click', () => {
  completeAll();
  renderItems();
});
