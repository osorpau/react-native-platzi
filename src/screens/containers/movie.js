import React, {Component} from 'react';
import Layout from '../components/movie-layout';
import Player from '../../player/container/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import {connect} from 'react-redux';
import Details from '../../videos/components/detaisl';

class Movie extends Component {
  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      },
    });
  };
  render() {
    return (
      <Layout>
        <Header>
          <Close onPress={this.closeVideo} />
        </Header>
        <Player />
        <Details {...this.props.movie} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    movie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(Movie);
