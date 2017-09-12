import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {
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
      <View style={styles.container}>

        <View style={{ flex: 3, display: 'none' }} onLayout={this._onLayoutDidChange}>
          <Carousel
            delay={2000}
            style={this.state.size}
            autoplay
            pageInfo
            currentPage={2}
            onAnimateNextPage={(p) => console.log(p)}
          >
            <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}><Text>1</Text></View>
            <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
            <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
          </Carousel>
        </View>

        <ListView 
          style={styles.list}
          dataSource={this.data}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const routes = [
  {
    id: 1,
    nav: 'Metodos',
    title: 'Métodos Anticonceptivos',
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
    }
  }));