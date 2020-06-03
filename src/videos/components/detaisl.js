import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

function Details(props) {
  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Image
            style={styles.cover}
            source={{ uri: props.medium_cover_image }}
          />
          <Text style={styles.description}>{props.description_full}</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
    backgroundColor: 'white'
  },
  bottom: {
    // flex: 1,
    padding: 20,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20
  },
  cover: {
    width: 125,
    height: 190,
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1
  },
  title: {
    color: '#44546b',
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default Details;
