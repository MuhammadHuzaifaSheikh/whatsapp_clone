import React from 'react';
import {
  Badge,
  Body,
  Container,
  Content,
  Left,
  ListItem,
  Right,
  Thumbnail,
  Text,
  Fab,
  Icon,
} from 'native-base';
import globalStyles from '../../../styles/globalStyle';
import {View} from 'react-native';
import List from './List';
const Chats = () => {
  return (
    <Container>
      <Content>
      {/* My status */}
        <List
          name="My Status"
          spaecialNote="Tap to add status update"
          avatarUrl="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.6435-9/137043018_697102287635880_1377173207340703594_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IcuPzBa-oxIAX-N6hkP&_nc_ht=scontent.fkhi2-1.fna&oh=228a9e073ea29be7917aecc38394c5d3&oe=60A81F87"
        />
     {/* My status */}

     {/* Recant Updates */}

     {/* Recant Updates */}
        
      </Content>
      <Fab style={globalStyles.fabStyle} position="bottomRight">
        <Icon type="MaterialIcons" name="chat" />
      </Fab>
    </Container>
  );
};

export default Chats;
