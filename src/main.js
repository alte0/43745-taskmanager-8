import {renderTempate, randomOrderInArrayAndSplice} from './util';
import getElFilter from './make-filters';
import getElCard from './make-cards';

const FILTER_CONTAINER = document.querySelector(`.main__filter`);
const BOARD_TASKS = document.querySelector(`.board__tasks`);
const FILTERS = [
  {
    CAPTION: `ALL`,
    AMOUNT: `15`,
    ISCHECKED: true
  },
  {
    CAPTION: `OVERDUE`,
    AMOUNT: `0`,
    ISDISABLED: true,
  },
  {
    CAPTION: `TODAY`,
    AMOUNT: `0`,
    ISDISABLED: true,
  },
  {
    CAPTION: `FAVORITES`,
    AMOUNT: `7`
  },
  {
    CAPTION: `REPEATING`,
    AMOUNT: `2`
  },
  {
    CAPTION: `TAGS`,
    AMOUNT: `6`
  },
  {
    CAPTION: `ARCHIVE`,
    AMOUNT: `115`
  },
];
const CARDS = [
  {
    CLASSES: `card--black`,
    TEXT: `This is example of new task, you can add picture, set date and time, add tags.`
  },
  {
    CLASSES: `card--pink card--repeat`,
    TEXT: `It is example of repeating task. It marks by wave.`,
    ISHASHTAG: true
  },
  {
    CLASSES: `card--yellow card--deadline`,
    TEXT: `This is card with missing deadline`,
    ISHASHTAG: true
  },
  {
    CLASSES: `card--yellow card--repeat`,
    TEXT: `Here is a card with filled data`,
    ISHASHTAG: true,
    ISDATE: true,
    ISIMG: true
  },
  {
    CLASSES: `card--blue`,
    TEXT: ``,
    ISHASHTAG: true
  },
  {
    CLASSES: `card--blue`,
    TEXT: ``,
    ISHASHTAG: true,
    ISDATE: true,
    ISIMG: true
  },
  {
    CLASSES: `card--black`,
    TEXT: `This is example of new task, you can add picture, set date and time, add tags.`
  }
];

/**
 * @param {Array} arr
 */
const renderFilters = (arr) => {
  let template = ``;

  arr.forEach((item) => {
    template = template + getElFilter(item.CAPTION, item.AMOUNT, item.ISCHECKED, item.ISDISABLED);
  });

  renderTempate(template, FILTER_CONTAINER);
};
/**
 * @param {Array} arr
 */
const renderCards = (arr) => {
  let template = ``;

  arr.forEach((item) => {
    template = template + getElCard(item.CLASSES, item.TEXT, item.ISHASHTAG, item.ISDATE, item.ISIMG);
  });

  renderTempate(template, BOARD_TASKS);
};

renderFilters(FILTERS);
renderCards(CARDS);

FILTER_CONTAINER.addEventListener(`change`, (evt) => {
  const ID = evt.target.id;
  BOARD_TASKS.innerHTML = ``;

  if (ID === `filter__all`) {
    renderCards(CARDS);
  } else {
    renderCards(randomOrderInArrayAndSplice(CARDS));
  }
});
