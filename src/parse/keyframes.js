const glamor = require('glamor')
const parser = require('css')
const camelCase = require('camel-case')
const processStylusCode = require('../utils/processStylusCode')
const checkStylusCode = require('../utils/checkCode')

/**
 * This function returns an object of a @keyframes rule
 * @param { object } keyframe rule
 */
function getProps(keyframe) {
  const props = {}

  keyframe.declarations.forEach(declaration => {
    Object.assign(props, {
      [camelCase(declaration.property)]: declaration.value
    })
  })

  return props
}

/**
 * This function stores each keyframe rule
 * @param { array } rule
 */
function assignRule(rule) {
  const store = {}

  rule.keyframes.forEach(keyframe => {
    Object.assign(store, { [keyframe.values[0]]: getProps(keyframe) })
  })

  return store
}

/**
 * This function returns an object of @keyframes rules
 * @param { array } rules keyframe rules
 */
function getKeyframeProps(rules) {
  const store = {}

  rules.forEach(rule => {
    Object.assign(store, assignRule(rule))
  })

  return store
}

/**
 * This function return an animation name (name_someHash)
 * @param { string } stylusCode Stylus code
 */
function keyframes(stylusCode) {
  checkStylusCode(stylusCode, 'keyframes()')

  let AST
  let name
  let rules
  let AtKeyframesRules

  /* eslint-disable no-undef */
  window.stylus.render(
    processStylusCode(stylusCode),
    { filename: 'source.css' },
    (err, css) => {
      if (err) {
        throw new Error(err)
      }

      AST = parser.parse(css, { source: 'css' })

      if (AST.stylesheet.rules[0].type !== 'keyframes') {
        throw new Error('Not a keyframe rule.')
      }

      // Animation name
      name = AST.stylesheet.rules[0].name

      // @keyframes rules
      rules = AST.stylesheet.rules

      // @keyframes rules object
      AtKeyframesRules = getKeyframeProps(rules)
    }
  )

  return glamor.css.keyframes(name, AtKeyframesRules)
}

module.exports = keyframes
