import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ListView,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import { StackNavigator } from 'react-navigation';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Hazlo Bien Hazlo Seguro',
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#2196F3' },// blue
  };

  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
    };
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.data = ds.cloneWithRows(routes);
    this.renderRow = this._renderRow.bind(this);
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  _renderRow(row) {
    return (
      <TouchableHighlight
        style={styles.item}
        activeOpacity={1}
        onPress={() => {
          this.props.navigation.navigate(row.nav)
        }}>
        <View style={styles.container}>
          <RkText>{row.title}</RkText>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.root}>
      
        <RkCard rkType='article'>
          <View rkCardContent>
            <View onLayout={this._onLayoutDidChange}>
              <Carousel
                rkCardImg
                delay={2200}
                bullets={true}
                autoplay
                currentPage={0}
                //onAnimateNextPage={(p) => console.log(p)}
              >
                <Image rkCardImg source={require('../Acerca/assets/dibujo.jpg')}/>
                <Image rkCardImg source={require('../Acerca/assets/team2.jpg')}/>
                <Image rkCardImg source={require('../Acerca/assets/team.jpg')}/>
                <Image rkCardImg source={require('../Acerca/assets/team4.jpg')}/>
              </Carousel>
            </View>
          </View>
        </RkCard>

        <View style={styles.container}>
          <ListView 
            style={styles.list}
            dataSource={this.data}
            renderRow={this.renderRow}
          />
        </View>

      </ScrollView>
    );
  }
}

const routes = [
  {
    id: 1,
    nav: 'Metodos',
    title: 'Métodos anticonceptivos',
  },
  {
    id: 2,
    nav: 'Derechos',
    title: 'Derechos Sexuales y Reproductivos',
  },
  {
    id: 3,
    nav: 'Videos',
    title: 'Videos',
  },
  {
    id: 4,
    nav: 'Contacto',
    title: 'Contáctanos',
  },
  {
    id: 5,
    nav: 'Acerca',
    title: 'Acerca de nosotros',
  },
];

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
    flexDirection: 'column',
  },
  item: {
    height: 80,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    paddingHorizontal: 16
  },
  list: {
    backgroundColor: theme.colors.screen.base,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.screen.base,
  },
  icon: {
    width: 34,
    textAlign: 'center',
    marginRight: 16
  },
  nono: {
    padding: 0,
    margin: 0
  },
}));