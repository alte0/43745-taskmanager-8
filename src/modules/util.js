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
  for (const data of arr) {
    const task = new FnTask(data);
    const editTask = new FnTaskEdit(data);
    el.appendChild(task.render());
    task.onEdit = () => {
      editTask.render();
      el.replaceChild(editTask.element, task.element);
      task.unrender();
    };

    editTask.onSubmit = () => {
      task.render();
      el.replaceChild(task.element, editTask.element);
      editTask.unrender();
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
