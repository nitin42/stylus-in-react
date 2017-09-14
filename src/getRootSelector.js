const typesWhichRequireSelector = ['media', 'supports', 'import'];

/**
 * This function returns the root selector required to create a React component
 * @param { Object } AST CSS AST
 */
function getRootSelector(AST) {
  const type = AST.stylesheet.rules[0].type || '';

  if (!typesWhichRequireSelector.includes(type)) {
    return AST.stylesheet.rules[0].selectors;
  }

  return AST.stylesheet.rules[0].rules[0].selectors;
}


module.exports = getRootSelector;
