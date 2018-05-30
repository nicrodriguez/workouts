import React from 'react';
import { View } from 'react-native';

const CardSectionBottom = (props) => (
    <View style={[styles.containerStyle, props.style]}>
        {props.children}
    </View>
);

const styles = {
    containerStyle: {
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
};

export { CardSectionBottom };