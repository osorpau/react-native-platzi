import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';
import Video from 'react-native-video';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import API from './utils/api';
import Player from './src/player/container/player';
import store from './src/redux/store';


type Props = {};
class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <Player />
          <Text>Buscador</Text>
          <Text>categoria</Text>
          <CategoryList list={this.state.categoryList} />
          <SuggestionList list={this.state.suggestionList} />
        </Home>
      </Provider>
    );
  }
}
export default App;
