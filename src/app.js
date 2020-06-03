import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
// import { store } from './redux/store';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import API from '../utils/api';
import Movie from './screens/containers/movie';

class AppLayout extends Component {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    const categoriesList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {categoriesList},
    });

    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {suggestionList},
    });
  }
  render() {    
    if (this.props.selectedMovie) {
      return <Movie />;
    }
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
const mapStateToProps = state => {
  return {selectedMovie: state.selectedMovie};
};
export default connect(mapStateToProps)(AppLayout);
