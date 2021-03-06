const React = require('react')
const { render } = require('react-dom')

// Stylus component examples
// These are few examples but you can do pretty much everything you used to do with Stylus
const Button = require('../examples/selectors')
const ButtonMixin = require('../examples/mixins')
const ButtonVar = require('../examples/variables')
const ButtonMedia = require('../examples/media')
const FadeInButton = require('../examples/animation')
const ButtonFloat = require('../examples/supports')
const Name = require('../examples/fontFace')

class App extends React.Component {
  render() {
    return <FadeInButton>Submit</FadeInButton>
  }
}

render(<App />, document.getElementById('app'))
