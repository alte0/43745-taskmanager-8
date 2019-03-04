import {getRandomBoolean} from './util';
/**
 * @param {Object} task
 * @return {String}
 */
export default (task) => {
  /**
  * @param {Set} arr
  * @return {String}
  */
  const getHashtag = (arr) => {
    let templateHashtag = ``;

    if (arr.size > 0) {
      for (const tag of arr) {
        templateHashtag = templateHashtag + `
          <span class="card__hashtag-inner">
            <input type="hidden" name="hashtag" value="repeat" class="card__hashtag-hidden-input" />
            <button type="button" class="card__hashtag-name"> #${tag}</button>
            <button type="button" class="card__hashtag-delete"> delete</button>
          </span>
        `;
      }
    }

    return templateHashtag;
  };

  const getRepeatingDay = (obj) => {
    let templateRepeatingDay = ``;

    for (const [key, value] of Object.entries((obj))) {
      const getChecked = () => value ? `checked` : ``;
      templateRepeatingDay = templateRepeatingDay + `
        <input
        class="visually-hidden card__repeat-day-input"
        type="checkbox"
        id="repeat-${key.toLowerCase()}-1"
        name="repeat"
        value="${key.toLowerCase()}"
        ${getChecked()}
      />
      <label class="card__repeat-day" for="repeat-${key.toLowerCase()}-1"
        >${key.toLowerCase()}</label
      >
      `;
    }

    return templateRepeatingDay;
  };
  /**
  * @param {String} picture
  * @param {Boolean} isEmpty
  * @return {String}
  */
  const getImage = (picture, isEmpty) => {
    return `
      <label class="card__img-wrap ${isEmpty ? `` : `card__img-wrap--empty`}">
      <input
        type="file"
        class="card__img-input visually-hidden"
        name="img"
      />
      <img
        src="${ !isEmpty ? `img/add-photo.svg` : picture}"
        alt="task picture"
        class="card__img"
      />
    </label>
    `;
  };
  /**
  * @param {Object} obj
  * @return {String}
  */
  const getIsRepeatTask = (obj) => {
    for (const key of Object.keys(obj)) {
      if (obj[key] === true) {
        return ` card--repeat`;
      }
    }
    return ``;
  };
  /**
  * @param {Date} num
  * @return {String}
  */
  const getDeadline = (num) => {
    const isDisabed = getRandomBoolean();
    let date;
    let month;
    let time;

    if (isDisabed) {
      const dateDeadline = new Date(num);
      const optionsMonth = {
        month: `long`,
      };
      const optionsTime = {
        hour: `numeric`,
        minute: `numeric`,
      };
      date = dateDeadline.getDate();
      month = dateDeadline.toLocaleString(`en-US`, optionsMonth);
      time = dateDeadline.toLocaleString(`en-US`, optionsTime);
    }
    return `
      <fieldset class="card__date-deadline" ${!isDisabed ? ` disabled` : ``}>
      <label class="card__input-deadline-wrap">
        <input
          class="card__date"
          type="text"
          placeholder="23 September"
          name="date"
          value="${isDisabed ? date + ` ` + month : ``}"
        />
      </label>
      <label class="card__input-deadline-wrap">
        <input
          class="card__time"
          type="text"
          placeholder="11:15 PM"
          name="time"
          value="${isDisabed ? time : ``}"
        />
      </label>
    </fieldset>
    `;
  };

  return `<article class="card card--${task.color}${getIsRepeatTask(task.repeatingDays)}${getRandomBoolean() ? ` card--deadline` : ``}">
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
            >${task.text}</textarea>
          </label>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">no</span>
              </button>
              ${getDeadline(task.dueDate)}
              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">!!!</span>
              </button>
              <fieldset class="card__repeat-days">
                <div class="card__repeat-days-inner">
                ${getRepeatingDay(task.repeatingDays)}
                </div>
              </fieldset>
            </div>
            <div class="card__hashtag">
            <div class="card__hashtag-list">
            ${getHashtag(task.tags)}
          </div>
            </div>
          </div>
          ${getImage(task.picture, getRandomBoolean())}
          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input
                type="radio"
                id="color-black-1"
                class="card__color-input card__color-input--black visually-hidden"
                name="color"
                value="black"
                checked
              />
              <label
                for="color-black-1"
                class="card__color card__color--black"
                >black</label
              >
              <input
                type="radio"
                id="color-yellow-1"
                class="card__color-input card__color-input--yellow visually-hidden"
                name="color"
                value="yellow"
              />
              <label
                for="color-yellow-1"
                class="card__color card__color--yellow"
                >yellow</label
              >
              <input
                type="radio"
                id="color-blue-1"
                class="card__color-input card__color-input--blue visually-hidden"
                name="color"
                value="blue"
              />
              <label
                for="color-blue-1"
                class="card__color card__color--blue"
                >blue</label
              >
              <input
                type="radio"
                id="color-green-1"
                class="card__color-input card__color-input--green visually-hidden"
                name="color"
                value="green"
              />
              <label
                for="color-green-1"
                class="card__color card__color--green"
                >green</label
              >
              <input
                type="radio"
                id="color-pink-1"
                class="card__color-input card__color-input--pink visually-hidden"
                name="color"
                value="pink"
              />
              <label
                for="color-pink-1"
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
