const glamor = require("glamor");
const parser = require("css");
const camelCase = require("camel-case");
const processStylusCode = require("../utils/processStylusCode");
const checkStylusCode = require("../utils/checkCode");

/**
 * This function creates an object of @font-face rule declaration (property: value)
 * @param { array } rule
 */
function getDeclaration(rule) {
  const store = {};

  rule.declarations.forEach(decl => {
    Object.assign(store, { [camelCase(decl.property)]: decl.value });
  });

  return store;
}

/**
 * This function returns an object of @font-face rules
 * @param { array } rules @font-face rules
 */
function getFontFaceProps(rules) {
  const store = {};

  rules.forEach(rule => {
    Object.assign(store, getDeclaration(rule));
  });

  return store;
}

/**
 * This function returns the font-family name
 * @param { string } stylusCode Stylus code
 */
function fontFace(stylusCode) {
  checkStylusCode(stylusCode, "fontFace()");

  let AST;
  let rules;
  let atFontFaceRules;

  /* eslint-disable no-undef */
  window.stylus.render(
    processStylusCode(stylusCode),
    { filename: "source.css" },
    (err, css) => {
      if (err) {
        throw new Error(err);
      }

      // CSS ast
      AST = parser.parse(css, { source: "css" });

      if (AST.stylesheet.rules[0].type !== "font-face") {
        throw new Error("Not a @font-face rule.");
      }

      // @font-face rules
      rules = AST.stylesheet.rules;

      // get the font-family name
      atFontFaceRules = getFontFaceProps(rules);
    }
  );

  return glamor.css.fontFace(atFontFaceRules);
}

module.exports = fontFace;
