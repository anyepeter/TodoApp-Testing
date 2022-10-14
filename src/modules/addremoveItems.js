/* eslint no-undefined: "error" */

const todoListInput = document.querySelector('.todoListInput');

class ContainerClass {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    this.itemsArr = JSON.parse(localStorage.getItem('listStorage')) || [];
  }
}

const taskitems = new ContainerClass();

const renderItems = () => {
  const data = JSON.parse(localStorage.getItem('listStorage')) || [];
  const containerlistEl = document.getElementById('containerItems');
  containerlistEl.innerHTML = '';
  data.forEach((element, id) => {
    containerlistEl.innerHTML
    += `
    <div class='doItems'>
    <input class='itemClass' id='checkId-${id}', "completed"' type='checkbox' ${element.completed ? 'checked' : ''} onclick='checkItemsUpdate(${id}, "completed")'>
    <input type='text' class='findInput' id='input-${id}' value=${element.description} />
    <i onclick='checkItemsUpdate(${id}, "description")' class='fa-solid fa-file-pen' id='options-${id}'></i>
    <i onclick='deleteItem(${id})' class='fa-solid fa-trash del-btn' id='delete-${id}'></i>
  </div>
    `;
  });
  return data.length;
};

const addItems = (description, completed, index) => {
  const arrOfList = new ContainerClass(description, completed, index);
  taskitems.itemsArr.push(arrOfList);
  localStorage.setItem('listStorage', JSON.stringify(taskitems.itemsArr));
  setTimeout(() => {
    todoListInput.value = '';
  }, 500);
  renderItems();
};

window.removeItems = () => {
  const deleteBtn = [...document.querySelectorAll('.fa-trash')];
  deleteBtn.forEach((item) => {
    item.addEventListener('click', () => {
      taskitems.itemsArr.splice(deleteBtn.indexOf(item), 1);
      taskitems.itemsArr.forEach((item, index) => {
        item.index = index + 1;
      });
      localStorage.setItem('listStorage', JSON.stringify(taskitems.itemsArr));
      renderItems();
    });
  });
};

const checkItemsUpdate = (updateInput, updateCheckbox, id) => {
  updateInput = document.querySelector(`#input-${id}`).value;
  updateCheckbox = document.querySelector(`#check-${id}`).checked;
  const mainArr = taskitems.itemsArr.map((itemEl) => {
    if (itemEl.index - 1 === id) {
      itemEl.description = updateInput;
    }
    if (itemEl.index - 1 === id) {
      itemEl.completed = updateCheckbox;
    }

    return itemEl;
  });

  localStorage.setItem('listStorage', JSON.stringify(mainArr));
};

export { addItems, renderItems, checkItemsUpdate };
