import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalSeparator = (props) => (
  <View style={[
    styles.separator,
    {
      borderRightColor: props.color ? props.color : '#eaeaea'
    }]}>
    {/* <Text></Text> */}
  </View>
);

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    marginHorizontal: 5,
    borderRightWidth: 1,
  }
})

export default HorizontalSeparator;
