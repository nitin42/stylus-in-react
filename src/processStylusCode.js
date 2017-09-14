const { stripIndent } = require('common-tags');

/**
 * This function strips the indentation and preprocess the stylus input
 * @param { string } stylusCode 
 */
function processStylusCode(stylusCode) {
  if (!stylusCode) return;
  return stripIndent`${stylusCode}`;
}

module.exports = processStylusCode;
