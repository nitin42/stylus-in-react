import React from 'react';
import renderer from 'react-test-renderer';
import cssParser from 'css';
import stylus from 'stylus';

import createStylesheet from '../src/stylesheet';
import getParentNode from '../src/selectors';

const Example = `
button
  color pink
  border 3px solid mistyrose
  border-radius 4px
  &:hover
    color lighten(purple, 20)
    background-color mistyrose
`

describe('Create stylesheet', () => {
  test('generates an array of styles', () => {
    let rules, selectors, element, AST;
    
    stylus.render(Example, (err, css) => {
      AST = cssParser.parse(css, { source: 'css' });
      rules = AST.stylesheet.rules;
      selectors = AST.stylesheet.rules[0] !== undefined ? AST.stylesheet.rules[0].selectors : null;
      element = getParentNode(selectors);
    });
  
    const styles = createStylesheet(rules, element);
  
    const output = [{"color": "#ffc0cb"}, {"border": "3px solid #ffe4e1"}, {"borderRadius": "4px"}, {":hover": {"color": "#e600e6"}}, {":hover": {"backgroundColor": "#ffe4e1"}}]
    
    expect(styles).toEqual(output);
  });
});