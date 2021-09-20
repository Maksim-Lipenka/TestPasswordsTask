import 'react-native';
import React from 'react';
import PasswordsForm from '../../src/components/PasswordsForm';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('PasswordsForm', () => {
  const handleSubmit = jest.fn();

  const defaultProps = {handleSubmit: handleSubmit, passwordValue: "", passwordConfirmationValue: "", valid: false};

  it('renders correctly when not valid', () => {
    const tree = renderer.create(<Provider store={store}><PasswordsForm {...defaultProps} /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when valid', () => {
    const tree = renderer.create(<Provider store={store}><PasswordsForm {...defaultProps} passwordValue="Password1" passwordConfirmationValue="Password1" /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
