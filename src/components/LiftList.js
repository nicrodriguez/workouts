import React, { Component } from 'react';
import { Text, View } from 'react-native';

const LiftList = (lifts) => {
  return(
      <View>
          {
              lifts.map((item, index) => (
                  <View style={styles.containerStyle}>
                      <Text style={styles.textStyle}>
                          {item.name + " " + item.sets + "x" + item.reps}
                      </Text>
                  </View>
              ))
          }
      </View>
  );
};

const styles = {
  containerStyle: {
      padding: 10,
      marginTop: 3,
      alignItems: 'center'
  },
  textStyle: {
      fontSize: 18
  }
};

export default LiftList;