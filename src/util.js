/**
 * @param {String} template
 * @param {Node} el
 */
const renderTempate = (template, el = document.body) => {
  el.insertAdjacentHTML(`beforeend`, template);
};
/**
 * @param {Array} arr
 * @return {Array} copyArr
 */
const randomOrderInArrayAndSplice = (arr) => {
  const copyArr = arr.slice();

  // eslint-disable-next-line no-unused-vars
  copyArr.sort(function (a, b) {
    return Math.random() - 0.5;
  });

  const randomNum = Math.random() * copyArr.length - 1;

  copyArr.splice(0, randomNum);

  return copyArr;
};

export {renderTempate, randomOrderInArrayAndSplice};
