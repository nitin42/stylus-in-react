/**
 * These are required for some checks against the types in AST
 */
const typesWhichRequireSelector = ['media', 'supports', 'import']

/**
 * This function returns the root selector required to create a React component
 * @param { Object } AST CSS
 */
function getRootSelector(AST) {
  const type =
    AST.stylesheet.rules[0] && AST.stylesheet.rules[0].type
      ? AST.stylesheet.rules[0].type
      : ''

  if (!typesWhichRequireSelector.includes(type)) {
    // Root selector rule
    return AST.stylesheet.rules[0].selectors
  }

  // alternate rules (@rules, :selector, contextual selectors and nested selectors)
  return AST.stylesheet.rules[0].rules[0].selectors
}

module.exports = getRootSelector
