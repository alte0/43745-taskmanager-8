/**
 * @param {String} caption
 * @param {Number} amount
 * @param {Boolean} isChecked
 * @param {Boolean} isDisabled
 * @return {String}
 */
export default (caption, amount, isChecked = false, isDisabled = false) => {
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
