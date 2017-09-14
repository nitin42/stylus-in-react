import React, { Component } from 'react';
import { render } from 'react-dom';
import { css } from 'glamor';
const glamor = require('glamor');

import { stylus, keyframes, fontFace } from '../src/index';

const fadeIn = keyframes`
animation-name = fadeIn

@keyframes animation-name
  for i in 0..10
    {10% * i}
      opacity (i/10)
`

const Title = stylus(`
colors = red mistyrose blue orange

  h2
    animation ${fadeIn} 8s ease-in
    padding 20px
    color red
    &:hover
      color colors[2]
    @media screen and (min-width: 500px)
      color colors[3]
`)

const Geo = fontFace`
@font-face
  font-family Laugh
  font-style normal
  src url(Laugh.ttf)
`

const Name = stylus(`
@supports not (display: flex)
  div
    float: left
    padding: 30px
    color mistyrose
    font-family ${Geo}
    &:hover
      color blue
      background-color yellow
`)

class App extends Component {
	render() {
		return (
      <div>
        <Name>More new features are coming 🔥</Name>
      </div>
		);
	}
}

render(<App />, document.getElementById('app'));
