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
  Button,
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
          mine
          name="My Status"
          spaecialNote="Tap to add status update"
          avatarUrl="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.6435-9/137043018_697102287635880_1377173207340703594_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IcuPzBa-oxIAX-N6hkP&_nc_ht=scontent.fkhi2-1.fna&oh=228a9e073ea29be7917aecc38394c5d3&oe=60A81F87"
        />

        {/* Recant Updates */}
        <ListItem itemDivider style={globalStyles.listItemDiveder}>
          <Text style={{fontSize: 14, color: '#797977', fontWeight: 'bold'}}>
            Recant updates
          </Text>
        </ListItem>
        <List
          name="Hamza sheikh"
          spaecialNote="Today, 9:05 PM"
          avatarUrl="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.6435-9/90429659_516567559026914_2095979778870870016_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5wNi3QUsnfoAX82hqTi&_nc_ht=scontent.fkhi10-1.fna&oh=67fe602d5838a74881bad82ffcec09c8&oe=60AB9AE8"
        />

        <List
          name="Hamza sheikh"
          spaecialNote="Today, 9:05 PM"
          avatarUrl="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.6435-9/90429659_516567559026914_2095979778870870016_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5wNi3QUsnfoAX82hqTi&_nc_ht=scontent.fkhi10-1.fna&oh=67fe602d5838a74881bad82ffcec09c8&oe=60AB9AE8"
        />
        <List
          name="Hamza sheikh"
          spaecialNote="Today, 9:05 PM"
          avatarUrl="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.6435-9/90429659_516567559026914_2095979778870870016_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5wNi3QUsnfoAX82hqTi&_nc_ht=scontent.fkhi10-1.fna&oh=67fe602d5838a74881bad82ffcec09c8&oe=60AB9AE8"
        />

        {/* Viewed updates */}
        <ListItem itemDivider style={globalStyles.listItemDiveder}>
          <Text style={{fontSize: 14, color: '#797977', fontWeight: 'bold'}}>
          Viewed updates
          </Text>
        </ListItem>
        <List
          name="Hamza sheikh"
          spaecialNote="Today, 9:05 PM"
          avatarUrl="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.6435-9/90429659_516567559026914_2095979778870870016_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5wNi3QUsnfoAX82hqTi&_nc_ht=scontent.fkhi10-1.fna&oh=67fe602d5838a74881bad82ffcec09c8&oe=60AB9AE8"
        />
         <List
          name="Hamza sheikh"
          spaecialNote="Today, 9:05 PM"
          avatarUrl="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.6435-9/90429659_516567559026914_2095979778870870016_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5wNi3QUsnfoAX82hqTi&_nc_ht=scontent.fkhi10-1.fna&oh=67fe602d5838a74881bad82ffcec09c8&oe=60AB9AE8"
        />
      </Content>
      <Fab active direction="up" style={globalStyles.fabStyle} position="bottomRight">
        <Icon type="MaterialIcons" name="photo-camera" />
        <Button style={{backgroundColor:'#eef5f8'}}>
          <Icon style={{color:'#477571'}}  name="edit" type="MaterialIcons" />
        </Button>
      </Fab>
    </Container>
  );
};

export default Chats;
