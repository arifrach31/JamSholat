import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Body,
  Right,
  CheckBox,
  Text
} from 'native-base';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class WaktuItem extends Component {

  state = {
    isDone: false
  }

  componentDidMount(){
    const{sholat: {isDone}} = this.props;

    this.setState({isDone: Boolean(isDone)});
  }

  handleDone(){
    const{sholat: {id}} = this.props;
    this.setState({
      isDone: !this.state.isDone
    });

    axios.patch(`http://192.168.100.9:8000/api/jamsholat/${id}`, {
      isDone: this.state.isDone? 0: 1
    });
  }

  render(){
    const {waktu: {id, namasholat, waktusholat}} = this.props;
    return (
      <ListItem key={id}>
        <Left>
          <CheckBox checked={this.state.isDone} onPress={()=> this.handleDone()}/>
        </Left>
        <Body>
          <Text>{namasholat}</Text>
        </Body>
        <Right>
          <Text>{waktusholat}</Text>
        </Right>
      </ListItem>
    );
  }
}

WaktuItem.propTypes = {
  waktu: PropTypes.object.isRequired
}
