import React, {useState, useEffect} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Text,
  Body,
  Title,
  View,
  Icon,
  Header,
  Left,
  Right,
  Grid,
  Row,
  Col,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';
import PasswordInputText from 'react-native-hide-show-password-input';
import Styles from './Login.style';

// Redux
import {useDispatch} from 'react-redux';
import {getAuth} from '../../../public/Redux/Actions/Auth';
import {AsyncStorage, ToastAndroid} from 'react-native';

const Login = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = {email, password};

  const submitLogin = async () => {
    const result = await getAuth(data);
    if (result.payload.success === 200) {
      dispatch(result);
      AsyncStorage.setItem('user-credential', JSON.stringify(result.payload));
      ToastAndroid.show('Login Success!', ToastAndroid.SHORT);
      return props.navigation.navigate('Menu');
    } else {
      return ToastAndroid.show(
        'Login Failed! Username/Password is invalid!',
        ToastAndroid.LONG,
      );
    }
  };

  return (
    <Container>
      <Header style={{top: 0, backgroundColor: '#0091ef', elevation: 0}}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Masuk</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <View style={Styles.viewLogo}>
          <ImageBackground
            source={require('../../../public/assets/Logo/Logo.jpeg')}
            style={Styles.Logo}
          />
        </View>
        <View>
          <Form>
            <View style={{marginLeft: 20, marginRight: 20}}>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  onChangeText={text => setEmail(text)}
                  value={email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </Item>
              <PasswordInputText
                onChangeText={text => setPassword(text)}
                value={password}
              />
              {/* </Item> */}
            </View>
            <View style={Styles.wrappingButton}>
              <Button
                full
                style={Styles.buttonLogin}
                onPress={() => submitLogin()}>
                <Text style={{color: '#989794'}}>Masuk</Text>
              </Button>
              <Button
                full
                transparent
                style={{marginTop: 20, marginBottom: 30}}
                onPress={() => props.navigation.navigate('ForgetPassword')}>
                <Text style={{color: '#5ecbf5', fontSize: 12}}>
                  LUPA PASSWORD?
                </Text>
              </Button>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Grid>
                  <Col size={5}>
                    <Text
                      style={{
                        color: '#bdc4c4',
                        fontSize: 12,
                        alignSelf: 'flex-end',
                      }}>
                      Belum Punya akun Landy?
                    </Text>
                  </Col>
                  <Col size={3}>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('EmailRegister')
                      }>
                      <Text style={{color: '#5ecbf5', fontSize: 12}}>
                        {' '}
                        DAFTAR
                      </Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </View>
          </Form>
        </View>
      </Content>
    </Container>
  );
};

export default Login;
