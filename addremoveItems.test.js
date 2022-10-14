import { 
  addItemsEl,
  renderItems
} from './src/modules/addremoveItems.js';

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

  test('Removing item from list', () => {
    addItemsEl('work', false, 1);
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    expect(localGet.length).toBe(2);
    localGet.pop();
    localStorage.setItem('listStorage', JSON.stringify(localGet));
    renderItems();
    const itemsToDo = document.getElementById('itemsContainer');
    expect(itemsToDo.childElementCount).toBe(1);
  });
});
