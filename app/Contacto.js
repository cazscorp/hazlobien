import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Contacto extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: `Contacto`,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#2196F3' },// blue
    });
    render() {
      const { params } = this.props.navigation.state;
      return (
        <View>
          <Text>
          Nombre: Módulo de Servicios Amigables para Adolescentes
          </Text>
          <Text>
          Dirección: Av. De Los Plateros Frente Al IMSS, Centro De Salud Urbano De Taxco, Guerrero, México.
          </Text>
          <Text>
          Sitio Web: http://hazlo-seguro-hazlo-bien.webnode.es
          </Text>
        </View>
      );
    }
}