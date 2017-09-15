const prefixAll = require('inline-style-prefixer/static')
const camelCase = require('camel-case')

const types = require('../utils/ruleTypes')

/**
 * This function returns an array of all the style rules
 * @param { array } rules
 * @param { string } root
 */
function getRules(rules, root) {
  const arr = []

  rules.forEach(rule => {
    if (!types.includes(rule.type)) {
      if (rule.selectors[0] === root) {
        rule.declarations.forEach(decl => {
          arr.push(prefixAll({ [camelCase(decl.property)]: decl.value }))
        })
      } else {
        rule.declarations.forEach(decl => {
          arr.push(
            prefixAll({
              [rule.selectors[0].replace(root, '')]: {
                [camelCase(decl.property)]: decl.value
              }
            })
          )
        })
      }
    }
  })

  return arr
}

module.exports = getRules
