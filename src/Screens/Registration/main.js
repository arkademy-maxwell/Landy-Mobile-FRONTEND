import React from "react";
import { View, Image } from "react-native";
import {
    Container, Content, Icon, Grid, Row, Header, Left, Body, Button, Title,
    Col, Text
} from 'native-base'
import Carousel from "pinar";
import Styles from './main.style'

const Registration = props => {
    return (
        <>
            <Container>
                <Content>
                    <View style={Styles.headerRegistration}>
                        <Header hasSegment transparent>
                            <Left>
                                <Button transparent onPress={() => props.navigation.goBack()}>
                                    <Icon name="arrow-back" />
                                </Button>
                            </Left>
                            <Body>
                                <Title>Airy Traveler</Title>
                            </Body>
                        </Header>
                        <View>
                            <Image source={require('../../../public/register/register2.png')} style={{ height: 260, width: '100%', marginTop: -60, zIndex: -999 }} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={Styles.wrappingButton}>
                            <Button full warning style={Styles.buttonLogin}
                                onPress={() => props.navigation.navigate('Login')}>
                                <Text style={{ color: '#000' }}>Masuk</Text>
                            </Button>
                            <Button bordered full style={Styles.buttonRegister}>
                                <Text style={{ color: '#bec4c8' }}>Daftar</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Grid>
                                <Col size={3} >
                                    {/* <Col style={{ borderBottomWidth: 1, marginTop: -3 }}></Col> */}
                                </Col>
                                <Col>
                                    <Col><Text style={{ marginTop: 4 }}>atau</Text></Col>
                                </Col>
                                <Col size={3}></Col>
                            </Grid>
                        </View>
                    </View>

                    <View style={Styles.wrapperOpenWith}>
                        <Grid>
                            <Row style={{ marginBottom: 20 }}>
                                <Col size={1}>
                                    <Image source={require('../../../public/register/fb.png')} style={{ width: 17, height: 17 }} />
                                </Col>
                                <Col size={5}><Text style={Styles.fb}>Lanjutkan dengan Facebook</Text></Col>
                            </Row>
                            <Row>
                                <Col size={1}>
                                    <Image source={require('../../../public/register/google.png')} style={{ width: 17, height: 17, alignSelf: 'flex-end' }} />
                                </Col>
                                <Col size={5}><Text style={Styles.Google}>Lanjutkan dengan Google</Text></Col>
                            </Row>
                        </Grid>
                    </View>
                </Content>
            </Container>
        </>
    )
}

export default Registration