import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';
import Video from 'react-native-video';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import API from './utils/api';
import Player from './src/player/container/player';
import Loading from './src/sections/components/Loading';

type Props = {};
class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    const categoriesList = await API.getMovies();
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: { categoriesList }
    })

    const suggestionList = await API.getSuggestion(10);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: { suggestionList }
    })

  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Home>
            <Header />
            <Player />
            <Text>Buscador</Text>
            <Text>categoria</Text>
            <CategoryList list={this.state.categoryList} />
            <SuggestionList list={this.state.suggestionList} />
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
