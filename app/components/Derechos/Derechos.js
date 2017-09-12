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

export default class Derechos extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: `Derechos Sexuales y Reproductivos`,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#2196F3' },// blue
    });

    render() {
      return (
        <ScrollView style={styles.root}>
          <RkCard rkType='article'>
            
            <Image rkCardImg source={require('./assets/derechos.jpg')}/>
            
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a decidir de forma libre, autónoma e informada sobre nuestro cuerpo y nuestra sexualidad
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a ejercer y disfrutar plenamente nuestra sexualidad
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a manifestar públicamente nuestros afectos
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a decidir libremente con quién o quiénes relacionarnos afectiva, erótica y socialmente
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a que se respete nuestra privacidad e intimidad y a que se resguarde confidencialmente nuestra información personal
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a la vida, a la integridad física, psicológica y sexual, a vivir libres de violencia
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a decidir de manera libre e informada sobre nuestra vida reproductiva
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a la igualdad, a vivir libres de prejuicios y estereotipos de género
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a vivir libres de discriminación
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a la información actualizada, veraz, completa, científica y laica sobre sexualidad
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a la educación integral en sexualidad
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a los servicios de salud sexual y reproductiva
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a la identidad sexual, a construir, decidir y expresar nuestra identidad de género
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                •	Derecho a la participación en las políticas públicas sobre sexualidad y reproducción
                </RkText>
              </View>
            </View>


            <View rkCardHeader>
              <View>
                <RkText style={styles.title} rkType='header4'>
                RECUERDA
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View style={styles.end}>
                <RkText rkType='primary3 bigLine'>
                En la medida que conozcas tus derechos sexuales y reproductivos, 
                podrás defenderlos y serás parte activa de tu proceso de autonomía, 
                identidad y toma de decisiones, para el logro de una sexualidad más libre y saludable.
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
  end: {
    marginBottom: 50
  },
}));