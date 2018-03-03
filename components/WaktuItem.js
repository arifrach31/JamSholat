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

export default class WaktuItem extends Component {

  render(){
    const {waktu: {id, namasholat, waktusholat}} = this.props;
    return (
      <ListItem key={id}>
        <Left>
          <CheckBox checked={false}/>
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
