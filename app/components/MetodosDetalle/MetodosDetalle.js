import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ListView,
  FlatList
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';
import { StackNavigator } from 'react-navigation';

export default class Contacto extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: `Métodos - ${navigation.state.params.data.title}`,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#2196F3' },// blue
    });
    
    constructor(props) {
      super(props);
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.data = ds.cloneWithRows(this.props.navigation.state.params.data.contents);
      this.renderRow = this._renderRow.bind(this);
    }

    _renderRow(row) {
      return (
        <RkCard rkType='article'>
          <View rkCardHeader>
            <RkText style={styles.title} rkType='header4'>
            {row.title}
            </RkText>
          </View>
          <FlatList rkCardContent
            data={row.list}
            renderItem={({item}) => 
              <RkText style={styles.list} rkType='primary3 bigLine'>
                {item.key}
              </RkText>
            }
          />
        </RkCard>
      )
    }

    render() {
      const { state } = this.props.navigation;
      return (
        <ScrollView style={styles.root}>

          <RkCard rkType='article'>
            <Image rkCardImg source={state.params.data.image}/>
            <View rkCardContent>
              
              <FlatList
                data={state.params.data.desc}
                renderItem={({item}) => 
                  <RkText style={styles.list} rkType='primary3 bigLine'>
                    {item.key}
                  </RkText>
                }
              />


            </View>
          </RkCard>

          <ListView
            enableEmptySections={true}
            dataSource={this.data}
            renderRow={this.renderRow}
          />

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
  list: {
    marginBottom: 10
  },
}));