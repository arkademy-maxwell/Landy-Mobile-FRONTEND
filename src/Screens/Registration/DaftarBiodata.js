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
  Image,
  Picker,
  Icon,
} from 'native-base';
import {TouchableOpacity, ImageBackground} from 'react-native';
import Header from '../../Components/Header/parent/Header';
const DaftarBiodata = props => {
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
                // selectedValue={this.state.selected2}
                // onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Tuan" value="tuan" />
                <Picker.Item label="Nyonya" value="nyonya" />
                <Picker.Item label="Nona" value="nyonya" />
              </Picker>
            </Item>
            <Item floatingLabel>
              <Label>Nama Depan</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Nama Belakang</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Grid>
              <Col>
                <Item floatingLabel>
                  <Label>+62</Label>
                </Item>
              </Col>
              <Col>
                <Item floatingLabel>
                  <Label>No. Handphone</Label>
                  <Input />
                </Item>
              </Col>
            </Grid>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Ketik ulang password</Label>
              <Input />
            </Item>

            <Button
              full
              style={{
                elevation: 0,
                borderRadius: 20,
                backgroundColor: '#fff6d6',
                marginTop: 30,
                marginBottom: 30,
              }}>
              <Text style={{color: '#989794'}}>Primary</Text>
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
