import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button
} from 'native-base';
import {StyleSheet} from 'react-native';
import axios from 'axios';
import {API_URL} from '../constants';

export default class WaktuCreate extends Component {

  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleSubmit(){
    const text1 = this.state.text1;
    const text2 = this.state.text2;
    const goBack = this.props.navigation;

    if(text1 && text2) {
      axios.post(`${API_URL}/jamsholat`, {
        namasholat: text1,
        waktusholat: text2
      }).then((result)=>{
        goBack();
      })
    }


  }

  render(){
    return(
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nama Sholat</Label>
              <Input onChangeText={(text1)=> this.setState({text1})}/>
            </Item>
            <Item floatingLabel>
              <Label>Waktu Sholat</Label>
              <Input onChangeText={(text2)=> this.setState({text2})}/>
            </Item>
          </Form>
        </Content>
        <Button full primary onPress={()=>this.handleSubmit()} style={styles.btnFooter}>
          <Text>Submit</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  btnFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
})
