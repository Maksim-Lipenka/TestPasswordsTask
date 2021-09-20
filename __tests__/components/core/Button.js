import 'react-native';
import React from 'react';
import {Button} from '../../../src/components/core';
import renderer from 'react-test-renderer';

describe('Button', () => {
  const handlePress = jest.fn();

  const defaultProps = {onPress: handlePress, label: 'Submit', disabled: false};

  it('renders correctly', () => {
    const tree = renderer.create(<Button {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
