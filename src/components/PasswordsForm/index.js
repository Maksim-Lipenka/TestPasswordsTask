import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {InputText, Button} from '../core';
import {atLeastOneCapitalLetter, atLeastOneNumber, atLeastOneRegularLetter, atLeastSixCharacters, required, } from '../../validation';
import { form, passwordConfirmationField, passwordConfirmationLabel, passwordField, passwordLabel, passwordRuleCapitalLetter, passwordRuleLength, passwordRuleMatches, passwordRuleNumber, passwordRuleRegularLetter, passwordRulesTitle, submitButtonLabel } from './strings';

const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? "Passwords don't match" : undefined;

const PasswordsForm = props => {
  const {handleSubmit, passwordValue, passwordConfirmationValue} = props;

  const submit = values => {
    alert('Congratulations!');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Field
          name={passwordField}
          component={InputText}
          label={passwordLabel}
          validate={[required, atLeastOneRegularLetter, atLeastOneCapitalLetter, atLeastOneNumber, atLeastSixCharacters]}
          showIndicator
          secureTextEntry
        />
        <Field
          name={passwordConfirmationField}
          component={InputText}
          validate={[required, passwordsMatch]}
          label={passwordConfirmationLabel}
          showIndicator
          secureTextEntry
        />
        <View>
          <Text>{passwordRulesTitle}</Text>
          <Text style={[styles.indicatorNotValid, passwordValue && !atLeastOneRegularLetter(passwordValue) && styles.indicatorValid]}>{passwordRuleRegularLetter}</Text>
          <Text style={[styles.indicatorNotValid, passwordValue && !atLeastOneCapitalLetter(passwordValue) && styles.indicatorValid]}>{passwordRuleCapitalLetter}</Text>
          <Text style={[styles.indicatorNotValid, passwordValue && !atLeastOneNumber(passwordValue) && styles.indicatorValid]}>{passwordRuleNumber}</Text>
          <Text style={[styles.indicatorNotValid, passwordValue && !atLeastSixCharacters(passwordValue) && styles.indicatorValid]}>{passwordRuleLength}</Text>
          <Text style={[styles.indicatorNotValid, passwordValue && !passwordsMatch(passwordConfirmationValue, { password: passwordValue }) && styles.indicatorValid]}>{passwordRuleMatches}</Text>
        </View>
        <Button
          onPress={handleSubmit(submit)}
          label={submitButtonLabel}
          disabled={!props.valid}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorNotValid: {
    color: 'red'
  },
  indicatorValid: {
    color: 'green'
  }
});

export default compose(
  reduxForm({
    form: form,
  }),
  connect(state => ({
    passwordValue: formValueSelector(form)(state, passwordField),
    passwordConfirmationValue: formValueSelector(form)(state, passwordConfirmationField),
  })),
)(PasswordsForm);
