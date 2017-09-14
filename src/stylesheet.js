const domElements = require('html-tags');
const getRules = require('./basicRules');
const mediaRules = require('./mediaRules');
const supportRules = require('./supportsRules');

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

  arr.push(
    ...getRules(rules, root),
    ...supportRules(rules, root),
    ...mediaRules(rules, root),
  );
  
  return arr;
}

module.exports = getStylesheet;


// stylusStr = `
// button
//   @import styledButton
// `;

// stylus.render(stylusStr, { filename: 'source.css' }, (err, css) => {
//   const AST = parser.parse(css, { source: 'css' });
// });