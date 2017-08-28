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
          <Image rkCardImg source={require('./assets/acerca.jpg')}/>
          <View rkCardContent>
            <View>
              <RkText rkType='primary3 bigLine'>
              Somos un grupo de promotores juveniles, nuestra meta es dar herramientas para la prevención del embarazo en la adolescencia. De igual manera para la prevención de las ITS (Infecciones de Transmisión Sexual).
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
