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

  _renderRow(row) {
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('Reproductor', {titulo: row.titulo, video: row.video})}>
        <RkCard rkType='backImg'>
          <Image rkCardImg source={row.imagen}/>
        </RkCard>
      </TouchableOpacity>
      /* //Va dentro de RkCard, rkType: 'shadowed','heroImage','backImg'
                <View rkCardImgOverlay rkCardContent style={styles.overlay}>
            <RkText rkType='nombre'>{row.titulo}</RkText>
          </View>
      */
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
    imagen: require('./assets/condon.jpg'),
    video: require('./assets/video_condon.mp4'),
  },
  {
    id: 2,
    titulo: 'Píldora Anticonceptiva',
    imagen: require('./assets/pildora.jpg'),
    video: require('./assets/video_pildora.mp4'),
  },
  {
    id: 3,
    titulo: 'Condón Femenino',
    imagen: require('./assets/condon_femenino.jpg'),
    video: require('./assets/video_condon_femenino.mp4'),
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

