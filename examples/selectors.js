const { stylus } = require('../src/')

const Button = stylus(
  `
button
  color mistyrose
  background-color white
  border-radius 3px
  border 2px solid mistyrose
  &:hover
    color black
    background-color mistyrose
  &:focus
    outline none
  > *
    padding 10px
`,
  { displayName: 'Button' }
)

module.exports = Button
