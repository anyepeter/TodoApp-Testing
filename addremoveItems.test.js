import { addItemsEl } from './src/modules/addremoveItems.js';

describe('Add and Remove Testing', () => {
  document.body.innerHTML = `
  <input id='itemsToBeAdd'>
  <button id='addButton'></button>
  <div id='itemsContainer'></div>
  `;

  test('adding item to list', () => {
    addItemsEl('paint', false, 0);
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    expect(localGet.length).toBe(1);
  });
});