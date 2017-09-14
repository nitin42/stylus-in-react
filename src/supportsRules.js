const getRules = require('./basicRules');
const getParentNode = require('./selectors');

/**
 * This function returns an array of objects of @supports rules
 * @param { array } rules @supports rules
 * @param { string } root root selector
 */
function supportRules(rules, root) {
  let arr = [];

  rules.forEach(rule => {
    if (rule.type !== 'supports') return;
    arr.push(getRules(rule.rules, root));
  });

  return arr;
}

module.exports = supportRules;
