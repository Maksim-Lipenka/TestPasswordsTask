import 'react-native';
import React from 'react';
import {InputText} from '../../../src/components/core';
import renderer from 'react-test-renderer';

describe('InputText', () => {
  const handlePress = jest.fn();

  const defaultProps = {
    input: {onChange: handlePress},
    meta: {error: false},
    label: "Password",
    showIndicator: false,
  };

  it('renders correctly', () => {
    const tree = renderer.create(<InputText {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
