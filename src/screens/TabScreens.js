import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#3A405A'}} hasTabs>
            <Left/>
          <Body>
            <Title style={{color:'white'}}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor:'#AEC5EB'}} activeTabStyle={{backgroundColor:'#E9AFA3'}} textStyle={{color:'685044'}} activeTextStyle={{color:'685044'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#AEC5EB'}} activeTabStyle={{backgroundColor:'#E9AFA3'}} textStyle={{color:'685044'}} activeTextStyle={{color:'685044'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#AEC5EB'}} activeTabStyle={{backgroundColor:'#E9AFA3'}} textStyle={{color:'685044'}} activeTextStyle={{color:'685044'}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}