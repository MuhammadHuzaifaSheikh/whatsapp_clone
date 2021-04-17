import React, {Component} from 'react';
import globalStyles from '../../../styles/globalStyle'
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
export default class HeaderContainer extends Component {
  render() {
    return (
      
        <Header noLeft style={globalStyles.headerBackgroundColor}>
          <Body>
            <Title style={globalStyles.appTitle}>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="MaterialIcons" name="search" />
            </Button>
            <Button transparent>
              <Icon  type="MaterialIcons"  name="more-vert" />
            </Button>
          </Right>
        </Header>
    );
  }
}
