import {
  renderData,
  clearChildEl,
  renderTasksDatafromClass
} from "./modules/util";
import getElFilter from "./modules/make-filters";
import {filters, tasks} from "./modules/data";
import Task from "./clases/task";
import TaskEdit from "./clases/task-edit";

const FILTER_CONTAINER = document.querySelector(`.main__filter`);
const BOARD_TASKS = document.querySelector(`.board__tasks`);
const renderFilters = renderData;

renderFilters(filters, FILTER_CONTAINER, getElFilter);
renderTasksDatafromClass(tasks, BOARD_TASKS, Task, TaskEdit);

FILTER_CONTAINER.addEventListener(`change`, (evt) => {
  const ID = evt.target.id;

  clearChildEl(BOARD_TASKS);

  if (ID === `filter__all`) {
    renderTasksDatafromClass(tasks, BOARD_TASKS, Task, TaskEdit);
  } else {
    renderTasksDatafromClass(tasks, BOARD_TASKS, Task, TaskEdit);
  }
});
