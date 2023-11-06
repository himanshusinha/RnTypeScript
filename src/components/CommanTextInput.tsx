import React from 'react';
import {View, Text, TextInput} from 'react-native';

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: any;
  keyboardType: string;
  maxLength: number;
  disabled: boolean;
  autoCorrect: string;
  autoCapitalize: string; // New prop for controlling border width
};

const CommanTextInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  maxLength,
  disabled,
  autoCapitalize, // Include the borderWidth prop
  autoCorrect,
}: InputProps) => {
  return (
    <View
      style={{
        height: 50,
        borderWidth: 1, // Use the borderWidth prop to control border width
        borderColor: value ? '#9e9e9e' : 'red',
        justifyContent: 'center',
        paddingStart: 20,
      }}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={maxLength}
        disabled={disabled}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
      />
    </View>
  );
};

export default CommanTextInput;
