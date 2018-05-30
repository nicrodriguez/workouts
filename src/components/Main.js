import React, { Component } from 'react';
import {Text, View} from "react-native";

class Main extends Component {
    render() {
        return(
            <View style={styles.mainBodyStyle}>
                <Text>
                    Main
                </Text>
            </View>
        );
    }
}

const styles = {
  mainBodyStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
};

export default Main;
