import { addItems, renderItems } from './src/modules/addremoveItems.js';

describe('Add and Remove Testing', () => {
  document.body.innerHTML = `
  <input id='toDoInput'>
  <button id='addBtn'></button>
  <div id='containerItems'></div>
  `;

  test('adding item to list', () => {
    addItems('Washing', false, 0);
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    expect(localGet.length).toBe(1);
  });
  test('Removing item from list', () => {
    addItems('work', false, 1);
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    expect(localGet.length).toBe(2);
    localGet.pop();
    localStorage.setItem('listStorage', JSON.stringify(localGet));
    renderItems();
    const itemsToDo = document.getElementById('containerItems');
    expect(itemsToDo.childElementCount).toBe(1);
  });
});

describe('Testing the update functionalities', () => {
  document.body.innerHTML = `
    <input id='toDoInput'>
    <button id='addBtn'></button>
    <div id='containerItems'></div>
    `;

  test('Should update all the completed to true', () => {
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    localGet[0].completed = true;
    localStorage.setItem('listStorage', JSON.stringify(localGet));
    renderItems();
    const itemsToDo = document.getElementById('containerItems');
    expect(itemsToDo.children[0].children[0].checked).toBe(true);
  });

  test('Should update  all the completed to false', () => {
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    localGet[0].completed = false;
    localStorage.setItem('listStorage', JSON.stringify(localGet));
    renderItems();
    const itemsToDo = document.getElementById('containerItems');
    expect(itemsToDo.children[0].children[0].checked).toBe(false);
  });
  test('Should remove all completed true', () => {
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    localGet.pop();
    const newData1 = { description: 'video-game', completed: true, index: 0 };
    const newData2 = { description: 'activities', completed: true, index: 1 };
    localGet.push(newData1);
    localGet.push(newData2);
    const Completed = jest.fn(() => localGet.filter((item) => item.completed === true));
    const completedItem = Completed();
    expect(completedItem).toHaveLength(2);
  });
});
