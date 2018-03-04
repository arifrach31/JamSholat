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
import{API_URL} from '../constants';

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

    axios.patch(`${API_URL}/jamsholat/${id}`, {
      isDone: this.state.isDone? 0: 1
    });
  }

  handleDelete(){
    axios.delete(`${API_URL}/jamsholat/${id}`);
  }

  render(){
    const {waktu: {id, namasholat, waktusholat}} = this.props;
    return (
      <SwipeRow
        key={id}
        rightOpenValue={-75}
        body={
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 10}}>
              <CheckBox checked={this.state.isDone} onPress={()=> this.handleDone()}/>
            </View>
            <View style={{padding: 10}}>
              <Text>{namasholat}</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>{waktusholat}</Text>
            </View>



          </View>
        }
        right={
          <Button danger onPress={() => this.handleDelete(id)}>
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
