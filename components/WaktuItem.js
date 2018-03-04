import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Body,
  Right,
  CheckBox,
  Text,
  SwipeRow,
  Button,
  Icon
} from 'native-base';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class WaktuItem extends Component {

  state = {
    isDone: false
  }

  componentDidMount(){
    const{waktu: {isDone}} = this.props;

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
      <SwipeRow
        key={id}
        rightOpenValue={-75}
        body={
          <View>
            <CheckBox checked={this.state.isDone} onPress={()=> this.handleDone()}/>
            <Text>{namasholat}</Text>
            <Text>{waktusholat}</Text>
          </View>
        }
        right={
          <Button danger onPress={() => alert('Trash')}>
            <Icon active name="trash" />
          </Button>
        }
      />
    );
  }
}

WaktuItem.propTypes = {
  waktu: PropTypes.object.isRequired
}
