import React from 'react';
import {View} from 'react-native';
import {
  Badge,
  Body,
  Left,
  ListItem,
  Right,
  Thumbnail,
  Text,
  Icon,
} from 'native-base';
import globalStyles from '../../../styles/globalStyle';

const List = ({spaecialNote, name, avatarUrl,mine}) => {
  return (
      <ListItem avatar>
        <Left>
          <Thumbnail
            source={{
              uri: avatarUrl,
            }}
          />
          {mine&&
            <View style={globalStyles.addStatusIcon}>
            <Text style={globalStyles.addStatusIconText}>+</Text>
          </View>
          }
          
        </Left>
        <Body>
          <Text style={{fontWeight: '700', fontSize: 17}}>{name}</Text>
          <Text note>{spaecialNote}</Text>
          <View style={{height: 1, marginTop: 5}} />
        </Body>
      </ListItem>
     
  );
};

export default List;
