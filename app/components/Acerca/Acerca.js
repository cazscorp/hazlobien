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

export default class Acerca extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Acerca de nosotros`,
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#2196F3' },// blue
  });

  render() {
    return (
      <ScrollView style={styles.root}>

        <RkCard rkType='article'>
          <Image
          style={{alignSelf:'center'}}
          resizeMode="contain"
          source={require('./assets/team.jpg')}/>
          <View rkCardContent style={styles.end}>
            <RkText rkType='primary3 bigLine'>
            Somos un grupo de promotores juveniles, nuestra meta es dar herramientas para la prevención del embarazo en la adolescencia. De igual manera para la prevención de las ITS (Infecciones de Transmisión Sexual).
            </RkText>
          </View>
        </RkCard>

        <RkCard rkType='article'>
          <Image rkCardImg source={require('./assets/team2.jpg')}/>
          
          <View rkCardHeader>
            <RkText style={styles.title} rkType='header4'>
            ¿Qué son los Servicios Amigables?
            </RkText>
          </View>
          <View rkCardContent>            
            <RkText rkType='primary3 bigLine'>
            Los Servicios Amigables son espacios de atención que se ubican dentro de los Centros de Salud y algunos Hospitales, en donde las y los adolescentes de entre 10 a 19 años pueden acudir para recibir el servicio especializadas en Salud Sexual y Reproductiva de forma agradable y con trato sensible, cordial y respetuoso  brindando  atención de calidad y calidez con apego a sus Derechos Sexuales y Reproductivos.
            </RkText>
          </View>

          <View rkCardHeader>
            <RkText rkType='header4'>
            SERVICIOS
            </RkText>
          </View>
          <View rkCardContent style={styles.end}>            
            <RkText rkType='primary3 bigLine' style={styles.subtitle}>
            ORIENTACIÓN SOBRE
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Sexualidad
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Prevención de embarazo
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Métodos anticonceptivos
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Prevención de violencia
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Prevención de infecciones de transmisión sexual
            </RkText>
          </View>

          <Image rkCardImg source={require('./assets/team3.jpg')}/>

          <View rkCardContent>            
            <RkText rkType='primary3 bigLine' style={styles.subtitle}>
            SERVICIOS DE SALUD SEXUAL Y REPRODUCTIVA            
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Entrega y/o aplicación de métodos anticonceptivos
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Dotación de anticoncepción de emergencia
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Prevención del embarazo no deseado
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Detección de infecciones de transmisión sexual
            </RkText>
          </View>

          <View rkCardContent style={styles.end}>            
            <RkText rkType='primary3 bigLine' style={styles.subtitle}>
            ¿QUIÉNES LOS ATIENDEN?
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Médicos
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Enfermeras
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Psicólogos
            </RkText>
            <RkText rkType='primary3 bigLine'>
            • Promotores de salud
            </RkText>
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
  subtitle: {
    marginBottom: 10
  },
  end: {
    marginBottom: 20
  },
}));
