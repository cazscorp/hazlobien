import React from 'react';
import {
  ListView,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  RkText,
  RkCard, RkStyleSheet, RkTheme
} from 'react-native-ui-kitten';

export default class Videos extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Videos`,
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#2196F3' },// blue
  });

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.data = ds.cloneWithRows(videos);
    this.renderRow = this._renderRow.bind(this);
  }

  _keyExtractor(post, index) {
    return post.id;
  }
//onPress={() => this.props.navigation.navigate('Article', {id: info.item.id})}>
  _renderRow(row) {
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('Reproductor')}>
        <RkCard rkType='backImg'>
          <Image rkCardImg source={row.imagen}/>
          <View rkCardImgOverlay rkCardContent style={styles.overlay}>
            <RkText rkType='nombre'>{row.titulo}</RkText>
          </View>
        </RkCard>
      </TouchableOpacity>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ListView 
          style={styles.list}
          dataSource={this.data}
          renderRow={this.renderRow}
      />
    )
  }
}

let videos = [
  {
    id: 1,
    titulo: 'Condón Masculino',
    imagen: require('./assets/image/condonmasculino.jpg'),
  },
  {
    id: 2,
    titulo: 'Píldora Anticonceptiva',
    imagen: require('./assets/image/pildoraanticonceptiva.jpg'),
  },
  {
    id: 3,
    titulo: 'Condón Femenino',
    imagen: require('./assets/image/condonfemenino.png'),
  },
];

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  overlay: {
    justifyContent: 'center',
  },
  footer: {
    width: 240
  },
}));

RkTheme.setType('RkText','nombre',{
  fontSize: 24,
  fontFamily: 'Roboto-Medium',
  color: 'white',
});

