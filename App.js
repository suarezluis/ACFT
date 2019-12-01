import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './SRC/Redux/Store';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import Navigator from './SRC/Navigator';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}
