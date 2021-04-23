import React from 'react'
import { View} from 'react-native'
import {
    Badge,
    Body,

    Left,
    ListItem,
    Right,
    Thumbnail,
    Text,
  } from 'native-base';
  import globalStyles from '../../../styles/globalStyle';

const List = ({time,name,lastMessage,newMessageNumber,avatarUrl}) => {
    return (
        <ListItem avatar>
        <Left>
          <Thumbnail
            source={{
              uri:avatarUrl
            }}
          />
        </Left>
        <Body>
          <Text style={{fontWeight: '700',fontSize:17}}>{name}</Text>
          <Text note>{lastMessage}</Text>
          <View style={{height: 1, marginTop: 5}} />
        </Body>
        <Right>
          <Text note style={{color: '#25D366'}}>
            {time}
          </Text>
          <Badge style={globalStyles.badgeChats}>
            <Text style={globalStyles.badgeTextChats}>{newMessageNumber}</Text>
          </Badge>
        </Right>
      </ListItem>
     
    )
}

export default List
