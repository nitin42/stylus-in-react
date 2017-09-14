const glamor = require('glamor');
const parser = require('css');
const camelCase = require('camel-case');
const processStylusCode = require('./processStylusCode');


/**
 * This function returns an object of @font-face rules
 * @param { array } rules @font-face rules
 */
function getFontFaceProps(rules) {
  let store = {};

  rules.forEach(rule => {
    rule.declarations.forEach(decl => {
      Object.assign(
        store,
        { [camelCase(decl.property)] : decl.value }
      )
    });
  });

  return store;
}

/**
 * This function return the font-family name
 * @param { string } stylusCode Stylus code
 */
function fontFace(stylusCode) {
  let AST, name, rules, ff;

  window.stylus.render(processStylusCode(stylusCode[0]), { filename: 'source.css' }, (err, css) => {
    if (err) {
      throw new Error(err);
    }
    
    AST = parser.parse(css, { source: 'css' });

    if (AST.stylesheet.rules[0].type !== 'font-face') {
      throw new Error('Not a font-face rule.');
    }

    rules = AST.stylesheet.rules;

    ff = getFontFaceProps(rules);
  });

  return glamor.css.fontFace(ff);
}

module.exports = fontFace;
