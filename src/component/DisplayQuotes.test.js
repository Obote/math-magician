import React from 'react';
import renderer from 'react-test-renderer';
import DisplayQuote from './DisplayQuotes';

test('should render', () => {
  const tree = renderer.create(<DisplayQuote />).toJSON();
  expect(tree).toMatchSnapshot();
});
