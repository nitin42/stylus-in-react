const { stylus } = require("../src/");

const ButtonMedia = stylus(
  `
button
  color red
  padding 10px
  @media screen and (min-width: 400px)
    padding 15px
    margin 10px
`,
  { displayName: "ButtonMedia" }
);

module.exports = ButtonMedia;
