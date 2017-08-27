import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Acerca extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: `Acerca de nosotros`,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#2196F3' },// blue
    });
    render() {
      const { params } = this.props.navigation.state;
      return (
        <View>
          <Text>
          Somos un grupo de Promotores Juveniles en Salud Sexual y Reproductiva, que trabajamos a favor 
          de la disminución del embarazo en adolescentes.
          </Text>
        </View>
      );
    }
}