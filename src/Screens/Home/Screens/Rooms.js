import React, { Component } from 'react';
import {
    Container, Content, Form, Item, Input, Label, View,
    Tab, Tabs, Button, Grid, Col, Row, Text, tintColor
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, TouchableOpacity } from 'react-native'
import Styles from './Style.style'

// Asset
// import imageRooms from ''


const Rooms = props => {
    return (
        <Container>
            <Content>
                <View style={Styles.room}>
                    <Grid>
                        <TouchableOpacity onPress={() => props.navigate('FindPlace')}>
                            <Row>
                                <Col size={1}></Col>
                                <Col size={5}><Text style={Styles.titleComponent}>Landy Rooms di Sekitar</Text></Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row>
                                <Grid>
                                    <Col size={1}>
                                        <Text>
                                            <Icon style={[{ color: tintColor }]} size={25} name={'ios-pin'} />
                                        </Text>
                                    </Col>
                                    <Col size={5} style={Styles.borderComponent}><Text style={Styles.mainText}>Pilih Lokasi Menginap</Text></Col>
                                </Grid>
                            </Row>
                        </TouchableOpacity>

                        <Row>
                            <Col size={1}></Col>
                            <Col size={5}><Text style={Styles.titleComponent}>Check-in</Text></Col>
                            <Col size={1}></Col>
                        </Row>
                        <Row>
                            <Grid>
                                <Col size={1}><Text><Icon style={[{ color: tintColor }]} size={25} name={'ios-calendar'} /></Text></Col>
                                <Col size={5} style={Styles.borderComponent}><Text style={Styles.mainText}>Senin, 22 April 2019</Text></Col>
                            </Grid>
                        </Row>
                        <Row>
                            <Col size={1}></Col>
                            <Col size={5}><Text style={Styles.titleComponent}>Durasi Menginap</Text></Col>
                            <Col size={1}></Col>
                        </Row>
                        <Row>
                            <Grid>
                                <Col size={1}><Text><Icon style={[{ color: tintColor }]} size={25} name={'ios-calendar'} /></Text></Col>
                                <Col size={5} style={Styles.borderComponent}><Text style={Styles.mainText}>1 Malam</Text></Col>

                            </Grid>
                        </Row>
                    </Grid>


                    <Button full warning style={Styles.buttonCariKamar}>
                        <Text style={Styles.textCariKamar}>Cari Kamar Lady Rooms</Text>
                    </Button>


                    <View style={{ marginLeft: 50, marginRight: 30, marginTop: 20 }}>
                        <Grid>
                            <Col size={1}><Text style={{ fontSize: 12, color: '#b0b8b9' }}>Like</Text></Col>
                            <Col size={6} ><Text style={{ fontSize: 12, color: '#b0b8b9' }}>Harga Final, Booking Murah, Transaksi Aman</Text></Col>
                        </Grid>
                    </View>

                </View>
                <View>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                        <View>
                            <Image source={require('../../../../public/home/rooms.png')} />
                        </View>
                    </View>
                </View>
            </Content>
        </Container>
    );
}
export default Rooms