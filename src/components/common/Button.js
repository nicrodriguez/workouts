import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { textStyle, buttonStyle } = styles;
    return (
        <TouchableOpacity
              onPress={onPress}
              style={buttonStyle}
        >
              <Text style={textStyle}>
                    {children}
              </Text>
        </TouchableOpacity>
    );
};

const ButtonBottom = ({ onPress, children }) => {
  const { textStyle, bottomButtonStyle } = styles;
  return (
      <TouchableOpacity
          onPress={onPress}
          style={bottomButtonStyle}>
          <Text style={textStyle}>
              {children}
          </Text>
      </TouchableOpacity>
  );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#4b5045',
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: '#f9f9f9'
    },
    bottomButtonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#4b5045',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    }

};

export { Button, ButtonBottom };
