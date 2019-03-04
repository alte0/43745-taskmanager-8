import {getRndInteger, getRandomBoolean} from './util';

const MIN_NUM = 0;
const maxNums = [2, 4, 1];
const tasks = [];
let i = 0;

const filters = [
  {
    caption: `ALL`,
    amount: `15`,
    isChecked: true
  },
  {
    caption: `OVERDUE`,
    amount: `0`,
    isDisabled: true,
  },
  {
    caption: `TODAY`,
    amount: `0`,
    isDisabled: true,
  },
  {
    caption: `FAVORITES`,
    amount: `7`
  },
  {
    caption: `REPEATING`,
    amount: `2`
  },
  {
    caption: `TAGS`,
    amount: `6`
  },
  {
    caption: `ARCHIVE`,
    amount: `115`
  },
];
/**
 * @return {Object}
 */
const task = () => ({
  text: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][getRndInteger(MIN_NUM, maxNums[0])],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: [
    new Set([`homework`, `theory`, `practice`]),
    ``
  ][getRndInteger(MIN_NUM, maxNums[2])],
  picture: `//picsum.photos/100/100?r=${Math.random()}`,
  color: [
    `black`, `yellow`, `blue`, `green`, `pink`
  ][getRndInteger(MIN_NUM, maxNums[1])],
  repeatingDays: {
    'mo': getRandomBoolean(),
    'tu': getRandomBoolean(),
    'we': getRandomBoolean(),
    'th': getRandomBoolean(),
    'fr': getRandomBoolean(),
    'sa': getRandomBoolean(),
    'su': getRandomBoolean(),
  },
  isFavorite: getRandomBoolean(),
  isDone: getRandomBoolean(),
});

while (i < 8) {
  tasks.push(task());
  i++;
}

export {tasks, filters};
