import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

export default ({onPress, label="Submit", disabled}) => {
  return (
  <TouchableOpacity
    disabled={disabled}
    style={[styles.submitButton, disabled && styles.submitButtonDisabled]}
    onPress={onPress}>
    <Text style={styles.submitButtonTitle}><Text>{label}</Text></Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#3fd1a5',
    marginTop: 10,
    textAlign: 'center',
    width: '100%',
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: 'gray'
  },
  submitButtonTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});