# stylus-in-react

> Style React components with Stylus

<br/>

<p align="center">
  <img src="./stylusreact.png">
</p>

## Introduction

Blah blah blah! I assume you know what [stylus]() is and how it can be  used in an expressive way to generate CSS. With `stylus-in-react`, you can directly style your React components with stylus.

Sound's cool !! Let's see how ...

**Example**

```jsx
import React from 'react';
import stylus from 'stylus-in-react';

const Button = stylus`
button-styles(width, radius, style, color)
  border-radius radius
  border width style color
  padding 5px
  color purple
  
button
  button-styles(3px, 4px, solid, mistyrose)
  &:hover
    color pink
    background-color lighten(mistyrose, 20)
`

class App extends React.Component {
  render() {
    return (
      <Button>Search</Button>
    );
  }
}
```

## Install

```
npm install stylus-in-react
```

This also depends on React so make sure you've already installed it!

## Usage
Zero config, zero setup and no new api to learn. Just use 'stylus\`\`' and you are good to go.

```jsx
const DIV = stylus`
div
  padding 20px
  width 400px
`
```

## ** Supported stylus features **

Supported features - 

* [variables]()
* [mixins]()
* [functions]()
* [built-in functions]()
* [selectors]() (pseudo selectors, nested selectors, descendant-selectors)
* [interpolations]()
* [operators]()
* [keywords arguments]()
* [rest params]()
* [conditionals]()
* [block]()
* [char escaping]()

But what about `keyframes`, `media` and other `@rules` ?? **Work in progress!!**

## ** Caveats **

Stylus is “pythonic” (i.e. indentation-based) so it will throw errors when indentation is not correct.

<p align="center">
  <img src="http://g.recordit.co/4WBY9wPAdz.gif">
</p>


