import {StackNavigator} from 'react-navigation';
import Waktu from './screens/Waktu';
import WaktuCreate from './screens/WaktuCreate';


const App = StackNavigator({
  Home: {
    screen: Waktu,
    navigationOptions: {
      headerTitle: 'Sudahkah Anda Sholat?'
    }
  },
  WaktuCreate: {
    screen: WaktuCreate,
    navigationOptions: {
      headerTitle: 'Tambah Waktu Baru'
    }
  }
});

export default App;
