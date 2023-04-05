import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'; // add this line

import Button from './Button';

describe('Matches snapshot', () => {
  const tree = renderer.create(<Button value="submit" />).toJSON();
  expect(tree).toMatchSnapshot();
});
