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
        {key: 'Un Condón es una delgada funda de látex o poliuretano que se coloca sobre el pene erecto del hombre antes de tener sexo.',},
      ],
      contents: [
        {
          title: 'BENEFICIOS',
          list: [
            {key: '- Protege contra ETS'},
            {key: '- Bajo costo'},
            {key: '- Fácil de usar'},
          ],
        },
        {
          title: 'CÓMO SE UTILIZA',
          list: [
            {key: '1. Verificar la fecha de caducidad'},
            {key: '2. Abrir con las yemas de los dedos por la parte dentada, sin utilizar uñas ni dientes, ni ningún otro objeto'},
            {key: '3. Sacar cuidadosamente con las manos limpias, verificar que esté del lado correcto, presionar la punta para evitar el paso del aire y evitar que se rompa'},
            {key: '4. Con la punta aún sujeta, colocarlo en el pene erecto hasta la base'},
            {key: '5. Después del acto, retirarlo con un trozo de papel o servilleta SIN TOCARLOS y tirarlo en un contenedor de basura'},
          ],
        },
      ]
    }
  },
  {
    id: 2,
    data: {
      title: 'Pastillas Anticonceptivas',
      image: require('./assets/pildora.jpg'),
      desc: [
        {key: 'Los anticonceptivos hormonales orales o pastillas anticonceptivas, son un método seguro y efectivo para evitar temporalmente el embarazo, contienen pequeñas cantidades de hormonas femeninas parecidas a las que produce el organismo de la mujer.'},
        {key: 'Los anticonceptivos hormonales orales, contienen 21 pastillas anticonceptivas, que se toman diariamente a la misma hora.'},
        {key: 'La primera pastilla se toma el primer día de la menstruación, al terminar de tomar las pastillas del paquete, se deja un periodo de 7 días sin tomar pastillas, durante los cuales se presenta la menstruación.'},
        {key: 'Recuerda iniciar la toma de pastillas de un paquete nuevo al siguiente día de los 7 días de descanso.'},
      ],
      contents: []
    }
  },
  {
    id: 3,
    data: {
      title: 'Hormonal Inyectable',
      image: require('./assets/inyectable.jpg'),
      desc: [
        {key: 'Hay dos presentaciones de hormonales inyectables que se usan como anticonceptivos: la de aplicación mensual y la trimestral.'},
        {key: 'La mensual contiene hormonales combinados (estrógeno y progesterona), mientras que la trimestral contiene sólo progestina.'},
        {key: 'Las inyecciones anticonceptivas que contienen hormonales combinados pueden ser usadas por toda mujer sana que desea evitar o espaciar sus embarazos, y que haya recibido consejería previamente.'},
      ],
      contents: []
    }
  },
  {
    id: 4,
    data: {
      title: 'Implante Hormonal Subdérmico',
      image: require('./assets/subdermico.jpg'),
      desc: [
        {key: 'Es una varilla flexible que contiene una hormona derivada de la progesterona, que evita la ovulación y hace más espeso el moco del cuello útero, impidiendo el paso de los espermatozoides al interior del útero.'},
        {key: ' Debe ser colocada por personal capacitado, su eectividad es de 99.5% y no proteje de enfermedades de transmisión sexual.'},
        {key: 'Tiene una duración de 3 años. Puede causar alteraciones en el ciclo menstrual después de retirarlo (al igual que todos los métodos hormonales).'},
      ],
      contents: []
    }
  },
  {
    id: 5,
    data: {
      title: 'Parche Anticonceptivo',
      image: require('./assets/parche.jpg'),
      desc: [
        {key: 'Es un parche de plástico delgado, cuadrado, el cual se pega a la piel y libera hormonas similares a las que produce la mujer, inhibiendola ovulación y haciendo más espeso el moco del cuello del útero.'},
        {key: 'Uso: Deja el parche en su sitio durante una semana y luego reemplázalo con uno nuevo. Ponte un nuevo parche y quita el anterior una vez por semana durante 3 semanas, (siempre debe ser colocado el mismo día de la semana, por ejemplo: si te lo colocaste un lunes, la próxima semana también tendrá que ser colocado el lunes) 21 días en total.'},
        {key: 'Cada cuarta semana te quedas sin parche. Se debe ir alternando el lugar donde se coloca. Tu periodo menstrual empezará durante esta semana sin parche. Después repite nuevamente el mismo proceso.'},
        {key: 'Si el parche se afloja o se desprende, revusa el Folleto de Información para el Paciente que se incluye en el empaque del parche. En caso de duda puedes acudir a los servicios amigables del centro de salud para pedir información.'},
      ],
      contents: []
    }
  },
  {
    id: 6,
    data: {
      title: 'Píldora del Día Después',
      image: require('./assets/postday.jpg'),
      desc: [
        {key: 'La pastilla Postday es un método anticonceptivo de emergencia. No protege contra las enfermedades de transmisión sexual pero impide la implantación del óvulo fecundado, evitando así el embarazo.'},
        {key: 'Para que sea eficaz, debe tomarse antes de que hayan transcurrido 72 horas desde la relación sexual. Y es más eficaz si se toma antes de las 24 horas.'},
        {key: 'Libera una gran cantidad de hormonas, por lo que es recomendable que se consuma como máximo dos veces por año.'},
      ],
      contents: []
    }
  }, 
  /*
  {
    id: 7,
    title: '',
  },
  {
    id: 8,
    title: '',
  },
  {
    id: 9,
    title: '',
  },*/
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