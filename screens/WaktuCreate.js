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
import axios from 'axios';

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

    axios.post(`http://192.168.100.9:8000/api/jamsholat`, {
      namasholat: text1,
      waktusholat: text2
    }).then((result)=>{
      goBack();
    })
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
            <Button block onPress={()=>this.handleSubmit()}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
