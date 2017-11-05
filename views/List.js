import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './ListItem';
import mock from '../controllers/mockList.json';

export default class App extends React.Component {
  static navigationOptions = {
    headerLeft: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={mock}
          renderItem={({ item }) => (<ListItem {...item} navigation={this.props.navigation} />)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    width: '100%'
  }
});