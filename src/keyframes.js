const glamor = require('glamor');
const parser = require('css');
const camelCase = require('camel-case');
const processStylusCode = require('./processStylusCode');

/**
 * This function returns an object of a keyframe value
 * @param { object } keyframe rule
 */
function getProps(keyframe) {
  let props = {};

  keyframe.declarations.forEach(declaration => {
    Object.assign(props, { [camelCase(declaration.property)] : declaration.value });
  });

  return props;
}

/**
 * This function returns an object of all the keyframes
 * @param { array } rules keyframe rules
 */
function getKeyframeProps(rules) {
  let store = {};

  rules.forEach(rule => {
    rule.keyframes.forEach(keyframe => {
      Object.assign(
        store,
        { [keyframe.values[0]] : getProps(keyframe)}
      )
    });
  });

  return store;
}

/**
 * This function return an animation (name_someHash)
 * @param { string } stylusCode Stylus code
 */
function keyframes(stylusCode) {
  let AST, name, rules, keyframes, animation;

  window.stylus.render(processStylusCode(stylusCode[0]), { filename: 'source.css' }, (err, css) => {
    if (err) {
      throw new Error(err);
    }
    
    AST = parser.parse(css, { source: 'css' });

    if (AST.stylesheet.rules[0].type !== 'keyframes') {
      throw new Error('Not a keyframe rule.');
    }

    name = AST.stylesheet.rules[0].name;
    rules = AST.stylesheet.rules;
    keyframes = getKeyframeProps(rules);
  });

  return glamor.css.keyframes(name, keyframes);
}

module.exports = keyframes;
