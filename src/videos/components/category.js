import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';

const Category = props => (
  <ImageBackground
    style={styles.wrapper}
    source={{ uri: props.background_image }}>
    <Text style={styles.genre}>{props.genres[0]}</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden'
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,.75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0
  },
});
export default Category;