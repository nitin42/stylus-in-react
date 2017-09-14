import React, { Component } from 'react';
import { render } from 'react-dom';

import stylus from '../src/index';

const Container = stylus(`
para-color = mistyrose

div
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 20px
  margin 10px
  >p
    color darken(para-color, 10)
`)

const Input = stylus(`
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
`)

const Button = stylus(`
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
    border-radius 3px
  &:focus
    outline none
  cursor pointer
`)

const Image = stylus(`
image-styles(width, height, border, radius)
  margin-top 30px
  width width
  height height
  border border solid mistyrose
  border-radius radius

img
  image-styles(200, 200, 3px, 4px)
`)

class App extends Component {
  render() {
    return (
      <Container>
        <Input type="text" name="sample" />
        <Image src='http://365.unsplash.com/assets/paul-jarvis-9530891001e7f4ccfcef9f3d7a2afecd.jpg' />
        <Button>Submit</Button>
      </Container>
    );
  }
}

render(<App />, document.getElementById('app'));