import React, { Component } from 'react';
import { Text } from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import API from './utils/api';

type Props = {};
class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>categoria</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
export default App;
