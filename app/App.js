import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Acerca from './Acerca';
import Contacto from './Contacto';
import Derechos from './Derechos';
import Metodos from './Metodos';
import Videos from './Videos';
import Reproductor from './Reproductor';

const App = StackNavigator({
  Home: { screen: Home },
  Metodos: { screen: Metodos },
  Derechos: { screen: Derechos },
  Videos: { screen: Videos },
  Contacto: { screen: Contacto },
  Acerca: { screen: Acerca },
  Reproductor: { screen: Reproductor },
});

AppRegistry.registerComponent('HazloBienHazloSeguro', () => App);