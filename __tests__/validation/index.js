import 'react-native';
import React from 'react';
import {required, atLeastOneCapitalLetter, atLeastOneNumber, atLeastOneRegularLetter, atLeastSixCharacters} from '../../src/validation'

describe('PasswordsForm validation', () => {
  const correctPassword = "Password1"
  it('required', () => {
    expect(required(correctPassword)).toBe(undefined);
    expect(required("")).toBe('Required');
  })
  it('atLeastOneCapitalLetter', () => {
    expect(atLeastOneCapitalLetter(correctPassword)).toBe(undefined);
    expect(atLeastOneCapitalLetter("a")).toBe('Password should contain atleast one capital letter');
    expect(atLeastOneCapitalLetter("aa2a")).toBe('Password should contain atleast one capital letter');
  })
  it('atLeastOneNumber', () => {
    expect(atLeastOneNumber(correctPassword)).toBe(undefined);
    expect(atLeastOneNumber("a")).toBe('Password should contain atleast one number');
    expect(atLeastOneNumber("aaAa")).toBe('Password should contain atleast one number');
  })
  it('atLeastOneRegularLetter', () => {
    expect(atLeastOneRegularLetter(correctPassword)).toBe(undefined);
    expect(atLeastOneRegularLetter("A")).toBe('Password should contain atleast one regular letter');
    expect(atLeastOneRegularLetter("AA1A")).toBe('Password should contain atleast one regular letter');
  })
  it('atLeastSixCharacters', () => {
    expect(atLeastSixCharacters(correctPassword)).toBe(undefined);
    expect(atLeastSixCharacters("a")).toBe('Password should contain atleast 6 characters');
    expect(atLeastSixCharacters("AA1A")).toBe('Password should contain atleast 6 characters');
  })
});