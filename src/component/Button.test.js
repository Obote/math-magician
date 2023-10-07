import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from './Buttons';

test('should render', () => {
  const tree = renderer.create(<Buttons />).toJSON();
  expect(tree).toMatchSnapshot();
});
