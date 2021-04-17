import React, {useState} from 'react';
import {View, Text} from 'react-native';
import HeaderContainer from './header/index';
import globalStyles from '../../styles/globalStyle';
import {Container, Icon, Tab, TabHeading, Tabs} from 'native-base';
const Index = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <Container>
      <HeaderContainer />
      <Tabs
        initialPage={1}
        tabContainerStyle={{elevation: 0}}
        onChangeTab={({i}) =>{console.log(i); setCurrentTab(i)}}
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
          heading={
            <TabHeading
              style={
                currentTab === 1
                  ? globalStyles.activeTabStyle
                  : globalStyles.tabStyle
              }>
              <Text style={
                currentTab === 1
                  ? globalStyles.activeTextStyle
                  : globalStyles.tabTextStyle
              } >Chats</Text>
            </TabHeading>
          }>
          <Text>Tab one</Text>
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
