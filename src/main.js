'use strict';

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
 * @param {String} template
 * @param {Node} el
 */
const renderTempate = (template, el = document.body) => {
  el.insertAdjacentHTML(`beforeend`, template);
};
/**
 * @param {String} caption
 * @param {Number} amount
 * @param {Boolean} isChecked
 * @param {Boolean} isDisabled
 * @return {String}
 */
const getElFilter = (caption, amount, isChecked = false, isDisabled = false) => {
  return `<input
    type="radio"
    id="filter__${caption.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
    ${isChecked ? ` checked` : ``}
    ${isDisabled ? ` disabled` : ``}
  />
  <label for="filter__${caption.toLowerCase()}" class="filter__label">
    ${caption} <span class="filter__all-count">${amount}</span>
  </label>`;
};
/**
 * @param {String} color
 * @param {String} text
 * @param {Boolean} isHashtag
 * @param {Boolean} isDate
 * @param {Boolean} isImg
 * @return {String}
 */
const getElCard = (color, text, isHashtag = false, isDate = false, isImg = false) => {
  return `
<article class="card ${color}">
  <form class="card__form" method="get">
    <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--edit">
          edit
        </button>
        <button type="button" class="card__btn card__btn--archive">
          archive
        </button>
        <button
          type="button"
          class="card__btn card__btn--favorites card__btn--disabled"
        >
          favorites
        </button>
      </div>

      <div class="card__color-bar">
        <svg class="card__color-bar-wave" width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>

      <div class="card__textarea-wrap">
        <label>
          <textarea
            class="card__text"
            placeholder="Start typing your text here..."
            name="text"
          >${text}</textarea>
        </label>
      </div>

      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            <button class="card__date-deadline-toggle" type="button">
              date: <span class="card__date-status">no</span>
            </button>

            <fieldset
              class="card__date-deadline"
              ${ !isDate ? ` disabled=""` : `` }
              >
              <label class="card__input-deadline-wrap">
                <input
                  class="card__date"
                  type="text"
                  placeholder="23 September"
                  name="date"
                />
              </label>
              <label class="card__input-deadline-wrap">
                <input
                  class="card__time"
                  type="text"
                  placeholder="11:15 PM"
                  name="time"
                />
              </label>
            </fieldset>

            <button class="card__repeat-toggle" type="button">
              repeat:<span class="card__repeat-status">no</span>
            </button>

            <fieldset class="card__repeat-days" disabled>
              <div class="card__repeat-days-inner">
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-mo-2"
                  name="repeat"
                  value="mo"
                />
                <label class="card__repeat-day" for="repeat-mo-2"
                  >mo</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-tu-2"
                  name="repeat"
                  value="tu"
                  checked
                />
                <label class="card__repeat-day" for="repeat-tu-2"
                  >tu</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-we-2"
                  name="repeat"
                  value="we"
                />
                <label class="card__repeat-day" for="repeat-we-2"
                  >we</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-th-2"
                  name="repeat"
                  value="th"
                />
                <label class="card__repeat-day" for="repeat-th-2"
                  >th</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-fr-2"
                  name="repeat"
                  value="fr"
                  checked
                />
                <label class="card__repeat-day" for="repeat-fr-2"
                  >fr</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  name="repeat"
                  value="sa"
                  id="repeat-sa-2"
                />
                <label class="card__repeat-day" for="repeat-sa-2"
                  >sa</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-su-2"
                  name="repeat"
                  value="su"
                  checked
                />
                <label class="card__repeat-day" for="repeat-su-2"
                  >su</label
                >
              </div>
            </fieldset>
          </div>

          <div class="card__hashtag">
            <div class="card__hashtag-list">
            ${isHashtag ? `<span class="card__hashtag-inner">
                <input
                  type="hidden"
                  name="hashtag"
                  value="repeat"
                  class="card__hashtag-hidden-input"
                />
                <button type="button" class="card__hashtag-name">
                  #repeat
                </button>
                <button type="button" class="card__hashtag-delete">
                  delete
                </button>
              </span>

              <span class="card__hashtag-inner">
                <input
                  type="hidden"
                  name="hashtag"
                  value="repeat"
                  class="card__hashtag-hidden-input"
                />
                <button type="button" class="card__hashtag-name">
                  #cinema
                </button>
                <button type="button" class="card__hashtag-delete">
                  delete
                </button>
              </span>

              <span class="card__hashtag-inner">
                <input
                  type="hidden"
                  name="hashtag"
                  value="repeat"
                  class="card__hashtag-hidden-input"
                />
                <button type="button" class="card__hashtag-name">
                  #entertaiment
                </button>
                <button type="button" class="card__hashtag-delete">
                  delete
                </button>
              </span>` : ``}

            </div>

            <label>
              <input
                type="text"
                class="card__hashtag-input"
                name="hashtag-input"
                placeholder="Type new hashtag here"
              />
            </label>
          </div>
        </div>

        <label class="card__img-wrap${ !isImg ? ` card__img-wrap--empty` : `` }">
          <input
            type="file"
            class="card__img-input visually-hidden"
            name="img"
          />
          <img
            src="${ !isImg ? `img/add-photo.svg` : `img/sample-img.jpg` }"
            alt="task picture"
            class="card__img"
          />
        </label>

        <div class="card__colors-inner">
          <h3 class="card__colors-title">Color</h3>
          <div class="card__colors-wrap">
            <input
              type="radio"
              id="color-black-2"
              class="card__color-input card__color-input--black visually-hidden"
              name="color"
              value="black"
            />
            <label
              for="color-black-2"
              class="card__color card__color--black"
              >black</label
            >
            <input
              type="radio"
              id="color-yellow-2"
              class="card__color-input card__color-input--yellow visually-hidden"
              name="color"
              value="yellow"
            />
            <label
              for="color-yellow-2"
              class="card__color card__color--yellow"
              >yellow</label
            >
            <input
              type="radio"
              id="color-blue-2"
              class="card__color-input card__color-input--blue visually-hidden"
              name="color"
              value="blue"
            />
            <label
              for="color-blue-2"
              class="card__color card__color--blue"
              >blue</label
            >
            <input
              type="radio"
              id="color-green-2"
              class="card__color-input card__color-input--green visually-hidden"
              name="color"
              value="green"
            />
            <label
              for="color-green-2"
              class="card__color card__color--green"
              >green</label
            >
            <input
              type="radio"
              id="color-pink-2"
              class="card__color-input card__color-input--pink visually-hidden"
              name="color"
              value="pink"
              checked
            />
            <label
              for="color-pink-2"
              class="card__color card__color--pink"
              >pink</label
            >
          </div>
        </div>
      </div>

      <div class="card__status-btns">
        <button class="card__save" type="submit">save</button>
        <button class="card__delete" type="button">delete</button>
      </div>
    </div>
  </form>
</article>
  `;
};
/**
 * @param {Array} arr
 */
const renderFilters = (arr) => {
  arr.forEach((item) => {
    renderTempate(getElFilter(item.CAPTION, item.AMOUNT, item.ISCHECKED, item.ISDISABLED), FILTER_CONTAINER);
  });
};
/**
 * @param {Array} arr
 */
const renderCards = (arr) => {
  arr.forEach((item) => {
    renderTempate(getElCard(item.CLASSES, item.TEXT, item.ISHASHTAG, item.ISDATE, item.ISIMG), BOARD_TASKS);
  });
};
/**
 * @param {Array} arr
 */
const randomOrderInArrayAndSplice = (arr) => {
  const copyArr = arr.slice();

  // eslint-disable-next-line no-unused-vars
  copyArr.sort(function (a, b) {
    return Math.random() - 0.5;
  });

  const randomNum = Math.random() * copyArr.length - 1;

  copyArr.splice(0, randomNum);

  renderCards(copyArr);
};

renderFilters(FILTERS);
renderCards(CARDS);

FILTER_CONTAINER.addEventListener(`change`, (evt) => {
  const ID = evt.target.id;
  BOARD_TASKS.innerHTML = ``;

  if (ID === `filter__all`) {
    renderCards(CARDS);
  } else {
    randomOrderInArrayAndSplice(CARDS);
  }
});
