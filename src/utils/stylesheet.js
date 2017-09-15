const domElements = require("html-tags");
const getRules = require("../rules/basicRules");
const mediaRules = require("../rules/mediaRules");
const supportRules = require("../rules/supportsRules");

/**
 * This function creates css rules (array of style objects)
 * @param { array } rules css rules array
 * @param { string } root root element
 */
function getStylesheet(rules, root) {
  if (!domElements.includes(root)) {
    return {};
  }

  const arr = [];

  arr.push(
    ...getRules(rules, root),
    ...supportRules(rules, root),
    ...mediaRules(rules, root)
  );
  return arr;
}

module.exports = getStylesheet;
