import React from 'react';
import { View, SafeAreaView, Image, StyleSheet } from 'react-native';

function Header(props) {
  return (
    <View>
      {/* SafeAreaView:sirve para iphone, para que el contenido no se muestra en la barra superior */}
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.right}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain', // ajusta el contenido
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  }
});

export default Header;