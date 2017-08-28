import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Reproductor extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: `Videos`,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#2196F3' },// blue
    });
    render() {
      const { params } = this.props.navigation.state;
      return (
        <View>
          <Text>Reproductor</Text>
        </View>
      );
    }
}