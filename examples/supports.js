const { stylus } = require("../src/");

const ButtonFloat = stylus(
  `
@supports not (display: flex)
  button
    float: right
    padding: 5px
`,
  { displayName: "FloatButton" }
);

module.exports = ButtonFloat;
