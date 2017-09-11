const domElements = require('html-tags');
const camelCase = require('camel-case');
const prefixAll = require('inline-style-prefixer/static');

/**
 * This function creates css rules (array of style objects)
 * @param { array } rules css rules array
 * @param { string } root root element
 */
function getStylesheet(rules, root) {
  if (!domElements.includes(root)) {
    return {};
  }

  let arr = [];

  rules.forEach(rule => {
    if (rule.selectors[0] === root) {
      rule.declarations.forEach(decl => {
        arr.push(prefixAll({ [camelCase(decl.property)]: decl.value }));
      });
    } else {
      rule.declarations.forEach(decl => {
        arr.push(prefixAll({ [rule.selectors[0].replace(root, '')]: { [camelCase(decl.property)]: decl.value } }));
      });
    }
  });

  return arr;
}

module.exports = getStylesheet;
