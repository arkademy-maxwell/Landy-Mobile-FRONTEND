import React from 'react';
import {
  Container,
  Content,
  View,
  Text,
  Button,
  Form,
  Item,
  Input,
  Label,
  Grid,
  Col,
  Row,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Header from '../../Components/Header/parent/Header';

const EmailRegister = props => {
  return (
    <Container>
      <Header
        menu="Daftar"
        icon="arrow-back"
        navigate={props.navigation.navigate}
      />
      <Content>
        <View style={{marginLeft: 20, marginRight: 20}}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Button
              full
              warning
              style={{
                elevation: 0,
                borderRadius: 20,
                backgroundColor: '#fff6d6',
                marginTop: 30,
                marginBottom: 30,
              }}>
              <Text
                style={{color: '#989794'}}
                onPress={() => props.navigation.navigate('EmailAktivasi')}>
                Daftar
              </Text>
            </Button>
          </Form>

          <Grid>
            <Col size={5}>
              <Text
                style={{
                  color: '#bdc4c4',
                  fontSize: 12,
                  alignSelf: 'flex-end',
                }}>
                Sudah Punya akun Landy?
              </Text>
            </Col>
            <Col size={3}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={{color: '#5ecbf5', fontSize: 12}}>Login</Text>
              </TouchableOpacity>
            </Col>
          </Grid>
        </View>
      </Content>
    </Container>
  );
};

export default EmailRegister;
