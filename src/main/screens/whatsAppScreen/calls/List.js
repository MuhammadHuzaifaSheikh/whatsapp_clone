import React from 'react';
import {
  Badge,
  Body,
  View,
  Left,
  ListItem,
  Right,
  Thumbnail,
  Text,
  Icon,
} from 'native-base';
import globalStyles from '../../../styles/globalStyle';

const List = ({time, name, callType, avatarUrl, recevied, missed}) => {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail
          source={{
            uri: avatarUrl,
          }}
        />
      </Left>
      <Body>
        <Text style={{fontWeight: '700', fontSize: 17}}>{name} </Text>
        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
          <Icon
            style={{
              color: missed?'red':'#25D366',
              marginRight: 10,
              fontSize: 18,
            }}
            type="MaterialIcons"
            name={recevied?'call-received':'call-made'}
          />
          <Text note>{time}</Text>
        </View>

      </Body>
      <Right>
      <View style={{height:8}}/>
       <Icon style={{color:'#25D366',fontSize:24}} type="MaterialIcons" name="call"/>
      </Right>
    </ListItem>
  );
};

export default List;
