import React, { Component } from 'react';
import {
    Container, Content, Form, Item, Input, Label, View,
    Tab, Tabs, Button, Grid, Col, Row, Text
} from 'native-base';
import { Image, TouchableOpacity } from 'react-native'
import Styles from './Style.style'



// import { Icon, grid } from 'react-native-vector-icons/dist/FontAwesome';

const Ticket = props => {
    return (
        <Container>
            <Content>
                <View style={Styles.room}>
                    <Grid>
                        <Row>
                            {/* <TouchableOpacity> */}
                            <Col size={1}></Col>
                            <Col size={5}><Text style={Styles.titleComponent}>Kota Asal</Text></Col>
                            <Col size={1}></Col>
                            {/* </TouchableOpacity> */}
                        </Row>
                        <Row>
                            <Grid>
                                <Col size={1}><Text>Kiri</Text></Col>
                                <Col size={5} style={Styles.borderComponent}><Text style={Styles.mainText}>Pilih Kota Asal</Text></Col>
                            </Grid>
                        </Row>

                        <Row>
                            <Col size={1}></Col>
                            <Col size={5}><Text style={Styles.titleComponent}>Kota Tujuan</Text></Col>
                            <Col size={1}></Col>
                        </Row>
                        <Row>
                            <Grid>
                                <Col size={1}><Text>Kiri</Text></Col>
                                <Col size={5} style={Styles.borderComponent}><Text style={Styles.mainText}>Pilih Kota Tujuan</Text></Col>
                            </Grid>
                        </Row>
                        <Row>
                            <Col size={1}></Col>
                            <Col size={5}><Text style={Styles.titleComponent}>Tanggal Berangkat</Text></Col>
                            <Col size={1}></Col>
                        </Row>
                        <Row>
                            <Grid>
                                <Col size={1}><Text>Kiri</Text></Col>
                                <Col size={5} style={Styles.borderComponent}><Text style={Styles.mainText}>23 Oktober 2109</Text></Col>

                            </Grid>
                        </Row>
                        <Row>
                            <Col size={1}></Col>
                            <Col size={5}><Text style={Styles.titleComponent}>Penumpang</Text></Col>
                            <Col size={1}></Col>
                        </Row>
                        {/* Icon name='area-chart' style={grid.icon_green} /> */}
                        <Row>
                            <Grid>
                                <Col size={1}><Text> Kiri</Text></Col>
                                <Col size={5} style={Styles.borderComponent}><Text style={Styles.mainText}>1 Dewasa</Text></Col>

                            </Grid>
                        </Row>
                    </Grid>



                    <Button full warning style={Styles.buttonCariKamar}>
                        <Text style={Styles.textCariKamar}>Cari Penerbangan</Text>
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
        </Container >
    );

}
export default Ticket