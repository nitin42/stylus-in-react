const React = require('react');
const processStylusCode = require('./processStylusCode');
const parseStylus = require('./parse');

/**
 * This function takes stylus code, parses it and created css rules.
 * These rules are then passed to glamor's css method and are inserted into stylesheet
 * @param {string} stylusCode 
 */
function createStylusComponent(stylusCode) {
  const { hash, element } = parseStylus(processStylusCode(stylusCode[0]));

  // Create stylus component
  class StylusComponent extends React.Component {
    render() {
      return React.createElement(
        element,
        {
          className: `${hash}`,
          ...this.props,
        },
        this.props.children
      );
    }
  }

  return StylusComponent;
}

module.exports = createStylusComponent;
