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
  Icon,
  Picker,
} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';
import Header from '../../Components/Header/parent/Header';
import Styles from './akun.style';
const Akun = props => {
  return (
    <Container>
      <Header menu="Akun" icon="arrow-back" />
      <Content>
        <View style={{marginLeft: 20, marginRight: 35, marginBottom: 20}}>
          <View style={{position: 'relative'}}>
            <View style={Styles.profile}>
              <Image
                source={require('../../../public/profil/user.jpg')}
                style={Styles.imageProfile}
              />
            </View>
            <TouchableOpacity
              //   onPress={() => props.navigation.navigate('Login')}
              style={Styles.editProfile}>
              <Icon type="AntDesign" name="edit" style={{color: '#0184ef'}} />
            </TouchableOpacity>
          </View>
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
            <Item floatingLabel style={Styles.marginTop}>
              <Label>Nama Depan</Label>
              <Input />
            </Item>
            <Item floatingLabel style={Styles.marginTop}>
              <Label>Nama Belakang</Label>
              <Input />
            </Item>
            <Item floatingLabel style={Styles.marginTop}>
              <Label>Email</Label>
              <Input />
            </Item>
            <Grid>
              <Col>
                <Item floatingLabel style={Styles.marginTop}>
                  <Label>+62</Label>
                </Item>
              </Col>
              <Col>
                <Item floatingLabel style={Styles.marginTop}>
                  <Label>No. Handphone</Label>
                  <Input />
                </Item>
              </Col>
            </Grid>
            <Grid>
              <Col size={5}>
                <Item floatingLabel style={Styles.marginTop}>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Col>
              <Col size={2}>
                <Button transparent>
                  <Text
                    style={{color: '#01adee', position: 'absolute', bottom: 0}}>
                    UBAH
                  </Text>
                </Button>
              </Col>
            </Grid>
            <Item floatingLabel style={Styles.marginTop}>
              <Label>Email</Label>
              <Input />
            </Item>

            <Button full style={Styles.buttonSimpan}>
              <Text style={{color: '#989794'}}>Simpan</Text>
            </Button>
          </Form>
          <TouchableOpacity>
            <View>
              <Grid>
                <Col>
                  <Icon
                    type="SimpleLineIcons"
                    name="login"
                    style={Styles.outIcon}
                  />
                </Col>
                <Col>
                  <Text style={Styles.outText}>Logout</Text>
                </Col>
              </Grid>
            </View>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

export default Akun;
