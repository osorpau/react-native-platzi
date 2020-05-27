import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import Video from 'react-native-video';
import Layout from '../component/layout';
import ControlLayout from '../component/control-layout';
import PlayPause from '../component/play-pause';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
  };
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering,
    });
  };
  onLoad = () => {
    this.setState({
      loading: false,
    });
  };
  onPlayPause = () => {
    this.setState(prevState => ({paused: !prevState.paused}));
  };
  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{
              uri:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
          />
        }
        loader={<ActivityIndicator color="red" />}
        controls={
          <ControlLayout>
            <PlayPause
              onPlayPause={this.onPlayPause}
              paused={this.state.paused}
            />
            <Text>progress bar</Text>
            <Text>time left</Text>
            <Text>full screen</Text>
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {position: 'absolute', left: 0, right: 0, bottom: 0, top: 0},
});
export default Player;