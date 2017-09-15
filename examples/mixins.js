const { stylus } = require('../src/')

const ButtonMixin = stylus(
  `
button-styles(radius, size, color, type)
  border-radius radius
  border size type color
  color mistyrose
  background-color white

button
  button-styles(3px, 2px, mistyrose, solid)
`,
  { displayName: 'MixinButton' }
)

module.exports = ButtonMixin
