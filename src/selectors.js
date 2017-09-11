const domElements = require('html-tags');

/**
 * This function takes a selector array and returns the root selector.
 * For example - There is only one css rule, button:hover{}. So it returns 'button' as
 * the root element
 * @param { array } selector 
 */
function getParentNode(selector) {
  if (selector !== null) {
    const selectorName = selector[0].split(':')[0];

    if (!domElements.includes(selectorName)) {
      throw new Error(`'${selectorName}' is not a valid HTML element.`);
    }
    return selectorName;
  }

  return;
}

module.exports = getParentNode;
