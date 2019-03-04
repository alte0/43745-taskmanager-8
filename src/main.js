import {renderData, clearChildEl} from './modules/util';
import getElFilter from './modules/make-filters';
import getElTask from './modules/make-task';
import {filters, tasks} from './modules/data';

const FILTER_CONTAINER = document.querySelector(`.main__filter`);
const BOARD_TASKS = document.querySelector(`.board__tasks`);
const renderFilters = renderData;
const renderTasks = renderData;

renderFilters(filters, FILTER_CONTAINER, getElFilter);
renderTasks(tasks, BOARD_TASKS, getElTask);

FILTER_CONTAINER.addEventListener(`change`, (evt) => {
  const ID = evt.target.id;

  clearChildEl(BOARD_TASKS);

  if (ID === `filter__all`) {
    renderTasks(tasks, BOARD_TASKS, getElTask);
  } else {
    renderTasks(tasks, BOARD_TASKS, getElTask);
  }
});
