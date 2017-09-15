import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import { StackNavigator } from 'react-navigation';

export default class Metodos extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Métodos Anticonceptivos`,
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#2196F3' },// blue
  });

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.data = ds.cloneWithRows(routes);
    this.renderRow = this._renderRow.bind(this);
  }

  _renderRow(row) {
    return (
      <TouchableHighlight
        style={styles.item}
        activeOpacity={1}
        onPress={() => {
          this.props.navigation.navigate('MetodosDetalle', {data: row.data})
        }}>
        <View style={styles.container}>
          <RkText>{row.data.title}</RkText>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.root}>

        <RkCard rkType='article'>
          <Image rkCardImg source={require('./assets/metodos.jpg')}/>
          <View rkCardContent>
            <RkText rkType='primary3 bigLine'>
            Métodos anticonceptivos disponibles para ti, totalmente gratis. Selecciona uno para más información:
            </RkText>
          </View>
        </RkCard>

        <ListView 
            style={styles.list}
            dataSource={this.data}
            renderRow={this.renderRow}
        />
      </ScrollView>
    );
  }

}

const routes = [
  {
    id: 1,
    data: {
      title: 'Condón Masculino',
      image: require('./assets/condon.jpg'),
      desc: [
        {key: 'El condón es una forma simple y barata de prevenir embarazos no planeados y ETS. Actúa capturando los espermatozoides a medida que éstos se liberan e impidie que entren a la vagina.',},
      ],
      contents: [
        {
          title: '¿Cómo se utiliza?',
          list: [
            {key: 'Usar el condón es fácil, solo desenrolla el condón sobre el pene erecto justo antes del sexo y ya está.'},
            {key: 'Una vez que hayas terminado y el condón haya cumplido con su función, quítalo antes de que el pene se ablande.'},
            {key: 'Se debe sujetar contra la base del pene tan pronto como haya ocurrido la eyaculación para asegurarse de que no se deslice y para prevenir que el semen se escape al retirar el pene.'},
            {key: 'Úsalo una vez y después tíralo.'},
          ],
        },
      ]
    }
  },
  {
    id: 2,
    data: {
      title: 'Método Hormonal',
      image: require('./assets/pildora.jpg'),
      desc: [
        {key: 'La píldora es una pequeña tableta que contiene hormonas y que las mujeres deben tomar todos los días a la misma.'},
      ],
      contents: [
        {
          title: '¿Cómo se utiliza?',
          list: [
            {key: 'Debes tomar la píldora todos los días a la misma hora, tanto si tienes sexo como si no.'},
            {key: 'Si olvidas tomar la píldora, ésta no será tan efectiva como debería y podrías embarazarte.'},
          ],
        },
      ]
    }
  },
  {
    id: 3,
    data: {
      title: 'Inyección',
      image: require('./assets/inyectable.jpg'),
      desc: [
        {key: 'La inyección anticonceptiva es una inyección de hormonas que se aplica en el músculo o debajo de la piel.'},
      ],
      contents: [
        {
          title: '¿Cómo se utiliza?',
          list: [
            {key: 'Dependiendo del tipo de inyección que elijas, solo necesitarás regresar cada mes o cada dos meses para recibir otra inyección y entre una y otra estarás altamente protegida.'},
          ],
        },
      ]
    }
  },
  {
    id: 4,
    data: {
      title: 'Implante',
      image: require('./assets/subdermico.jpg'),
      desc: [
        {key: 'Un pequeño bastón de silicona liberadores de hormona que un profesional médico coloca bajo la piel.'},
      ],
      contents: [
        {
          title: '¿Cómo se utiliza?',
          list: [
            {key: 'Después de haber recibido asesoría de tu profesional médico, que el implante anticonceptivo es el método para ti, tu profesional médico se asegurará de que no estás embarazada y de que se te puede colocar el implante.'},
            {key: 'Después de poner anestesia local, un profesional médico capacitado adormecerá una pequeña área de la parte superior interna de tu brazo y colocará el implante.'},
          ],
        },
      ]
    }
  },
  {
    id: 5,
    data: {
      title: 'Método del Parche',
      image: require('./assets/parche.jpg'),
      desc: [
        {key: 'Parche que se adhiere a la piel y libera hormonas que son altamente efectivas para prevenir el embarazo.'},
      ],
      contents: [
        {
          title: '¿Cómo se utiliza?',
          list: [
            {key: 'Desprende la parte posterior y aplica el parche directamente sobre tu piel en la parte baja del abdomen, las nalgas, la parte superior del brazo o la espalda.'},
            {key: 'Deja el parche en su sitio durante una semana y luego reemplázalo con uno nuevo.'},
            {key: 'Ponte un nuevo parche y quita el anterior una vez por semana durante 3 semanas, 21 días en total.'},
            {key: 'Cada 4ª semana te quedas sin parche. Tu período menstrual empezará durante esta semana.'},
          ],
        },
      ]
    }
  },
  {
    id: 6,
    data: {
      title: 'Pastilla de Emergencia',
      image: require('./assets/postday.jpg'),
      desc: [
        {key: 'Los anticonceptivos de emergencia se usan en caso de sexo accidental sin protección.'},
      ],
      contents: [
        {
          title: '¿Cómo se utiliza?',
          list: [
            {key: 'Se toma solo en caso de emergencia, cuando el condón se rompió, se tuvo relaciones sin protección, etc.'},
            {key: 'Se tiene un máximo de 72 horas una vez pasada la relación sexual y no se debe tomar más de dos veces por año.'},
          ],
        },
      ]
    }
  }, 
  {
    id: 7,
    data: {
      title: 'Método Intrauterino',
      image: require('./assets/diu.jpg'),
      desc: [
        {key: 'Un DIU es un pequeño sistema que libera pequeñas cantidades de hormonas y que se coloca dentro de la matriz.'},
      ],
      contents: [
        {
          title: '¿Cómo se utiliza?',
          list: [
            {key: 'Para usar el DIU, en realidad no hay nada más que hacer que consultar a tu profesional médico para asegurarte de si es el método adecuado para ti.'},
            {key: 'Una vez que el DIU ha sido colocado por un profesional médico capacitado, te encontrarás altamente protegida de un embarazo hasta por 3 o 5 años.'},
          ],
        },
      ]
    }
  }, 
  /*{
    id: ,
    data: {
      title: '',
      image: require('./assets/.jpg'),
      desc: [
        {key: ''},
      ],
      contents: [
        {
          title: '¿Cómo se utiliza?',
          list: [
            {key: ''},
          ],
        },
      ]
    }
  }, */
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
      alignItems: 'center'
    },
    icon: {
      width: 34,
      textAlign: 'center',
      marginRight: 16
    }
  }));