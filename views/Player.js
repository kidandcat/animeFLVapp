import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './ListItem';
import { Video } from 'expo';


export default class App extends React.Component {
  render() {
    return (
      <Video
        source={{ uri: this.props.navigation.state.params.url }}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode="cover"
        shouldPlay
        useNativeControls
        style={styles.video}
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
});