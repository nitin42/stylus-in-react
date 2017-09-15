const camelCase = require('camel-case')

/**
 * This function creates an object of a @media rule
 * @param { array } rule @media rule
 * @param { string } root root selector
 */
function assignProperty(rule, root) {
  const styles = {}

  rule.forEach(i => {
    if (i.selectors[0] === root) {
      i.declarations.forEach(declaration => {
        Object.assign(styles, {
          [camelCase(declaration.property)]: declaration.value
        })
      })
    }
  })

  return styles
}

/**
 * This function returns an array of all the @media rule
 * @param { array } rules @media rules
 * @param { string } root root selector
 */
function getMediaRules(rules, root) {
  const arr = []

  rules.forEach(rule => {
    if (rule.type === 'media') {
      arr.push({ [`@media ${rule.media}`]: assignProperty(rule.rules, root) })
    }
  })

  return arr
}

module.exports = getMediaRules
