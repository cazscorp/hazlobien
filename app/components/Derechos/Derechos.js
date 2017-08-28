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
            
          <View rkCardHeader>
            <View>
              <RkText style={styles.title} rkType='header4'>
              DERECHO A
              </RkText>
            </View>
          </View>

            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                - Decidir de forma libre sobre mi cuerpo y mi sexualidad
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                - El respeto de mi intimidad y mi vida privada
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                - Vivir una vida libre de violencia sexual
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                - La libertad reproductiva
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                - La igualdad de oportunidades y la equidad
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                - Vivir libre de toda discriminación
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                - La información completa, científica y laica sobre la sexualidad
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                - Los servicios de la salud sexual y reproductiva
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                - La participación en las políticas públicas sobre salud sexual y reproductiva
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
              <View>
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
}));