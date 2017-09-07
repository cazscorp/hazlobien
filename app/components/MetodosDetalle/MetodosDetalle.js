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
      title: navigation.state.params.titulo,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#2196F3' },// blue
    });

    render() {
      return (
        <ScrollView style={styles.root}>
          <RkCard rkType='article'>
            
            <Image rkCardImg source={require('./assets/condonmasculino.jpg')}/>
            
            <View rkCardHeader>
              <View>
                <RkText style={styles.title} rkType='header4'>
                JDF ALDFJLA FJKL
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                Hh sjfkj snkdjf nksjfn kjfk hwrgbj aldnvbw jsnf,d
                </RkText>
              </View>
            </View>

            <View rkCardHeader>
              <View>
                <RkText style={styles.title} rkType='header4'>
                LKDJFD LDKFJ
                </RkText>
              </View>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>
                Akasjd lkajsd lasldk alskdj alskjd
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