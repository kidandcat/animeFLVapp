import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

export default class App extends React.Component {
  _onPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Player', { url: this.props.src });
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._onPress}>
        <View style={styles.flex}>
          <Image
            style={styles.image}
            source={{ uri: this.props.image }}
          />
          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
    marginTop: 2,
    marginBottom: 2
  },
  flex: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    flex: 3,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  image: {
    flex: 1,
    height: 100
  }
});