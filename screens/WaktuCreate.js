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

export default class WaktuCreate extends Component {

  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleSubmit(){
    alert(this.state.text1);
    alert(this.state.text2);
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
