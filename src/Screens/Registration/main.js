import React from 'react';
import {View, Image} from 'react-native';
import {
  Container,
  Content,
  Icon,
  Grid,
  Row,
  Header,
  Left,
  Body,
  Button,
  Title,
  Col,
  Text,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './main.style';

const Registration = props => {
  return (
    <>
      <Container>
        <Content>
          <View style={Styles.headerRegistration}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#0099ef', '#01a6ef']}
              style={Styles.linearGradient}
            />

            <View>
              <Image
                source={require('../../../public/register/register2.png')}
                style={{
                  height: 260,
                  width: '100%',
                }}
              />
            </View>
          </View>
          <View style={{backgroundColor: '#fff'}}>
            <View style={Styles.wrappingButton}>
              <Button
                full
                warning
                style={Styles.buttonLogin}
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={{color: '#000'}}>Masuk</Text>
              </Button>
              <Button
                bordered
                full
                style={Styles.buttonRegister}
                onPress={() => props.navigation.navigate('EmailRegister')}>
                <Text style={{color: '#bec4c8'}}>Daftar</Text>
              </Button>
            </View>
          </View>
          <View style={{backgroundColor: '#fff'}}>
            <View style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
              <Grid>
                <Col size={3} />
                <Col>
                  <Col>
                    <Text style={{marginTop: 4}}>atau</Text>
                  </Col>
                </Col>
                <Col size={3} />
              </Grid>
            </View>
          </View>

          <View style={Styles.wrapperOpenWith}>
            <View style={Styles.logoSocmed}>
              <Image
                source={require('../../../public/register/fb.png')}
                style={{
                  width: 17,
                  height: 17,
                  alignSelf: 'center',
                  marginRight: 10,
                }}
              />
              <Text style={Styles.fb}>Lanjutkan dengan Facebook</Text>
            </View>
            <View style={Styles.logoSocmed}>
              <Image
                source={require('../../../public/register/google.png')}
                style={{
                  width: 17,
                  height: 17,
                  alignSelf: 'center',
                  marginRight: 10,
                }}
              />
              <Text style={Styles.Google}>Lanjutkan dengan Google</Text>
            </View>
          </View>
        </Content>
      </Container>
    </>
  );
};

export default Registration;
