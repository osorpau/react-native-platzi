import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

function PlayPause(props) {
  return (
    <TouchableHighlight
      onPress={props.onPlayPause}
      style={styles.container}
      underlayColor="red"
      hitSlop={{
        left: 5,
        top: 5,
        right: 5,
        bottom: 5,
      }}
    >
      {
        props.paused
          ? (<Text style={styles.button}>PLAY</Text>)
          : (<Text style={styles.button}>PAUSE</Text>)
      }
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'

  }
});

export default PlayPause;
