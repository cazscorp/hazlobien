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
              <RkText rkType='header4'>
              MÓDULO DE SERVICIOS AMIGABLES
              </RkText>
            </View>

            <View rkCardContent>

              <View style={{flexDirection: 'row'}}>
                <Image style={{width:30, height:30, marginRight: 10}} source={require('./assets/ubicacion.jpg')} />
                <RkText rkType='primary3 bigLine'>
                Centro de Salud Urbano de Taxco
                </RkText>
              </View>
              <RkText rkType='primary3 bigLine' style={styles.tab}>
              Avenida de los plateros #4280  
              </RkText>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image style={{width:30, height:30, marginRight: 10}} source={require('./assets/tel.jpg')} />
                <RkText rkType='primary3 bigLine'>
                +52 733 141 35 96
                </RkText>
              </View>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Image style={{width:30, height:30, marginRight: 10}} source={require('./assets/email.jpg')} />
                <RkText rkType='primary3 bigLine'>
                vaaryknia@gmail.com
                </RkText>
              </View>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Image style={{width:30, height:30, marginRight: 10}} source={require('./assets/fb.png')} />
                <RkText rkType='primary3 bigLine'>
                Módulo De Adolescentes CSUT
                </RkText>
              </View>
              
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Image style={{width:30, height:30, marginRight: 10}} source={require('./assets/web.jpg')} />
                <RkText rkType='primary3 bigLine'>
                hazlo-seguro-hazlo-bien.webnode.es
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
  br: {
    marginBottom: 10
  },
  tab: {
    marginBottom: 10,
    paddingLeft: 40,
  },
}));