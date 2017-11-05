import React from 'react';
import Welcome from './views/Welcome'
import List from './views/List'
import Player from './views/Player'
import { StackNavigator } from 'react-navigation';
import { ScreenOrientation } from 'expo';

const AppNavigator = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerTitle: 'Welcome',
    },
  },
  List: {
    screen: List,
    navigationOptions: {
      headerTitle: 'List',
    },
  },
  Player: {
    screen: Player,
    navigationOptions: {
      headerTitle: 'Player',
    }
  }
}, {
    navigationOptions: ({ navigation }) => {
      if(navigation.state.routeName == 'Player' || navigation.state.routeName == 'Welcome'){
        return {header: null}
      }
    }
  });

  export default () => (
    <AppNavigator
      onNavigationStateChange={(prevState, currentState) => {
        if(currentState.routes[currentState.index].routeName == 'Player'){
          ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE);
        }else{
          ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
        }
      }}
    />
  );


