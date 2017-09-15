const { keyframes, stylus } = require('../src/')

const fadeIn = keyframes(`
animation-name = fadeIn

@keyframes animation-name
  for i in 0..10
    {10% * i}
      opacity (i/10)
`)

const FadeInButton = stylus(
  `
button
  animation ${fadeIn} 4s ease-out
`,
  { displayName: 'FadeInButton' }
)

module.exports = FadeInButton
