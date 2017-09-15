const React = require('react')
const processStylusCode = require('../utils/processStylusCode')
const parseStylus = require('../parse/parse')
const checkStylusCode = require('../utils/checkCode')

/**
 * This function takes the stylus code, parses it and creates an object of css rules.
 * These rules are then passed to glamor's css method and are inserted into the stylesheet
 * @param {string} stylusCode 
 */
function createStylusComponent(stylusCode, { displayName } = {}) {
  checkStylusCode(stylusCode, 'stylus()')

  const { hash, element } = parseStylus(processStylusCode(stylusCode))

  /* eslint-disable react/prefer-stateless-function */
  class StylusComponent extends React.Component {
    render() {
      return React.createElement(
        element,
        {
          className: `${hash}`,
          ...this.props
        },
        /* eslint-disable react/prop-types */
        this.props.children
      )
    }
  }

  StylusComponent.displayName =
    displayName && typeof displayName === 'string' ? displayName : element

  return StylusComponent
}

module.exports = createStylusComponent
