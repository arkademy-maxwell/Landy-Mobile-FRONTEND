import React from 'react'
import { Image } from 'react-native'
import {
    Container, Content, Text, View, Grid, Row, Col, Left, Button, Icon, Body,
    Title
} from 'native-base'
import { TouchableOpacity } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import Header from '../../Components/Header/child/Header'
import Styles from './Menu.style';

const Menu = props => {
    return (
        <Container>
            <Content>
                <LinearGradient colors={['#0180ef', '#018eef']} style={Styles.linearGradient}>
                    <Header menu='Menu' />
                    <View style={Styles.headerMenu}>
                        <View style={{ margin: 20 }}>
                            <Text style={Styles.title}>Menjady Landy Traveler</Text>
                            <Grid>
                                <Row>
                                    <Col size={2}>
                                        <Image source={require('../../../public/register/menjadiairy.png')} style={Styles.image} />
                                    </Col>
                                    <Col size={4}>
                                        <Text style={Styles.text}>Masuk atau daftar sekarang dan nikmati kenyamanan pemesanan kamar & tiket pesawat melalui aplikasi landy</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button full warning style={Styles.button} onPress={() => props.navigation.navigate('Main')}>
                                            <Text>Masuk atau Daftar</Text>
                                        </Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </View>
                    </View>
                </LinearGradient>
                <View style={Styles.bantuan}>
                    <View style={Styles.bantuanLogo}>
                        <Icon
                            type="Ionicons"
                            name="ios-help-circle-outline"
                            style={Styles.icon}
                        />
                    </View>
                    <View style={Styles.bantuanBantuan}>
                        <Text>Bantuan</Text>
                    </View>
                </View>
                <View style={Styles.wrapLayananPelanggan}>
                    <Text style={Styles.layananPelanggan}>Layanan Pelanggan</Text>
                    <View style={Styles.layananContent}>
                        <View style={{ flex: 1 }}>
                            <Icon
                                type="Ionicons"
                                name="ios-call"
                                style={Styles.icon}
                            />
                        </View>
                        <View style={{ flex: 5 }}>
                            <View><Text style={Styles.mainText}>904859458</Text></View>
                            <View><Text style={Styles.subText}>Via Telephone</Text></View>
                        </View>
                    </View>
                    <View style={Styles.layananContent}>
                        <View style={{ flex: 1 }}>
                            <Icon
                                type="Ionicons"
                                name="ios-mail"
                                style={Styles.icon}
                            />
                        </View>
                        <View style={{ flex: 5 }}>
                            <View><Text style={Styles.mainText}>cs@Landyrooms.com</Text></View>
                            <View><Text style={Styles.subText}>Via Email</Text></View>
                        </View>
                    </View>
                    <View style={Styles.layananContent}>
                        <View style={{ flex: 1 }}>
                            <Icon
                                type="FontAwesome5"
                                name="facebook-messenger"
                                style={Styles.icon}
                            />
                        </View>
                        <View style={{ flex: 5 }}>
                            <View><Text style={Styles.mainText}>LandyIndonesiaCS</Text></View>
                            <View><Text style={Styles.subText}>Via Facebook Messenger</Text></View>
                        </View>
                    </View>
                    <View style={Styles.layananContent}>
                        <View style={{ flex: 1 }}>
                            <Icon
                                type="Ionicons"
                                name="ios-chatboxes"
                                style={Styles.icon}
                            />
                        </View>
                        <View style={{ flex: 5 }}>
                            <View><Text style={Styles.mainText}>Live Chat</Text></View>
                            <View><Text style={Styles.subText}>Layanan Pelanggan 24 jam</Text></View>
                        </View>
                    </View>
                </View>
                <View style={Styles.wrapLayananPelanggan}>
                    <Text style={Styles.layananPelanggan}>Kerjasama</Text>
                    <View style={Styles.layananContent}>
                        <View style={{ flex: 1 }}>
                            <Icon
                                type="Ionicons"
                                name="home"
                                style={Styles.icon}
                            />
                        </View>
                        <View style={{ flex: 4 }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Properti')}>
                                <View><Text style={Styles.mainText}>Daftarkan Properti</Text></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={Styles.border} />
                <View style={Styles.tentang}>
                    <Text style={Styles.layananPelanggan}>Kerjasama</Text>
                    <View style={Styles.layananContent}>
                        <View style={{ flex: 1 }}>
                            <Icon
                                type="Ionicons"
                                name="ios-information-circle-outline"
                                style={Styles.icon}
                            />
                        </View>
                        <View style={{ flex: 5 }}>
                            <View><Text style={Styles.mainText}>V.1.0.0</Text></View>
                            <View><Text style={Styles.subText}>Versi Aplikasi</Text></View>
                        </View>
                    </View>
                </View>
            </Content>
        </Container>
    )
}

export default Menu