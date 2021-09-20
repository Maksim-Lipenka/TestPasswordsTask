import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default ({input: {onChange, ...restInput}, meta: { error }, label, showIndicator, inputContainerStyle, inputStyle, ...props}) => {
  
  return (
    <View style={[styles.inputWrapper, inputContainerStyle]}>
      <Text>{label}</Text>
      <TextInput
        style={[styles.input, inputStyle]}
        onChangeText={onChange}
        autoCapitalize='none'
        {...restInput}
        {...props}
      />
      {showIndicator && <View style={[styles.indicator, { backgroundColor: error ? "red" : "green" }]}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%'
  },
  input: {
    borderColor: '#1f1f1f',
    borderWidth: 1,
    height: 37,
    width: '100%',
    marginBottom: 12,
    paddingLeft: 8,
    paddingRight: 32
  },
  indicator: {
    position: 'absolute',
    right: 12,
    bottom: 49/2+3,
    width: 6,
    height: 6,
    borderRadius: 50
  }
});