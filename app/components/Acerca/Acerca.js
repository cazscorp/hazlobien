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
import Video from 'react-native-video';

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

      <Video source={require('./assets/video.mp4')}   // Can be a URL or a local file.
      ref={(ref) => {
        this.player = ref
      }}                                      // Store reference
      rate={1.0}                              // 0 is paused, 1 is normal.
      volume={1.0}                            // 0 is muted, 1 is normal.
      muted={false}                           // Mutes the audio entirely.
      paused={false}                          // Pauses playback entirely.
      resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
      repeat={false}                           // Repeat forever.
      playInBackground={false}                // Audio continues to play when app entering background.
      //playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
      //ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
      //progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
      //onLoadStart={this.loadStart}            // Callback when video starts to load
      //onLoad={this.setDuration}               // Callback when video loads
      //onProgress={this.setTime}               // Callback every ~250ms with currentTime
      //onEnd={this.onEnd}                      // Callback when playback finishes
      //onError={this.videoError}               // Callback when video cannot be loaded
      //onBuffer={this.onBuffer}                // Callback when remote video is buffering
      //onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
      //style={styles.backgroundVideo} 
      style={{
        height: 300,
        width: undefined,
      }}
      />

      </RkCard>

        <RkCard rkType='article'>

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

          <Image rkCardImg source={require('./assets/team4.jpg')}/>

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

          <Image rkCardImg source={require('./assets/team.jpg')}/>

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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  just: {
    textAlign: 'justify',
  }
}));
