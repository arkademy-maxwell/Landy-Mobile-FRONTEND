import React from 'react';
import {
  Header,
  Input,
  Title,
  Label,
  Container,
  Content,
  Form,
  Item,
  Icon,
  Picker,
  //   Header,
  Button,
  Text,
  Left,
  Body,
  Right,
} from 'native-base';

const DataPenumpang = props => {
  return (
    <Container>
      <Header style={{backgroundColor: '#0185EF', elevation: 0}}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Locations</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon type="Ionicons" name="ios-search" />
          </Button>
        </Right>
      </Header>
      <Content style={{margin: 10, marginRight: 20}}>
        <Form>
          <Item floatingLabel>
            <Label>Nama depan</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Nama belakang</Label>
            <Input />
          </Item>
          <Item picker style={{marginLeft: 10, borderColor: '#fff'}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select your SIM"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              // selectedValue={this.state.selected2}
              // onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Title" value="" />
              <Picker.Item label="Tuan" value="tuan" />
              <Picker.Item label="Nyonya" value="nyonya" />
              <Picker.Item label="Nona" value="nyonya" />
            </Picker>
          </Item>
        </Form>
      </Content>
      <Button
        full
        warning
        style={{position: 'relative', bottom: 0, backgroundColor: '#ffeead'}}>
        <Text style={{color: '#000'}}>TAMBAHKAN</Text>
      </Button>
    </Container>
  );
};

export default DataPenumpang;
