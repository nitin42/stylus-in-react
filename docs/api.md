# API Reference

## stylus(code, { displayName })

Creates a stylus component with the stylus `code` and accepts an optional argument `displayName`.

**Example**

```js
const Button = stylus(
  `
button-styles(radius, size, color, type)
  border-radius radius
  border size type color
  color mistyrose
  background-color white

button
  button-styles(3px, 2px, mistyrose, solid)
`,
  { displayName: 'ButtonComponent' }
);
```

<p align="center">
  <img src="https://i.gyazo.com/1877d86f54964d1fe22424a807babee9.png">
</p>

## fontFace(code)

Loads the given font-face and returns the font family name

**Example**

```js
const Fira = fontFace(`
@font-face
  font-family FiraCode
  font-style normalize
  src url(./FiraCode-Retina.ttf)
`);

const Name = stylus(`
h2
  font-family ${Fira}
`, { displayName: 'Name' });
```

## keyframes(code)

loads the animation keyframes and returns an animation name

**Example**

```js
const fadeIn = keyframes(`
animation-name = fadeIn

@keyframes animation-name
  for i in 0..10
    {10% * i}
      opacity (i/10)
`);

const FadeInButton = stylus(
  `
button
  animation ${fadeIn} 4s ease-out
`,
  { displayName: "FadeInButton" }
);
```

<p align="center">
  <img src="https://gyazo.com/8e456cdedcc32f281f91712757e3a4f9.gif">
</p>