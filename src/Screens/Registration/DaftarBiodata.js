import React, {useState, useEffect} from 'react';
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
  Picker,
  Icon,
} from 'native-base';
import {TouchableOpacity, ToastAndroid} from 'react-native';
import Header from '../../Components/Header/parent/Header';

import Axios from 'axios';
import {API_BASEURL} from 'react-native-dotenv';

const DaftarBiodata = props => {
  const [title_id, setTitle_ID] = useState('');
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_Number] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  useEffect(() => {
    setEmail(props.navigation.getParam('email'));
  }, [props.navigation]);

  const handlePicker = value => {
    setTitle_ID(value);
  };

  const createForm = data => {
    const form = new FormData();

    Object.keys(data).forEach(key => {
      form.append(key, data[key]);
    });

    return form;
  };

  const sendData = () => {
    Axios.post(
      `${API_BASEURL}/api/v1/users/register`,
      createForm({
        title_id,
        first_name,
        last_name,
        email,
        phone_number,
        password,
      }),
      {
        headers: {
          'Content-Type': 'multipart/formdata',
        },
      },
    )
      .then(res => {
        props.navigation.navigate('EmailAktivasi');
      })
      .catch(error => {
        ToastAndroid.show('Register Failed!', ToastAndroid.LONG);
      });
  };

  return (
    <Container>
      <Header menu="Daftar" icon="arrow-back" />
      <Content>
        <View style={{marginLeft: 20, marginRight: 35, marginBottom: 20}}>
          <Form>
            <Item picker style={{marginLeft: 10}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={title_id}
                onValueChange={value => handlePicker(value)}>
                <Picker.Item label="Tuan" value="1" />
                <Picker.Item label="Nyonya" value="2" />
                <Picker.Item label="Nona" value="3" />
              </Picker>
            </Item>
            <Item floatingLabel>
              <Label>Nama Depan</Label>
              <Input
                onChangeText={text => setFirst_Name(text)}
                value={first_name}
              />
            </Item>
            <Item floatingLabel>
              <Label>Nama Belakang</Label>
              <Input
                onChangeText={text => setLast_Name(text)}
                value={last_name}
              />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={text => setEmail(text)} value={email} />
            </Item>
            <Grid>
              <Col>
                {/* Pakai Picker */}
                <Item floatingLabel>
                  <Label>+62</Label>
                </Item>
              </Col>
              <Col>
                <Item floatingLabel>
                  <Label>No. Handphone</Label>
                  <Input
                    onChangeText={text => setPhone_Number(text)}
                    value={phone_number}
                    keyboardType="numeric"
                  />
                </Item>
              </Col>
            </Grid>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
              />
            </Item>
            <Item floatingLabel>
              <Label>Ketik ulang password</Label>
              <Input
                onChangeText={text => setRePassword(text)}
                value={setRePassword}
                secureTextEntry={true}
              />
            </Item>

            <Button
              onPress={() =>
                sendData({
                  title_id,
                  first_name,
                  last_name,
                  email,
                  phone_number,
                  password,
                })
              }
              full
              style={{
                elevation: 0,
                borderRadius: 20,
                backgroundColor: '#fff6d6',
                marginTop: 30,
                marginBottom: 30,
              }}>
              <Text style={{color: '#989794'}}>Submit</Text>
            </Button>
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
                  <Text style={{color: '#5ecbf5', fontSize: 12}}>Masuk</Text>
                </TouchableOpacity>
              </Col>
            </Grid>
          </Form>
        </View>
      </Content>
    </Container>
  );
};
export default DaftarBiodata;
