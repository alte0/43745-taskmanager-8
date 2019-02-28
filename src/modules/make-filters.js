/**
 * @param {Object} filter
 * @return {String}
 */
export default (filter) => {
  return `<input
    type="radio"
    id="filter__${filter.caption.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
    ${filter.isChecked ? ` checked` : ``}
    ${filter.isDisabled ? ` disabled` : ``}
  />
  <label for="filter__${filter.caption.toLowerCase()}" class="filter__label">
    ${filter.caption} <span class="filter__all-count">${filter.amount}</span>
  </label>`;
};
