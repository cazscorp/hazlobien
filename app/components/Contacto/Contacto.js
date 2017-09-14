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
      title: `Contáctanos`,
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
                Módulo de Servicios Amigables
                </RkText>
                <RkText rkType='primary3 bigLine'>
                Centro de Salud Urbano de Taxco
                </RkText>
                <RkText rkType='primary3 bigLine' style={styles.br}>
                Avenida de los plateros #4280  
                </RkText>
                <RkText rkType='primary3 bigLine'>
                +52 733 141 35 96
                </RkText>
                <RkText rkType='primary3 bigLine' style={styles.br}>
                vaaryknia@gmail.com
                </RkText>
                <RkText rkType='primary3 bigLine'>
                Facebook:
                </RkText>
                <RkText rkType='primary3 bigLine'>
                modulodeadolescentes.csut
                </RkText>
              </View>
            </View>

            <View rkCardHeader>
              <RkText style={styles.title} rkType='header4'>
              Otros Datos
              </RkText>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                Nombre:
                </RkText>
                <RkText rkType='primary3 bigLine' style={styles.br}>
                Módulo de Servicios Amigables para Adolescentes
                </RkText>
                <RkText rkType='primary3 bigLine'>
                Dirección:
                </RkText>
                <RkText rkType='primary3 bigLine' style={styles.br}>
                Av. De Los Plateros Frente Al IMSS, Centro De Salud Urbano De Taxco, Guerrero, México.
                </RkText>
                <RkText rkType='primary3 bigLine'>
                Sitio Web:
                </RkText>
                <RkText rkType='primary3 bigLine' style={styles.br}>
                http://hazlo-seguro-hazlo-bien.webnode.es
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
  br: {
    marginBottom: 10
  },
}));