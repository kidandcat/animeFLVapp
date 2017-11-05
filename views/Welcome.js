import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const { navigate } = this.props.navigation;    
    setTimeout(()=>{
      navigate('List')
    }, 1000)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>AnimeFLV</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: 35,
    color: 'grey'
  }
});
