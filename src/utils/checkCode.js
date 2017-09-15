/**
 * This function validates the string of stylus code
 * @param { any } code
 * @param { name } constructor name 
 */
function checkStylusCode(code, name) {
  if (typeof code !== 'string') {
    throw new Error(
      `${name} constructor expected a stylus string. You passed ${code}`
    )
  }
}

module.exports = checkStylusCode
