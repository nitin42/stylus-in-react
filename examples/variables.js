const { stylus } = require('../src/')

const ButtonVar = stylus(
  `
size = 12px

button
  font-size size
`,
  { displayName: 'ButtonVar' }
)

module.exports = ButtonVar
