import React from 'react';
import {
  Container,
  Content,
  Fab,
  Icon,
} from 'native-base';
import globalStyles from '../../../styles/globalStyle';
import {View} from 'react-native';
import List from './List';
const Calls = () => {
  return (
    <Container>
      <Content>
        <List
          name="Huzaifa Sheikh"
          callType="audio"
          recevied
          
          time="4 minutes ago"
          avatarUrl="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.6435-9/137043018_697102287635880_1377173207340703594_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IcuPzBa-oxIAX-N6hkP&_nc_ht=scontent.fkhi2-1.fna&oh=228a9e073ea29be7917aecc38394c5d3&oe=60A81F87"
        />
          <List
          name="Huzaifa Sheikh"
          callType="audio"
          missed
          time="4 minutes ago"
          avatarUrl="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.6435-9/137043018_697102287635880_1377173207340703594_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IcuPzBa-oxIAX-N6hkP&_nc_ht=scontent.fkhi2-1.fna&oh=228a9e073ea29be7917aecc38394c5d3&oe=60A81F87"
        />
         <List
          name="Huzaifa Sheikh"
          callType="audio"
          time="4 minutes ago"
          avatarUrl="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.6435-9/137043018_697102287635880_1377173207340703594_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IcuPzBa-oxIAX-N6hkP&_nc_ht=scontent.fkhi2-1.fna&oh=228a9e073ea29be7917aecc38394c5d3&oe=60A81F87"
        />
         <List
          name="Huzaifa Sheikh"
          callType="audio"
          recevied
          missed
          time="4 minutes ago"
          avatarUrl="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.6435-9/137043018_697102287635880_1377173207340703594_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IcuPzBa-oxIAX-N6hkP&_nc_ht=scontent.fkhi2-1.fna&oh=228a9e073ea29be7917aecc38394c5d3&oe=60A81F87"
        />
      </Content>
      <Fab style={globalStyles.fabStyle} position="bottomRight">
        <Icon type="MaterialIcons" name="chat" />
      </Fab>
    </Container>
  );
};

export default Calls;
