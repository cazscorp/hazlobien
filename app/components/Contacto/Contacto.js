import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  RkCard,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';

export default class Contacto extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: `Contacto`,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#2196F3' },// blue
    });

    render() {
      return (
        <ScrollView style={styles.root}>
          <RkCard rkType='article'>
            
            <Image rkCardImg source={require('./assets/contacto.png')}/>
            
            <View rkCardHeader>
              <View>
                <RkText style={styles.title} rkType='header4'>
                Datos de Contacto
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                Módulo de servicios amigables centro de salud úrbano de Taxco.
                Avenida de los plateros #4280  
                +52 733 141 35 96
                vaaryknia@gmail.com
                Facebook:
                https://www.facebook.com/modulodeadolescentes.csut
                </RkText>
              </View>
            </View>

            <View rkCardHeader>
              <View>
                <RkText style={styles.title} rkType='header4'>
                Otros Datos
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                Nombre: Módulo de Servicios Amigables para Adolescentes
                Dirección: Av. De Los Plateros Frente Al IMSS, Centro De Salud Urbano De Taxco, Guerrero, México.
                Sitio Web: http://hazlo-seguro-hazlo-bien.webnode.es
                </RkText>
              </View>
            </View>

          </RkCard>
        </ScrollView>
      )
    }

}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  title: {
    marginBottom: 5
  },
}));