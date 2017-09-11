import React from 'react';
import renderer from 'react-test-renderer';

import getParentNode from '../src/selectors';

describe('Selector', () => {
  test('returns a root selector', () => {
    const selectors = ['button:hover'];

    expect(getParentNode(selectors)).toBe('button');
  });
});