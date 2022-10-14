/* eslint no-undefined: "error" */

const itemsToBeAdd = document.querySelector('.itemsToBeAdd');

class ContainerClass {
  Constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    this.items = JSON.parse(localStorage.getItem('listStorage')) || [];
  }
}

const taskItem = new ContainerClass();
const renderItems = () => {
  const infoItems = JSON.parse(localStorage.getItem('listStorage')) || [];
  const itemEI = document.getElementById('itemsContainer');
  itemEI.innerHTML = '';
  infoItems.forEach((element, id) => {
    itemEI.innerHTML
    += `
      <div class='doItems'>
        <input class='itemClass' id='checkId-${id}', "completed"' type='checkbox' ${element.completed ? 'checked' : ''} onclick='checkItemsUpdate(${id}, "completed")'>
        <input type='text' class='findInput' id='input-${id}' value=${element.description} />
        <i onclick='checkItemsUpdate(${id}, "description")' class='fa-solid fa-file-pen' id='options-${id}'></i>
        <i onclick='deleteItem(${id})' class='fa-solid fa-trash del-btn' id='delete-${id}'></i>
      </div>
    `;
  });
  return infoItems.length;
};

const addItemsEl = (description, completed, index) => {
  const newItem = new ContainerClass(description, completed, index);
  taskItem.items.push(newItem);
  localStorage.setItem('listStorage', JSON.stringify(taskItem.items));
  itemsToBeAdd.value = '';
  renderItems();
};

window.deleteItem = () => {
  const deleteItemsBtn = [...document.querySelectorAll('.fa-trash')];
  deleteItemsBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      taskItem.items.splice(deleteItemsBtn.indexOf(elem), 1);
      taskItem.items.forEach((elem, index) => {
        elem.index = index + 1;
      });
      localStorage.setItem('listStorage', JSON.stringify(taskItem.items));
      renderItems();
    });
  });
};

const checkItemsUpdate = (inputList, checkBoxInfo, id) => {
  inputList = document.querySelector(`#input-${id}`).value;
  checkBoxInfo = document.querySelector(`#checkId-${id}`).checked;
  const mainArr = taskItem.items.map((itemEl) => {
    if (itemEl.index - 1 === id) {
      itemEl.description = inputList;
    }
    if (itemEl.index - 1 === id) {
      itemEl.completed = checkBoxInfo;
    }

    return itemEl;
  });

  localStorage.setItem('listStorage', JSON.stringify(mainArr));
};

export { addItemsEl, renderItems, checkItemsUpdate };
