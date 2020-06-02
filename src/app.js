import React, { Component } from 'react';
import { Text } from 'react-native';
import { store } from './redux/store';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import API from '../utils/api';
import Player from './player/container/player';

class AppLayout extends Component {
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
      <Home>
        <Header />
        <Player />
        <Text>Buscador</Text>
        <Text>categoria</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }

}
export default AppLayout;
