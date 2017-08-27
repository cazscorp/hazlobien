import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Derechos extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: `Derechos Sexuales y Reproductivos`,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#2196F3' },// blue
    });
    render() {
      const { params } = this.props.navigation.state;
      return (
        <View>
          <Text>
          Derechos sexuales y reproductivos
          </Text>
        </View>
      );
    }
}