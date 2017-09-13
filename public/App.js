import React, { Component } from 'react';
import { render } from 'react-dom';
import { css } from 'glamor';

import stylus from '../src/index';

const rules = css({
  color: 'blue',
  padding: '50px',
  '@media screen and (min-width: 200px)': {
    color: 'red',
    padding: '30px'
  }
});

const Name = stylus`
h1
  color red
  padding 10px
  &:hover
    color mistyrose
  @media (min-width: 800px)
    color blue
    padding 40px
    margin 50px
`;

const Container = stylus`
  para-color = mistyrose

sizes = 20px 30px 40px

  div
    display flex
    flex-direction column
    justify-content center
    align-items center
    padding 20px
    margin sizes[1]
`;

const Input = stylus`
input
  padding 4px
  width 80px
  border 1px solid pink
  border-radius 3px
  >p
    color mistyrose
&:focus
  outline none
  &:hover
    width percentage(.15)
`;

const Button = stylus`
choices = 3px 4px 5px 7px

border-radius(n)
  border-radius n

button
  margin-top 20px
  border-radius(8px)
  border 1px solid mistyrose
  background white
  color black
  padding choices[3]
  &:hover
    background darken(mistyrose, 10)
    color white
  &:focus
    outline none
  cursor pointer
`;

const Image = stylus`
image-styles(width, height, border, radius)
  margin-top 30px
  width width
  height height
  border border solid mistyrose
  border-radius radius

img
  image-styles(200, 200, 3px, 4px)
`;

class App extends Component {
	render() {
		return (
      <Name>Hello World</Name>
		);
	}
}

render(<App />, document.getElementById('app'));
