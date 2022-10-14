const completeAll = () => {
  let nonComplete = JSON.parse(localStorage.getItem('listStorage')).filter((item) => {
    if (!item.completed) {
      return item;
    }
    return '';
  });

  nonComplete = nonComplete.map((item, id) => {
    item.index = id + 1;
    return item;
  });
  localStorage.setItem('listStorage', JSON.stringify(nonComplete));
  window.location.reload();
};

export default completeAll;
