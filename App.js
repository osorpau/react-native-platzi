import 'react-native-gesture-handler'
import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { store, persistor } from './src/redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import Loading from './src/sections/components/Loading';
// import AppLayout from './src/app';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      // <Provider store={store}>
      //   <PersistGate loading={<Loading />} persistor={persistor}>
      //     <AppLayout />
      //   </PersistGate>
      // </Provider>
      <NavigationContainer    >
        <Stack.Navigator initialRouteName="Home"  >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
