import React from 'react';
import { View } from 'react-native';

const CardSectionTop = (props) => (
    <View style={[styles.containerStyle, props.style]}>
        {props.children}
    </View>
);

const styles = {
    containerStyle: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
};

export { CardSectionTop };