import React from 'react';
import {View, Text} from 'react-native';
import HeaderContainer from './header/index';
import globalStyles from '../../styles/globalStyle';
import {Container, Icon, Tab, TabHeading, Tabs} from 'native-base';
const Index = () => {
  return (
    <Container>
      <HeaderContainer />
      <Tabs
        initialPage={1}
        tabContainerStyle={{elevation: 0}}
        tabBarUnderlineStyle={globalStyles.tabBarUnderLineStyle}
        tabBarBackgroundColor="#075e54">
        <Tab
          heading={
            <TabHeading style={globalStyles.headerBackgroundColor}>
              <Icon type="MaterialIcons" name="photo-camera" />
            </TabHeading>
          }>
          <Text
            style={{textAlign: 'center', textAlignVertical: 'center', flex: 1}}>
            Cemera
          </Text>
        </Tab>

        <Tab
          heading="CHATS"
          tabStyle={{
            backgroundColor: '#075e54',
            color: '#fff',
            fontSize: 14,
            fontWeight: '800',

          }}
         
          activeTabStyle={{
            backgroundColor: '#075e54',
            fontWeight: '900',
          }}>
          
          <Text
            style={{textAlign: 'center', textAlignVertical: 'center', flex: 1}}>
            Chat
          </Text>
        </Tab>

        <Tab
          heading="STATUS"
          tabStyle={{
            backgroundColor: '#075e54',
            color: '#fff',
            fontSize: 14,
            fontWeight: '800',
          }}
          activeTabStyle={{
            backgroundColor: '#075e54',
            fontWeight: 'bold',
          }}>
          <Text
            style={{textAlign: 'center', textAlignVertical: 'center', flex: 1}}>
            Status
          </Text>
        </Tab>
        <Tab
          heading="CALLS"
          tabStyle={{
            backgroundColor: '#075e54',
            color: '#fff',
            fontSize: 14,
            fontWeight: '800',
          }}
          activeTabStyle={{
            backgroundColor: '#075e54',
            fontWeight: 'bold',
          }}>
          <Text
            style={{textAlign: 'center', textAlignVertical: 'center', flex: 1}}>
            Calls
          </Text>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Index;
