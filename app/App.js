import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {withRkTheme} from 'react-native-ui-kitten';
import {bootstrap} from './config/bootstrap';

import Home from './components/Home/Home';
import Acerca from './components/Acerca/Acerca';
import Contacto from './components/Contacto/Contacto';
import Derechos from './components/Derechos/Derechos';
import Metodos from './components/Metodos/Metodos';
import MetodosDetalle from './components/MetodosDetalle/MetodosDetalle';
import Videos from './components/Videos/Videos';
import Reproductor from './components/Reproductor/Reproductor';

bootstrap();

const App = StackNavigator({
  Home: { screen: Home },
  Metodos: { screen: Metodos },
  MetodosDetalle: { screen: MetodosDetalle },
  Derechos: { screen: Derechos },
  Videos: { screen: Videos },
  Contacto: { screen: Contacto },
  Acerca: { screen: Acerca },
  Reproductor: { screen: Reproductor },
});

AppRegistry.registerComponent('HazloBienHazloSeguro', () => App);