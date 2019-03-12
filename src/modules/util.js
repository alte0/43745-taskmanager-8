/**
 * @param {String} template
 * @param {Node} el
 */
const renderTempate = (template, el = document.body) => {
  el.insertAdjacentHTML(`beforeend`, template);
};
/**
 * @param {Array} arr
 * @param {Node} el
 * @param {Function} fn
 */
const renderData = (arr, el, fn) => {
  let template = ``;

  for (const data of arr) {
    template = template + fn(data);
  }

  renderTempate(template, el);
};
/**
 * @param {Node} el
 */
const clearChildEl = (el) => {
  el.innerHTML = ``;
};
/**
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
const getRndInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomBoolean = () => Math.random() >= 0.5;
/**
 * @param {Array} arr
 * @param {HTMLElement} el
 * @param {Function} FnTask
 * @param {Function} FnTaskEdit
 */
const renderTasksDatafromClass = (arr, el, FnTask, FnTaskEdit) => {
  for (const dataTask of arr) {
    const taskComponent = new FnTask(dataTask);
    const editTaskComponent = new FnTaskEdit(dataTask);
    el.appendChild(taskComponent.render());
    taskComponent.onEdit = () => {
      editTaskComponent.render();
      el.replaceChild(editTaskComponent.element, taskComponent.element);
      taskComponent.unrender();
    };

    editTaskComponent.onSubmit = (newObject) => {
      dataTask.title = newObject.title;
      dataTask.tags = newObject.tags;
      dataTask.color = newObject.color;
      dataTask.repeatingDays = newObject.repeatingDays;
      dataTask.dueDate = newObject.dueDate;

      taskComponent.update(dataTask);
      taskComponent.render();
      el.replaceChild(taskComponent.element, editTaskComponent.element);
      editTaskComponent.unrender();
    };
  }
};
/**
 * @param {String} template
 * @return {HTMLElement} HTMLElement
 */
const createElement = (template) => {
  const wrapperTemplate = document.createElement(`div`);
  wrapperTemplate.innerHTML = template;
  return wrapperTemplate.firstChild;
};

export {
  getRndInteger,
  clearChildEl,
  renderData,
  getRandomBoolean,
  renderTasksDatafromClass,
  createElement
};
