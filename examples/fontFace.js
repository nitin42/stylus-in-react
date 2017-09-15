const { fontFace, stylus } = require("../src/");

const Fira = fontFace(`
@font-face
  font-family FiraCode
  font-style normalize
  src url(./FiraCode-Retina.ttf)
`);

const Name = stylus(
  `
h2
  font-family ${Fira}
`,
  { displayName: "Name" }
);

module.exports = Name;
