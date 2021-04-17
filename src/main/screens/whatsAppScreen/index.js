import React, {useState} from 'react';
import {View, Text} from 'react-native';
import HeaderContainer from './header/index';
import globalStyles from '../../styles/globalStyle';
import {Badge, Container, Icon, Tab, TabHeading, Tabs} from 'native-base';
const Index = () => {
  let TabContent = [
    {title: 'Camera', Content: 'Camera', cameraTab: true},
    {title: 'Chats', Content: 'Chats', cameraTab: false, badgeNumber: 4},
    {title: 'Status', Content: 'Status', cameraTab: false},
    {title: 'Calls', Content: 'Calls', cameraTab: false},
  ];
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <Container>
      <HeaderContainer />

      <Tabs
        initialPage={1}
        tabContainerStyle={{elevation: 0}}
        onChangeTab={({i}) => {
          console.log(i);
          setCurrentTab(i);
        }}
        tabBarUnderlineStyle={globalStyles.tabBarUnderLineStyle}
        tabBarBackgroundColor="#075e54">
        {TabContent.map((item, index) => {
          return (
            <Tab
              key={index}
              heading={
                <TabHeading style={globalStyles.headerBackgroundColor}>
                  {item.cameraTab ? (
                    <Icon
                      color="#8ac7c2"
                      type="MaterialIcons"
                      name="photo-camera"
                    />
                  ) : (
                    <>
                      <Text
                        style={
                          currentTab === index
                            ? globalStyles.activeTextStyle
                            : globalStyles.tabTextStyle
                        }>
                        {item.title}
                      </Text>
                      {item.badgeNumber > 0 && (
                        <Badge
                          style={
                            currentTab === index
                              ? globalStyles.activeBadge
                              : globalStyles.badge
                          }>
                          <Text style={globalStyles.badgeText}>
                            {item.badgeNumber}
                          </Text>
                        </Badge>
                      )}
                    </>
                  )}
                </TabHeading>
              }>
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  flex: 1,
                }}>
                {item.Content}
              </Text>
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default Index;
