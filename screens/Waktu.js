import React, {Component} from 'react';
import {
  Container,
  Content,
  List,
  Fab,
  Icon
} from 'native-base';
import {
  FlatList
} from 'react-native';
import WaktuItem from '../components/WaktuItem';
import axios from 'axios';
import {API_URL} from '../constants';
<<<<<<< HEAD
import TryRedux from '../components/TryRedux';
=======
>>>>>>> a4a7c2677999f4f1395c5006640cec7f1b67beca

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      count: 0,
      waktusholat: []
    }
  }

  componentDidMount(){
    const self = this;
    axios.get(`${API_URL}/jamsholat`).then((result)=>{
      console.log(result);
      self.setState({
        waktusholat: result.data
      });
    });
  }

  _keyExtractor = (item, index) => item.id;

  render(){
    return(
      <Container>
        <Content>
          <List>
            <FlatList
              data={this.state.waktusholat}
              keyExtractor={this._keyExtractor}
              renderItem={({item})=> <WaktuItem waktu={item}/>}
            />
            {/*this.state.waktusholat.map((waktu)=> <WaktuItem waktu={waktu} key={waktu.id}/>)*/}
          </List>
        </Content>
        <Fab
          style={{backgroundColor: '#00A1DD'}}
          position= 'bottomRight'
          onPress={()=> this.props.navigation.navigate('WaktuCreate')}
        >
        <Icon name='add'/>
        </Fab>
      </Container>
    );
  }

}
